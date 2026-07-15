# Wiesław Šoltés — personal open-source portfolio

A static Astro website for the open-source systems maintained at [github.com/wieslawsoltes](https://github.com/wieslawsoltes). It includes a modern landing page, interactive ecosystem map, tiered searchable archive, Now and About pages, and detailed install/usage stories for 28 major projects.

## Local development

Requirements: Node.js 24 or newer and npm.

```bash
npm install
npm run dev
```

Astro prints the local URL, normally [http://localhost:4321](http://localhost:4321).

The `predev` hook refreshes GitHub and NuGet metadata into a generated local JSON file. If either service is unavailable, the site still runs with static content and any previously fetched values.

## Production preview

```bash
npm run build
npm run preview
```

The build performs Astro/TypeScript checks first and writes the static site to `dist/`.

## Updating projects

Core project content lives in `src/data/projects.ts`; richer media, compatibility, architecture, evidence, links, limitations, and relationships live in `src/data/projectDetails.ts`. Adding an item automatically creates its dedicated `/projects/<slug>/` route and includes it in the searchable project index. Set `featured: true` to make a project eligible for the landing-page spotlight.

Compact maintained and historical entries live in `src/data/archiveProjects.ts`. The ecosystem graph is defined in `src/components/SystemsMap.astro`.

## Metadata refresh

```bash
npm run metadata
```

The script fetches repository activity from GitHub and current package versions from NuGet. GitHub Actions supplies its built-in `GITHUB_TOKEN`; no custom secret is required.

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` builds and publishes the site whenever `main` is pushed. It also supports manual runs from the Actions tab.

Pages is configured to use GitHub Actions. The Astro configuration detects the repository name in Actions and automatically uses `/Home/` as the production base path. If this repository is renamed to `wieslawsoltes.github.io`, it automatically switches to the root path.

No generated `dist/` files need to be committed.
