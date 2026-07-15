import config from 'virtual:wieslaw-portfolio/config';
import { buildPortfolioData } from './data.mjs';

export const prerender = true;

export async function GET({ site }) {
  const root = new URL(import.meta.env.BASE_URL, site ?? 'https://wieslawsoltes.github.io');
  const portfolio = await buildPortfolioData(config, root);
  return new Response(`${JSON.stringify(portfolio)}\n`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
