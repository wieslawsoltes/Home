# Wiesław Šoltés — personal open-source portfolio

A static Astro website for the open-source systems maintained at [github.com/wieslawsoltes](https://github.com/wieslawsoltes). It includes a modern landing page, searchable project archive, and dedicated install/usage pages for 17 major projects.

## Local development

Requirements: Node.js 24 or newer and npm.

```bash
npm install
npm run dev
```

Astro prints the local URL, normally [http://localhost:4321](http://localhost:4321).

## Production preview

```bash
npm run build
npm run preview
```

The build performs Astro/TypeScript checks first and writes the static site to `dist/`.

## Updating projects

Project content lives in `src/data/projects.ts`. Adding an item automatically creates its dedicated `/projects/<slug>/` route and includes it in the searchable project index. Set `featured: true` to make a project eligible for the landing-page spotlight.

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` builds and publishes the site whenever `main` is pushed. It also supports manual runs from the Actions tab.

Before the first deployment, open the repository’s **Settings → Pages** and set **Source** to **GitHub Actions**. The Astro configuration detects the repository name in Actions and automatically uses `/Home/` as the production base path. If this repository is renamed to `wieslawsoltes.github.io`, it automatically switches to the root path.

No generated `dist/` files need to be committed.
