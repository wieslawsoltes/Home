# Wiesław Šoltés — personal open-source portfolio

A static Astro website for the open-source systems maintained at [github.com/wieslawsoltes](https://github.com/wieslawsoltes). It includes a modern landing page, interactive ecosystem map, tiered searchable archive, Now and About pages, and detailed install/usage stories for 43 projects.

## Local development

Requirements: Node.js 24 or newer and npm.

```bash
npm install
npm run dev
```

Astro prints the local URL, normally [http://localhost:4321](http://localhost:4321).

Astro's portfolio metadata content loader refreshes GitHub and NuGet data during content synchronization. If either service is unavailable, the site still runs with static content and any values cached by Astro's persistent content data store.

## Production preview

```bash
npm run build
npm run preview
```

The build performs Astro/TypeScript checks first and writes the static site to `dist/`.

## Updating projects

Project content lives in schema-validated Markdown and MDX files under `src/content/projects/`. The filename becomes the project slug, frontmatter defines its repository, packages, install and usage samples, media, architecture, compatibility, relationships, and archive placement. Adding an entry automatically creates its `/projects/<slug>/` route and includes it in the appropriate indexes. Set `featured: true` to make a project eligible for the landing-page spotlight.

Use ordinary Markdown for the default project introduction. Reserve MDX for a flagship with a genuine engineering narrative: add the validated `story` object (`label`, `title`, and `intro`), rename the entry to `.mdx`, and compose its body with the static editorial components in `src/components/story/`. The shared page renders that body as a dedicated story between overview and evidence; it does not replace structured architecture, packages, capabilities, or compatibility data. ProGPU, ProDataGrid, Svg.Skia, and ProEdit are the reference implementations.

Focused subsystem pages live under `src/content/capabilities/<project>/`. Their project and related-capability fields are validated content references, and each file creates `/projects/<project>/<capability>/`. Collection schemas are defined in `src/content.config.ts`; shared queries and URL helpers live in `src/lib/content.ts`.

### Enhanced code examples

Quick-start samples are rendered with Expressive Code, including syntax highlighting, editor or terminal frames, accessible copy feedback, and optional line or text markers. Installation examples choose the appropriate terminal, project-file, or central-package frame automatically.

Project and capability frontmatter can customize the usage example with `usageTitle`, `usageMark`, `usageInsertions`, and `usageDeletions`. Marker entries accept exact text, a positive line number, or a labeled range:

```yaml
usageTitle: GalleryWindow.cs
usageMark:
  - range: "3-5"
    label: GPU setup
usageInsertions:
  - 7
usageDeletions:
  - LegacyRenderer
```

The shared Expressive Code theme is defined in `ec.config.mjs` and follows each project page’s accent color. Range labels are limited to 18 characters so they remain readable on mobile. Use markers to explain meaningful decisions rather than decorating every line.

The ecosystem graph is defined in `src/components/SystemsMap.astro`.

## Portfolio integration

The local integration at `integrations/portfolio/` gives the site a portfolio-specific build layer. It injects two static, base-path-aware discovery routes:

- `portfolio.json` exposes the validated project, capability, package, category, relationship, repository, and MDX-story graph for tools and external consumers.
- `llms.txt` provides a concise, link-rich text inventory of the same portfolio for agents and language-model tooling.

Both routes are advertised from every page with `<link rel="alternate">` metadata. The integration also audits production output after Astro finishes: project slugs and ordering must be unique, configured story projects must use MDX and all other projects must remain Markdown, manifest counts must agree with the graph, every project and capability page must exist, and the portfolio, search, sitemap, and crawler artifacts must be present. A broken invariant fails the build instead of silently publishing an incomplete portfolio.

Integration identity and the intentional MDX story allowlist are configured in `astro.config.mjs`. Update `storyProjects` whenever a project is deliberately promoted to or removed from the richer MDX story format.

## Metadata refresh

```bash
npx astro sync
```

The `portfolioMetadata` collection uses the custom loader in `src/loaders/github-nuget.ts`. It discovers repositories and NuGet package IDs from project and capability frontmatter, fetches repository activity and current package versions, validates every remote record, and writes the records to Astro's persistent content data store. The loader uses conditional requests, a 15-minute refresh window, bounded request batches, and stale cached values when a service is temporarily unavailable. Content-file changes trigger a resync in development.

The prerendered `src/pages/data/metadata.json.ts` endpoint serializes the collection at the existing `/data/metadata.json` URL, so browser hydration keeps working without committing generated metadata. GitHub Actions supplies its built-in `GITHUB_TOKEN`; no custom secret is required.

## Search metadata

Every page uses the shared layout for canonical URLs, descriptions, Open Graph and Twitter cards, crawler directives, and Schema.org JSON-LD. Project and capability routes describe their source repositories and breadcrumbs; the home and ecosystem pages expose their project lists as structured data.

The static build also generates `sitemap.xml` and `robots.txt`. Both automatically respect the GitHub Pages base path, and every page links directly to the sitemap.

The build generates a base-path-aware `search.json` containing every editorial, project, and capability page, then runs Pagefind over the rendered HTML in `dist/`. The global search dialog combines the curated ranking for names, parent projects, repositories, NuGet package IDs, categories, and architecture terms with Pagefind’s full-page text ranking and highlighted excerpts. Exact project and package matches remain dominant while deeper prose, code samples, and subsystem details become discoverable.

Pagefind is generated by `npm run pagefind`, which is included automatically at the end of `npm run build`. Development mode gracefully uses the curated metadata index because Pagefind requires rendered static HTML; run a production build and `npm run preview` to test the complete hybrid search locally. Both the Pagefind bundle import and returned result URLs respect Astro’s configured GitHub Pages base path.

Open search from the navigation, with `Cmd/Ctrl+K`, or with `/` while focus is outside an editor.

## Client-side navigation

Astro's client router adds progressive view transitions between internal pages. The header and ambient pointer field persist between routes, while matching project and capability titles carry visual continuity into their detail pages. All interactive behavior is initialized from `src/scripts/site.ts` on `astro:page-load`; its listeners use one abort signal and its observers are disconnected before every swap, so menus, search, filters, maps, copy controls, and metadata hydration can be initialized repeatedly without accumulating handlers. Browsers without native view transitions use Astro's fallback, and reduced-motion preferences remain respected.

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` builds and publishes the site whenever `main` is pushed. It also supports manual runs from the Actions tab.

Pages is configured to use GitHub Actions. The Astro configuration detects the repository name in Actions and automatically uses `/Home/` as the production base path. If this repository is renamed to `wieslawsoltes.github.io`, it automatically switches to the root path.

No generated `dist/` files need to be committed.
