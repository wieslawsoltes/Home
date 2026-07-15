import type { SearchIndexItem } from './search';

export const normalizeSearchText = (value: string) => value
  .normalize('NFD')
  .replace(/\p{Diacritic}/gu, '')
  .toLowerCase()
  .replace(/[^a-z0-9.+#/-]+/g, ' ')
  .trim();

const searchableText = (item: SearchIndexItem) => normalizeSearchText([
  item.title,
  item.eyebrow,
  item.description,
  item.category,
  item.status,
  item.parent,
  item.repo,
  ...item.packages,
  ...item.keywords
].filter(Boolean).join(' '));

export const scoreSearchItem = (item: SearchIndexItem, query: string) => {
  const normalizedQuery = normalizeSearchText(query);
  const compactQuery = normalizedQuery.replace(/[^a-z0-9+#]+/g, '');
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
  const title = normalizeSearchText(item.title);
  const compactTitle = title.replace(/[^a-z0-9+#]+/g, '');
  const eyebrow = normalizeSearchText(item.eyebrow);
  const parent = normalizeSearchText(item.parent ?? '');
  const packages = item.packages.map(normalizeSearchText);
  const haystack = searchableText(item);
  if (!tokens.length || !tokens.every((token) => haystack.includes(token))) return 0;

  let score = item.kind === 'project' ? 12 : item.kind === 'capability' ? 8 : 4;
  if (title === normalizedQuery || compactTitle === compactQuery) score += 220;
  else if (title.startsWith(normalizedQuery)) score += 150;
  else if (title.includes(normalizedQuery)) score += 110;
  if (packages.some((itemPackage) => itemPackage === normalizedQuery)) score += item.kind === 'capability' ? 230 : 190;
  else if (packages.some((itemPackage) => itemPackage.includes(normalizedQuery))) score += 120;
  if (parent === normalizedQuery) score += 90;
  else if (parent.includes(normalizedQuery)) score += 48;
  if (eyebrow.includes(normalizedQuery)) score += 38;

  for (const token of tokens) {
    if (title.split(' ').some((word) => word === token)) score += 34;
    else if (title.split(' ').some((word) => word.startsWith(token))) score += 22;
    if (parent.split(' ').some((word) => word === token)) score += 24;
    else if (parent.split(' ').some((word) => word.startsWith(token))) score += 14;
    if (packages.some((itemPackage) => itemPackage.split(/[./-]/).includes(token))) score += 28;
  }
  return score - item.order / 10_000;
};

export function searchItems(items: SearchIndexItem[], query: string, limit = 12) {
  return items
    .map((item) => ({ item, score: scoreSearchItem(item, query) }))
    .filter((match) => match.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map((match) => match.item);
}

export function featuredSearchItems(items: SearchIndexItem[], limit = 8) {
  return items
    .filter((item) => item.kind === 'project' && item.featured)
    .sort((left, right) => left.order - right.order)
    .slice(0, limit);
}
