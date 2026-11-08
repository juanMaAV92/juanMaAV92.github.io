// Textos de la página de go-utils. Un archivo por idioma (en.ts, es.ts).
// Los snippets de código no viven aquí: no se traducen.

/** Id de cada paquete: coincide con el ancla de la sección (no traducir). */
export type ModId = 'logger' | 'errors' | 'httpclient' | 'jwt' | 'data-stores' | 'messaging' | 'identity' | 'core';

export type Mod = {
  /** Título visible tras el ▸ (nombre del paquete o del grupo). */
  title: string;
  tag: string;
  /** HTML: admite <code> y <em>. */
  descHtml: string;
  /** HTML por ítem. */
  feats?: string[];
};

export type GoUtilsDict = {
  meta: { title: string; description: string };
  topbar: { portfolio: string };
  toc: {
    ariaLabel: string;
    title: string;
    back: string;
    overview: string;
    principles: string;
    install: string;
    packages: string;
    ecosystem: string;
    mods: Record<ModId, string>;
  };
  anchorLabel: string;
  hero: {
    prompt: string;
    /** HTML: admite <em>. */
    ledeHtml: string;
    badgesLabel: string;
    chipSignal: string;
    viewGithub: string;
    browsePackages: string;
    blueprint: string;
  };
  principles: { title: string; bodyHtml: string }[];
  install: { footHtml: string };
  packages: { count: string; outputLabel: string; mods: Record<ModId, Mod> };
  ecosystem: {
    /** noteHtml admite `{blueprint}`, que se reemplaza por el enlace al repo del blueprint. */
    rows: { label: string; noteHtml: string }[];
  };
  footer: { line: string };
};
