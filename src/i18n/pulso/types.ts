// Textos de la página de Pulso. Un archivo por idioma (en.ts, es.ts) con esta forma.
export type Labeled = { label: string; value: string };

export type PulsoDict = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; schemaDescription: string };
  nav: { status: string; portfolio: string };
  hero: {
    eyebrow: string;
    /** H1: titleLead + <span class="hl">titleHl</span> + titleTail. */
    titleLead: string;
    titleHl: string;
    titleTail: string;
    lede: string;
    meta: Labeled[];
    shotAlt: string;
  };
  problem: { kicker: string; /** HTML: admite <span class="hl">. */ titleHtml: string; sub: string };
  solution: { kicker: string; title: string; pillars: { title: string; desc: string }[] };
  product: {
    kicker: string;
    title: string;
    sub: string;
    dashboard: { alt: string; caption: string };
    inbox: { alt: string; caption: string };
  };
  tech: {
    kicker: string;
    title: string;
    sub: string;
    stack: { k: string; v: string }[];
    decisionsTitle: string;
    decisions: { title: string; desc: string }[];
  };
  status: { kicker: string; title: string; builtTitle: string; built: string[]; nextTitle: string; next: string[] };
  cta: { title: string; body: string; button: string };
  footer: { status: string; by: string };
};
