import {
  capabilityFromEntry,
  getCapabilityEntries,
  getProjectEntries,
  projectFromEntry,
  referenceId
} from '../../../src/lib/content.ts';

const nugetUrl = (name) => `https://www.nuget.org/packages/${encodeURIComponent(name)}`;
const repositoryUrl = (github, repo) => `${github}/${repo}`;

const packageRecord = (item) => ({
  name: item.name,
  note: item.note,
  url: item.url ?? nugetUrl(item.name)
});

export async function buildPortfolioData(config, root) {
  const [projectEntries, capabilityEntries] = await Promise.all([
    getProjectEntries(),
    getCapabilityEntries()
  ]);
  const projects = projectEntries.map((entry) => ({ entry, project: projectFromEntry(entry) }));
  const capabilities = capabilityEntries.map(capabilityFromEntry);
  const capabilitiesByProject = Map.groupBy(capabilities, (capability) => capability.projectSlug);
  const packageNames = new Set();

  const projectRecords = projects.map(({ entry, project }) => {
    const repoUrl = repositoryUrl(config.github, project.repo);
    const projectCapabilities = (capabilitiesByProject.get(project.slug) ?? []).map((capability) => {
      capability.packages.forEach((item) => packageNames.add(item.name));
      return {
        id: capability.id,
        slug: capability.slug,
        order: capability.order,
        name: capability.name,
        eyebrow: capability.eyebrow,
        description: capability.description,
        status: capability.status,
        url: new URL(`projects/${project.slug}/${capability.slug}/`, root).href,
        sourcePath: capability.sourcePath,
        docsPath: capability.docsPath,
        packages: capability.packages.map(packageRecord),
        highlights: capability.highlights,
        related: capability.related
      };
    });

    project.packages.forEach((item) => packageNames.add(item.name));
    const contentFormat = entry.filePath?.toLowerCase().endsWith('.mdx') ? 'mdx' : 'md';
    return {
      slug: project.slug,
      order: project.order,
      name: project.name,
      eyebrow: project.eyebrow,
      description: project.description,
      statement: project.statement,
      category: project.category,
      tier: project.tier,
      status: project.status,
      featured: project.featured,
      accent: project.accent,
      contentFormat,
      story: project.story,
      url: new URL(`projects/${project.slug}/`, root).href,
      repository: {
        name: `wieslawsoltes/${project.repo}`,
        url: repoUrl,
        branch: project.branch
      },
      packages: project.packages.map(packageRecord),
      highlights: project.highlights,
      audience: project.audience,
      compatibility: project.compatibility,
      links: project.links,
      related: project.related.map(referenceId),
      capabilities: projectCapabilities
    };
  });

  const categoryMap = new Map();
  projectRecords.forEach((project) => {
    const category = categoryMap.get(project.category) ?? { name: project.category, projects: 0, capabilities: 0 };
    category.projects += 1;
    category.capabilities += project.capabilities.length;
    categoryMap.set(project.category, category);
  });

  return {
    version: 1,
    site: {
      title: config.title,
      owner: config.owner,
      description: config.description,
      url: root.href,
      github: config.github,
      sponsor: config.sponsor
    },
    counts: {
      projects: projectRecords.length,
      capabilities: capabilities.length,
      packages: packageNames.size,
      stories: projectRecords.filter((project) => project.story).length
    },
    categories: [...categoryMap.values()],
    indexes: {
      search: new URL('search.json', root).href,
      sitemap: new URL('sitemap.xml', root).href,
      llms: new URL('llms.txt', root).href
    },
    projects: projectRecords
  };
}

const line = (value) => String(value ?? '').replace(/\s+/g, ' ').trim();

export function renderLlmsText(portfolio) {
  const output = [
    `# ${line(portfolio.site.title)}`,
    '',
    `> ${line(portfolio.site.description)}`,
    '',
    `- Owner: ${line(portfolio.site.owner)}`,
    `- Canonical site: ${portfolio.site.url}`,
    `- GitHub: ${portfolio.site.github}`,
    `- Machine-readable portfolio: ${new URL('portfolio.json', portfolio.site.url).href}`,
    `- Search index: ${portfolio.indexes.search}`,
    '',
    '## Featured work',
    ''
  ];

  portfolio.projects.filter((project) => project.featured).forEach((project) => {
    output.push(`- [${line(project.name)}](${project.url}) — ${line(project.description)}`);
  });

  output.push('', '## Projects', '');
  portfolio.categories.forEach((category) => {
    output.push(`### ${line(category.name)}`, '');
    portfolio.projects.filter((project) => project.category === category.name).forEach((project) => {
      output.push(`- [${line(project.name)}](${project.url}) — ${line(project.description)}`);
      output.push(`  - Source: ${project.repository.url}`);
      if (project.packages.length) {
        output.push(`  - Packages: ${project.packages.map((item) => item.name).join(', ')}`);
      }
      if (project.capabilities.length) {
        output.push(`  - Capabilities: ${project.capabilities.map((item) => `[${line(item.name)}](${item.url})`).join(', ')}`);
      }
    });
    output.push('');
  });

  output.push(
    '## Discovery',
    '',
    `- [Portfolio JSON](${new URL('portfolio.json', portfolio.site.url).href})`,
    `- [Search index](${portfolio.indexes.search})`,
    `- [Sitemap](${portfolio.indexes.sitemap})`,
    ''
  );
  return output.join('\n');
}
