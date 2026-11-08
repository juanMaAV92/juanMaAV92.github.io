import type { Lang } from '../i18n/site';

/** Texto traducido: una entrada por idioma del sitio. */
export type Localized = Record<Lang, string>;

export type Repo = {
  /** display name (usually matches the repo name) */
  name: string;
  /** short, one-line description */
  description: Localized;
  /** repository or demo URL */
  url: string;
  /** stack tags — rendered as [tag] */
  tags: string[];
  /** optional: marks the repo as featured (highlighted) */
  featured?: boolean;
  /** optional: internal product page, as its English path (e.g. "/pdf-tool"). If set, the card opens this page (in the current language) instead of the repo. */
  page?: string;
  /** optional portfolio context shown under the repository description */
  context?: Localized;
};

export type Job = {
  /** role / title */
  role: Localized;
  /** company name */
  company: string;
  /** optional: company website — si se omite, se renderiza como texto plano */
  companyUrl?: string;
  /** period, e.g. "2023 — Present" */
  period: Localized;
  /** one line of impact — what you owned or shipped */
  summary: Localized;
  /** stack/context tags */
  tags?: string[];
};

// ─────────────────────────────────────────────────────────────
// EXPERIENCE — rellena estos datos (empresa, fechas, 1 línea de logro).
// El orden aquí es el orden en pantalla (más reciente primero).
// ─────────────────────────────────────────────────────────────
export const experience: Job[] = [
  {
    role: { en: 'Backend Engineer & Tech Lead', es: 'Backend Engineer y Tech Lead' },
    company: 'Naowee',
    companyUrl: 'https://www.naowee.com/',
    period: { en: '2025 — Present', es: '2025 — Actualidad' },
    summary: {
      en: 'Tech lead of the development team. I designed the platform architecture all projects build on, the CI/CD tooling that speeds up developer deployments, and the team’s delivery flows and processes — while staying hands-on with backend. Building social-impact initiatives for Colombian sport.',
      es: 'Tech lead del equipo de desarrollo. Diseñé la arquitectura de plataforma sobre la que se construyen todos los proyectos, el tooling de CI/CD que agiliza los deploys del equipo y los flujos y procesos de entrega, sin dejar de programar backend. Construimos iniciativas de impacto social para el deporte colombiano.',
    },
    tags: ['Go', 'Kotlin', 'AWS', 'CI/CD'],
  },
  {
    role: { en: 'Backend Developer', es: 'Backend Developer' },
    company: 'Yuno',
    companyUrl: 'https://y.uno/es',
    period: { en: '2023 — 2025', es: '2023 — 2025' },
    summary: {
      en: 'Backend developer across two payment teams. On core-payment, built payment orchestrations — Google Pay, PIX, cards — and features like installments. On checkout-payment, owned backend for the mobile SDKs: logging and event pipelines for production debugging, plus backend-driven checkout styling. Part of the payment on-call rotation for production incidents.',
      es: 'Desarrollador backend en dos equipos de pagos. En core-payment construí orquestaciones de pago (Google Pay, PIX, tarjetas) y funcionalidades como cuotas. En checkout-payment fui responsable del backend de los SDK móviles: pipelines de logs y eventos para depurar en producción, y estilos del checkout definidos desde el backend. Hice parte de la rotación on-call de pagos para incidentes en producción.',
    },
    tags: ['Go', 'Kotlin', 'Vert.x', 'Payments'],
  },
  {
    role: {
      en: 'Instrumentation Engineer — Dams & Civil Infrastructure',
      es: 'Ingeniero de instrumentación — Presas e infraestructura civil',
    },
    company: 'Celsia Energía',
    companyUrl: 'https://www.celsia.com/es/',
    period: { en: '2019 — 2023', es: '2019 — 2023' },
    summary: {
      en: 'Owned the dam-safety instrumentation & control program for hydroelectric plants — modernizing geodetic and hydroclimatological monitoring (sensors, processing and communications) and managing engineering projects end to end.',
      es: 'Responsable del programa de instrumentación y control para la seguridad de presas en centrales hidroeléctricas: modernicé el monitoreo geodésico e hidroclimatológico (sensores, procesamiento y comunicaciones) y gestioné proyectos de ingeniería de principio a fin.',
    },
    tags: ['Instrumentation', 'Data', 'Control', 'Project Mgmt'],
  },
  {
    role: {
      en: 'Automation Instructor & Research Engineer',
      es: 'Instructor de automatización e ingeniero investigador',
    },
    company: 'SENA — CEAI',
    companyUrl: 'https://www.sena.edu.co/es-co/Paginas/default.aspx',
    period: { en: '2016 — 2018', es: '2016 — 2018' },
    summary: {
      en: 'Taught industrial automation — pneumatics, hydraulics, electrical and PLC-based process control — and led applied research on PID controller-tuning methodologies for continuous process plants.',
      es: 'Enseñé automatización industrial (neumática, hidráulica, electricidad y control de procesos con PLC) y lideré investigación aplicada en metodologías de sintonización de controladores PID para plantas de proceso continuo.',
    },
    tags: ['PLC', 'Process Control', 'Research', 'Teaching'],
  },
];

