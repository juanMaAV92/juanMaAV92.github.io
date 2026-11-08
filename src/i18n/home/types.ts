// Textos de la home. Los datos de experiencia, proyectos y perfil viven en src/data/repos.ts
// (ya traducidos); aquí va todo lo demás: meta, botones, secciones y formulario.
export type HomeDict = {
  meta: {
    /** Se antepone el nombre completo: "<nombre> · <titleSuffix>". */
    titleSuffix: string;
    jobTitle: string;
  };
  hero: {
    ctaWork: string;
    ctaTalk: string;
    sendMessage: string;
    contactLinksLabel: string;
    stackLabel: string;
  };
  sections: { experience: string; projects: string; openSource: string; contact: string };
  form: {
    prompt: string;
    subject: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    retry: string;
    /** Mensajes de estado que muestra el script del formulario. */
    status: {
      notConfigured: string;
      sending: string;
      sent: string;
      failed: string;
      network: string;
    };
  };
};
