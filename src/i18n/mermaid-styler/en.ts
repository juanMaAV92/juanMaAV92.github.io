import type { MermaidStylerDict } from './types';

const en: MermaidStylerDict = {
  meta: {
    title: 'Mermaid Styler · Style Mermaid. Export the image.',
    description: 'A local-first tool for turning AI-generated Mermaid into a styled SVG or PNG ready to share.',
    ogTitle: 'Mermaid Styler · Style Mermaid. Export the image.',
    ogDescription: 'Paste Mermaid, tune the visual system and export a shareable SVG or PNG. Local-first and browser-based.',
    schemaDescription:
      'A local-first presentation layer for AI-generated Mermaid diagrams. Style and export SVG or PNG without sending source code to a remote service.',
  },
  nav: { homeLabel: 'Mermaid Styler home', navLabel: 'Project navigation', openApp: 'Open app ↗', portfolio: '← Portfolio' },
  hero: {
    kicker: 'Mermaid styling tool · local-first',
    titleLead: 'Style Mermaid.',
    titleEm: 'Export the image.',
    lede: 'Paste the Mermaid an AI gave you, adjust the colors and typography, then download a polished SVG or PNG for Jira, docs or your next pull request.',
    ctaPrimary: 'Open the app',
    ctaSecondary: 'See what it does',
    note: 'Rendered in your browser · no source upload · SVG + PNG',
  },
  video: {
    label: 'Demo: paste a Mermaid flowchart, switch presets, change the text size and export a PNG',
    pause: 'Pause demo',
    play: 'Play demo',
    caption: 'The real app: paste, style, export.',
  },
  workflow: {
    label: 'How it works',
    title: 'One clean path from Mermaid to a shareable image.',
    intro: 'Keep the source you already have. Mermaid Styler gives it a visual system without making you learn theme configuration first.',
    steps: [
      { number: '01', title: 'Paste the source', description: 'Bring the Mermaid syntax an AI already helped you write.' },
      { number: '02', title: 'Tune the visual system', description: 'Set the surface, nodes, lines, type and emphasis without touching theme config.' },
      { number: '03', title: 'Take the artifact', description: 'Copy or export an SVG or PNG that is ready for Jira, docs or a pull request.' },
    ],
  },
  gallery: {
    label: 'Presets',
    title: 'Same source, different visual systems.',
    intro: 'Switch presets or fine-tune colors and type. Flowcharts, sequence diagrams and the rest of Mermaid get the same treatment.',
    shots: [
      { src: '/mermaid-styler/dark.webp', caption: 'Dark preset', alt: 'Flowchart styled with the Dark preset' },
      { src: '/mermaid-styler/paper.webp', caption: 'Paper preset', alt: 'Flowchart styled with the Paper preset' },
      { src: '/mermaid-styler/seq.webp', caption: 'Sequence diagram · Architecture preset', alt: 'Sequence diagram styled with the Architecture preset' },
    ],
  },
  zoom: {
    label: 'Enlarge screenshot',
    hint: 'Enlarge ⤢',
    dialog: 'Enlarged screenshot',
    close: 'Close',
    prev: 'Previous screenshot',
    next: 'Next screenshot',
  },
  privacy: {
    label: 'Private by default',
    title: 'Nothing to upload. Nothing to manage.',
    body: 'Mermaid renders in your browser. There is no account, project database or diagram history in the first version — just a fast path from source to an exportable artifact.',
    status: 'LOCAL RENDERING ONLY',
  },
  brief: {
    label: 'Under the hood',
    title: 'Focused on the artifact.',
    specs: [
      { term: 'Interface', value: 'Astro + TypeScript + vanilla client scripts' },
      { term: 'Renderer', value: 'Mermaid running in the browser' },
      { term: 'Artifacts', value: 'Sanitized SVG · PNG through canvas' },
      { term: 'Deployment', value: 'Static output · Dokploy-ready' },
    ],
  },
  footer: { status: 'Mermaid Styler · MVP deployed', linksLabel: 'Project links' },
};

export default en;
