import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import astroExpressiveCode from 'astro-expressive-code';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repository.toLowerCase() === 'wieslawsoltes.github.io';
const base = process.env.NODE_ENV === 'production' && repository && !isUserSite
  ? `/${repository}`
  : '/';

export default defineConfig({
  site: 'https://wieslawsoltes.github.io',
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [astroExpressiveCode(), mdx()],
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
