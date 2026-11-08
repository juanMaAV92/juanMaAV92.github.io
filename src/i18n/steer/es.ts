import type { SteerDict } from './types';

const es: SteerDict = {
  meta: {
    title: 'Steer · La simplicidad de un PaaS, en tu propio AWS · caso de estudio',
    description:
      'Caso de estudio de Steer: una CLI + TUI open source en Go que lleva los deploys estilo PaaS a tu propia cuenta de AWS. Guardrails, deploys interactivos, un solo binario. Alpha v0.1 publicada, por Juan Manuel Armero Viveros.',
    ogTitle: 'Steer · La simplicidad de un PaaS, en tu propio AWS',
    ogDescription: 'CLI + TUI open source en Go para hacer deploys sin miedo en la nube que ya tienes. Caso de estudio.',
    twitterDescription: 'CLI + TUI open source en Go para hacer deploys sin miedo en la nube que ya tienes.',
  },
  nav: { status: '● Alpha · v0.1.1', docs: 'Docs', github: 'GitHub ↗', portfolio: '← Portafolio' },
  hero: {
    eyebrow: 'Herramienta open source para devs · CLI + TUI',
    titleLine1: 'La simplicidad de un PaaS,',
    titleHl: 'en tu propio AWS',
    titleEnd: '.',
    lede:
      'Plataformas como Vercel y Railway hicieron que publicar fuera fácil, pero te amarran. Steer trae esa misma sensación de “súbelo y ya” a la cuenta de AWS que ya tienes. Lo configuras una vez y desde ahí cualquiera del equipo hace deploy sin tocar la consola.',
    ctaGithub: 'Ver en GitHub ↗',
    ctaDocs: 'Leer la documentación →',
    ctaHow: 'Mira cómo funciona ↓',
    termLabel: 'Vista previa de la TUI de Steer',
  },
  how: {
    kicker: 'Dos caras, un mismo timón',
    title: 'Scriptable para el lead, amigable para el equipo',
    cliTitle: 'CLI: para pipelines y para el lead',
    cliComment: '# scriptable, lista para CI, sin preguntas',
    cliBody: 'De primera clase en CI. Cada acción está a un flag de distancia, es determinista y segura de automatizar.',
    tuiTitle: 'TUI: para todos los demás',
    tuiComment1: '# corre un comando sin argumentos →',
    tuiComment2: '# se abre un selector interactivo',
    tuiBody:
      'Un dashboard persistente con selectores interactivos y cambio de contexto dentro de la TUI. Haz deploy sin conocer la consola de AWS que hay debajo.',
  },
  highlights: {
    kicker: 'Qué hace',
    title: 'Quita el miedo, no el control',
    items: [
      { icon: '🛡️', title: 'Guardrails por defecto', desc: 'Producción en solo lectura, confirmaciones y una vista previa de lo que va a pasar antes de que pase. El rollback es un solo comando, así que es difícil hacer daño por accidente.' },
      { icon: '🚀', title: 'Deploys interactivos', desc: 'Elige servicios y tags de imagen en listas en vivo con búsqueda difusa. El selector de tags lee tu registry y cada deploy se valida contra él antes de correr. Los rollouts atascados se detectan, no se esperan para siempre.' },
      { icon: '📊', title: 'TUI híbrida', desc: 'La salud de todo de un vistazo, en un layout persistente de varios paneles. Se maneja con teclado, también con mouse, y trae pestañas de Events y Logs en vivo por servicio. Cambia de cuenta o de entorno sin salir de la TUI. Inspirada en lazydocker / lazygit.' },
      { icon: '💬', title: 'Errores que enseñan', desc: 'Cuando algo falla, te explica qué pasó, por qué y qué probar después, en lugar de soltarte un stack trace crudo de la nube.' },
      { icon: '⚙️', title: 'Guiada por configuración', desc: 'Un asistente interactivo (steer config init) detecta tus perfiles de AWS, lista tus clusters reales y escribe steer.toml por ti. Varias cuentas o entornos son simplemente varios contextos.' },
      { icon: '📦', title: 'Un solo binario', desc: 'Se instala con Homebrew, go install o descarga directa. Un binario estático de Go, sin runtime que administrar.' },
    ],
  },
  who: {
    kicker: 'Para quién es',
    title: 'Una persona se encarga de la nube. Los demás solo hacen deploy.',
    leadTag: 'El lead',
    leadHtml: 'Configura <code>steer.toml</code> una sola vez: cuentas, role ARNs, entornos y convenciones de nombres.',
    teamTag: 'El equipo',
    teamHtml: 'Hace deploy, escala y revisa el estado con comandos simples y la TUI, <strong>sin entender la consola de AWS que hay debajo</strong>.',
    honest:
      'Alcance honesto: a un dev que trabaja solo y no tiene quién haga la configuración inicial le sirve más un PaaS administrado. Steer brilla cuando alguien es dueño del setup de AWS y le entrega al equipo una forma segura y simple de hacer deploy encima.',
  },
  tech: {
    kicker: 'Por dentro',
    title: 'Hecho para AWS hoy',
    note: 'El core deja espacio para futuros adaptadores de nube, sin fingir que ya están listos.',
    stack: [
      { k: 'Lenguaje', v: 'Go, un solo binario estático' },
      { k: 'TUI', v: 'Bubble Tea · Lipgloss · Bubbles' },
      { k: 'Nube', v: 'AWS SDK (ECS), core organizado por capacidades' },
      { k: 'Config', v: 'TOML: cuentas, roles, entornos, nombres' },
      { k: 'Release', v: 'GoReleaser · Homebrew · descarga directa' },
      { k: 'Calidad', v: 'TDD por componente, renders deterministas' },
      { k: 'Infra de referencia', v: 'keel-infra: módulos de Terraform (VPC, ECR, ECS, ALB, servicio)' },
    ],
    decisionsTitle: 'Decisiones de ingeniería',
    decisions: [
      { title: 'AWS primero, a propósito', desc: 'Steer está hecho para AWS hoy. Los comandos se nombran por capacidad (deploy, scale, rollback), no por servicios puntuales de AWS, así que se pueden agregar adaptadores sin reescribir el flujo. El multi-cloud es un siguiente paso deliberado, todavía no una funcionalidad soportada.' },
      { title: 'TUI compuesta, no un monolito', desc: 'La UI en Bubble Tea está dividida en componentes de una sola responsabilidad (sidebar, pestañas del panel, overlay de acciones, keymap, estilos). Cada uno renderiza a un string determinista, así que se puede probar con tests unitarios sin una terminal real.' },
      { title: 'Dos caras, un solo core', desc: 'La TUI y la CLI comparten el mismo core de dominio. El lead automatiza los deploys en CI (steer --context stg service deploy -s api -t v1.2.3 -y); el equipo usa la TUI interactiva. Ningún camino duplica la lógica.' },
      { title: 'La seguridad es estructural', desc: 'Producción es de solo lectura a menos que se marque como escribible; las acciones destructivas piden confirmación y muestran una vista previa. Los guardrails viven en el core, así que la CLI y la TUI los heredan.' },
    ],
  },
  cta: {
    title: 'Alpha, publicada y usable hoy.',
    body: 'La vertical de servicios (deploy, scale, rollback, status, logs, events) sale en la v0.1. Registry, bases de datos y más capacidades siguen en el roadmap público. Es open source: échale un ojo o escríbeme si quieres conversar.',
    github: 'Ver en GitHub ↗',
    contact: 'Hablemos →',
  },
  foot: { line: 'Steer · open source (MIT) · alpha v0.1', by: 'Por' },
  docs: {
    titleSuffix: 'docs de steer',
    github: 'GitHub ↗',
    projectPage: '← Página del proyecto',
    sideAria: 'Páginas de la documentación',
    sideTitle: 'documentación',
    sideBack: '← página del proyecto',
    kicker: 'docs de steer',
    pagerAria: 'Página anterior y siguiente',
    tocAria: 'En esta página',
    tocTitle: '# en esta página',
    foot: 'Steer · open source (MIT)',
    by: 'Por',
  },
};

export default es;
