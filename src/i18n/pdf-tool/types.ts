// Textos de la página de pdf-tool. Un archivo por idioma (es.ts, en.ts…):
// añadir un idioma es añadir un diccionario con esta forma.
export type Card = { icon: string; name: string; desc: string };

export type PdfToolDict = {
  /** Código del idioma (atributo lang y ruta /<code>/pdf-tool). */
  lang: string;
  /** Nombre del idioma en su propio idioma (selector). */
  languageName: string;
  meta: { title: string; description: string; ogDescription: string; schemaDescription: string };
  nav: { portfolio: string; download: string; language: string };
  hero: {
    eyebrow: string;
    /** HTML: admite <em> y <br />. */
    titleHtml: string;
    lede: string;
    downloadMac: string;
    downloadWin: string;
    help: string;
    trust: string[];
  };
  zoom: { label: string; hint: string; dialog: string; close: string };
  screenshotAlt: string;
  privacy: { title: string; /** HTML: admite <strong>. */ bodyHtml: string };
  features: { title: string; sub: string; items: Card[] };
  news: {
    title: string;
    sub: string;
    shots: { src: string; alt: string; caption: string; width: number; height: number }[];
    items: Card[];
  };
  devs: {
    title: string;
    sub: string;
    commands: { label: string; code: string }[];
    pypi: string;
    docs: string;
  };
  install: {
    title: string;
    sub: string;
    /** HTML por paso. */
    macSteps: string[];
    winSteps: string[];
    verifyHtml: string;
    cta: string;
  };
  faq: { title: string; items: { q: string; a: string }[] };
  final: { titleHtml: string; download: string; code: string };
  contact: { eyebrow: string; title: string; sub: string; cta: string };
  footer: { madeWithHtml: string; byHtml: string };
};
