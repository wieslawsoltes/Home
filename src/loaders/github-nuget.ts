import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import type { Loader, LoaderContext } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse as parseYaml } from 'yaml';

const commonMetadata = {
  key: z.string().min(1),
  available: z.boolean(),
  stale: z.boolean(),
  fetchedAt: z.string().nullable(),
  checkedAt: z.string(),
  error: z.string().optional()
};

export const githubNugetMetadataSchema = z.discriminatedUnion('kind', [
  z.object({
    ...commonMetadata,
    kind: z.literal('github'),
    stars: z.number().int().nonnegative().nullable(),
    forks: z.number().int().nonnegative().nullable(),
    openIssues: z.number().int().nonnegative().nullable(),
    language: z.string().nullable(),
    pushedAt: z.string().nullable(),
    description: z.string().nullable(),
    url: z.url()
  }),
  z.object({
    ...commonMetadata,
    kind: z.literal('nuget'),
    version: z.string().nullable(),
    latestIncludingPrerelease: z.string().nullable(),
    downloads: z.number().int().nonnegative().nullable(),
    verified: z.boolean().nullable(),
    url: z.url()
  })
]);

type Metadata = z.infer<typeof githubNugetMetadataSchema>;
type MetadataKind = Metadata['kind'];

export interface GitHubNugetLoaderOptions {
  owner: string;
  sources: string[];
  githubToken?: string;
  maxAgeMs?: number;
  requestTimeoutMs?: number;
}

interface ContentSources {
  repositories: string[];
  packages: string[];
  directories: string[];
}

interface RequestResult {
  data?: unknown;
  notModified: boolean;
  etag?: string;
}

const entryId = (kind: MetadataKind, key: string) => `${kind}:${key.toLowerCase()}`;
const errorMessage = (error: unknown) => error instanceof Error ? error.message : String(error);

async function contentFiles(directory: URL): Promise<URL[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(async (entry) => {
    const url = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directory);
    if (entry.isDirectory()) return contentFiles(url);
    return /\.mdx?$/i.test(entry.name) ? [url] : [];
  }))).flat();
}

function frontmatter(source: string, file: URL) {
  const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) return {};
  const value = parseYaml(match[1]);
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new TypeError(`Expected object frontmatter in ${fileURLToPath(file)}`);
  }
  return value as Record<string, unknown>;
}

function isNugetPackage(item: Record<string, unknown>) {
  if (typeof item.name !== 'string' || !item.name.trim()) return false;
  if (typeof item.url !== 'string') return true;
  try {
    return new URL(item.url).hostname.toLowerCase().endsWith('nuget.org');
  } catch {
    return false;
  }
}

async function discoverSources(root: URL, directories: string[]): Promise<ContentSources> {
  const sourceDirectories = directories.map((directory) =>
    new URL(directory.replace(/\/?$/, '/'), root)
  );
  const files = (await Promise.all(sourceDirectories.map(contentFiles))).flat();
  const documents = await Promise.all(files.map(async (file) =>
    frontmatter(await readFile(file, 'utf8'), file)
  ));
  const repositories = new Map<string, string>();
  const packages = new Map<string, string>();

  for (const document of documents) {
    if (typeof document.repo === 'string' && document.repo.trim()) {
      repositories.set(document.repo.toLowerCase(), document.repo.trim());
    }
    if (!Array.isArray(document.packages)) continue;
    for (const value of document.packages) {
      if (!value || typeof value !== 'object' || Array.isArray(value)) continue;
      const item = value as Record<string, unknown>;
      if (isNugetPackage(item)) {
        const name = String(item.name).trim();
        packages.set(name.toLowerCase(), name);
      }
    }
  }

  return {
    repositories: [...repositories.values()].sort((left, right) => left.localeCompare(right)),
    packages: [...packages.values()].sort((left, right) => left.localeCompare(right)),
    directories: sourceDirectories.map((directory) => fileURLToPath(directory))
  };
}

