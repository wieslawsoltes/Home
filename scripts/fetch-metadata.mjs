import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const outputPath = resolve(root, 'public/data/metadata.json');

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(path);
    return entry.name.endsWith('.md') ? [path] : [];
  }))).flat();
}

const scalar = (value) => {
  const text = value.trim();
  if (text.startsWith('"')) return JSON.parse(text);
  if (text.startsWith("'") && text.endsWith("'")) return text.slice(1, -1).replaceAll("''", "'");
  return text;
};

const contentPaths = await markdownFiles(resolve(root, 'src/content'));
const sources = await Promise.all(contentPaths.map((path) => readFile(path, 'utf8')));
const repositories = [...new Set(sources.flatMap((source) =>
  [...source.matchAll(/^repo:\s*(.+)$/gm)].map((match) => scalar(match[1]))
))];
const discoveredPackageIds = sources.flatMap((source) => {
  const entries = [];
  let inPackages = false;
  let current;
  const finish = () => {
    if (current && !current.hasUrl) entries.push(current.name);
    current = undefined;
  };
  for (const line of source.split('\n')) {
    if (line === 'packages:') { inPackages = true; continue; }
    if (!inPackages) continue;
    if (line && !line.startsWith(' ')) { finish(); inPackages = false; continue; }
    const name = line.match(/^  - name:\s*(.+)$/);
    if (name) { finish(); current = { name: scalar(name[1]), hasUrl: false }; continue; }
    if (current && /^    url:/.test(line)) current.hasUrl = true;
  }
  finish();
  return entries;
});
const packages = [...new Set(discoveredPackageIds)];
const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;

async function fetchJson(url, headers = {}) {
  const response = await fetch(url, {
    headers: { Accept: 'application/json', 'User-Agent': 'wieslawsoltes-home-build', ...headers },
    signal: AbortSignal.timeout(12_000)
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
}

async function repositoryMetadata(name) {
  try {
    const data = await fetchJson(`https://api.github.com/repos/wieslawsoltes/${name}`, token ? { Authorization: `Bearer ${token}` } : {});
    return [name, {
      stars: data.stargazers_count,
      forks: data.forks_count,
      openIssues: data.open_issues_count,
      language: data.language,
      pushedAt: data.pushed_at,
      description: data.description,
      url: data.html_url
    }];
  } catch (error) {
    console.warn(`metadata: GitHub ${name}: ${error.message}`);
    return [name, null];
  }
}

async function packageMetadata(id) {
  try {
    const query = encodeURIComponent(`packageid:${id}`);
    const data = await fetchJson(`https://azuresearch-usnc.nuget.org/query?q=${query}&prerelease=true&take=1`);
    const item = data.data?.find((candidate) => candidate.id.toLowerCase() === id.toLowerCase());
    if (!item) return [id, null];
    const versions = item.versions ?? [];
    const stable = [...versions].reverse().find((version) => !version.version.includes('-'));
    return [id, {
      version: stable?.version ?? item.version,
      latestIncludingPrerelease: item.version,
      downloads: item.totalDownloads,
      verified: item.verified,
      url: `https://www.nuget.org/packages/${encodeURIComponent(id)}`
    }];
  } catch (error) {
    console.warn(`metadata: NuGet ${id}: ${error.message}`);
    return [id, null];
  }
}

async function inBatches(items, size, operation) {
  const output = [];
  for (let index = 0; index < items.length; index += size) {
    output.push(...await Promise.all(items.slice(index, index + size).map(operation)));
  }
  return output;
}

let previous = { repositories: {}, packages: {} };
try { previous = JSON.parse(await readFile(outputPath, 'utf8')); } catch { /* First build. */ }

const repositoryEntries = await inBatches(repositories, 8, repositoryMetadata);
const packageEntries = await inBatches(packages, 10, packageMetadata);
const clean = (entries, fallback) => Object.fromEntries(entries.map(([key, value]) => [key, value ?? fallback[key] ?? null]));
const metadata = {
  generatedAt: new Date().toISOString(),
  repositories: clean(repositoryEntries, previous.repositories ?? {}),
  packages: clean(packageEntries, previous.packages ?? {})
};

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(metadata, null, 2)}\n`);
console.log(`metadata: wrote ${repositories.length} repositories and ${packages.length} package lookups`);
