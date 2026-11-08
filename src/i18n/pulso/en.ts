import type { PulsoDict } from './types';

const en: PulsoDict = {
  meta: {
    title: 'Pulso · AI appointment booking over WhatsApp — case study',
    description:
      'Case study of Pulso: a B2B SaaS that books appointments, wins back customers and handles WhatsApp conversations with an AI assistant. Go, Next.js and PostgreSQL. An MVP on hold, by Juan Manuel Armero Viveros.',
    ogTitle: 'Pulso · AI appointment booking over WhatsApp',
    ogDescription: 'B2B SaaS for local businesses: the assistant books appointments, wins back customers and chats over WhatsApp.',
    schemaDescription:
      'B2B SaaS that automates appointment booking, customer win-back and WhatsApp conversations with an AI assistant for local businesses in Colombia.',
  },
  nav: { status: '● MVP on hold', portfolio: '← Portfolio' },
  hero: {
    eyebrow: 'Case study · B2B SaaS',
    titleLead: 'Your business’s pulse, ',
    titleHl: 'always on',
    titleTail: '.',
    lede:
      'Pulso connects your business’s WhatsApp to an AI assistant that books appointments, wins back customers and handles conversations — even when you’re busy.',
    meta: [
      { label: 'Role', value: 'Design, architecture and full-stack development' },
      { label: 'Stack', value: 'Go · Next.js · PostgreSQL · AI' },
      { label: 'Status', value: 'MVP on hold' },
    ],
    shotAlt: 'Pulso inbox: the assistant books an appointment over WhatsApp',
  },
  problem: {
    kicker: 'The problem',
    titleHtml: 'Local businesses lose appointments because <span class="hl">no one can reply</span> to every message in time.',
    sub: 'A hair salon, a barbershop or a clinic gets dozens of messages a day while serving customers. Every message left unanswered can turn into an appointment — and a customer — for the competition.',
  },
  solution: {
    kicker: 'The solution',
    title: 'An assistant that never logs off',
    pillars: [
      {
        title: 'Books appointments 24/7',
        desc: 'An AI assistant chats with the customer, works out which service they need and books the appointment — in the middle of the night, on holidays or when the business is swamped.',
      },
      {
        title: 'Wins customers back',
        desc: 'Spots regulars who haven’t been back in a while and invites them again at the right moment, before they drift to the competition.',
      },
      {
        title: 'Sounds like your business',
        desc: 'The assistant takes on each business’s name, tone and personality. The owner can take over any conversation with one click.',
      },
    ],
  },
  product: {
    kicker: 'The product',
    title: 'Built for the owner, not for a techie',
    sub: 'Mobile-first design, friendly language and an inbox that feels like WhatsApp. A custom design system built on Pulso’s coral brand.',
    dashboard: {
      alt: 'Pulso dashboard with the business’s key metrics',
      caption: 'Dashboard — the business at a glance: appointments, customers, win-backs and the assistant’s success rate.',
    },
    inbox: {
      alt: 'Pulso inbox with the assistant in conversation',
      caption: 'Inbox — the assistant chats and books; the owner can step in whenever they want.',
    },
  },
  tech: {
    kicker: 'Under the hood',
    title: 'An architecture built to grow',
    sub: 'A monorepo with an independent backend and dashboard that talk over REST and WebSocket.',
    stack: [
      { k: 'Backend', v: 'Go 1.25 · Echo · REST API + worker' },
      { k: 'Jobs / queues', v: 'Asynq on Redis 7' },
      { k: 'Data', v: 'PostgreSQL 16' },
      { k: 'Frontend', v: 'Next.js 15 · Tailwind · shadcn/ui' },
      { k: 'WhatsApp', v: 'Meta Cloud API / 360dialog (BSP)' },
      { k: 'AI', v: 'Swappable LLM (Gemini · GPT-4o · Deepseek)' },
      { k: 'Authentication', v: 'Clerk' },
      { k: 'Infrastructure', v: 'DigitalOcean · Cloudflare Pages' },
    ],
    decisionsTitle: 'Engineering decisions',
    decisions: [
      {
        title: 'No double bookings, enforced by the database',
        desc: 'Appointments can’t overlap thanks to a PostgreSQL exclusion constraint: the rule lives in the engine, not in application code.',
      },
      {
        title: 'Decoupled messaging channels',
        desc: 'WhatsApp today, but the assistant’s logic doesn’t depend on it. A channel abstraction makes it possible to add Instagram or Telegram without touching the core.',
      },
      {
        title: 'Credentials encrypted at rest',
        desc: 'Each business’s WhatsApp tokens are stored encrypted, never in plain text. Authentication stays protected even if something is misconfigured.',
      },
      {
        title: 'LLM swappable through configuration',
        desc: 'The AI provider changes with a single environment variable. No vendor lock-in: I can tune cost and quality without rewriting the system.',
      },
    ],
  },
  status: {
    kicker: 'Current status',
    title: 'MVP on hold — and honest about it',
    builtTitle: '✓ Already built',
    built: [
      'REST API and job worker in Go',
      'Multi-tenant authentication with Clerk',
      'WhatsApp Business connection (onboarding)',
      'Double-booking prevention in the database',
      'Credentials encrypted at rest',
      'Web dashboard with the full design system',
    ],
    nextTitle: '→ Still to do',
    next: ['AI conversation engine', 'Automatic customer win-back', 'Real-time inbox (WebSocket)', 'Business metrics and reports'],
  },
  cta: {
    title: 'An exploration of product design and event-driven architecture.',
    body: 'If my work interests you or you’d like to talk about a project, let’s chat.',
    button: 'Let’s talk →',
  },
  footer: { status: 'Pulso · MVP on hold', by: 'By' },
};

export default en;
