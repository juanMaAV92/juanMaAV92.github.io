import type { GoUtilsDict } from './types';

const es: GoUtilsDict = {
  meta: {
    title: 'go-utils · Base de producción para servicios Go observables',
    description:
      'Base de producción para servicios Go observables: logging estructurado con correlación de trazas OpenTelemetry, errores tipados, cliente HTTP resiliente, adapters de datos y mensajería en AWS. Configuración desde env, basado en interfaces.',
  },
  topbar: { portfolio: 'portafolio' },
  toc: {
    ariaLabel: 'Tabla de contenido',
    title: 'en esta página',
    back: '← volver al portafolio',
    overview: 'Resumen',
    principles: 'Principios',
    install: 'Instalación',
    packages: 'Paquetes',
    ecosystem: 'Ecosistema',
    mods: {
      logger: 'Logger',
      errors: 'Errores',
      httpclient: 'Cliente HTTP',
      jwt: 'JWT',
      'data-stores': 'Almacenamiento',
      messaging: 'Mensajería',
      identity: 'Identidad',
      core: 'Helpers base',
    },
  },
  anchorLabel: 'Enlace a esta sección',
  hero: {
    prompt: 'whoami go-utils // signal path',
    ledeHtml:
      'Base de producción para servicios Go observables: logging estructurado con correlación de trazas, errores tipados, un cliente HTTP resiliente, JWT RS256, adapters para Postgres/Redis/S3 y mensajería con SQS/SNS/EventBridge. <em>Primero las señales, la configuración desde env y las interfaces en el borde.</em>',
    badgesLabel: 'Información del build',
    chipSignal: 'salud del servicio',
    viewGithub: 'Ver en GitHub',
    browsePackages: 'Ver paquetes ↓',
    blueprint: 'Blueprint de Echo ↗',
  },
  principles: [
    {
      title: 'Primero las señales',
      bodyHtml:
        'Cada paquete emite spans de OpenTelemetry, y el logger toma <code>trace_id</code>/<code>span_id</code> del contexto y los agrega a cada línea: logs y trazas quedan correlacionados sin configurar nada.',
    },
    {
      title: 'Configuración desde env',
      bodyHtml:
        'Cada adapter tiene <code>ConfigFromEnv(prefix)</code>. La misma forma en todos lados —<code>DB_*</code>, <code>REDIS_*</code>, <code>SQS_*</code>—, así que conectar un servicio no exige boilerplate y es 12-factor por defecto.',
    },
    {
      title: 'Basado en interfaces',
      bodyHtml:
        'Cada paquete expone una interfaz con una implementación no exportada. Dependes de la interfaz, la mockeas en los tests y cambias el backend sin tocar a quien la usa.',
    },
  ],
  install: {
    footHtml:
      'Módulo público: no necesita autenticación. Requiere Go 1.25+. Los clientes de AWS usan la cadena estándar de credenciales (env, config compartida, rol de IAM); nada de credenciales quemadas en el código.',
  },
  packages: {
    count: '18 paquetes',
    outputLabel: 'Salida:',
    mods: {
      logger: {
        title: 'logger',
        tag: 'JSON estructurado',
        descHtml:
          'JSON plano a stdout sobre <code>slog</code>. Si hay un span activo, <code>trace_id</code> y <code>span_id</code> se agregan solos, sin cableado manual.',
      },
      errors: {
        title: 'errors',
        tag: 'Tipados + Echo',
        descHtml:
          'Un único tipo <code>ErrorResponse</code> con código HTTP, código de error y mensajes. Constructores predefinidos para cada status, más un handler para Echo listo para conectar.',
      },
      httpclient: {
        title: 'httpclient',
        tag: 'Cliente resiliente',
        descHtml:
          'Cliente basado en Resty con reintentos, timeouts y propagación de trazas W3C. Nunca registra los bodies de request ni de response, solo metadatos, para que no se filtren credenciales ni tokens.',
      },
      jwt: {
        title: 'security/jwt',
        tag: 'RS256',
        descHtml:
          'Firma y validación RS256 genéricas sobre cualquier struct de claims. La validación exige <em>solo RS256</em>, requiere <code>exp</code> y verifica el issuer: cierra los clásicos huecos de sustitución de algoritmo y de tokens que nunca expiran.',
      },
      'data-stores': {
        title: 'almacenamiento',
        tag: 'postgres · redis · s3',
        descHtml: 'Adapters de persistencia basados en interfaces, cada uno con <code>ConfigFromEnv</code> y tracing de OTel.',
        feats: [
          '<code>database/postgresql</code> — wrapper de GORM: <code>Create</code>, <code>Find</code>/<code>FindMany</code> con paginación, <code>UpdateWhere</code>, <code>WithTransaction</code>; los códigos de error de pg se mapean a sentinels (conservando la causa para <code>errors.Is</code>)',
          '<code>cache/redis</code> — <code>Set</code>/<code>Get</code>/<code>GetOrSet</code> tipados, sets, pub/sub, <code>GETDEL</code> atómico, opciones TTL/NX/XX',
          '<code>storage/s3</code> — <code>Get</code>/<code>Put</code>/<code>Head</code>/<code>Delete</code> más URLs prefirmadas de subida y descarga',
        ],
      },
      messaging: {
        title: 'mensajería',
        tag: 'sqs · sns · scheduler',
        descHtml: 'Piezas para arquitecturas orientadas a eventos, con el contexto de traza viajando en los atributos del mensaje.',
        feats: [
          '<code>sqs</code> — producer por lotes + consumer con pool de workers que desenvuelve el sobre de SNS de forma transparente; backoff ante errores de polling y drenado ordenado al apagar (sin entregas duplicadas)',
          '<code>sns</code> — producer que propaga el contexto de traza W3C en los atributos del mensaje',
          '<code>scheduler</code> — schedules de una sola ejecución en EventBridge, con un helper de webhook vía Lambda y un flag <code>Disabled</code> que sobrevive a las actualizaciones',
        ],
      },
      identity: {
        title: 'middleware/identity',
        tag: 'RBAC',
        descHtml:
          'Middleware de Echo que lee de los headers la identidad que inyecta el gateway (usuario, roles, permisos) y la pone en el contexto.',
        feats: [
          '<code>HasPermission</code> / <code>HasAnyPermission</code> / <code>RequireCapability</code> con superadmin <code>all:all</code>',
          'Patrones con comodín (<code>orders:*</code>) y validación de roles',
          '<code>ToRequestOptions</code> reenvía la identidad a los servicios downstream; el reenvío acotado ya no filtra el superadmin más allá del patrón',
        ],
      },
      core: {
        title: 'helpers base',
        tag: 'env · validator · telemetry · …',
        descHtml: 'Las piezas pequeñas, con pocas dependencias, que todo servicio reutiliza.',
        feats: [
          '<code>env</code> — lectura tipada de variables de entorno (<code>GetEnvAsInt/Duration/Bool/Slice</code>, <code>MustHave</code>)',
          '<code>validator</code> — validación de structs con mensajes por campo, sobre go-playground',
          '<code>telemetry</code> — configuración de OTLP en una sola llamada; sampling basado en el padre que respeta las decisiones de upstream',
          '<code>pointers</code> · <code>timeutil</code> — helpers de generics y de fechas',
          '<code>testutil/echo</code> · <code>testutil/http</code> — builders de requests y aserciones de JSON para testear handlers',
        ],
      },
    },
  },
  ecosystem: {
    rows: [
      { label: 'Blueprint', noteHtml: 'Plantilla de microservicio Echo para producción construida sobre go-utils: {blueprint}' },
      {
        label: 'Construido sobre',
        noteHtml:
          '<code>aws-sdk-go-v2</code>, <code>gorm</code>, <code>go-redis</code>, <code>resty</code>, <code>go-playground/validator</code>, <code>golang-jwt</code>, <code>opentelemetry-go</code>',
      },
      {
        label: 'Framework',
        noteHtml:
          'Los helpers HTTP apuntan a <code>Echo</code>; todo lo demás (logging, mensajería, almacenamiento, jwt) no depende de ningún framework',
      },
    ],
  },
  footer: { line: 'open source · MIT · observabilidad primero' },
};

export default es;
