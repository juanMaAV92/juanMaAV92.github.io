// Textos de la página de Cuentas Claras. Un archivo por idioma (en.ts, es.ts) con esta forma.
// Las capturas (src, tamaños) viven en el componente; aquí van sus textos en el mismo orden.
export type Slide = { tab: string; alt: string; title: string; caption: string };
export type Phone = { alt: string; caption: string };
export type Labeled = { label: string; value: string };

export type CuentasClarasDict = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; schemaDescription: string };
  nav: { status: string; portfolio: string };
  hero: {
    eyebrow: string;
    titleLead: string;
    /** Parte en cursiva del H1. */
    titleEm: string;
    tagline: string;
    lede: string;
    meta: Labeled[];
  };
  showcase: { alt: string; note: string };
  zoom: {
    /** aria-label de la captura principal. */
    label: string;
    /** Prefijo del aria-label de cada captura: "Ampliar captura: …". */
    labelPrefix: string;
    hint: string;
    hintFull: string;
  };
  problem: { kicker: string; /** HTML: admite <em>. */ titleHtml: string; sub: string };
  tour: {
    kicker: string;
    title: string;
    sub: string;
    carouselRole: string;
    carouselLabel: string;
    tabsLabel: string;
    prev: string;
    next: string;
    trackLabel: string;
    slideRole: string;
    /** aria-label de cada diapositiva, p. ej. "1 de 5: El mes". */
    slideLabel: (n: number, total: number, tab: string) => string;
    slides: Slide[];
    phones: Phone[];
  };
  inside: { kicker: string; title: string; sub: string; decisions: { title: string; desc: string }[] };
  closing: {
    builtTitle: string;
    built: string[];
    nextTitle: string;
    next: string[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  footer: { brand: string; by: string };
  lightbox: { label: string; close: string; prev: string; next: string };
};
