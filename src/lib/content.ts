import { getCollection, type CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;
export type CapabilityEntry = CollectionEntry<'capabilities'>;
export type Project = ProjectEntry['data'] & { slug: string };
export type Capability = Omit<CapabilityEntry['data'], 'project' | 'related'> & {
  id: string;
  projectSlug: string;
  slug: string;
  related: string[];
};
export type PackageLink = Project['packages'][number];

export const referenceId = (reference: string | { id: string }) =>
  typeof reference === 'string' ? reference : reference.id;

export const projectFromEntry = (entry: ProjectEntry): Project => ({
  ...entry.data,
  slug: entry.id
});

export const capabilityFromEntry = (entry: CapabilityEntry): Capability => {
  const { project, related, ...data } = entry.data;
  return {
    ...data,
    id: entry.id,
    projectSlug: referenceId(project),
    slug: entry.id.split('/').at(-1) ?? entry.id,
    related: related.map(referenceId)
  };
};

export async function getProjectEntries() {
  return (await getCollection('projects')).sort((left, right) => left.data.order - right.data.order);
}

export async function getProjects() {
  return (await getProjectEntries()).map(projectFromEntry);
}

export async function getCapabilityEntries() {
  return (await getCollection('capabilities')).sort((left, right) => left.data.order - right.data.order);
}

export async function getCapabilities() {
  return (await getCapabilityEntries()).map(capabilityFromEntry);
}

export function projectUrl(project: Pick<Project, 'slug'>, base = '/') {
  return `${base}projects/${project.slug}/`;
}

export function githubUrl(project: Pick<Project, 'repo' | 'branch'>) {
  const root = `https://github.com/wieslawsoltes/${project.repo}`;
  return project.branch ? `${root}/tree/${project.branch}` : root;
}

export function nugetUrl(packageName: string) {
  return `https://www.nuget.org/packages/${packageName}`;
}

export function capabilityUrl(item: Pick<Capability, 'projectSlug' | 'slug'>, base = '/') {
  return `${base}projects/${item.projectSlug}/${item.slug}/`;
}

export function capabilityPackageUrl(item: PackageLink) {
  return item.url ?? nugetUrl(item.name);
}
