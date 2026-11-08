import type { PulsoDict } from './types';

const es: PulsoDict = {
  meta: {
    title: 'Pulso · Agenda citas por WhatsApp con IA — caso de estudio',
    description:
      'Caso de estudio de Pulso: un SaaS B2B que agenda citas, recupera clientes y gestiona conversaciones de WhatsApp con un asistente de IA. Go, Next.js y PostgreSQL. MVP en pausa, de Juan Manuel Armero Viveros.',
    ogTitle: 'Pulso · Agenda citas por WhatsApp con IA',
    ogDescription: 'SaaS B2B para negocios locales: el asistente agenda, recupera clientes y conversa por WhatsApp.',
    schemaDescription:
      'SaaS B2B que automatiza la agenda de citas, la recuperación de clientes y las conversaciones de WhatsApp con un asistente de IA para negocios locales en Colombia.',
  },
  nav: { status: '● MVP en pausa', portfolio: '← Portafolio' },
  hero: {
    eyebrow: 'Caso de estudio · SaaS B2B',
    titleLead: 'El pulso de tu negocio, ',
    titleHl: 'siempre atento',
    titleTail: '.',
    lede:
      'Pulso conecta el WhatsApp de tu negocio con un asistente de IA que agenda citas, recupera clientes y atiende conversaciones — incluso cuando estás ocupado.',
    meta: [
      { label: 'Rol', value: 'Diseño, arquitectura y desarrollo full-stack' },
      { label: 'Stack', value: 'Go · Next.js · PostgreSQL · IA' },
      { label: 'Estado', value: 'MVP en pausa' },
    ],
    shotAlt: 'Bandeja de Pulso: el asistente agenda una cita por WhatsApp',
  },
  problem: {
    kicker: 'El problema',
    titleHtml: 'Los negocios locales pierden citas porque <span class="hl">nadie puede responder</span> a tiempo todos los mensajes.',
    sub: 'Una peluquería, una barbería o un consultorio reciben decenas de mensajes al día mientras atienden a sus clientes. Cada mensaje sin respuesta a tiempo puede convertirse en una cita — y un cliente — para la competencia.',
  },
  solution: {
    kicker: 'La solución',
    title: 'Un asistente que nunca se desconecta',
    pillars: [
      {
        title: 'Agenda citas 24/7',
        desc: 'Un asistente de IA conversa con el cliente, entiende qué servicio necesita y agenda la cita — de madrugada, en festivos o cuando el negocio está ocupado.',
      },
      {
        title: 'Recupera clientes',
        desc: 'Detecta clientes habituales que llevan un tiempo sin volver y los invita de nuevo en el momento adecuado, antes de que se vayan con la competencia.',
      },
      {
        title: 'Habla como tu negocio',
        desc: 'El asistente adopta el nombre, tono y personalidad de cada negocio. El dueño puede tomar el control de cualquier conversación con un clic.',
      },
    ],
  },
  product: {
    kicker: 'El producto',
    title: 'Hecho para el dueño, no para un técnico',
    sub: 'Diseño mobile-first, lenguaje cercano y una bandeja que se siente como WhatsApp. Un sistema de diseño propio sobre la marca coral de Pulso.',
    dashboard: {
      alt: 'Panel de Pulso con los indicadores del negocio',
      caption: 'Panel — el negocio de un vistazo: citas, clientes, recuperaciones y tasa de éxito del asistente.',
    },
    inbox: {
      alt: 'Bandeja de Pulso con el asistente conversando',
      caption: 'Bandeja — el asistente conversa y agenda; el dueño puede tomar el control cuando quiera.',
    },
  },
  tech: {
    kicker: 'Por dentro',
    title: 'Arquitectura preparada para crecer',
    sub: 'Un monorepo con backend y panel independientes que se comunican por REST y WebSocket.',
    stack: [
      { k: 'Backend', v: 'Go 1.25 · Echo · API REST + worker' },
      { k: 'Trabajos / colas', v: 'Asynq sobre Redis 7' },
      { k: 'Datos', v: 'PostgreSQL 16' },
      { k: 'Frontend', v: 'Next.js 15 · Tailwind · shadcn/ui' },
      { k: 'WhatsApp', v: 'Meta Cloud API / 360dialog (BSP)' },
      { k: 'IA', v: 'LLM intercambiable (Gemini · GPT-4o · Deepseek)' },
      { k: 'Autenticación', v: 'Clerk' },
      { k: 'Infraestructura', v: 'DigitalOcean · Cloudflare Pages' },
    ],
    decisionsTitle: 'Decisiones de ingeniería',
    decisions: [
      {
        title: 'Sin citas solapadas, garantizado por la base de datos',
        desc: 'Las citas no pueden solaparse gracias a una restricción de exclusión de PostgreSQL: la regla vive en el motor, no en el código de la aplicación.',
      },
      {
        title: 'Canales de mensajería desacoplados',
        desc: 'WhatsApp hoy, pero la lógica del asistente no depende de WhatsApp. Una abstracción de canales permite añadir Instagram o Telegram sin tocar el núcleo.',
      },
      {
        title: 'Credenciales cifradas en reposo',
        desc: 'Los tokens de WhatsApp de cada negocio se almacenan cifrados, nunca en texto plano. La autenticación permanece protegida incluso ante una mala configuración.',
      },
      {
        title: 'LLM intercambiable por configuración',
        desc: 'El proveedor de IA cambia con una sola variable de entorno. Sin dependencia de un único proveedor: puedo ajustar coste y calidad sin reescribir el sistema.',
      },
    ],
  },
  status: {
    kicker: 'Estado actual',
    title: 'MVP en pausa, y con honestidad',
    builtTitle: '✓ Ya construido',
    built: [
      'API REST y worker de trabajos en Go',
      'Autenticación multi-tenant con Clerk',
      'Conexión con WhatsApp Business (onboarding)',
      'Prevención de citas solapadas en la base de datos',
      'Credenciales cifradas en reposo',
      'Panel web con el sistema de diseño completo',
    ],
    nextTitle: '→ Pendiente',
    next: ['Motor conversacional de IA', 'Recuperación automática de clientes', 'Bandeja en tiempo real (WebSocket)', 'Métricas y reportes del negocio'],
  },
  cta: {
    title: 'Una exploración de producto y arquitectura event-driven.',
    body: 'Si te interesa lo que hago o quieres hablar de un proyecto, conversemos.',
    button: 'Hablemos →',
  },
  footer: { status: 'Pulso · MVP en pausa', by: 'By' },
};

export default es;
