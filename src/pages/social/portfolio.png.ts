import type { APIRoute } from 'astro';
import { renderSocialPreview, socialPreviewResponse } from '@/lib/social-preview';

export const GET: APIRoute = async () => socialPreviewResponse(await renderSocialPreview({
  kind: 'portfolio',
  title: 'Building the open desktop.',
  description: 'GPU renderers, portable UI frameworks, and the controls that turn them into real tools.',
  category: 'Open-source .NET systems',
  eyebrow: 'Independent open-source engineer',
  status: 'Building in public'
}));
