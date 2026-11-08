// Textos de la página de Steer y de la interfaz de sus docs. Un archivo por idioma (en.ts, es.ts).
// El contenido de las docs vive en las colecciones `steer-docs` (en) y `steer-docs-es` (es).
export type SteerCard = { icon: string; title: string; desc: string };

export type SteerDict = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterDescription: string;
  };
  nav: { status: string; docs: string; github: string; portfolio: string };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleHl: string;
    titleEnd: string;
    lede: string;
    ctaGithub: string;
    ctaDocs: string;
    ctaHow: string;
    termLabel: string;
  };
  how: {
    kicker: string;
    title: string;
    cliTitle: string;
    cliComment: string;
    cliBody: string;
    tuiTitle: string;
    tuiComment1: string;
    tuiComment2: string;
    tuiBody: string;
  };
  highlights: { kicker: string; title: string; items: SteerCard[] };
  who: {
    kicker: string;
    title: string;
    leadTag: string;
    /** HTML: admite <code>. */
    leadHtml: string;
    teamTag: string;
    /** HTML: admite <strong>. */
    teamHtml: string;
    honest: string;
  };
  tech: {
    kicker: string;
    title: string;
    note: string;
    stack: { k: string; v: string }[];
    decisionsTitle: string;
    decisions: { title: string; desc: string }[];
  };
  cta: { title: string; body: string; github: string; contact: string };
  foot: { line: string; by: string };
  /** Interfaz del layout de las docs (/steer/docs). */
  docs: {
    titleSuffix: string;
    github: string;
    projectPage: string;
    sideAria: string;
    sideTitle: string;
    sideBack: string;
    kicker: string;
    pagerAria: string;
    tocAria: string;
    tocTitle: string;
    foot: string;
    by: string;
  };
};
