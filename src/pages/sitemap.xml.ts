import type { APIRoute } from 'astro';
import { getCapabilities, getProjects } from '@/lib/content';

const staticRoutes = ['', 'about/', 'ecosystem/', 'now/'];

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = async ({ site }) => {
  const [projects, capabilities] = await Promise.all([getProjects(), getCapabilities()]);
  const root = new URL(import.meta.env.BASE_URL, site ?? 'https://wieslawsoltes.github.io');
  const routes = [
    ...staticRoutes,
    ...projects.map((project) => `projects/${project.slug}/`),
    ...capabilities.map((capability) => `projects/${capability.projectSlug}/${capability.slug}/`)
  ];
  const urls = [...new Set(routes)]
    .map((route) => `  <url><loc>${escapeXml(new URL(route, root).href)}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
