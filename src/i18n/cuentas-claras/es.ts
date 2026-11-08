import type { CuentasClarasDict } from './types';

const es: CuentasClarasDict = {
  meta: {
    title: 'Cuentas Claras · Presupuesto compartido e inversiones (caso de estudio)',
    description:
      'Caso de estudio de Cuentas Claras: app self-hosted de presupuesto personal y compartido e inversiones que reemplazó un Google Sheet. TypeScript, Hono, SQLite y PWA. Proyecto de Juan Manuel Armero Viveros.',
    ogTitle: 'Cuentas Claras · Presupuesto compartido e inversiones',
    ogDescription: 'Planear el mes en pareja, ver el margen y seguir el patrimonio. App self-hosted en uso real.',
    schemaDescription:
      'App self-hosted para planificar gastos personales y compartidos, seguir su ejecución durante el mes e inversiones, con evolución del patrimonio.',
  },
  nav: { status: '● En uso', portfolio: '← Portafolio' },
  hero: {
    eyebrow: 'Caso de estudio · producto self-hosted',
    titleLead: 'Las cuentas claras',
    titleEm: 'y el chocolate espeso.',
    tagline: 'Planear el mes en pareja, sin un sheet de por medio.',
    lede:
      'Reemplazó el Google Sheet con el que planeábamos el presupuesto familiar. Reparte lo que entra cada mes, muestra quién paga qué y cuánto margen queda y, como segunda capa, sigue inversiones y patrimonio.',
    meta: [
      { label: 'Rol', value: 'Producto, diseño, desarrollo y operación' },
      { label: 'Stack', value: 'TypeScript · React · Hono · SQLite' },
      { label: 'Estado', value: 'En uso real · repo privado' },
    ],
  },
  showcase: {
    alt: 'Inicio de Cuentas Claras: cuánto queda libre en el mes, por persona y por grupo',
    note: 'Capturas de una instancia local con datos ficticios.',
  },
  zoom: { label: 'Ampliar captura', labelPrefix: 'Ampliar captura: ', hint: 'Ampliar ⤢', hintFull: 'Ver completa ⤢' },
  problem: {
    kicker: 'El problema',
    titleHtml: 'Un sheet sirve para <em>anotar</em> lo que pasó. Lo difícil es <em>decidir</em> qué va a pasar.',
    sub: 'Cada mes había que copiar la hoja, arreglar fórmulas a mano y adivinar quién ya había pagado qué. Funcionaba mientras nadie rompiera una fórmula.',
  },
  tour: {
    kicker: 'Recorrido',
    title: 'Del plan del mes al patrimonio',
    sub: 'Ana y Luis, un presupuesto compartido, una abuela que participa sin cuenta y tres meses de historia.',
    carouselRole: 'carrusel',
    carouselLabel: 'Pantallas de Cuentas Claras',
    tabsLabel: 'Elegir pantalla',
    prev: 'Pantalla anterior',
    next: 'Pantalla siguiente',
    trackLabel: 'Capturas, usa las flechas para cambiar',
    slideRole: 'diapositiva',
    slideLabel: (n, total, tab) => `${n} de ${total}: ${tab}`,
    slides: [
      {
        tab: 'El mes',
        alt: 'Vista del mes con gastos por grupo, pagados, pendientes en ámbar y un sobregasto en rojo',
        title: 'Planear antes de registrar',
        caption:
          'Primero se reparte lo que entra; después se marcan los pagos. Lo pendiente va en ámbar y el rojo solo aparece con un sobregasto real. Cada gasto tiene responsable, incluso una abuela que no usa la app.',
      },
      {
        tab: 'Inversiones',
        alt: 'Inversiones: composición por tipo de activo y posiciones valoradas en COP',
        title: 'El patrimonio como segunda capa',
        caption: 'CDT, ETF, cripto y divisas valorados en COP con la TRM, cada uno con su proveedor de precio declarado.',
      },
      {
        tab: 'Evolución',
        alt: 'Evolución del patrimonio mes a mes, por tipo de activo',
        title: 'Mes a mes, sin copiar precios',
        caption: 'Snapshots mensuales del patrimonio por tipo de activo, con aportes y retiros separados del rendimiento.',
      },
      {
        tab: 'Créditos',
        alt: 'Simulador de crédito hipotecario con cuota, intereses y seguros',
        title: 'Simular antes de endeudarse',
        caption: 'Cuota, intereses y seguros con los supuestos a la vista, y abonos a capital para comparar escenarios.',
      },
      {
        tab: 'Primer mes',
        alt: 'Guía de cuatro pasos para preparar el primer mes de un presupuesto nuevo',
        title: 'Una guía que no estorba',
        caption: 'Onboarding contextual de cuatro pasos para el primer presupuesto, sin bloquear el resto de la app.',
      },
    ],
    phones: [
      { alt: 'Inicio en el celular', caption: 'PWA instalable: el uso diario es desde el celular.' },
      { alt: 'Vista del mes en el celular', caption: 'Marcar un pago es un toque.' },
    ],
  },
  inside: {
    kicker: 'Por dentro',
    title: 'Pequeña en usuarios, seria en ingeniería',
    sub: 'La usan dos personas, pero maneja dinero real: un SPA y una API en un solo contenedor, operados como producción.',
    decisions: [
      {
        title: 'Cero lógica de negocio en el front',
        desc: 'Prorrateos, valoraciones y cierres de mes viven en la API. El front solo pinta, con un contrato tipado de punta a punta (Hono RPC).',
      },
      {
        title: 'Sin fallback silencioso entre precios',
        desc: 'Cada activo tiene un proveedor fijo. Si falla, muestro el último precio marcado como viejo antes que mezclar fuentes sin avisar.',
      },
      {
        title: 'Solo se entra por invitación',
        desc: 'Registro cerrado: tokens de un solo uso, hasheados, que vencen en 7 días. Cualquier token inválido responde el mismo 404.',
      },
    ],
  },
  closing: {
    builtTitle: 'Ya en uso',
    built: ['Presupuesto personal y compartido', 'Inversiones y evolución del patrimonio', 'Simulador de créditos', 'Invitaciones, roles y passkeys'],
    nextTitle: 'Siguiente',
    next: ['Suscripciones y su costo anual real', 'Seguimiento de un crédito ya adquirido', 'Activos físicos: vivienda y carro'],
    ctaTitle: 'Software que uso todos los meses, construido como si fuera para muchos.',
    ctaBody:
      'El repositorio es privado porque contiene la operación de un producto en uso. Si quieres ver el código o hablar de cómo lo construí, conversemos.',
    ctaButton: 'Hablemos →',
  },
  footer: { brand: 'Cuentas Claras · self-hosted · en uso', by: 'By' },
  lightbox: { label: 'Captura ampliada', close: 'Cerrar', prev: 'Captura anterior', next: 'Captura siguiente' },
};

export default es;