async function requestJson(
  url: string,
  headers: Record<string, string>,
  etag: string | undefined,
  timeoutMs: number
): Promise<RequestResult> {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'wieslawsoltes-portfolio-content-loader',
      ...headers,
      ...(etag ? { 'If-None-Match': etag } : {})
    },
    signal: AbortSignal.timeout(timeoutMs)
  });
  if (response.status === 304) return { notModified: true, etag };
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} — ${url}`);
  return {
    data: await response.json(),
    notModified: false,
    etag: response.headers.get('etag') ?? undefined
  };
}

function unavailable(kind: MetadataKind, key: string, checkedAt: string, error: unknown, owner?: string): Metadata {
  const base = {
    kind,
    key,
    available: false,
    stale: false,
    fetchedAt: null,
    checkedAt,
    error: errorMessage(error)
  } as const;
  return kind === 'github'
    ? {
        ...base,
        kind,
        stars: null,
        forks: null,
        openIssues: null,
        language: null,
        pushedAt: null,
        description: null,
        url: `https://github.com/${encodeURIComponent(owner ?? '')}/${encodeURIComponent(key)}`
      }
    : {
        ...base,
        kind,
        version: null,
        latestIncludingPrerelease: null,
        downloads: null,
        verified: null,
        url: `https://www.nuget.org/packages/${encodeURIComponent(key)}`
      };
}

function fallback(
  kind: MetadataKind,
  key: string,
  checkedAt: string,
  previous: Metadata | undefined,
  error: unknown,
  owner?: string
) {
  if (previous?.kind === kind && previous.available) {
    return { ...previous, stale: true, checkedAt, error: errorMessage(error) } satisfies Metadata;
  }
  return unavailable(kind, key, checkedAt, error, owner);
}

async function inBatches<T, R>(items: T[], size: number, operation: (item: T) => Promise<R>) {
  const output: R[] = [];
  for (let index = 0; index < items.length; index += size) {
    output.push(...await Promise.all(items.slice(index, index + size).map(operation)));
  }
  return output;
}

/**
 * Loads the GitHub repositories and NuGet packages referenced by portfolio
 * frontmatter into Astro's persistent content data store.
 */
