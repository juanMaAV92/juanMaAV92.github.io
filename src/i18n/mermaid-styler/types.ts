// Textos de la página de Mermaid Styler. Un archivo por idioma (en.ts, es.ts) con esta forma.
export type MermaidStylerDict = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; schemaDescription: string };
  nav: { homeLabel: string; navLabel: string; openApp: string; portfolio: string };
  hero: {
    kicker: string;
    titleLead: string;
    titleEm: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
  };
  video: { label: string; pause: string; play: string; caption: string };
  workflow: {
    label: string;
    title: string;
    intro: string;
    steps: { number: string; title: string; description: string }[];
  };
  gallery: {
    label: string;
    title: string;
    intro: string;
    shots: { src: string; caption: string; alt: string }[];
  };
  zoom: { label: string; hint: string; dialog: string; close: string; prev: string; next: string };
  privacy: { label: string; title: string; body: string; status: string };
  brief: { label: string; title: string; specs: { term: string; value: string }[] };
  footer: { status: string; linksLabel: string };
};
