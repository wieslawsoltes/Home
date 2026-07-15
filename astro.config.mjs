import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import astroExpressiveCode from 'astro-expressive-code';
import portfolioIntegration from './integrations/portfolio/index.mjs';

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
  integrations: [
    astroExpressiveCode(),
    mdx(),
    portfolioIntegration({
      title: 'Wiesław Šoltés — Open-source .NET systems',
      owner: 'Wiesław Šoltés',
      description: 'Open-source UI frameworks, GPU rendering, controls, and developer tools by Wiesław Šoltés.',
      github: 'https://github.com/wieslawsoltes',
      sponsor: 'https://github.com/sponsors/wieslawsoltes',
      storyProjects: ['progpu', 'prodatagrid', 'svg-skia', 'proedit']
    })
  ],
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
