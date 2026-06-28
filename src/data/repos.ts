export type Repo = {
  /** display name (usually matches the repo name) */
  name: string;
  /** short, one-line description */
  description: string;
  /** repository or demo URL */
  url: string;
  /** stack tags — rendered as [tag] */
  tags: string[];
  /** optional: marks the repo as featured (highlighted) */
  featured?: boolean;
  /** optional: internal product page (e.g. "/pdf-tool"). If set, the card opens this page instead of the repo. */
  page?: string;
};

export type Job = {
  /** role / title */
  role: string;
  /** company name */
  company: string;
  /** optional: company website — si se omite, se renderiza como texto plano */
  companyUrl?: string;
  /** period, e.g. "2023 — Present" */
  period: string;
  /** one line of impact — what you owned or shipped */
  summary: string;
  /** stack/context tags */
  tags?: string[];
};

// ─────────────────────────────────────────────────────────────
// EXPERIENCE — rellena estos datos (empresa, fechas, 1 línea de logro).
// El orden aquí es el orden en pantalla (más reciente primero).
// ─────────────────────────────────────────────────────────────
export const experience: Job[] = [
  {
    role: 'Backend Engineer & Tech Lead',
    company: 'Naowee',
    companyUrl: 'https://www.naowee.com/',
    period: '2025 — Present',
    summary:
      'Tech lead of the development team. I designed the platform architecture all projects build on, the CI/CD tooling that speeds up developer deployments, and the team’s delivery flows and processes — while staying hands-on with backend. Building social-impact initiatives for Colombian sport.',
    tags: ['Go', 'Kotlin', 'AWS', 'CI/CD'],
  },
  {
    role: 'Backend Developer',
    company: 'Yuno',
    companyUrl: 'https://y.uno/es',
    period: '2023 — 2025',
    summary:
      'Backend developer across two payment teams. On core-payment, built payment orchestrations — Google Pay, PIX, cards — and features like installments. On checkout-payment, owned backend for the mobile SDKs: logging and event pipelines for production debugging, plus backend-driven checkout styling. Part of the payment on-call rotation for production incidents.',
    tags: ['Go', 'Kotlin', 'Vert.x', 'Payments'],
  },
  {
    role: 'Instrumentation Engineer — Dams & Civil Infrastructure',
    company: 'Celsia Energía',
    companyUrl: 'https://www.celsia.com/es/',
    period: '2019 — 2023',
    summary:
      'Owned the dam-safety instrumentation & control program for hydroelectric plants — modernizing geodetic and hydroclimatological monitoring (sensors, processing and communications) and managing engineering projects end to end.',
    tags: ['Instrumentation', 'Data', 'Control', 'Project Mgmt'],
  },
  {
    role: 'Automation Instructor & Research Engineer',
    company: 'SENA — CEAI',
    companyUrl: 'https://www.sena.edu.co/es-co/Paginas/default.aspx',
    period: '2016 — 2018',
    summary:
      'Taught industrial automation — pneumatics, hydraulics, electrical and PLC-based process control — and led applied research on PID controller-tuning methodologies for continuous process plants.',
    tags: ['PLC', 'Process Control', 'Research', 'Teaching'],
  },
];

// ─────────────────────────────────────────────────────────────
// PROJECTS — productos / apps que has construido.
// ─────────────────────────────────────────────────────────────
export const projects: Repo[] = [
  {
    name: 'pulso',
    description:
      'B2B SaaS (in progress): an AI bot books appointments, re-engages customers and handles WhatsApp conversations for local service businesses. Go + Next.js, event-driven architecture.',
    url: '/pulso',
    tags: ['Go', 'Next.js', 'AI', 'WhatsApp'],
    featured: true,
    page: '/pulso',
  },
  {
    name: 'pdf-tool',
    description:
      'Desktop app in Python + Flet. Plugin architecture, logic/UI split, pytest, and automated macOS/Windows releases.',
    url: 'https://github.com/juanMaAV92/pdf-tool',
    tags: ['Python', 'Flet', 'Desktop'],
    featured: true,
    page: '/pdf-tool',
  },
];

// ─────────────────────────────────────────────────────────────
// OPEN SOURCE — librerías y plantillas reutilizables (repos de interés).
// ─────────────────────────────────────────────────────────────
export const libraries: Repo[] = [
  {
    name: 'go-utils',
    description:
      'Reusable foundation for microservices in Go. Observability-first, port/interface-driven, fully tested with CI.',
    url: 'https://github.com/juanMaAV92/go-utils',
    tags: ['Go', 'Library', 'Observability'],
    featured: true,
  },
  {
    name: 'kotlin-utils',
    description: 'The same foundation, in Kotlin. Shared building blocks for services on the JVM.',
    url: 'https://github.com/juanMaAV92/kotlin-utils',
    tags: ['Kotlin', 'Library', 'JVM'],
    featured: true,
  },
  {
    name: 'go-echo-blueprint',
    description: 'Production-ready Go service template built on Echo.',
    url: 'https://github.com/juanMaAV92/go-echo-blueprint',
    tags: ['Go', 'Echo', 'Template'],
  },
  {
    name: 'kotlin-quarkus-blueprint',
    description: 'Service template with Quarkus and hexagonal architecture.',
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
  roles: ['backend engineer', 'tech lead', 'distributed systems'],
  blurb:
    'Backend engineer & tech lead. I design the architecture, build the microservices behind it, and lead the team that keeps them running. I build distributed, event-driven systems that hold up under real traffic. Electronic Engineer (MSc).',
  /** línea de disponibilidad para la sección de contacto — edítala a tu gusto */
  availability: 'Open to backend & tech-lead roles — and selected freelance work.',
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
