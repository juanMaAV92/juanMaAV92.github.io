import type { KotlinUtilsDict } from './types';

const blueprint = 'https://github.com/juanMaAV92/kotlin-quarkus-blueprint';

const es: KotlinUtilsDict = {
  meta: {
    title: 'kotlin-utils · Motor de flujos portable para Kotlin/JVM',
    description:
      'Motor de flujos portable para Kotlin/JVM: orquestación saga, logging estructurado en JSON, jerarquía de excepciones, retry con backoff exponencial, DSL de validación y contexto trazable. Nativo de coroutines. Sin acoplarse a ningún framework.',
  },
  nav: { portfolio: 'portafolio', github: 'GitHub ↗' },
  toc: {
    ariaLabel: 'Tabla de contenido',
    title: 'en esta página',
    back: '← volver al portafolio',
    labels: {
      overview: 'Resumen',
      principles: 'Principios',
      install: 'Instalación',
      modules: 'Módulos',
      flowEngine: 'Flow Engine',
      logger: 'Logger',
      exception: 'Exception',
      retry: 'Retry',
      validation: 'Validation',
      context: 'Context',
      compatibility: 'Compatibilidad',
    },
  },
  hero: {
    prompt: 'whoami kotlin-utils // modelo de flujo',
    ledeHtml:
      'Motor de flujos portable para Kotlin/JVM: orquestación saga, logging estructurado, jerarquía de excepciones, retry con backoff y DSL de validación. <em>Nativo de coroutines, sin acoplarse a ningún framework.</em>',
    badgesLabel: 'Información del build',
    github: 'Ver en GitHub',
    browse: 'Ver módulos ↓',
    blueprint: 'Blueprint de Quarkus ↗',
  },
  anchorLabel: 'Enlace a esta sección',
  principles: [
    {
      title: 'El flujo por encima del framework',
      bodyHtml:
        'Solo depende de <code>kotlinx-coroutines</code> y <code>slf4j</code>. Funciona con Ktor, Quarkus, Spring, Compose o cualquier proyecto Kotlin/JVM.',
    },
    {
      title: 'API nativa de coroutines',
      bodyHtml:
        'Cada step es una <code>suspend fun</code>. Nada de wrappers reactivos (Mutiny, Reactor, RxJava): la firma suspend es el contrato.',
    },
    {
      title: 'Superficie mínima',
      bodyHtml:
        'Solo lo necesario, sin sobreingeniería. Si la librería resuelve un problema, lo hace con una función de 10 líneas, no con un framework.',
    },
  ],
  install: {
    introHtml: 'Agrega la dependencia a tu <code>build.gradle.kts</code>:',
    footHtml:
      'GitHub Packages pide un token con <code>read:packages</code> incluso para artefactos públicos. <code>kotlinx-coroutines-core</code> llega como dependencia transitiva (<code>api</code>); <code>slf4j-api</code> llega en runtime, así que solo eliges un backend.',
  },
  modules: {
    flowEngine: {
      title: 'Flow Engine',
      tag: 'Orquestación saga',
      descHtml:
        'Orquesta steps en secuencia con compensación automática (patrón Saga). Soporta steps secuenciales, paralelos y asíncronos, con timeout por step.',
      feats: [
        'Timeout configurable por step (30s por defecto)',
        'Compensación automática en orden inverso (Saga): corre bajo <code>NonCancellable</code>, así que termina aunque quien llama cancele la coroutine',
        '<code>ParallelStep</code>: ejecución concurrente con <code>async</code>/<code>awaitAll</code>',
        '<code>AsyncStep</code>: efectos secundarios en segundo plano; sus fallos se registran en el log y nunca tumban el flujo. Pasa <code>asyncScope</code> a <code>flow()</code> para un fire-and-forget de verdad',
        'DSL declarativo para componer flujos',
        'Logging incluido vía <code>StructuredLogger</code> (traceId, error_code, error_details)',
      ],
    },
    logger: {
      title: 'Logger',
      tag: 'JSON estructurado',
      descHtml:
        'JSON plano, una línea por evento: los atributos van en la raíz, sin anidar. Se emite a través de <code>slf4j</code>, así que sirve cualquier backend. Listo para Grafana / Loki / CloudWatch. Las líneas de <code>error()</code> incluyen <code>error_type</code>, <code>error_message</code> y el <code>stack_trace</code> completo.',
      outLabel: 'Salida:',
    },
    exception: {
      title: 'Exception',
      tag: 'Jerarquía de errores',
      descHtml: 'Formato de error centralizado. El handler se escribe una sola vez por framework.',
      shapeLabelHtml: 'Forma de <code>HttpErrorResponse</code> (ojo: <code>messages</code> es una lista):',
      handlerLabel: 'Handler en Ktor (una sola vez):',
    },
    retry: {
      title: 'Retry',
      tag: 'Backoff exponencial',
      descHtml:
        'Reintentos con backoff exponencial para errores transitorios. Por defecto reintenta errores de conexión, <code>IOException</code> y HTTP 408 / 429 / 500 / 502 / 503 / 504; nunca 400, 401 ni 403. La espera máxima es de 10s. La cancelación de la coroutine nunca se reintenta.',
    },
    validation: {
      title: 'Validation',
      tag: 'DSL acumulativo',
      descHtml:
        'Validaciones declarativas que se acumulan en vez de fallar a la primera: cada <code>check</code> fallido se recoge y se lanza en una sola <code>PlatformException</code> (<code>VALIDATION_FAILED</code>), lista para el handler del módulo Exception.',
    },
    context: {
      title: 'Context',
      tag: 'Trazable',
      descHtml:
        '<code>FlowContext</code>: contexto base con campos de trazabilidad (<code>traceId</code>, <code>userId</code>, <code>tenantId</code> y un <code>metadata</code> thread-safe). Viaja por todos los steps del flujo (los steps paralelos pueden modificarlo sin riesgo) y el motor marca sus propias líneas de log con el <code>traceId</code>.',
    },
  },
  compat: {
    ktor: 'Directo: Ktor es nativo de coroutines',
    quarkusHtml: `<code>uni { flowEngine.run(ctx, steps) }</code> vía <code>mutiny-kotlin</code>. Plantilla completa y funcional: <a class="compat-link" href="${blueprint}" target="_blank" rel="noopener">kotlin-quarkus-blueprint ↗</a>`,
    springHtml: '<code>mono { flowEngine.run(ctx, steps) }</code> vía <code>kotlinx-coroutines-reactor</code>',
    composeHtml: '<code>coroutineScope { flowEngine.run(ctx, steps) }</code>',
    cliHtml: '<code>runBlocking { flowEngine.run(ctx, steps) }</code>',
    cliLabel: 'CLI / Scripts',
  },
  footer: 'código abierto · MIT · nativo de coroutines',
};

export default es;
