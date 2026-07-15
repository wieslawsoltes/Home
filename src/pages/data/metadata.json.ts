import { getCollection } from 'astro:content';

export const prerender = true;

export async function GET() {
  const entries = await getCollection('portfolioMetadata');
  const repositories: Record<string, unknown> = {};
  const packages: Record<string, unknown> = {};
  let generatedAt = '';

  for (const entry of entries) {
    const { kind, key, checkedAt, ...metadata } = entry.data;
    if (checkedAt > generatedAt) generatedAt = checkedAt;
    if (kind === 'github') repositories[key] = metadata;
    else packages[key] = metadata;
  }

  const repositoryValues = Object.values(repositories) as Array<{ available?: boolean }>;
  const packageValues = Object.values(packages) as Array<{ available?: boolean }>;
  const body = {
    version: 1,
    generatedAt,
    counts: {
      repositories: repositoryValues.length,
      availableRepositories: repositoryValues.filter((item) => item.available).length,
      packages: packageValues.length,
      availablePackages: packageValues.filter((item) => item.available).length
    },
    repositories,
    packages
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
