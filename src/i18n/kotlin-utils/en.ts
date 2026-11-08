import type { KotlinUtilsDict } from './types';

const blueprint = 'https://github.com/juanMaAV92/kotlin-quarkus-blueprint';

const en: KotlinUtilsDict = {
  meta: {
    title: 'kotlin-utils · Portable Kotlin/JVM flow engine',
    description:
      'Portable Kotlin/JVM flow engine: saga orchestration, structured JSON logging, exception hierarchy, exponential backoff retry, validation DSL and traceable context. Coroutines-native. Zero framework coupling.',
  },
  nav: { portfolio: 'portfolio', github: 'GitHub ↗' },
  toc: {
    ariaLabel: 'Table of contents',
    title: 'on this page',
    back: '← back to portfolio',
    labels: {
      overview: 'Overview',
      principles: 'Principles',
      install: 'Install',
      modules: 'Modules',
      flowEngine: 'Flow Engine',
      logger: 'Logger',
      exception: 'Exception',
      retry: 'Retry',
      validation: 'Validation',
      context: 'Context',
      compatibility: 'Compatibility',
    },
  },
  hero: {
    prompt: 'whoami kotlin-utils // flow model',
    ledeHtml:
      'Portable flow engine for Kotlin/JVM — saga orchestration, structured logging, exception hierarchy, backoff retry and validation DSL. <em>Coroutines-native, zero framework coupling.</em>',
    badgesLabel: 'Build info',
    github: 'View on GitHub',
    browse: 'Browse modules ↓',
    blueprint: 'Quarkus blueprint ↗',
  },
  anchorLabel: 'Anchor',
  principles: [
    {
      title: 'Flow over framework',
      bodyHtml:
        'Only depends on <code>kotlinx-coroutines</code> and <code>slf4j</code>. Works with Ktor, Quarkus, Spring, Compose, or any Kotlin/JVM project.',
    },
    {
      title: 'Coroutines-native API',
      bodyHtml:
        'Every step is <code>suspend fun</code>. No reactive wrappers (Mutiny, Reactor, RxJava) — the suspend signature is the contract.',
    },
    {
      title: 'Minimalist surface',
      bodyHtml:
        "Only what's needed, no over-engineering. If the lib solves a problem, it's a 10-line function — not a framework.",
    },
  ],
  install: {
    introHtml: 'Add the dependency to your <code>build.gradle.kts</code>:',
    footHtml:
      'GitHub Packages requires a token with <code>read:packages</code> even for public artifacts. <code>kotlinx-coroutines-core</code> comes transitively (<code>api</code>); <code>slf4j-api</code> arrives at runtime — just pick a backend.',
  },
  modules: {
    flowEngine: {
      title: 'Flow Engine',
      tag: 'Saga orchestration',
      descHtml:
        'Sequential step orchestration with automatic compensation (Saga pattern). Supports sequential, parallel and async steps with per-step timeouts.',
      feats: [
        'Per-step configurable timeouts (default 30s)',
        'Automatic compensation in reverse order (Saga) — runs under <code>NonCancellable</code>, so it completes even if the caller cancels the coroutine',
        '<code>ParallelStep</code> — concurrent execution with <code>async</code>/<code>awaitAll</code>',
        '<code>AsyncStep</code> — background side effects: failures are logged, never fail the flow; pass <code>asyncScope</code> to <code>flow()</code> for true fire-and-forget',
        'Declarative DSL for flow composition',
        'Built-in logging via <code>StructuredLogger</code> (traceId, error_code, error_details)',
      ],
    },
    logger: {
      title: 'Logger',
      tag: 'Structured JSON',
      descHtml:
        'Flat JSON, one line per event — attributes land at the root, no nesting. Emitted through <code>slf4j</code>, so any backend works. Grafana / Loki / CloudWatch friendly. <code>error()</code> lines include <code>error_type</code>, <code>error_message</code> and the full <code>stack_trace</code>.',
      outLabel: 'Output:',
    },
    exception: {
      title: 'Exception',
      tag: 'Error hierarchy',
      descHtml: 'Centralised error format. The handler is written once per framework.',
      shapeLabelHtml: 'Shape of <code>HttpErrorResponse</code> (note <code>messages</code> is a list):',
      handlerLabel: 'Handler in Ktor (once):',
    },
    retry: {
      title: 'Retry',
      tag: 'Exponential backoff',
      descHtml:
        'Retry with exponential backoff for transient errors. By default retries connection errors, <code>IOException</code> and HTTP 408 / 429 / 500 / 502 / 503 / 504 — never 400, 401 or 403. Delay is capped at 10s. Coroutine cancellation is never retried.',
    },
    validation: {
      title: 'Validation',
      tag: 'Accumulating DSL',
      descHtml:
        "Declarative checks that accumulate instead of failing fast — every failed <code>check</code> is collected and thrown as a single <code>PlatformException</code> (<code>VALIDATION_FAILED</code>), ready for the Exception module's handler.",
    },
    context: {
      title: 'Context',
      tag: 'Traceable',
      descHtml:
        '<code>FlowContext</code> — base context with traceability fields (<code>traceId</code>, <code>userId</code>, <code>tenantId</code>, thread-safe <code>metadata</code>). It travels through every step of the flow — parallel steps can mutate it safely — and the engine tags its own log lines with the <code>traceId</code>.',
    },
  },
  compat: {
    ktor: 'Direct — Ktor is coroutines-native',
    quarkusHtml: `<code>uni { flowEngine.run(ctx, steps) }</code> via <code>mutiny-kotlin</code> — full working template: <a class="compat-link" href="${blueprint}" target="_blank" rel="noopener">kotlin-quarkus-blueprint ↗</a>`,
    springHtml: '<code>mono { flowEngine.run(ctx, steps) }</code> via <code>kotlinx-coroutines-reactor</code>',
    composeHtml: '<code>coroutineScope { flowEngine.run(ctx, steps) }</code>',
    cliHtml: '<code>runBlocking { flowEngine.run(ctx, steps) }</code>',
    cliLabel: 'CLI / Scripts',
  },
  footer: 'open source · MIT · coroutines-native',
};

export default en;
