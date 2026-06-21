// Genera public/og.png (1200×630) con la estética terminal.
// Uso: node scripts/gen-og.mjs
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public', 'og.png');
mkdirSync(join(root, 'public'), { recursive: true });

const FONT = 'Menlo, Monaco, monospace';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="20%" cy="18%" r="60%">
      <stop offset="0%" stop-color="#6ee7a8" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#6ee7a8" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="88%" cy="30%" r="55%">
      <stop offset="0%" stop-color="#5aa9e6" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#5aa9e6" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#0d0f12"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <!-- mesh sutil de fondo -->
  <g stroke="#6ee7a8" stroke-opacity="0.10" stroke-width="1">
    <line x1="120" y1="90" x2="360" y2="150"/>
    <line x1="360" y1="150" x2="240" y2="520"/>
    <line x1="980" y1="120" x2="1110" y2="380"/>
    <line x1="1110" y1="380" x2="900" y2="540"/>
  </g>
  <g fill="#6ee7a8" fill-opacity="0.45">
    <circle cx="120" cy="90" r="4"/><circle cx="360" cy="150" r="4"/>
    <circle cx="240" cy="520" r="4"/><circle cx="980" cy="120" r="4"/>
    <circle cx="1110" cy="380" r="4"/><circle cx="900" cy="540" r="4"/>
  </g>

  <!-- ventana de terminal -->
  <rect x="80" y="80" width="1040" height="470" rx="18" fill="#13161c" stroke="#20252d" stroke-width="1.5"/>
  <circle cx="124" cy="124" r="8" fill="#e8836e"/>
  <circle cx="152" cy="124" r="8" fill="#e8c07d"/>
  <circle cx="180" cy="124" r="8" fill="#6ee7a8"/>
  <line x1="80" y1="156" x2="1120" y2="156" stroke="#20252d" stroke-width="1.5"/>

  <!-- contenido -->
  <text x="128" y="240" font-family="${FONT}" font-size="30" fill="#6b7280"><tspan fill="#6ee7a8">$</tspan> whoami</text>
  <text x="128" y="350" font-family="${FONT}" font-size="92" font-weight="700" fill="#ffffff">Juan Manuel</text>
  <text x="128" y="408" font-family="${FONT}" font-size="32" fill="#e8c07d">backend engineer &#183; tech lead &#183; distributed systems</text>
  <text x="128" y="500" font-family="${FONT}" font-size="30" fill="#d7dce3">juanmaav92.github.io</text>
  <rect x="500" y="478" width="16" height="28" fill="#6ee7a8"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('OG image →', out);
