import type { APIRoute, GetStaticPaths } from 'astro';
import { getProjects, type Project } from '@/lib/content';
import { renderSocialPreview, socialPreviewResponse } from '@/lib/social-preview';

export const getStaticPaths = (async () => {
  const projects = await getProjects();
  return projects.map((project, index) => ({
    params: { slug: project.slug },
    props: { project, index: index + 1, total: projects.length }
  }));
}) satisfies GetStaticPaths;

interface Props { project: Project; index: number; total: number; }

export const GET: APIRoute<Props> = async ({ props }) => socialPreviewResponse(await renderSocialPreview({
  kind: 'project',
  title: props.project.name,
  description: props.project.statement,
  accent: props.project.accent,
  category: props.project.category,
  eyebrow: props.project.eyebrow,
  status: props.project.status,
  repo: props.project.repo,
  index: props.index,
  total: props.total
}));