// ─────────────────────────────────────────────────────────────
// PROJECTS — productos / apps que has construido.
// ─────────────────────────────────────────────────────────────
export const projects: Repo[] = [
  {
    name: 'pdf-tool',
    description: {
      en: 'Desktop app and CLI in Python + Flet. Plugin architecture, logic/UI split, pytest, automated macOS/Windows releases, published on PyPI, and a Claude Code plugin for AI agents.',
      es: 'App de escritorio y CLI en Python + Flet. Arquitectura de plugins, lógica separada de la UI, pytest, releases automáticos para macOS/Windows, publicada en PyPI y con un plugin de Claude Code para agentes de IA.',
    },
    url: 'https://github.com/juanMaAV92/pdf-tool',
    tags: ['Python', 'Flet', 'CLI', 'PyPI'],
    featured: true,
    page: '/pdf-tool',
    context: {
      en: 'Desktop app + CLI · private PDF workflows · open source',
      es: 'App de escritorio + CLI · PDFs sin salir de tu equipo · open source',
    },
  },
  {
    name: 'steer',
    description: {
      en: 'Open-source CLI + TUI that brings PaaS-like deploys to your own AWS. Deploy, scale, rollback, status and logs on ECS from a single Go binary, with guardrails built into the core.',
      es: 'CLI + TUI open source que lleva deploys tipo PaaS a tu propia cuenta de AWS. Deploy, scale, rollback, estado y logs en ECS desde un solo binario de Go, con guardrails integrados en el core.',
    },
    url: '/steer',
    tags: ['Go', 'AWS', 'CLI/TUI', 'DevOps'],
    featured: true,
    page: '/steer',
    context: {
      en: 'Dev tool · teams on AWS · alpha v0.1 released',
      es: 'Dev tool · equipos en AWS · alpha v0.1 publicada',
    },
  },
  {
    name: 'cuentas-claras',
    description: {
      en: 'Self-hosted budgeting and investments app that replaced a family spreadsheet. TypeScript monorepo: React SPA + Hono API, SQLite with rehearsed migrations, verified backups and invite-only auth with passkeys.',
      es: 'App self-hosted de presupuesto e inversiones que reemplazó un sheet familiar. Monorepo en TypeScript: SPA en React + API en Hono, SQLite con migraciones ensayadas, backups verificados y acceso solo por invitación con passkeys.',
    },
    url: '/cuentas-claras',
    tags: ['TypeScript', 'Hono', 'SQLite', 'PWA'],
    featured: true,
    page: '/cuentas-claras',
    context: {
      en: 'Product · personal & shared finances · in real use',
      es: 'Producto · finanzas personales y compartidas · en uso real',
    },
  },
  {
    name: 'mermaid-styler',
    description: {
      en: 'Local-first presentation layer for AI-generated Mermaid: paste the source, tune the visual system, and export a shareable SVG or PNG without sending the diagram away.',
      es: 'Capa de presentación local-first para diagramas Mermaid generados con IA: pega el código, ajusta el sistema visual y exporta un SVG o PNG listo para compartir, sin enviar el diagrama a ningún lado.',
    },
    url: 'https://github.com/juanMaAV92/mermaid-styler',
    tags: ['Astro', 'Mermaid', 'SVG/PNG'],
    page: '/mermaid-styler',
    context: {
      en: 'Developer tool · local-first · deployed',
      es: 'Herramienta para devs · local-first · desplegada',
    },
  },
  {
    name: 'pulso',
    description: {
      en: 'B2B SaaS MVP: an AI bot that books appointments and handles WhatsApp conversations for local service businesses. Go + Next.js, event-driven architecture.',
      es: 'MVP de SaaS B2B: un bot con IA que agenda citas y atiende conversaciones de WhatsApp para negocios de servicios locales. Go + Next.js, arquitectura orientada a eventos.',
    },
    url: '/pulso',
    tags: ['Go', 'Next.js', 'AI', 'WhatsApp'],
    page: '/pulso',
    context: {
      en: 'Product · local service businesses · MVP, paused',
      es: 'Producto · negocios de servicios locales · MVP en pausa',
    },
  },
];

