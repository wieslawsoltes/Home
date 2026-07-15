import type { APIRoute, GetStaticPaths } from 'astro';
import { getCapabilities, getProjects, type Capability, type Project } from '@/lib/content';
import { renderSocialPreview, socialPreviewResponse } from '@/lib/social-preview';

export const getStaticPaths = (async () => {
  const [projects, capabilities] = await Promise.all([getProjects(), getCapabilities()]);
  return capabilities.map((capability, index) => {
    const project = projects.find((candidate) => candidate.slug === capability.projectSlug);
    if (!project) throw new Error(`Unknown capability project: ${capability.projectSlug}`);
    return {
      params: { slug: project.slug, capability: capability.slug },
      props: { project, capability, index: index + 1, total: capabilities.length }
    };
  });
}) satisfies GetStaticPaths;

interface Props { project: Project; capability: Capability; index: number; total: number; }

export const GET: APIRoute<Props> = async ({ props }) => socialPreviewResponse(await renderSocialPreview({
  kind: 'capability',
  title: props.capability.name,
  parentTitle: props.project.name,
  description: props.capability.statement,
  accent: props.project.accent,
  category: props.project.category,
  eyebrow: props.capability.eyebrow,
  status: props.capability.status,
  repo: props.project.repo,
  index: props.index,
  total: props.total
}));
