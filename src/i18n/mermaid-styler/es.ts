import type { MermaidStylerDict } from './types';

const es: MermaidStylerDict = {
  meta: {
    title: 'Mermaid Styler · Dale estilo a Mermaid. Exporta la imagen.',
    description: 'Herramienta local-first para convertir el Mermaid que te genera una IA en un SVG o PNG con estilo, listo para compartir.',
    ogTitle: 'Mermaid Styler · Dale estilo a Mermaid. Exporta la imagen.',
    ogDescription: 'Pega tu Mermaid, ajusta el estilo visual y exporta un SVG o PNG para compartir. Local-first y en el navegador.',
    schemaDescription:
      'Capa de presentación local-first para diagramas Mermaid generados con IA. Dales estilo y expórtalos en SVG o PNG sin enviar el código a ningún servicio remoto.',
  },
  nav: { homeLabel: 'Inicio de Mermaid Styler', navLabel: 'Navegación del proyecto', openApp: 'Abrir app ↗', portfolio: '← Portafolio' },
  hero: {
    kicker: 'Estilos para Mermaid · local-first',
    titleLead: 'Dale estilo a Mermaid.',
    titleEm: 'Exporta la imagen.',
    lede: 'Pega el Mermaid que te dio una IA, ajusta colores y tipografía, y descarga un SVG o PNG bien presentado para Jira, la documentación o tu próximo pull request.',
    ctaPrimary: 'Abrir la app',
    ctaSecondary: 'Mira qué hace',
    note: 'Se renderiza en tu navegador · sin subir el código · SVG + PNG',
  },
  video: {
    label: 'Demo: se pega un flowchart de Mermaid, se cambia de preset, se ajusta el tamaño del texto y se exporta un PNG',
    pause: 'Pausar demo',
    play: 'Reproducir demo',
    caption: 'La app real: pega, ajusta, exporta.',
  },
  workflow: {
    label: 'Cómo funciona',
    title: 'Un camino directo de Mermaid a una imagen para compartir.',
    intro: 'Usa el código que ya tienes. Mermaid Styler le da un estilo visual sin que tengas que aprender a configurar temas.',
    steps: [
      { number: '01', title: 'Pega el código', description: 'Trae la sintaxis Mermaid que una IA ya te ayudó a escribir.' },
      { number: '02', title: 'Ajusta el estilo', description: 'Define fondo, nodos, líneas, tipografía y énfasis sin tocar la configuración del tema.' },
      { number: '03', title: 'Llévate la imagen', description: 'Copia o exporta un SVG o PNG listo para Jira, la documentación o un pull request.' },
    ],
  },
  gallery: {
    label: 'Presets',
    title: 'El mismo código, distintos estilos.',
    intro: 'Cambia de preset o afina colores y tipografía. Flowcharts, diagramas de secuencia y el resto de Mermaid reciben el mismo tratamiento.',
    shots: [
      { src: '/mermaid-styler/dark.webp', caption: 'Preset Dark', alt: 'Flowchart con el preset Dark' },
      { src: '/mermaid-styler/paper.webp', caption: 'Preset Paper', alt: 'Flowchart con el preset Paper' },
      { src: '/mermaid-styler/seq.webp', caption: 'Diagrama de secuencia · preset Architecture', alt: 'Diagrama de secuencia con el preset Architecture' },
    ],
  },
  zoom: {
    label: 'Ampliar captura',
    hint: 'Ampliar ⤢',
    dialog: 'Captura ampliada',
    close: 'Cerrar',
    prev: 'Captura anterior',
    next: 'Captura siguiente',
  },
  privacy: {
    label: 'Privado por defecto',
    title: 'Nada que subir. Nada que administrar.',
    body: 'Mermaid se renderiza en tu navegador. En esta primera versión no hay cuentas, base de datos de proyectos ni historial de diagramas: solo un camino rápido del código a una imagen exportable.',
    status: 'SOLO RENDER LOCAL',
  },
  brief: {
    label: 'Por dentro',
    title: 'Enfocado en el resultado.',
    specs: [
      { term: 'Interfaz', value: 'Astro + TypeScript + scripts de cliente en vanilla JS' },
      { term: 'Render', value: 'Mermaid corriendo en el navegador' },
      { term: 'Salida', value: 'SVG sanitizado · PNG vía canvas' },
      { term: 'Despliegue', value: 'Build estático · listo para Dokploy' },
    ],
  },
  footer: { status: 'Mermaid Styler · MVP desplegado', linksLabel: 'Enlaces del proyecto' },
};

export default es;
