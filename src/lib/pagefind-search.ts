import type { SearchIndexItem } from './search';

type PagefindResultData = {
  url: string;
  excerpt: string;
  plain_excerpt: string;
  meta: Record<string, string>;
};

type PagefindResult = {
  id: string;
  data: () => Promise<PagefindResultData>;
};

type PagefindApi = {
  init: () => Promise<void> | void;
  options: (options: { baseUrl: string; excerptLength: number }) => Promise<void> | void;
  search: (query: string) => Promise<{ results: PagefindResult[] }>;
};

export type FullTextSearchMatch = {
  item: SearchIndexItem;
  excerpt: string;
  rank: number;
};

export type FullTextSearchResponse = {
  available: boolean;
  matches: FullTextSearchMatch[];
};

let pagefindPromise: Promise<PagefindApi | undefined> | undefined;

const normalizedPath = (value: string) => {
  const url = new URL(value, window.location.origin);
  const pathname = url.pathname.replace(/\/index\.html$/, '/');
  return pathname === '/' ? pathname : `${pathname.replace(/\/+$/, '')}/`;
};

export function preparePagefind(base: string) {
  if (import.meta.env.DEV) return Promise.resolve(undefined);
  if (!pagefindPromise) {
    const moduleUrl = `${base}pagefind/pagefind.js`;
    pagefindPromise = import(/* @vite-ignore */ moduleUrl)
      .then(async (module) => {
        const pagefind = module as PagefindApi;
        await pagefind.options({ baseUrl: base, excerptLength: 24 });
        await pagefind.init();
        return pagefind;
      })
      .catch(() => undefined);
  }
  return pagefindPromise;
}

export async function searchPagefind(
  query: string,
  items: SearchIndexItem[],
  base: string,
  limit = 18
): Promise<FullTextSearchResponse> {
  const pagefind = await preparePagefind(base);
  if (!pagefind) return { available: false, matches: [] };

  let data: PagefindResultData[];
  try {
    const response = await pagefind.search(query);
    data = await Promise.all(response.results.slice(0, limit).map((result) => result.data()));
  } catch {
    return { available: false, matches: [] };
  }
  const itemsByPath = new Map(items.map((item) => [normalizedPath(item.url), item]));
  const matches = data.map((result, rank): FullTextSearchMatch => {
    const item = itemsByPath.get(normalizedPath(result.url)) ?? {
      id: `pagefind:${normalizedPath(result.url)}`,
      kind: 'page',
      title: result.meta.title || 'Full-text result',
      eyebrow: 'Full-text match',
      description: result.plain_excerpt,
      url: result.url,
      packages: [],
      keywords: [],
      order: 100_000 + rank
    } satisfies SearchIndexItem;
    return { item, excerpt: result.excerpt, rank };
  });

  return { available: true, matches };
}
