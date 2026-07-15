import sharp from 'sharp';

export const SOCIAL_PREVIEW_WIDTH = 1200;
export const SOCIAL_PREVIEW_HEIGHT = 630;

type SocialPreviewKind = 'portfolio' | 'project' | 'capability';

export interface SocialPreviewOptions {
  kind: SocialPreviewKind;
  title: string;
  description: string;
  accent?: string;
  category?: string;
  eyebrow?: string;
  status?: string;
  repo?: string;
  parentTitle?: string;
  index?: number;
  total?: number;
}

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const shorten = (value: string, maximum: number) => value.length <= maximum
  ? value
  : `${value.slice(0, Math.max(1, maximum - 1)).trimEnd()}…`;

function wrapText(value: string, maximum: number, limit = 2) {
  const words = value.trim().split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maximum || !current) {
      current = candidate;
      continue;
    }

    lines.push(current);
    current = word;
    if (lines.length === limit - 1) break;
  }

  if (current && lines.length < limit) {
    const consumed = lines.join(' ').split(/\s+/).filter(Boolean).length;
    const remaining = words.slice(consumed).join(' ');
    lines.push(shorten(remaining || current, maximum));
  }

  return lines.slice(0, limit);
}

const textLines = (
  lines: string[],
  x: number,
  startY: number,
  lineHeight: number,
  attributes: string
) => `<text x="${x}" y="${startY}" ${attributes}>${lines.map((line, index) => (
  `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`
)).join('')}</text>`;

const monogram = (value: string) => value
  .replaceAll('.', ' ')
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((word) => word[0]?.toUpperCase())
  .join('');

const numberLabel = (value?: number, total?: number) => value && total
  ? `${String(value).padStart(2, '0')} / ${String(total).padStart(2, '0')}`
  : 'OPEN / SYSTEMS';

