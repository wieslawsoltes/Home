import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { githubNugetLoader } from './loaders/github-nuget';

const packageLink = z.object({
  name: z.string(),
  note: z.string(),
  url: z.url().optional()
});

const codeMarker = z.union([
  z.string(),
  z.number().int().positive(),
  z.object({
    range: z.string().regex(/^\d+(?:-\d+)?$/),
    label: z.string().max(18).optional()
  })
]);

const usageExample = {
  usageTitle: z.string().optional(),
  usageMark: z.array(codeMarker).default([]),
  usageInsertions: z.array(codeMarker).default([]),
  usageDeletions: z.array(codeMarker).default([])
};

const projectMediaHosts = new Set([
  'github.com',
  'opengraph.githubassets.com',
  'raw.githubusercontent.com',
  'user-images.githubusercontent.com'
]);

const projectMediaUrl = z.url().refine(
  (value) => projectMediaHosts.has(new URL(value).hostname.toLowerCase()),
  'Project media must use an authorized GitHub image host.'
);

const projectMedia = z.object({
  src: projectMediaUrl,
  alt: z.string(),
  caption: z.string(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
  outputFormat: z.enum(['webp', 'gif', 'svg']).default('webp')
}).refine(
  (value) => (value.width === undefined) === (value.height === undefined),
  'Project media width and height must be provided together.'
);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    order: z.number().int().nonnegative(),
    name: z.string(),
    eyebrow: z.string(),
    category: z.enum(['Graphics', 'Frameworks', 'Avalonia', 'Uno Platform', 'Controls', 'Tools']),
    repo: z.string(),
    branch: z.string().optional(),
    description: z.string(),
    statement: z.string(),
    story: z.object({
      label: z.string(),
      title: z.string(),
      intro: z.string()
    }).optional(),
    accent: z.string().regex(/^#[0-9a-f]{6}$/i),
    featured: z.boolean().default(false),
    showInIndex: z.boolean().default(true),
    tier: z.enum(['Flagship', 'Maintained', 'Experimental']),
    status: z.enum(['Active', 'Preview', 'Maintained']),
    packages: z.array(packageLink),
    install: z.string(),
    usageLanguage: z.enum(['csharp', 'xml', 'bash', 'javascript']),
    usage: z.string(),
    ...usageExample,
    highlights: z.array(z.string()).min(1),
    audience: z.array(z.string()).min(1),
    architecture: z.array(z.object({ label: z.string(), detail: z.string() })).min(1),
    compatibility: z.array(z.object({
      label: z.string(),
      value: z.string(),
      state: z.enum(['ready', 'partial', 'planned']).default('ready')
    })).min(1),
    proof: z.array(z.object({ value: z.string(), label: z.string() })).min(1),
    media: z.array(projectMedia).min(1),
    links: z.array(z.object({ label: z.string(), href: z.url() })),
    limitations: z.string().optional(),
    related: z.array(reference('projects')).default([]),
    archive: z.object({
      order: z.number().int().nonnegative(),
      kind: z.enum(['Maintained', 'Earlier work']),
      tags: z.array(z.string()).min(1)
    }).optional()
  })
});

const capabilities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/capabilities' }),
  schema: z.object({
    order: z.number().int().nonnegative(),
    project: reference('projects'),
    name: z.string(),
    eyebrow: z.string(),
    description: z.string(),
    statement: z.string(),
    status: z.enum(['Stable', 'Active', 'Preview', 'Maintained']),
    packages: z.array(packageLink).min(1),
    install: z.string(),
    usageLanguage: z.enum(['csharp', 'xml', 'bash', 'javascript']),
    usage: z.string(),
    ...usageExample,
    highlights: z.array(z.string()).min(1),
    layers: z.array(z.object({ label: z.string(), detail: z.string() })).min(1),
    sourcePath: z.string(),
    docsPath: z.string().optional(),
    related: z.array(reference('capabilities')).default([])
  })
});

const portfolioMetadata = defineCollection({
  loader: githubNugetLoader({
    owner: 'wieslawsoltes',
    sources: ['./src/content/projects', './src/content/capabilities'],
    githubToken: process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN
  })
});

export const collections = { projects, capabilities, portfolioMetadata };
