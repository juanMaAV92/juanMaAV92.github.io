// Textos de la página de kotlin-utils. Un diccionario por idioma (en.ts, es.ts).
// Los campos `*Html` admiten HTML inline (<code>, <em>, <a>); el código y los identificadores no se traducen.
export type ModuleText = {
  /** Nombre visible del módulo (el id del ancla es fijo en el componente). */
  title: string;
  tag: string;
  descHtml: string;
};

export type KotlinUtilsDict = {
  meta: { title: string; description: string };
  nav: { portfolio: string; github: string };
  toc: {
    ariaLabel: string;
    title: string;
    back: string;
    labels: {
      overview: string;
      principles: string;
      install: string;
      modules: string;
      flowEngine: string;
      logger: string;
      exception: string;
      retry: string;
      validation: string;
      context: string;
      compatibility: string;
    };
  };
  hero: {
    prompt: string;
    /** HTML: admite <em>. */
    ledeHtml: string;
    badgesLabel: string;
    github: string;
    browse: string;
    blueprint: string;
  };
  anchorLabel: string;
  principles: { title: string; bodyHtml: string }[];
  install: { introHtml: string; footHtml: string };
  modules: {
    flowEngine: ModuleText & { feats: string[] };
    logger: ModuleText & { outLabel: string };
    exception: ModuleText & { shapeLabelHtml: string; handlerLabel: string };
    retry: ModuleText;
    validation: ModuleText;
    context: ModuleText;
  };
  compat: { ktor: string; quarkusHtml: string; springHtml: string; composeHtml: string; cliHtml: string; cliLabel: string };
  footer: string;
};
