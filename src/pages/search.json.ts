import type { APIRoute } from 'astro';
import { buildSearchIndex } from '@/lib/search';

export const GET: APIRoute = async () => {
  const index = await buildSearchIndex(import.meta.env.BASE_URL);
  return new Response(`${JSON.stringify(index)}\n`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
