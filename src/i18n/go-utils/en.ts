import type { GoUtilsDict } from './types';

const en: GoUtilsDict = {
  meta: {
    title: 'go-utils · Production foundation for observable Go services',
    description:
      'Production foundation for observable Go services: structured logging with OpenTelemetry trace correlation, typed errors, resilient HTTP client, data adapters and AWS messaging. Config-from-env, interface-driven.',
  },
  topbar: { portfolio: 'portfolio' },
  toc: {
    ariaLabel: 'Table of contents',
    title: 'on this page',
    back: '← back to portfolio',
    overview: 'Overview',
    principles: 'Principles',
    install: 'Install',
    packages: 'Packages',
    ecosystem: 'Ecosystem',
    mods: {
      logger: 'Logger',
      errors: 'Errors',
      httpclient: 'HTTP Client',
      jwt: 'JWT',
      'data-stores': 'Data stores',
      messaging: 'Messaging',
      identity: 'Identity',
      core: 'Core helpers',
    },
  },
  anchorLabel: 'Anchor',
  hero: {
    prompt: 'whoami go-utils // signal path',
    ledeHtml:
      'Production foundation for observable Go services: structured logging with trace correlation, typed errors, a resilient HTTP client, RS256 JWT, Postgres/Redis/S3 adapters and SQS/SNS/EventBridge messaging. <em>Signals first, config from env, interfaces at the edge.</em>',
    badgesLabel: 'Build info',
    chipSignal: 'service health',
    viewGithub: 'View on GitHub',
    browsePackages: 'Browse packages ↓',
    blueprint: 'Echo blueprint ↗',
  },
  principles: [
    {
      title: 'Signals first',
      bodyHtml:
        'Every package emits OpenTelemetry spans, and the logger injects <code>trace_id</code>/<code>span_id</code> from the context into every line — logs and traces correlate out of the box.',
    },
    {
      title: 'Config from env',
      bodyHtml:
        'Every adapter has <code>ConfigFromEnv(prefix)</code>. Same shape everywhere — <code>DB_*</code>, <code>REDIS_*</code>, <code>SQS_*</code> — so wiring a service is boilerplate-free and 12-factor by default.',
    },
    {
      title: 'Interface-driven',
      bodyHtml:
        'Each package exposes an interface with an unexported implementation. Depend on the interface, mock it in tests, swap the backend without touching callers.',
    },
  ],
  install: {
    footHtml:
      'Public module — no auth needed. Requires Go 1.25+. AWS clients use the standard credential chain (env, shared config, IAM role); no hardcoded credentials.',
  },
  packages: {
    count: '18 pkgs',
    outputLabel: 'Output:',
    mods: {
      logger: {
        title: 'logger',
        tag: 'Structured JSON',
        descHtml:
          'Flat JSON to stdout on top of <code>slog</code>. When a span is active, <code>trace_id</code> and <code>span_id</code> are injected automatically — no manual plumbing.',
      },
      errors: {
        title: 'errors',
        tag: 'Typed + Echo',
        descHtml:
          'A single <code>ErrorResponse</code> type with HTTP code, error code and messages. Predefined constructors for every status, plus a drop-in Echo handler.',
      },
      httpclient: {
        title: 'httpclient',
        tag: 'Resilient client',
        descHtml:
          'Resty-based client with retries, timeouts and W3C trace propagation. Request/response bodies are never logged — only metadata — so credentials and tokens don\'t leak.',
      },
      jwt: {
        title: 'security/jwt',
        tag: 'RS256',
        descHtml:
          'Generic RS256 signing and validation over any claims struct. Validation enforces <em>RS256 only</em>, requires <code>exp</code>, and checks the issuer — closing the classic algorithm-substitution and never-expiring-token gaps.',
      },
      'data-stores': {
        title: 'data stores',
        tag: 'postgres · redis · s3',
        descHtml: 'Interface-driven persistence adapters, each with <code>ConfigFromEnv</code> and OTel tracing.',
        feats: [
          '<code>database/postgresql</code> — GORM wrapper: <code>Create</code>, <code>Find</code>/<code>FindMany</code> with pagination, <code>UpdateWhere</code>, <code>WithTransaction</code>; pg error codes mapped to sentinels (cause preserved for <code>errors.Is</code>)',
          '<code>cache/redis</code> — typed <code>Set</code>/<code>Get</code>/<code>GetOrSet</code>, sets, pub/sub, atomic <code>GETDEL</code>, TTL/NX/XX options',
          '<code>storage/s3</code> — <code>Get</code>/<code>Put</code>/<code>Head</code>/<code>Delete</code> plus presigned upload/download URLs',
        ],
      },
      messaging: {
        title: 'messaging',
        tag: 'sqs · sns · scheduler',
        descHtml: 'Event-driven building blocks with trace context flowing through message attributes.',
        feats: [
          '<code>sqs</code> — batch producer + worker-pool consumer that transparently unwraps the SNS envelope; backoff on poll errors and a graceful drain on shutdown (no duplicate delivery)',
          '<code>sns</code> — producer that propagates W3C trace context via message attributes',
          '<code>scheduler</code> — one-time EventBridge schedules with a webhook-via-Lambda helper and a <code>Disabled</code> flag that survives updates',
        ],
      },
      identity: {
        title: 'middleware/identity',
        tag: 'RBAC',
        descHtml:
          'Echo middleware that reads a gateway-injected identity (user, roles, permissions) from request headers into the context.',
        feats: [
          '<code>HasPermission</code> / <code>HasAnyPermission</code> / <code>RequireCapability</code> with <code>all:all</code> superadmin',
          'Wildcard patterns (<code>orders:*</code>) and role checks',
          '<code>ToRequestOptions</code> forwards the identity downstream — scoped forwarding no longer leaks superadmin past the pattern',
        ],
      },
      core: {
        title: 'core helpers',
        tag: 'env · validator · telemetry · …',
        descHtml: 'The small, dependency-light pieces every service reuses.',
        feats: [
          '<code>env</code> — typed env parsing (<code>GetEnvAsInt/Duration/Bool/Slice</code>, <code>MustHave</code>)',
          '<code>validator</code> — struct validation with field-aware messages, backed by go-playground',
          '<code>telemetry</code> — one-call OTLP setup; parent-based sampling that honors upstream decisions',
          '<code>pointers</code> · <code>timeutil</code> — generics and date helpers',
          '<code>testutil/echo</code> · <code>testutil/http</code> — request builders and JSON assertions for handler tests',
        ],
      },
    },
  },
  ecosystem: {
    rows: [
      { label: 'Blueprint', noteHtml: 'Production Echo microservice template built on go-utils: {blueprint}' },
      {
        label: 'Built on',
        noteHtml:
          '<code>aws-sdk-go-v2</code>, <code>gorm</code>, <code>go-redis</code>, <code>resty</code>, <code>go-playground/validator</code>, <code>golang-jwt</code>, <code>opentelemetry-go</code>',
      },
      {
        label: 'Framework',
        noteHtml:
          'HTTP helpers target <code>Echo</code>; everything else (logging, messaging, stores, jwt) is framework-agnostic',
      },
    ],
  },
  footer: { line: 'open source · MIT · observability-first' },
};

export default en;