export function githubNugetLoader(options: GitHubNugetLoaderOptions): Loader {
  if (!options.owner.trim()) throw new TypeError('githubNugetLoader requires an owner.');
  if (!options.sources.length) throw new TypeError('githubNugetLoader requires at least one content source.');

  const maxAgeMs = options.maxAgeMs ?? 15 * 60 * 1000;
  const requestTimeoutMs = options.requestTimeoutMs ?? 12_000;
  let watching = false;
  let refreshTimer: ReturnType<typeof setTimeout> | undefined;
  let activeRefresh = Promise.resolve();

  const sync = async (context: LoaderContext, force = false) => {
    const { config, generateDigest, logger, meta, parseData, store } = context;
    const discovered = await discoverSources(config.root, options.sources);
    const desiredIds = [
      ...discovered.repositories.map((key) => entryId('github', key)),
      ...discovered.packages.map((key) => entryId('nuget', key))
    ];
    const sourceDigest = generateDigest([
      options.owner.toLowerCase(),
      options.githubToken ? 'github:authenticated' : 'github:anonymous',
      ...desiredIds
    ].join('\0'));
    const previousCheck = Date.parse(meta.get('lastCheckedAt') ?? '');
    const cacheIsFresh = !force
      && meta.get('sourceDigest') === sourceDigest
      && desiredIds.every((id) => store.has(id))
      && Number.isFinite(previousCheck)
      && Date.now() - previousCheck < maxAgeMs;

    if (cacheIsFresh) {
      logger.info(`Using cached GitHub/NuGet metadata for ${discovered.repositories.length} repositories and ${discovered.packages.length} packages.`);
      return discovered;
    }

    const checkedAt = new Date().toISOString();
    const githubHeaders: Record<string, string> = options.githubToken
      ? { Authorization: `Bearer ${options.githubToken}` }
      : {};
    const repositoryFailures: string[] = [];
    const packageFailures: string[] = [];

    const repositoryEntries = await inBatches(discovered.repositories, 8, async (key) => {
      const id = entryId('github', key);
      const previous = store.get<Metadata>(id)?.data;
      try {
        const result = await requestJson(
          `https://api.github.com/repos/${encodeURIComponent(options.owner)}/${encodeURIComponent(key)}`,
          githubHeaders,
          meta.get(`etag:${id}`),
          requestTimeoutMs
        );
        if (result.notModified && previous?.kind === 'github') {
          return [id, { ...previous, stale: false, checkedAt, error: undefined }] as const;
        }
        const data = result.data as Record<string, unknown>;
        if (result.etag) meta.set(`etag:${id}`, result.etag);
        return [id, {
          kind: 'github',
          key,
          available: true,
          stale: false,
          fetchedAt: checkedAt,
          checkedAt,
          stars: Number(data.stargazers_count),
          forks: Number(data.forks_count),
          openIssues: Number(data.open_issues_count),
          language: typeof data.language === 'string' ? data.language : null,
          pushedAt: typeof data.pushed_at === 'string' ? data.pushed_at : null,
          description: typeof data.description === 'string' ? data.description : null,
          url: String(data.html_url)
        }] as const;
      } catch (error) {
        repositoryFailures.push(key);
        return [id, fallback('github', key, checkedAt, previous, error, options.owner)] as const;
      }
    });

    const packageEntries = await inBatches(discovered.packages, 10, async (key) => {
      const id = entryId('nuget', key);
      const previous = store.get<Metadata>(id)?.data;
      try {
        const query = encodeURIComponent(`packageid:${key}`);
        const result = await requestJson(
          `https://azuresearch-usnc.nuget.org/query?q=${query}&prerelease=true&take=1`,
          {},
          meta.get(`etag:${id}`),
          requestTimeoutMs
        );
        if (result.notModified && previous?.kind === 'nuget') {
          return [id, { ...previous, stale: false, checkedAt, error: undefined }] as const;
        }
        const response = result.data as { data?: Array<Record<string, unknown>> };
        const item = response.data?.find((candidate) =>
          String(candidate.id).toLowerCase() === key.toLowerCase()
        );
        if (!item) {
          const error = new Error('Package was not returned by NuGet search.');
          packageFailures.push(key);
          return [id, fallback('nuget', key, checkedAt, previous, error)] as const;
        }
        const versions = Array.isArray(item.versions) ? item.versions as Array<{ version?: unknown }> : [];
        const stable = [...versions].reverse().find((candidate) =>
          typeof candidate.version === 'string' && !candidate.version.includes('-')
        );
        if (result.etag) meta.set(`etag:${id}`, result.etag);
        return [id, {
          kind: 'nuget',
          key,
          available: true,
          stale: false,
          fetchedAt: checkedAt,
          checkedAt,
          version: typeof stable?.version === 'string' ? stable.version : String(item.version),
          latestIncludingPrerelease: typeof item.version === 'string' ? item.version : null,
          downloads: Number(item.totalDownloads),
          verified: typeof item.verified === 'boolean' ? item.verified : null,
          url: `https://www.nuget.org/packages/${encodeURIComponent(key)}`
        }] as const;
      } catch (error) {
        packageFailures.push(key);
        return [id, fallback('nuget', key, checkedAt, previous, error)] as const;
      }
    });

    const desired = new Set(desiredIds);
    store.keys().filter((id) => !desired.has(id)).forEach((id) => {
      store.delete(id);
      meta.delete(`etag:${id}`);
    });
    for (const [id, value] of [...repositoryEntries, ...packageEntries]) {
      const data = await parseData({ id, data: value });
      store.set({ id, data, digest: generateDigest(data) });
    }
    meta.set('lastCheckedAt', checkedAt);
    meta.set('sourceDigest', sourceDigest);
    if (repositoryFailures.length) {
      logger.warn(
        `GitHub metadata unavailable for ${repositoryFailures.length} repositories; cached values were retained where possible.`
      );
    }
    if (packageFailures.length) {
      logger.warn(
        `NuGet metadata unavailable for ${packageFailures.length} package IDs; cached values were retained where possible.`
      );
    }
    logger.info(`Loaded ${repositoryEntries.length} GitHub repositories and ${packageEntries.length} NuGet packages.`);
    return discovered;
  };

  return {
    name: 'portfolio-github-nuget-loader',
    schema: githubNugetMetadataSchema,
    async load(context) {
      const discovered = await sync(context);
      if (!context.watcher || watching) return;
      watching = true;
      context.watcher.add(discovered.directories);
      context.watcher.on('all', (_event, path) => {
        if (!/\.mdx?$/i.test(path) || !discovered.directories.some((directory) => path.startsWith(directory))) return;
        clearTimeout(refreshTimer);
        refreshTimer = setTimeout(() => {
          activeRefresh = activeRefresh
            .then(() => sync(context, true))
            .then((next) => { context.watcher?.add(next.directories); })
            .catch((error) => context.logger.error(`Metadata refresh failed: ${errorMessage(error)}`));
        }, 200);
      });
    }
  };
}
