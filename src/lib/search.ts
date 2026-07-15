import {
  capabilityFromEntry,
  capabilityUrl,
  getCapabilityEntries,
  getProjectEntries,
  projectFromEntry,
  projectUrl
} from './content';

export type SearchItemKind = 'page' | 'project' | 'capability';

export type SearchIndexItem = {
  id: string;
  kind: SearchItemKind;
  title: string;
  eyebrow: string;
  description: string;
  url: string;
  category?: string;
  status?: string;
  parent?: string;
  repo?: string;
  packages: string[];
  keywords: string[];
  featured?: boolean;
  order: number;
};

export type SearchIndex = {
  version: 1;
  count: number;
  items: SearchIndexItem[];
};

const plainText = (value: string | undefined) => (value ?? '')
  .replace(/^(?:import|export)\s+.*?;\s*$/gm, ' ')
  .replace(/```[\s\S]*?```/g, ' ')
  .replace(/`([^`]+)`/g, '$1')
  .replace(/!?(?:\[([^\]]*)\])(?:\([^)]*\))/g, '$1')
  .replace(/<[^>]+>/g, ' ')
  .replace(/[#*_~>|\\-]+/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const compact = (values: Array<string | undefined>) =>
  [...new Set(values.map(plainText).filter(Boolean))];

const editorialPages = (base: string): SearchIndexItem[] => [
  {
    id: 'page:home', kind: 'page', title: 'Home', eyebrow: 'Open-source portfolio',
    description: 'GPU renderers, portable UI frameworks, controls, diagnostics, and developer tools by Wiesław Šoltés.',
    url: base, packages: [], order: 0,
    keywords: ['Wiesław Šoltés', '.NET', 'open source', 'projects', 'portfolio', 'desktop UI', 'XAML', 'building the open desktop', 'one ecosystem many layers', 'own the stack', 'compatibility matters', 'open by default', 'building in public']
  },
  {
    id: 'page:ecosystem', kind: 'page', title: 'Open desktop ecosystem', eyebrow: 'Systems map',
    description: 'Explore how the graphics, framework, control, diagnostics, and application projects connect.',
    url: `${base}ecosystem/`, packages: [], order: 1,
    keywords: ['ecosystem', 'project map', 'relationships', 'graphics', 'frameworks', 'controls', 'tools', 'independent parts compounding value', 'foundation', 'compatibility', 'productivity', 'applications', 'pixels to tools']
  },
  {
    id: 'page:now', kind: 'page', title: 'Now', eyebrow: 'Current focus',
    description: 'What Wiesław Šoltés is building and maintaining now across open-source .NET systems.',
    url: `${base}now/`, packages: [], order: 2,
    keywords: ['current work', 'active focus', 'rendering', 'inspection', 'authoring', 'building the seams between systems', 'on the bench', 'own the path to pixels', 'make native UI inspectable', 'creative tools']
  },
  {
    id: 'page:about', kind: 'page', title: 'About Wiesław Šoltés', eyebrow: 'Independent open-source engineer',
    description: 'Background, principles, and the through-line connecting the open-source portfolio.',
    url: `${base}about/`, packages: [], order: 3,
    keywords: ['about', 'engineer', 'Poland', 'compatibility', 'observability', 'composition', 'open-source systems with a long horizon', 'understand the whole path', 'open work', 'work together']
  }
];

export async function buildSearchIndex(base = '/'): Promise<SearchIndex> {
  const [projectEntries, capabilityEntries] = await Promise.all([
    getProjectEntries(),
    getCapabilityEntries()
  ]);
  const projects = projectEntries.map(projectFromEntry);
  const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));

  const projectItems = projectEntries.map((entry): SearchIndexItem => {
    const project = projectFromEntry(entry);
    return {
      id: `project:${project.slug}`,
      kind: 'project',
      title: project.name,
      eyebrow: project.eyebrow,
      description: project.description,
      url: projectUrl(project, base),
      category: project.category,
      status: project.status,
      repo: `wieslawsoltes/${project.repo}`,
      packages: project.packages.map((item) => item.name),
      featured: project.featured,
      order: project.order,
      keywords: compact([
        entry.body,
        project.story?.label,
        project.story?.title,
        project.story?.intro,
        project.statement,
        project.install,
        project.usage,
        project.tier,
        project.category,
        project.status,
        project.repo,
        ...project.highlights,
        ...project.audience,
        ...project.packages.flatMap((item) => [item.name, item.note]),
        ...project.architecture.flatMap((item) => [item.label, item.detail]),
        ...project.compatibility.flatMap((item) => [item.label, item.value]),
        ...project.proof.flatMap((item) => [item.value, item.label]),
        ...project.media.flatMap((item) => [item.alt, item.caption]),
        ...project.links.map((item) => item.label),
        ...(project.archive?.tags ?? [])
      ])
    };
  });

  const capabilityItems = capabilityEntries.map((entry): SearchIndexItem => {
    const capability = capabilityFromEntry(entry);
    const project = projectsBySlug.get(capability.projectSlug);
    if (!project) throw new Error(`Search index cannot resolve project: ${capability.projectSlug}`);
    return {
      id: `capability:${capability.id}`,
      kind: 'capability',
      title: capability.name,
      eyebrow: capability.eyebrow,
      description: capability.description,
      url: capabilityUrl(capability, base),
      category: project.category,
      status: capability.status,
      parent: project.name,
      repo: `wieslawsoltes/${project.repo}`,
      packages: capability.packages.map((item) => item.name),
      order: capability.order,
      keywords: compact([
        entry.body,
        capability.statement,
        capability.install,
        capability.usage,
        project.name,
        project.category,
        capability.status,
        project.repo,
        capability.sourcePath,
        capability.docsPath,
        ...capability.highlights,
        ...capability.packages.flatMap((item) => [item.name, item.note]),
        ...capability.layers.flatMap((item) => [item.label, item.detail])
      ])
    };
  });

  const items = [...editorialPages(base), ...projectItems, ...capabilityItems];
  return { version: 1, count: items.length, items };
}
