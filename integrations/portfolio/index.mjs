import { access, readFile } from 'node:fs/promises';

const virtualConfigId = 'virtual:wieslaw-portfolio/config';
const resolvedVirtualConfigId = `\0${virtualConfigId}`;

const routeFiles = [
  new URL('./routes/portfolio.json.mjs', import.meta.url),
  new URL('./routes/llms.txt.mjs', import.meta.url),
  new URL('./routes/data.mjs', import.meta.url)
];

const uniqueDuplicates = (values) => {
  const seen = new Set();
  const duplicates = new Set();
  values.forEach((value) => {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  });
  return [...duplicates];
};

const requireText = (value, key) => {
  if (typeof value !== 'string' || !value.trim()) {
    throw new TypeError(`portfolioIntegration requires a non-empty "${key}" option.`);
  }
  return value.trim();
};

const requireUrl = (value, key) => {
  const text = requireText(value, key);
  try {
    return new URL(text).href.replace(/\/+$/, '');
  } catch {
    throw new TypeError(`portfolioIntegration requires "${key}" to be an absolute URL.`);
  }
};

const outputFile = (dir, pathname) => new URL(pathname.replace(/^\/+/, ''), dir);

async function auditOutput({ dir, pages, options, logger }) {
  const requiredArtifacts = ['portfolio.json', 'llms.txt', 'search.json', 'sitemap.xml', 'robots.txt'];
  await Promise.all(requiredArtifacts.map((artifact) => access(outputFile(dir, artifact))));

  const manifest = JSON.parse(await readFile(outputFile(dir, 'portfolio.json'), 'utf8'));
  if (manifest.version !== 1 || !Array.isArray(manifest.projects)) {
    throw new Error('portfolio.json does not match the expected version 1 manifest shape.');
  }

  const projectSlugs = manifest.projects.map((project) => project.slug);
  const duplicateSlugs = uniqueDuplicates(projectSlugs);
  const duplicateOrders = uniqueDuplicates(manifest.projects.map((project) => project.order));
  if (duplicateSlugs.length) throw new Error(`Duplicate project slugs: ${duplicateSlugs.join(', ')}`);
  if (duplicateOrders.length) throw new Error(`Duplicate project order values: ${duplicateOrders.join(', ')}`);

  const capabilities = manifest.projects.flatMap((project) => project.capabilities);
  const duplicateCapabilityIds = uniqueDuplicates(capabilities.map((capability) => capability.id));
  const duplicateCapabilityOrders = uniqueDuplicates(capabilities.map((capability) => capability.order));
  if (duplicateCapabilityIds.length) {
    throw new Error(`Duplicate capability ids: ${duplicateCapabilityIds.join(', ')}`);
  }
  if (duplicateCapabilityOrders.length) {
    throw new Error(`Duplicate capability order values: ${duplicateCapabilityOrders.join(', ')}`);
  }

  const projectSet = new Set(projectSlugs);
  const capabilitySet = new Set(capabilities.map((capability) => capability.id));
  const invalidProjectRelations = manifest.projects.flatMap((project) =>
    project.related.filter((slug) => !projectSet.has(slug)).map((slug) => `${project.slug} -> ${slug}`)
  );
  const invalidCapabilityRelations = capabilities.flatMap((capability) =>
    capability.related.filter((id) => !capabilitySet.has(id)).map((id) => `${capability.id} -> ${id}`)
  );
  if (invalidProjectRelations.length || invalidCapabilityRelations.length) {
    throw new Error(`Unresolved portfolio relationships: ${[...invalidProjectRelations, ...invalidCapabilityRelations].join(', ')}`);
  }

  const storyProjects = manifest.projects
    .filter((project) => project.story)
    .map((project) => project.slug)
    .sort();
  const expectedStories = [...options.storyProjects].sort();
  if (storyProjects.join('\0') !== expectedStories.join('\0')) {
    throw new Error(`Story projects must be exactly: ${expectedStories.join(', ')}. Found: ${storyProjects.join(', ') || 'none'}.`);
  }

  const formatMismatches = manifest.projects.filter((project) =>
    (project.story && project.contentFormat !== 'mdx') || (!project.story && project.contentFormat === 'mdx')
  );
  if (formatMismatches.length) {
    throw new Error(`MDX is reserved for validated project stories: ${formatMismatches.map((project) => project.slug).join(', ')}`);
  }

  const projectPages = manifest.projects.map((project) => outputFile(dir, `projects/${project.slug}/index.html`));
  const capabilityPages = manifest.projects.flatMap((project) =>
    project.capabilities.map((capability) => outputFile(dir, `projects/${project.slug}/${capability.slug}/index.html`))
  );
  await Promise.all([...projectPages, ...capabilityPages].map((file) => access(file)));

  const projectCount = manifest.projects.length;
  const capabilityCount = manifest.projects.reduce((total, project) => total + project.capabilities.length, 0);
  if (manifest.counts.projects !== projectCount || manifest.counts.capabilities !== capabilityCount) {
    throw new Error('portfolio.json count fields do not match its project graph.');
  }

  logger.info(
    `Audited ${projectCount} projects, ${capabilityCount} capabilities, ${manifest.counts.packages} packages, ` +
    `${storyProjects.length} MDX stories, and ${pages.length} generated pages.`
  );
}

/**
 * Portfolio-specific routes and production build invariants.
 *
 * @param {{
 *   title: string;
 *   owner: string;
 *   description: string;
 *   github: string;
 *   sponsor: string;
 *   storyProjects?: string[];
 * }} userOptions
 * @returns {import('astro').AstroIntegration}
 */
export default function portfolioIntegration(userOptions) {
  const storyProjects = userOptions?.storyProjects ?? [];
  if (!Array.isArray(storyProjects) || storyProjects.some((slug) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))) {
    throw new TypeError('portfolioIntegration requires "storyProjects" to contain project slugs.');
  }
  const options = Object.freeze({
    title: requireText(userOptions?.title, 'title'),
    owner: requireText(userOptions?.owner, 'owner'),
    description: requireText(userOptions?.description, 'description'),
    github: requireUrl(userOptions?.github, 'github'),
    sponsor: requireUrl(userOptions?.sponsor, 'sponsor'),
    storyProjects: [...new Set(storyProjects)]
  });

  return {
    name: 'wieslaw-portfolio',
    hooks: {
      'astro:config:setup': ({ addWatchFile, injectRoute, updateConfig, logger }) => {
        routeFiles.forEach(addWatchFile);
        updateConfig({
          vite: {
            plugins: [{
              name: 'wieslaw-portfolio-config',
              enforce: 'pre',
              resolveId(id) {
                return id === virtualConfigId ? resolvedVirtualConfigId : undefined;
              },
              load(id) {
                return id === resolvedVirtualConfigId
                  ? `export default ${JSON.stringify(options)};`
                  : undefined;
              }
            }]
          }
        });
        injectRoute({
          pattern: '/portfolio.json',
          entrypoint: routeFiles[0],
          prerender: true
        });
        injectRoute({
          pattern: '/llms.txt',
          entrypoint: routeFiles[1],
          prerender: true
        });
        logger.info('Injected portfolio.json and llms.txt discovery routes.');
      },
      'astro:config:done': ({ config, logger }) => {
        if (!config.site) logger.warn('Set Astro `site` so portfolio discovery URLs are canonical.');
      },
      'astro:build:done': async ({ dir, pages, logger }) => {
        try {
          await auditOutput({ dir, pages, options, logger });
        } catch (error) {
          logger.error(error instanceof Error ? error.message : String(error));
          throw error;
        }
      }
    }
  };
}