// ─────────────────────────────────────────────────────────────
// OPEN SOURCE — librerías y plantillas reutilizables (repos de interés).
// ─────────────────────────────────────────────────────────────
export const libraries: Repo[] = [
  {
    name: 'go-utils',
    description: {
      en: 'Production foundation for observable Go services: structured logging, OpenTelemetry tracing, typed errors, data adapters and messaging. Interface-driven, config-from-env.',
      es: 'Base de producción para servicios Go observables: logging estructurado, tracing con OpenTelemetry, errores tipados, adaptadores de datos y mensajería. Basada en interfaces, configuración desde variables de entorno.',
    },
    url: 'https://github.com/juanMaAV92/go-utils',
    tags: ['Go', 'Library', 'Observability'],
    featured: true,
    page: '/go-utils',
    context: {
      en: 'Library · observable Go services · open source',
      es: 'Librería · servicios Go observables · open source',
    },
  },
  {
    name: 'kotlin-utils',
    description: {
      en: 'Portable Kotlin/JVM flow engine (coroutines-native): saga orchestration, structured logging, backoff retry and a validation DSL. Zero framework coupling.',
      es: 'Motor de flujos portable para Kotlin/JVM (nativo en corrutinas): orquestación de sagas, logging estructurado, reintentos con backoff y un DSL de validación. Sin acoplamiento a ningún framework.',
    },
    url: 'https://github.com/juanMaAV92/kotlin-utils',
    tags: ['Kotlin', 'Library', 'JVM'],
    featured: true,
    page: '/kotlin-utils',
    context: {
      en: 'Library · Kotlin/JVM teams · open source',
      es: 'Librería · equipos Kotlin/JVM · open source',
    },
  },
  {
    name: 'go-echo-blueprint',
    description: {
      en: 'Production-ready Echo microservice template built on go-utils — graceful shutdown, OTel tracing, health checks and identity middleware.',
      es: 'Plantilla de microservicio en Echo lista para producción, construida sobre go-utils: graceful shutdown, tracing con OTel, health checks y middleware de identidad.',
    },
    url: 'https://github.com/juanMaAV92/go-echo-blueprint',
    tags: ['Go', 'Echo', 'Template'],
  },
  {
    name: 'kotlin-quarkus-blueprint',
    description: {
      en: 'Quarkus + Kotlin microservice template with hexagonal architecture and coroutines, built on kotlin-utils.',
      es: 'Plantilla de microservicio en Quarkus + Kotlin con arquitectura hexagonal y corrutinas, construida sobre kotlin-utils.',
    },
    url: 'https://github.com/juanMaAV92/kotlin-quarkus-blueprint',
    tags: ['Kotlin', 'Quarkus', 'Hexagonal'],
  },
];

/** Tech stack — rendered as a strip of tags. */
export const stack: string[] = [
  'Go', 'Kotlin', 'Python', 'TypeScript',
  'Echo', 'Spring Boot', 'Quarkus', 'FastAPI',
  'PostgreSQL', 'MongoDB', 'Redis', 'Kafka',
  'AWS', 'Terraform', 'Docker', 'Datadog',
];

export const profile = {
  handle: 'juanMaAV92',
  name: 'Juan Manuel',
  surname: 'Armero Viveros',
  roles: {
    en: ['backend engineer', 'tech lead', 'distributed systems'],
    es: ['ingeniero backend', 'tech lead', 'sistemas distribuidos'],
  } satisfies Record<Lang, string[]>,
  blurb: {
    en: 'Backend engineer & tech lead. I design the architecture, build the microservices behind it, and lead the team that keeps them running. I build distributed, event-driven systems that hold up under real traffic. Electronic Engineer (MSc).',
    es: 'Ingeniero backend y tech lead. Diseño la arquitectura, construyo los microservicios que la sostienen y lidero al equipo que los mantiene en marcha. Construyo sistemas distribuidos y orientados a eventos que aguantan tráfico real. Ingeniero electrónico (MSc).',
  } satisfies Localized,
  /** línea de disponibilidad para la sección de contacto — edítala a tu gusto */
  availability: {
    en: 'Open to backend & tech-lead roles — and selected freelance work.',
    es: 'Abierto a roles de backend y tech lead, y a proyectos freelance puntuales.',
  } satisfies Localized,
  /** enlaces directos (perfiles públicos, no se exponen datos sensibles) */
  links: [
    { label: 'github', url: 'https://github.com/juanMaAV92' },
    { label: 'linkedin', url: 'https://www.linkedin.com/in/juanmaav92/' },
  ],
};

// ─────────────────────────────────────────────────────────────
// Web3Forms — pega aquí tu access key (gratis, sin cuenta) de https://web3forms.com
// Tu email vive solo en Web3Forms; nunca aparece en el código.
// Mientras sea el placeholder, el formulario mostrará un aviso.
// ─────────────────────────────────────────────────────────────
export const web3formsKey = 'a325c339-0529-4f78-9f68-66872f2fa405';
