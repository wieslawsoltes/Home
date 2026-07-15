import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const root = new URL(import.meta.env.BASE_URL, site ?? 'https://wieslawsoltes.github.io');
  const sitemap = new URL('sitemap.xml', root);

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