export function socialPreviewSvg(options: SocialPreviewOptions) {
  const accent = options.accent ?? '#9eafff';
  const isPortfolio = options.kind === 'portfolio';
  const isCapability = options.kind === 'capability';
  const titleLines = isPortfolio
    ? ['BUILDING THE', 'OPEN DESKTOP.']
    : wrapText(options.title, isCapability ? 19 : 18);
  const longestTitle = Math.max(...titleLines.map((line) => line.length));
  const titleSize = isPortfolio
    ? 88
    : Math.max(isCapability ? 58 : 64, Math.min(isCapability ? 76 : 94, Math.floor(760 / (longestTitle * 0.58))));
  const titleLineHeight = Math.round(titleSize * 1.02);
  const titleY = isCapability ? 290 : 250;
  const descriptionLines = wrapText(options.description, 62, 2);
  const descriptionY = Math.max(442, titleY + titleLineHeight * titleLines.length + 54);
  const category = options.category ?? (isPortfolio ? 'OPEN-SOURCE .NET SYSTEMS' : 'PROJECT CAPABILITY');
  const eyebrow = options.eyebrow ?? (isPortfolio ? 'INDEPENDENT OPEN-SOURCE ENGINEER' : options.parentTitle ?? 'OPEN-SOURCE PROJECT');
  const repository = options.repo ? `github.com/wieslawsoltes/${options.repo}` : 'wieslawsoltes.github.io/Home';
  const mark = isPortfolio ? 'W/S' : monogram(options.parentTitle ?? options.title) || 'W/S';
  const titleTracking = isPortfolio ? '-3' : '-2';

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${SOCIAL_PREVIEW_WIDTH}" height="${SOCIAL_PREVIEW_HEIGHT}" viewBox="0 0 ${SOCIAL_PREVIEW_WIDTH} ${SOCIAL_PREVIEW_HEIGHT}">
  <defs>
    <radialGradient id="glow" cx="84%" cy="48%" r="54%">
      <stop offset="0" stop-color="${accent}" stop-opacity=".38" />
      <stop offset=".48" stop-color="${accent}" stop-opacity=".11" />
      <stop offset="1" stop-color="#08090c" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="beam" x1="0" y1="1" x2="1" y2="0">
      <stop stop-color="${accent}" stop-opacity="0" />
      <stop offset=".55" stop-color="${accent}" stop-opacity=".8" />
      <stop offset="1" stop-color="${accent}" stop-opacity=".08" />
    </linearGradient>
    <clipPath id="frame"><rect width="1200" height="630" rx="0" /></clipPath>
  </defs>

  <g clip-path="url(#frame)">
    <rect width="1200" height="630" fill="#08090c" />
    <rect width="1200" height="630" fill="url(#glow)" />
    <g stroke="#f2f3f6" stroke-opacity=".055" stroke-width="1">
      <path d="M0 70H1200M0 140H1200M0 210H1200M0 280H1200M0 350H1200M0 420H1200M0 490H1200M0 560H1200" />
      <path d="M80 0V630M160 0V630M240 0V630M320 0V630M400 0V630M480 0V630M560 0V630M640 0V630M720 0V630M800 0V630M880 0V630M960 0V630M1040 0V630M1120 0V630" />
    </g>

    <g transform="translate(1002 320)" fill="none" stroke="${accent}">
      <circle r="178" stroke-opacity=".23" stroke-width="1.5" />
      <ellipse rx="235" ry="84" transform="rotate(-18)" stroke-opacity=".42" stroke-width="2" />
      <ellipse rx="92" ry="222" transform="rotate(34)" stroke-opacity=".28" stroke-width="1.5" />
      <path d="M-246 96C-120-94 72-206 258-152" stroke="url(#beam)" stroke-width="2" />
      <circle cx="-161" cy="-86" r="6" fill="${accent}" stroke="none" />
      <circle cx="156" cy="89" r="4" fill="${accent}" stroke="none" />
      <circle cx="18" cy="-174" r="3" fill="#f2f3f6" stroke="none" />
    </g>
    <text x="1002" y="350" text-anchor="middle" fill="${accent}" fill-opacity=".18" font-family="Inter, Arial, sans-serif" font-size="110" font-weight="700" letter-spacing="-5">${escapeXml(mark)}</text>

    <path d="M48 42H1152" stroke="#f2f3f6" stroke-opacity=".2" />
    <rect x="48" y="62" width="50" height="50" fill="none" stroke="${accent}" stroke-width="2" />
    <text x="73" y="94" text-anchor="middle" fill="#f2f3f6" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="-.5">W/S</text>
    <text x="120" y="83" fill="#f2f3f6" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="1.4">WIESŁAW ŠOLTÉS</text>
    <text x="120" y="104" fill="#959aa7" font-family="Inter, Arial, sans-serif" font-size="12" font-weight="500" letter-spacing="1.8">OPEN SOURCE / .NET</text>
    <text x="1152" y="91" text-anchor="end" fill="#959aa7" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="600" letter-spacing="2">${escapeXml(category.toUpperCase())}</text>

    <rect x="48" y="167" width="28" height="3" fill="${accent}" />
    <text x="88" y="174" fill="${accent}" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="2.4">${escapeXml(eyebrow.toUpperCase())}</text>
    ${isCapability && options.parentTitle ? `<text x="48" y="218" fill="#f2f3f6" fill-opacity=".58" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="600" letter-spacing="-.5">${escapeXml(options.parentTitle)}</text>` : ''}
    ${textLines(titleLines, 48, titleY, titleLineHeight, `fill="#f2f3f6" font-family="Inter, Arial, sans-serif" font-size="${titleSize}" font-weight="750" letter-spacing="${titleTracking}"`)}
    ${textLines(descriptionLines, 48, descriptionY, 31, 'fill="#b4b8c2" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="400" letter-spacing="-.15"')}

    <path d="M48 557H1152" stroke="#f2f3f6" stroke-opacity=".2" />
    <text x="48" y="590" fill="#f2f3f6" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="600" letter-spacing=".4">${escapeXml(repository)}</text>
    <circle cx="820" cy="585" r="4" fill="${accent}" />
    <text x="835" y="590" fill="#959aa7" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="600" letter-spacing="1.5">${escapeXml((options.status ?? 'BUILDING IN PUBLIC').toUpperCase())}</text>
    <text x="1152" y="590" text-anchor="end" fill="#f2f3f6" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="1.8">${numberLabel(options.index, options.total)}</text>
    <rect x="0" y="626" width="1200" height="4" fill="${accent}" />
  </g>
</svg>`;
}

export async function renderSocialPreview(options: SocialPreviewOptions) {
  return sharp(Buffer.from(socialPreviewSvg(options)))
    .png({ compressionLevel: 9, palette: true, quality: 92 })
    .toBuffer();
}

export function socialPreviewResponse(image: Buffer) {
  return new Response(new Uint8Array(image), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
