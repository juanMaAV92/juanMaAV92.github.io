import type { PdfToolDict } from './types';

const es: PdfToolDict = {
  lang: 'es',
  languageName: 'Español',
  meta: {
    title: 'PDF Tool · Edita tus PDFs sin subir nada a internet',
    description:
      'App de escritorio gratis y de código abierto para comprimir, unir, dividir, proteger y marcar tus PDFs. Todo ocurre en tu equipo — tus archivos nunca salen de tu ordenador. macOS y Windows.',
    ogDescription:
      'Comprime, une, divide, protege y marca tus PDFs desde tu propio ordenador. Gratis, open source y sin anuncios.',
    schemaDescription:
      'App de escritorio gratuita y de código abierto para comprimir, unir, dividir, proteger y marcar PDFs — sin subir nada a internet.',
  },
  nav: { portfolio: '← Portfolio', download: 'Descargar', language: 'Idioma' },
  hero: {
    eyebrow: 'App de escritorio · macOS & Windows · versión 1.1',
    titleHtml: 'Tus PDFs, <em>resueltos</em><br />— sin subir nada a internet.',
    lede:
      'Comprime, une, divide, protege y marca tus documentos —y conviértelos desde imágenes— desde tu propio ordenador. Gratis, de código abierto y sin anuncios.',
    downloadMac: 'Descargar para macOS',
    downloadWin: 'Descargar para Windows',
    help: '¿Cómo se instala? Solo hay que autorizarla una vez →',
    trust: ['100% gratis', 'Sin anuncios', 'Código abierto', 'Funciona sin internet'],
  },
  zoom: {
    label: 'Ampliar captura',
    hint: '🔍 Ampliar',
    dialog: 'Captura ampliada',
    close: 'Cerrar',
  },
  screenshotAlt: 'Pantalla de inicio de PDF Tool con sus seis herramientas',
  privacy: {
    title: 'Tus archivos nunca salen de tu ordenador.',
    bodyHtml:
      'La mayoría de las webs para editar PDFs <strong>suben tus documentos a sus servidores</strong>. PDF Tool no: todo el trabajo ocurre dentro de tu equipo, en local. Ideal para contratos, facturas, documentos personales o cualquier cosa que prefieras no compartir con nadie.',
  },
  features: {
    title: 'Todo lo que necesitas hacer con un PDF',
    sub: 'Seis herramientas, una sola app. Sin pestañas, sin registros, sin esperas.',
    items: [
      { icon: '🗜️', name: 'Comprimir PDF', desc: 'Reduce el peso de uno o varios PDFs hasta el tamaño en MB que elijas, y te dice cuánto ahorraste en cada uno.' },
      { icon: '🔗', name: 'Unir PDFs', desc: 'Combina varios documentos en uno solo — con miniatura de cada archivo para ordenarlos viendo lo que contienen, y con el nombre que elijas.' },
      { icon: '✂️', name: 'Dividir PDF', desc: 'Sepáralo por rangos de páginas, una página por archivo o cada N páginas.' },
      { icon: '🖼️', name: 'Imágenes a PDF', desc: 'Crea un PDF por cada imagen (JPG o PNG) — y si quieres uno solo, únelos después.' },
      { icon: '🔒', name: 'Proteger PDF', desc: 'Añade o quita la contraseña de uno o varios PDFs a la vez. Te la pide dos veces para que no te equivoques.' },
      { icon: '💧', name: 'Marca de agua', desc: 'Marca un documento como «Confidencial» o «Borrador», o deja tu sello en cada página para proteger su autoría.' },
    ],
  },
  news: {
    title: 'Novedades de la versión 1.1',
    sub: 'Comprime mejor, protege mejor y ahora también trabaja desde la terminal.',
    shots: [
      {
        src: '/pdf-tool/compress-result.png',
        alt: 'Resultado de comprimir varios PDFs: tamaño antes y después y porcentaje ahorrado en cada archivo',
        caption: 'Al comprimir ves cuánto pesaba cada archivo, cuánto pesa ahora y cuánto ahorraste.',
        width: 2500,
        height: 1638,
      },
      {
        src: '/pdf-tool/merge.png',
        alt: 'Unir PDFs con una miniatura de cada documento para ordenarlos',
        caption: 'Ordena los documentos viendo una miniatura de cada uno antes de unirlos.',
        width: 2586,
        height: 1540,
      },
    ],
    items: [
      { icon: '🗜️', name: 'Comprime sin perder el texto', desc: 'Primero reduce las imágenes; solo convierte páginas en imagen si no hay otra forma de llegar al tamaño que pediste.' },
      { icon: '🔒', name: 'Sin rastro de la contraseña anterior', desc: 'Al quitar o cambiar la contraseña, el PDF nuevo ya no guarda nada de la antigua.' },
      { icon: '🧱', name: 'Detecta archivos dañados', desc: 'Un PDF roto ya no se da por comprimido aunque pese poco: te avisa de que no se pudo abrir.' },
      { icon: '💻', name: 'Ahora también en la terminal', desc: 'Las seis herramientas, como comando: pdf-tool. Se instala con pipx install pdf-tool-cli.' },
      { icon: '🤖', name: 'Lista para agentes de IA', desc: 'Un plugin para Claude Code le enseña a usar pdf-tool en vez de escribir scripts improvisados.' },
      { icon: '⏹️', name: 'Y todo lo de la 1.0', desc: 'Cancelar tareas largas, resultados con el ahorro de cada archivo, atajos de teclado y descargas verificables.' },
    ],
  },
  devs: {
    title: 'Para desarrolladores y agentes de IA',
    sub: 'Las mismas seis herramientas como comando, con salida en JSON para scripts y agentes. Igual de local: nada sale de tu equipo.',
    commands: [
      { label: 'Instala la línea de comandos (Python 3.11 o superior)', code: 'pipx install pdf-tool-cli' },
      { label: 'Comprime un PDF a 2 MB y lee el resultado en JSON', code: 'pdf-tool compress informe.pdf --target-mb 2 --json' },
      { label: 'Instala el plugin dentro de Claude Code', code: '/plugin marketplace add juanMaAV92/pdf-tool\n/plugin install pdf-tool@pdf-tool' },
    ],
    pypi: 'Ver en PyPI →',
    docs: 'Documentación en GitHub →',
  },
  install: {
    title: 'Instalarla es rápido',
    sub: 'Elige tu sistema. Solo hay que autorizarla la primera vez.',
    macSteps: [
      'Descarga el archivo <code>.dmg</code> y ábrelo.',
      'Arrastra <strong>PDF Tool</strong> a la carpeta <em>Aplicaciones</em>.',
      'Ábrela desde <em>Aplicaciones</em>. macOS mostrará un aviso porque la app no está firmada por Apple. Cierra ese aviso para continuar.',
      'Ve a <strong>Menú Apple () → Ajustes del Sistema → Privacidad y Seguridad</strong> y baja hasta la sección <strong>Seguridad</strong>.',
      'Verás el mensaje de que se bloqueó <em>“pdf-tool”</em>. Pulsa <strong>Abrir igualmente</strong> y confirma con tu contraseña o Touch ID. <span class="hint">Comprueba que descargaste la versión desde la release oficial; solo tendrás que autorizarla la primera vez.</span>',
    ],
    winSteps: [
      'Descarga el <strong>instalador</strong> (<code>.exe</code>) y ejecútalo.',
      'Si aparece <strong>SmartScreen</strong>: pulsa <em>Más información</em> → <strong>Ejecutar de todas formas</strong>. <span class="hint">El aviso aparece porque el instalador no está firmado; comprueba que lo descargaste desde la release oficial.</span>',
    ],
    verifyHtml:
      '¿Quieres comprobar que tu descarga es la oficial? Junto a los instaladores está <code>SHA256SUMS.txt</code>: compara su huella con la de tu archivo usando <code>shasum -a 256 &lt;archivo&gt;</code> en macOS o <code>Get-FileHash &lt;archivo&gt;</code> en Windows.',
    cta: '⬇️ Ir a la página de descargas',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { q: '¿Es gratis de verdad?', a: 'Sí. PDF Tool es 100% gratuito, de código abierto (licencia MIT) y sin anuncios ni límites de uso.' },
      { q: '¿Mis archivos se suben a algún servidor?', a: 'No, nunca. Todo el procesamiento ocurre dentro de tu ordenador. Tus documentos no salen de tu equipo en ningún momento.' },
      { q: '¿Funciona sin conexión a internet?', a: 'Sí. Una vez instalada, no necesita internet para nada. Puedes usarla en avión, en el campo o donde quieras.' },
      { q: '¿Por qué mi sistema muestra un aviso al abrirla?', a: 'Porque la app no está firmada con un certificado de pago. Es completamente segura —el código es abierto y cualquiera puede revisarlo—, solo hay que autorizarla una vez. Arriba te explico el paso exacto para macOS y Windows.' },
      { q: '¿En qué sistemas funciona?', a: 'En macOS y Windows. Descarga el archivo correspondiente a tu sistema y listo.' },
      { q: '¿Cómo se actualiza?', a: 'Cuando publico una versión nueva, la app te lo indica con una barra en la parte superior. Descargas el instalador nuevo y lo instalas encima; tus ajustes se guardan aparte, así que se conservan.' },
      { q: '¿Puedo usarla desde la terminal o con un agente de IA?', a: 'Sí. Desde la versión 1.1 hay una línea de comandos (pipx install pdf-tool-cli) con las mismas seis herramientas y salida en JSON, y un plugin para Claude Code que la usa por ti. Todo sigue ocurriendo en tu equipo.' },
      { q: '¿Cómo sé que la descarga es la oficial?', a: 'Cada versión publica, junto a los instaladores, un archivo SHA256SUMS.txt con la huella de cada uno, y GitHub certifica que se construyeron desde el código del repositorio. Si la huella de tu archivo coincide, es exactamente el publicado.' },
    ],
  },
  final: {
    titleHtml: 'Descárgala gratis.<br />Sin cuentas, sin anuncios, sin esperas.',
    download: '⬇️ Descargar PDF Tool',
    code: 'Ver el código en GitHub',
  },
  contact: {
    eyebrow: '¿Tienes una idea?',
    title: 'Si necesitas una web, una app o un backend a medida, hablemos.',
    sub: 'Cuéntame qué tienes en mente y vemos cómo darle forma juntos.',
    cta: 'Contáctame →',
  },
  footer: {
    madeWithHtml:
      'Hecho con 🐍 Python + <a href="https://flet.dev" target="_blank" rel="noopener">Flet</a> · Licencia MIT',
    byHtml: 'Por <a href="/">Juan Manuel Armero Viveros</a>',
  },
};

export default es;
