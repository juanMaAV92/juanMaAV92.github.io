# Wiki de steer + refresh de la landing — Plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** documentación de producto multi-página bajo `/steer/docs` (7 páginas Markdown sobre content collections de Astro con layout compartido) y actualización de la landing `/steer`; al final, el README de steer enlaza la doc.

**Architecture:** content collection `steer-docs` (Markdown + frontmatter `title/description/order`) → ruta dinámica única `src/pages/steer/docs/[...slug].astro` → layout `SteerDocsLayout.astro` con sidebar de páginas, TOC "on this page", prev/next, Shiki para código y la estética existente del sitio (paleta de `steer.astro`). Los mocks del TUI van como HTML inline en el markdown con clases que el layout estila globalmente.

**Tech Stack:** Astro ^4.15 (content collections v4, `astro:content`, Shiki integrado). Sin dependencias nuevas. Sin framework de tests: el ciclo de verificación es `npm run build` + greps sobre `dist/`.

**Spec:** `docs/superpowers/specs/2026-07-09-steer-wiki-design.md`

## Global Constraints

- Repo del sitio: `/Users/juanmaav92/Documents/juanMa/juanMaAV92.github.io`. La Task 6 toca OTRO repo (`/Users/juanmaav92/Documents/juanMa/steer`).
- Contenido de las páginas en **inglés** (como el sitio y el producto). Commits del sitio en inglés estilo conventional (`feat: ...`, como `git log` existente); el commit del repo steer en español (su convención). **Sin atribución a IA ni Co-Authored-By en ningún commit.**
- **Cero dependencias nuevas** (sin MDX, sin Starlight, sin @astrojs/check).
- Datos del producto que la doc debe afirmar EXACTOS: logs = últimas **100** líneas (`-n`) dentro de la **última hora**, follow cada **3s**; events = últimos **20**, ascendente; status watch default **15s**; deploy/resize watch default **3s**; rollout atascado = **3** fallos de aprovisionamiento; tag-picker hasta 50 tags recientes; config en `./steer.toml` o `~/.config/steer/steer.toml`; precedencia de contexto `--context` > `STEER_CONTEXT` > `default_context`.
- URLs finales: `/steer/docs` (getting-started) y `/steer/docs/{configuration,deploys,operations,tui,cli,troubleshooting}`. Canonical `https://juanmaav92.github.io<ruta>`.
- Gate de cada task: `npm run build` verde y los greps del task pasan.
- Fuente de verdad del comportamiento: el repo de steer (`README.md`, `docs/parity.md`, `docs/superpowers/specs/*`). El contenido de este plan ya está destilado y verificado contra ese repo — transcribir, no inventar. Si algo parece contradecir el repo de steer, parar y reportar.

---

### Task 1: Infraestructura de la wiki (colección + Shiki + layout + ruta + Getting started)

**Files:**
- Create: `src/content/config.ts`
- Create: `src/content/steer-docs/getting-started.md`
- Create: `src/layouts/SteerDocsLayout.astro`
- Create: `src/pages/steer/docs/[...slug].astro`
- Modify: `astro.config.mjs`

**Interfaces:**
- Produces: colección `steer-docs` con schema `{title: string, description: string, order: number}`; helper de URL implícito `getting-started → /steer/docs`, resto → `/steer/docs/<slug>`; clases globales estiladas por el layout que las páginas md pueden usar en HTML inline: `.term`, `.term-bar`, `.tui` (+ hijas `.topbar .row .side .main .sec .item .sel .tabs .tab .on .c .dim .ok .up .warn .off .act`), `.keys` (tabla de atajos). Las Tasks 2–4 solo añaden ficheros `.md` a `src/content/steer-docs/`.

- [ ] **Step 1: Shiki en astro.config.mjs**

Reemplazar el contenido de `astro.config.mjs` por:

```js
// @ts-check
import { defineConfig } from 'astro/config';

// User page → se sirve en el dominio raíz, por eso NO lleva `base`.
export default defineConfig({
  site: 'https://juanMaAV92.github.io',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: false,
    },
  },
});
```

- [ ] **Step 2: Colección**

Crear `src/content/config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const steerDocs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = { 'steer-docs': steerDocs };
```

- [ ] **Step 3: Página semilla — Getting started (contenido final completo)**

Crear `src/content/steer-docs/getting-started.md`:

````markdown
---
title: Getting started
description: Install steer, connect it to your AWS account and ship your first deploy.
order: 1
---

## Install

### macOS — Homebrew (recommended)

```bash
brew install juanMaAV92/tap/steer

# update later
brew update && brew upgrade steer
```

No Gatekeeper prompts: the cask clears the quarantine flag on install.

### Linux (and any OS with Go installed)

```bash
# install AND update — same command, always fetches the latest release
go install github.com/juanMaAV92/steer/cmd/steer@latest
```

Without Go: download `steer_*_linux_{amd64,arm64}.tar.gz` from the
[latest release](https://github.com/juanMaAV92/steer/releases/latest) and place `steer`
on your `PATH`.

### Windows

Download `steer_*_windows_amd64.zip` from the
[latest release](https://github.com/juanMaAV92/steer/releases/latest), unzip and add
`steer.exe` to your `PATH`. Use **Windows Terminal** — the TUI (mouse included) degrades
in the legacy `cmd.exe` console.

Check your install anytime:

```bash
steer --version
```

## Connect your cloud

Run the interactive wizard — this is the one-time step for whoever knows the cloud:

```bash
steer config init
```

The wizard reads the AWS profiles you already have in `~/.aws`, lists your **real**
clusters to pick from, runs a connection smoke test and writes `steer.toml` for you.
Add more accounts or environments later with `steer config add`.

Prefer a file? `steer config init --example` writes a commented starter `steer.toml`
you can edit by hand. Details in [Configuration](/steer/docs/configuration).

## Open the dashboard

```bash
steer tui
```

<div class="term">
  <div class="term-bar"><i></i><i></i><i></i><span>steer — tui</span></div>
  <pre class="tui"><span class="topbar">⛵ steer · <span class="c">aws</span> · <span class="c">staging</span> <span class="dim">(cluster: staging-cluster)</span>          <span class="ok">writable ●</span></span>
<span class="row">
<span class="side"><span class="sec">SERVICES        <span class="dim">(3)</span></span>
<span class="item sel"><span class="up">●</span> api      2/2  <span class="c">v1.4</span></span>
<span class="item"><span class="up">●</span> web      3/3  <span class="c">v2.0</span></span>
<span class="item"><span class="warn">◐</span> worker   1/2  <span class="c">v1.1</span></span>

<span class="sec">IMAGES          <span class="dim">(3)</span></span>
<span class="item">▸ api</span>
<span class="item">▸ web</span>
<span class="item">▸ worker</span></span><span class="main"><span class="tabs"><span class="tab on">Details</span> <span class="tab">Events</span> <span class="tab">Logs</span></span>
  running   <span class="c">2/2</span>
  status    <span class="ok">ACTIVE</span>
  tag       <span class="c">v1.4</span>

  <span class="act">[d]</span> deploy  <span class="act">[s]</span> scale  <span class="act">[z]</span> resize  <span class="act">[R]</span> rollback</span></span>
<span class="botbar">↑↓ select · d deploy · / filter · c context · q quit</span></pre>
</div>

Pick a service, hit a button (or `d` / `s` / `z` / `R`), confirm in the inline form and
watch the rollout stream live into the Events tab. Full tour in the
[TUI guide](/steer/docs/tui).

## Ship your first deploy

From the TUI: select the service, press `d`, pick a tag from the picker (it reads your
registry), confirm. Or script it:

```bash
# interactive: no flags → a fuzzy picker opens for service and tag
steer service deploy

# explicit + CI-friendly
steer --context stg service deploy -s api -t v1.2.3 --watch
```

Every deploy shows a preview (current tag → new tag) and asks before applying. Rollback
is one command: `steer service rollback -s api`. The full flow, including how deploys
are validated against your registry, is in [Deploys](/steer/docs/deploys).

## Next steps

- [Configuration](/steer/docs/configuration) — contexts, naming templates, read-only prod.
- [Deploys](/steer/docs/deploys) — previews, tag validation, watch, rollback.
- [Operations](/steer/docs/operations) — status, scale, resize, logs, events.
- [CLI reference](/steer/docs/cli) — every command and flag.
````

- [ ] **Step 4: Ruta dinámica**

Crear `src/pages/steer/docs/[...slug].astro`:

```astro
---
import { getCollection } from 'astro:content';
import SteerDocsLayout from '../../../layouts/SteerDocsLayout.astro';

export async function getStaticPaths() {
  const docs = await getCollection('steer-docs');
  return docs.map((doc) => ({
    // getting-started es la portada: se sirve en /steer/docs
    params: { slug: doc.slug === 'getting-started' ? undefined : doc.slug },
    props: { doc },
  }));
}

const { doc } = Astro.props;
const { Content, headings } = await doc.render();
const docs = (await getCollection('steer-docs')).sort((a, b) => a.data.order - b.data.order);
---

<SteerDocsLayout doc={doc} docs={docs} headings={headings}>
  <Content />
</SteerDocsLayout>
```

- [ ] **Step 5: Layout completo**

Crear `src/layouts/SteerDocsLayout.astro`:

```astro
---
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/700.css';
import '@fontsource-variable/fraunces';
import type { CollectionEntry } from 'astro:content';
import type { MarkdownHeading } from 'astro';

interface Props {
  doc: CollectionEntry<'steer-docs'>;
  docs: CollectionEntry<'steer-docs'>[];
  headings: MarkdownHeading[];
}

const { doc, docs, headings } = Astro.props;
const repo = 'https://github.com/juanMaAV92/steer';

const docHref = (slug: string) => (slug === 'getting-started' ? '/steer/docs' : `/steer/docs/${slug}`);
const canonical = `https://juanmaav92.github.io${docHref(doc.slug)}`;
const idx = docs.findIndex((d) => d.slug === doc.slug);
const prev = idx > 0 ? docs[idx - 1] : null;
const next = idx >= 0 && idx < docs.length - 1 ? docs[idx + 1] : null;
const toc = headings.filter((h) => h.depth === 2);
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%E2%9B%B5%3C/text%3E%3C/svg%3E" />
    <title>{doc.data.title} · steer docs</title>
    <meta name="description" content={doc.data.description} />
    <meta name="author" content="Juan Manuel Armero Viveros" />
    <meta name="theme-color" content="#0b0f14" />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={`${doc.data.title} · steer docs`} />
    <meta property="og:description" content={doc.data.description} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={canonical} />
  </head>

  <body>
    <div class="bg" aria-hidden="true">
      <div class="grid-lines"></div>
      <div class="grain"></div>
    </div>

    <header class="nav">
      <a class="brand" href="/steer"><span aria-hidden="true">⛵</span> steer <span class="brand-docs">docs</span></a>
      <nav class="nav-links">
        <a href={repo} class="ghost" target="_blank" rel="noopener">GitHub ↗</a>
        <a href="/steer" class="ghost">← Project page</a>
      </nav>
    </header>

    <div class="wrap">
      <aside class="side" aria-label="Documentation pages">
        <p class="side-title">documentation</p>
        <ul class="side-list">
          {docs.map((d) => (
            <li>
              <a class:list={['side-link', { on: d.slug === doc.slug }]} href={docHref(d.slug)}>{d.data.title}</a>
            </li>
          ))}
        </ul>
        <a class="side-back" href="/steer">← project page</a>
      </aside>

      <main class="doc-main">
        <details class="side-mobile">
          <summary>documentation <span aria-hidden="true">+</span></summary>
          <ul class="side-list">
            {docs.map((d) => (
              <li><a class:list={['side-link', { on: d.slug === doc.slug }]} href={docHref(d.slug)}>{d.data.title}</a></li>
            ))}
          </ul>
        </details>

        <article class="doc">
          <p class="kicker">steer docs</p>
          <h1>{doc.data.title}</h1>
          <p class="lede">{doc.data.description}</p>
          <slot />
        </article>

        <nav class="pager" aria-label="Previous and next page">
          {prev ? <a class="pager-link" href={docHref(prev.slug)}>← {prev.data.title}</a> : <span />}
          {next ? <a class="pager-link pager-next" href={docHref(next.slug)}>{next.data.title} →</a> : <span />}
        </nav>
      </main>

      <aside class="toc" aria-label="On this page">
        {toc.length > 0 && (
          <>
            <p class="toc-title"># on this page</p>
            <ul class="toc-list">
              {toc.map((h) => (
                <li><a class="toc-link" href={`#${h.slug}`} data-toc={h.slug}>{h.text}</a></li>
              ))}
            </ul>
          </>
        )}
      </aside>
    </div>

    <footer class="foot">
      <span>Steer · open source (MIT)</span>
      <span>By <a href="/">Juan Manuel Armero Viveros</a></span>
    </footer>

    <script>
      // scroll-spy: resalta en el TOC la sección visible
      const links = document.querySelectorAll('.toc-link');
      const byId = new Map();
      links.forEach((l) => byId.set(l.getAttribute('data-toc'), l));
      const heads = document.querySelectorAll('.doc h2[id]');
      if ('IntersectionObserver' in window && heads.length) {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                links.forEach((l) => l.classList.remove('on'));
                byId.get(e.target.id)?.classList.add('on');
              }
            });
          },
          { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
        );
        heads.forEach((h) => io.observe(h));
      }
    </script>

    <style is:global>
      :root {
        --bg: #0a0e13;
        --panel: #111923;
        --panel-2: #0e151d;
        --line: #1d2935;
        --ink: #d7e2ee;
        --muted: #6b7889;
        --accent: #2bc8e8;
        --accent-deep: #1a9fc0;
        --green: #4ade80;
        --amber: #fbbf24;
        --red: #f87171;
        --display: 'Fraunces Variable', Georgia, serif;
        --mono: 'JetBrains Mono', monospace;
      }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { background: var(--bg); color: var(--ink); font-family: var(--mono);
        line-height: 1.7; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
      a { color: inherit; }

      /* ── contenido markdown (global: Astro no scopea el HTML renderizado) ── */
      .doc .kicker { font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
        color: var(--accent); margin-bottom: 0.7rem; }
      .doc h1 { font-family: var(--display); font-weight: 440; color: #fff;
        font-size: clamp(1.9rem, 4vw, 2.6rem); line-height: 1.1; letter-spacing: -0.02em; }
      .doc .lede { color: var(--muted); margin: 0.9rem 0 2.2rem; max-width: 62ch; }
      .doc h2 { font-family: var(--display); font-weight: 460; color: #fff;
        font-size: 1.45rem; margin: 2.6rem 0 0.9rem; padding-top: 1.6rem;
        border-top: 1px solid var(--line); scroll-margin-top: 5rem; }
      .doc h3 { color: #fff; font-size: 1rem; font-weight: 600; margin: 1.8rem 0 0.6rem;
        scroll-margin-top: 5rem; }
      .doc p { color: var(--ink); margin: 0.8rem 0; max-width: 72ch; }
      .doc p > strong { color: #fff; }
      .doc ul, .doc ol { margin: 0.8rem 0 0.8rem 1.4rem; max-width: 70ch; }
      .doc li { margin: 0.35rem 0; }
      .doc li::marker { color: var(--accent); }
      .doc a { color: var(--accent); text-decoration: none; border-bottom: 1px solid rgba(43, 200, 232, 0.35); }
      .doc a:hover { border-bottom-color: var(--accent); }
      .doc code { font-size: 0.85em; color: var(--ink); background: var(--panel-2);
        border: 1px solid var(--line); border-radius: 5px; padding: 0.08rem 0.35rem; }
      .doc pre.astro-code { background: var(--panel-2) !important; border: 1px solid var(--line);
        border-radius: 10px; padding: 1rem 1.1rem; margin: 1rem 0 1.4rem; font-size: 0.8rem;
        line-height: 1.65; overflow-x: auto; }
      .doc pre.astro-code code { background: none; border: none; padding: 0; font-size: inherit; }
      .doc blockquote { border-left: 2px solid var(--accent); background: var(--panel-2);
        border-radius: 0 10px 10px 0; padding: 0.7rem 1.1rem; margin: 1.2rem 0; color: var(--muted); }
      .doc blockquote p { margin: 0.3rem 0; }
      .doc table { border-collapse: collapse; margin: 1.2rem 0 1.6rem; font-size: 0.82rem;
        display: block; overflow-x: auto; max-width: 100%; }
      .doc th { text-align: left; color: var(--accent); font-size: 0.72rem; text-transform: uppercase;
        letter-spacing: 0.06em; border-bottom: 1px solid var(--line); padding: 0.5rem 1.1rem 0.5rem 0; }
      .doc td { border-bottom: 1px solid var(--line); padding: 0.55rem 1.1rem 0.55rem 0;
        color: var(--ink); vertical-align: top; }
      .doc td code { white-space: nowrap; }
      .doc hr { border: none; border-top: 1px solid var(--line); margin: 2rem 0; }

      /* ── mock del TUI (mismo lenguaje visual que la landing) ── */
      .doc .term { width: 100%; margin: 1.4rem 0 1.8rem; background: var(--panel-2);
        border: 1px solid var(--line); border-radius: 12px; overflow: hidden;
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45); }
      .doc .term-bar { display: flex; align-items: center; gap: 0.45rem; padding: 0.65rem 0.9rem;
        background: #0c131b; border-bottom: 1px solid var(--line); position: relative; }
      .doc .term-bar i { width: 11px; height: 11px; border-radius: 50%; background: #2a3642; }
      .doc .term-bar i:nth-child(1) { background: #ff5f57; }
      .doc .term-bar i:nth-child(2) { background: #febc2e; }
      .doc .term-bar i:nth-child(3) { background: #28c840; }
      .doc .term-bar span { position: absolute; left: 0; right: 0; text-align: center;
        color: var(--muted); font-size: 0.76rem; }
      .doc .tui { padding: 1rem 1.1rem; font-size: 0.76rem; line-height: 1.55; color: var(--ink);
        white-space: pre; overflow-x: auto; margin: 0; background: none; border: none; }
      .doc .tui .topbar { display: block; color: var(--muted); border-bottom: 1px solid var(--line);
        padding-bottom: 0.5rem; margin-bottom: 0.5rem; }
      .doc .tui .botbar { display: block; color: #4a5662; border-top: 1px solid var(--line);
        padding-top: 0.5rem; margin-top: 0.5rem; }
      .doc .tui .row { display: flex; gap: 1.4rem; }
      .doc .tui .side { display: block; border-right: 1px solid var(--line); padding-right: 1.2rem; }
      .doc .tui .main { display: block; flex: 1; }
      .doc .tui .sec { display: block; color: var(--muted); letter-spacing: 0.05em; margin-top: 0.4rem; }
      .doc .tui .item { display: block; color: #9fb0c0; padding: 0.05rem 0.3rem; border-radius: 4px; }
      .doc .tui .item.sel { background: rgba(43, 200, 232, 0.12); color: #fff; }
      .doc .tui .tabs { display: block; margin-bottom: 0.6rem; }
      .doc .tui .tab { color: var(--muted); padding: 0.1rem 0.2rem; }
      .doc .tui .tab.on { color: var(--accent); border-bottom: 2px solid var(--accent); }
      .doc .tui .c { color: var(--accent); }
      .doc .tui .dim { color: #4a5662; }
      .doc .tui .ok, .doc .tui .up { color: var(--green); }
      .doc .tui .warn { color: var(--amber); }
      .doc .tui .err { color: var(--red); }
      .doc .tui .off { color: #56636f; }
      .doc .tui .act { color: var(--accent); }
    </style>

    <style>
      .bg { position: fixed; inset: 0; z-index: -1; overflow: hidden; }
      .grid-lines { position: absolute; inset: 0; opacity: 0.5;
        background-image: linear-gradient(rgba(43,200,232,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(43,200,232,0.025) 1px, transparent 1px);
        background-size: 44px 44px; mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000, transparent 75%); }
      .grain { position: absolute; inset: 0; opacity: 0.04; mix-blend-mode: overlay;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }

      .nav { position: sticky; top: 0; z-index: 20; display: flex; align-items: center;
        justify-content: space-between; padding: 0.85rem 1.5rem; max-width: 1240px; margin: 0 auto;
        background: rgba(10, 14, 19, 0.72); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line); }
      .brand { display: flex; align-items: center; gap: 0.5rem; text-decoration: none;
        font-weight: 700; color: #fff; font-size: 1.05rem; }
      .brand-docs { color: var(--accent); font-weight: 500; }
      .nav-links { display: flex; align-items: center; gap: 1.1rem; }
      .ghost { color: var(--muted); text-decoration: none; font-size: 0.86rem; transition: color 0.2s; }
      .ghost:hover { color: var(--ink); }

      .wrap { display: grid; grid-template-columns: 208px minmax(0, 1fr) 188px; gap: 2.6rem;
        max-width: 1240px; margin: 0 auto; padding: 2.2rem 1.5rem 3rem; align-items: start; }

      .side { position: sticky; top: 4.6rem; }
      .side-title, .toc-title { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em;
        color: var(--muted); margin-bottom: 0.7rem; }
      .side-list { list-style: none; }
      .side-link { display: block; text-decoration: none; color: var(--muted); font-size: 0.86rem;
        padding: 0.32rem 0.6rem; border-left: 2px solid var(--line); transition: color 0.15s; }
      .side-link:hover { color: var(--ink); }
      .side-link.on { color: var(--accent); border-left-color: var(--accent);
        background: rgba(43, 200, 232, 0.06); }
      .side-back { display: inline-block; margin-top: 1.4rem; color: var(--muted);
        font-size: 0.78rem; text-decoration: none; }
      .side-back:hover { color: var(--ink); }

      .side-mobile { display: none; }

      .toc { position: sticky; top: 4.6rem; }
      .toc-list { list-style: none; }
      .toc-link { display: block; text-decoration: none; color: var(--muted); font-size: 0.78rem;
        padding: 0.24rem 0; transition: color 0.15s; }
      .toc-link:hover { color: var(--ink); }
      .toc-link.on { color: var(--accent); }

      .pager { display: flex; justify-content: space-between; gap: 1rem; margin-top: 3rem;
        padding-top: 1.4rem; border-top: 1px solid var(--line); }
      .pager-link { color: var(--accent); text-decoration: none; font-size: 0.88rem; }
      .pager-link:hover { text-decoration: underline; }

      .foot { max-width: 1240px; margin: 0 auto; padding: 1.6rem 1.5rem 2.6rem; display: flex;
        justify-content: space-between; flex-wrap: wrap; gap: 0.8rem; border-top: 1px solid var(--line);
        color: var(--muted); font-size: 0.82rem; }
      .foot a { color: var(--accent); text-decoration: none; }

      @media (max-width: 1080px) {
        .wrap { grid-template-columns: 208px minmax(0, 1fr); }
        .toc { display: none; }
      }
      @media (max-width: 880px) {
        .wrap { grid-template-columns: minmax(0, 1fr); }
        .side { display: none; }
        .side-mobile { display: block; margin-bottom: 1.6rem; background: var(--panel);
          border: 1px solid var(--line); border-radius: 10px; padding: 0.7rem 1rem; }
        .side-mobile summary { cursor: pointer; color: var(--accent); font-size: 0.8rem;
          text-transform: uppercase; letter-spacing: 0.08em; list-style: none;
          display: flex; justify-content: space-between; }
        .side-mobile .side-list { margin-top: 0.7rem; }
      }
      @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
    </style>
  </body>
</html>
```

- [ ] **Step 6: Build y verificación**

```bash
cd /Users/juanmaav92/Documents/juanMa/juanMaAV92.github.io && npm run build
```
Expected: build completa sin errores.

```bash
test -f dist/steer/docs/index.html && echo OK-route
grep -c 'astro-code' dist/steer/docs/index.html          # ≥ 1 → Shiki activo
grep -o 'Getting started · steer docs' dist/steer/docs/index.html | head -1
grep -o 'class="tui"' dist/steer/docs/index.html | head -1   # mock inline renderizado
grep -o 'brew install juanMaAV92/tap/steer' dist/steer/docs/index.html | head -1
test -f dist/steer/index.html && echo OK-landing-intact
```
Expected: todas las líneas imprimen su OK/valor.

- [ ] **Step 7: Commit**

```bash
git add astro.config.mjs src/content src/layouts src/pages/steer
git commit -m "feat: steer docs infrastructure — content collection, layout and getting started"
```

---

### Task 2: Páginas Configuration y Deploys

**Files:**
- Create: `src/content/steer-docs/configuration.md`
- Create: `src/content/steer-docs/deploys.md`

**Interfaces:**
- Consumes: colección y clases del layout (Task 1). Solo se añaden `.md`; cero código.

- [ ] **Step 1: configuration.md**

Crear `src/content/steer-docs/configuration.md`:

````markdown
---
title: Configuration
description: steer.toml explained — contexts, naming templates, the images block and read-only environments.
order: 2
---

## Where config lives

Steer looks for `steer.toml` in the current repo first, then in
`~/.config/steer/steer.toml`. Keep per-project config next to the project, or one global
file for everything.

> Your config holds account IDs and role ARNs. It stays on your machine — **never commit
> it to a public repo**.

## Contexts

A **context** is one deploy target: cloud + credential + cluster + naming + write mode.
Several accounts, environments or projects are just several contexts.

```toml
default_context = "dev"

[contexts.dev]
cloud            = "aws"
profile          = "acme-dev"          # AWS profile from ~/.aws
cluster          = "acme-dev"
service_template = "acme-dev-{name}"
writable         = true

  [contexts.dev.images]
  repo_template = "acme-{name}"

[contexts.prod]
cloud            = "aws"
profile          = "acme-prod"
cluster          = "acme-prod"
service_template = "acme-prod-{name}"
writable         = false               # read-only: every mutating action is blocked
```

| Field | Required | What it does |
| --- | --- | --- |
| `cloud` | yes | Provider. `aws` today; `gcp`/`azure` are recognized but not implemented yet. |
| `profile` | yes (aws) | AWS profile from `~/.aws/config` / `~/.aws/credentials`. SSO profiles work. |
| `cluster` | yes | The ECS cluster this context talks to. |
| `service_template` | no | Maps short names to real ones: `api` → `acme-dev-api`. Lists hide the prefix. |
| `writable` | no (default `false`) | `false` blocks deploy/scale/rollback/resize — in CLI **and** TUI. |
| `account_id`, `role_arn`, `region` | no | Pin the account, assume a role, or override the profile's region. |
| `images.repo_template` | no | Enables the registry capability — see below. |

### Picking a context

Priority order: `--context` flag (`-c`) → `STEER_CONTEXT` env var → `default_context`
from the file. In the TUI, switch live with `c` or by clicking the top bar.

### The images block

Add `[contexts.<name>.images]` with a `repo_template` and steer gains registry powers for
that context: the IMAGES section in the TUI, `steer image ls` / `steer image tags`, the
tag picker in deploys and tag validation before deploying. Without the block, those
features simply stay off — everything else works.

## Managing config

The wizard is the fastest way in — it reads your AWS profiles, lists your **real**
clusters and runs a smoke test:

```bash
steer config init          # interactive setup for the first context
steer config add           # add another account/environment later
steer config list          # NAME · CLOUD · CLUSTER · MODE · DEFAULT
steer config remove dev    # drop a context (reassigns the default if needed)
steer config validate      # check the discovered steer.toml
```

Editing by hand? `steer config init --example` writes a commented starter file. After
editing, `steer config validate` tells you if something is off — and if a command hits a
cloud problem (expired SSO, wrong cluster), the error tells you what to run to fix it.
See [Troubleshooting](/steer/docs/troubleshooting).
````

- [ ] **Step 2: deploys.md**

Crear `src/content/steer-docs/deploys.md`:

````markdown
---
title: Deploys
description: Preview → confirm → live rollout. Tag pickers, registry validation, stuck detection and one-command rollback.
order: 3
---

## The flow

Every deploy follows the same shape, in the CLI and the TUI: **preview what will happen →
confirm → follow the rollout live**. Nothing mutates without showing you first.

```bash
$ steer --context stg service deploy -s api -t v1.2.3
Deploy preview (stg):
  api: v1.2.2 -> v1.2.3
Apply? [y/N]:
```

No flags? A fuzzy picker opens for the service, then for the tag:

```bash
steer service deploy      # pick service and tag interactively
```

In the TUI: select the service, press `d` (or click `[ Deploy (d) ]`), and the inline
form opens with a **tag picker** — your registry's recent tags, filtered live as you
type; `↑↓` or click to choose, `enter` to confirm.

## Validated against your registry

With the [images block](/steer/docs/configuration#the-images-block) configured, steer
checks the tag **before** deploying:

- **Tag doesn't exist in the repo** → the deploy is blocked. No more deploying a typo.
- **Repo doesn't exist** → blocked, with a hint to check `images.repo_template`.
- **Registry unreachable** (network, permissions) → the deploy proceeds with a warning.
  Validation never blocks CI on a transient registry problem.

## Watching the rollout

Add `--watch` (`-w`) and steer follows the rollout until it completes or fails — service
events stream in as they happen (poll every 3s):

```bash
$ steer service deploy -s api -t v1.2.3 -y -w
✓ deployed api -> v1.2.3
monitoring rollout (Ctrl+C to stop)...
[14:02:11] (service acme-stg-api) has started 2 tasks: (task abc123) (task def456).
Rollout: IN_PROGRESS | Running: 1 | Pending: 1 | Desired: 2
✓ deployment completed
```

In the TUI the same feed streams into the **Events** tab automatically.

### Stuck rollouts don't hang forever

ECS retries a bad image pull forever without ever reporting failure. Steer detects it:
after **3 provisioning failures** (image pull errors, no capacity) it stops the watch,
tells you the rollout is stuck and suggests the rollback command. The TUI shows the same
and points at `R`.

## Rollback

One command, back to the previous task definition (a resize is rolled back too):

```bash
steer service rollback -s api
```

In the TUI: `R` or the `[ Rollback (R) ]` button, confirm, done.

## CI usage

`-y` skips the confirmation; combine with `--context` and exact flags:

```bash
steer --context stg service deploy -s api -t "$GIT_TAG" -y --watch
```

Exit code is non-zero if the deploy fails, the tag doesn't validate or the rollout gets
stuck under `--watch` — safe to gate pipelines on.
````

- [ ] **Step 3: Build y verificación**

```bash
cd /Users/juanmaav92/Documents/juanMa/juanMaAV92.github.io && npm run build
test -f dist/steer/docs/configuration/index.html && echo OK-config
test -f dist/steer/docs/deploys/index.html && echo OK-deploys
grep -o 'default_context' dist/steer/docs/configuration/index.html | head -1
grep -o 'Deploy preview' dist/steer/docs/deploys/index.html | head -1
grep -o 'Configuration' dist/steer/docs/index.html | head -1   # sidebar actualizada en todas las páginas
```
Expected: todo imprime.

- [ ] **Step 4: Commit**

```bash
git add src/content/steer-docs/configuration.md src/content/steer-docs/deploys.md
git commit -m "feat: steer docs — configuration and deploys pages"
```

---

### Task 3: Páginas Operations y CLI reference

**Files:**
- Create: `src/content/steer-docs/operations.md`
- Create: `src/content/steer-docs/cli.md`

**Interfaces:**
- Consumes: colección y clases del layout (Task 1). Solo `.md`.

- [ ] **Step 1: operations.md**

Crear `src/content/steer-docs/operations.md`:

````markdown
---
title: Operations
description: Day-two work — status, scale, resize, logs, events and images, from the CLI and the TUI.
order: 4
---

## Status

```bash
steer service status        # alias: steer service ls
steer service status -w     # refresh in place (default every 15s)
```

One table: desired/running/pending counts, service state, the **image tag actually
running** and the task's CPU/memory. Red running count = below desired; yellow pending =
instances starting. The TUI sidebar shows the same, refreshed automatically.

## Scale

```bash
steer service scale -s api -c 3
```

Sets the desired task count (confirmation included; `-y` to skip). TUI: `s` or the
`[ Scale (s) ]` button.

## Resize (CPU / memory)

```bash
steer service resize -s api --cpu 0.5 --memory 2GB
```

Registers a new revision with the new resources and rolls it out (`-w` to watch). CPU
accepts `0.5`, `1` or `500m`; memory accepts `2GB`, `2048` or `512MB`. Only combos your
provider actually supports are accepted — get it wrong and the error lists the valid
tiers. In the TUI, `z` opens a picker that only shows valid combos.
`rollback` reverts resources too.

## Logs

```bash
steer service logs -s api          # last 100 lines from the last hour
steer service logs -s api -f      # keep following (poll every 3s, Ctrl+C to stop)
steer service logs -s api -n 25   # fewer lines
```

Zero configuration: steer discovers where the logs live from the service's task
definition (the `awslogs` driver). Tasks with several containers (app + sidecars) are
merged into one chronological stream, each line prefixed with `[container]`. In the TUI,
the **Logs** tab tails and follows the selected service automatically — and it won't
steal your scroll position while you read history.

> Logs are read through CloudWatch Logs, which can only scan forward — "the last 100
> lines" means the last 100 within the past hour. A service using a different log driver
> (firelens, splunk…) shows a clear message instead of an error dump.

## Events

```bash
steer service events -s api
```

The service's recent history as ECS tells it — tasks started, health checks failed,
steady state reached. Last 20 events, oldest first, errors in red. In the TUI the
**Events** tab shows them for the selected service and refreshes while you watch; during
a deploy the live rollout feed takes over the tab.

## Images

```bash
steer image ls              # repos: name · latest tag · pushed  (alias: img)
steer image tags -r api     # tags of one repo: TAG · AGE · SIZE · DIGEST · ● now
```

`● now` marks the tag currently running in the sibling service. Only real, deployable
images are listed — dangling manifests, attestations and signatures are filtered out. In
the TUI, the IMAGES section lists repos; selecting one shows its tags in the panel.
````

- [ ] **Step 2: cli.md**

Crear `src/content/steer-docs/cli.md`:

````markdown
---
title: CLI reference
description: Every steer command and flag, in one page.
order: 6
---

## Global

| Flag / var | What it does |
| --- | --- |
| `--context <name>`, `-c` | Pick the context for this invocation. |
| `STEER_CONTEXT` | Env-var alternative to `--context` (useful in CI). |
| `default_context` | Fallback, set in `steer.toml`. Priority: flag → env → file. |
| `--version` | Print the installed version. |

Mutating commands (`deploy`, `scale`, `rollback`, `resize`) always preview and ask;
`-y` / `--yes` skips the confirmation for scripts. Contexts with `writable = false`
refuse them entirely.

## steer tui

Opens the dashboard. See the [TUI guide](/steer/docs/tui).

## steer config

| Command | What it does |
| --- | --- |
| `config init` | Interactive wizard: detects AWS profiles, lists clusters, smoke test, writes `steer.toml`. |
| `config init --example` | Writes a commented starter `steer.toml` instead. |
| `config add` | Wizard for one more context in the existing file. |
| `config list` | Contexts table: `NAME · CLOUD · CLUSTER · MODE · DEFAULT`. |
| `config remove <name>` | Drops a context; reassigns `default_context` if it pointed there. |
| `config validate` | Checks the discovered `steer.toml`. |

## steer service (alias: svc)

| Command | Flags | What it does |
| --- | --- | --- |
| `service status` (alias `ls`) | `-w`, `--interval <s>` (default 15) | Services table: counts, state, running tag, CPU/MEM. |
| `service deploy` | `-s`, `-t`, `-y`, `-w`, `--interval <s>` (default 3) | Deploy a tag. No `-s`/`-t` → interactive picker. Validates the tag against the registry when configured. |
| `service scale` | `-s`, `-c <count>`, `-y` | Set the desired task count. |
| `service rollback` | `-s`, `-y` | Back to the previous task definition (resources included). |
| `service resize` | `-s`, `--cpu`, `--memory`, `-y`, `-w`, `--interval <s>` (default 3) | New revision with new CPU/memory + rollout. Invalid combos are rejected with the valid tiers. |
| `service logs` | `-s`, `-f`, `-n <lines>` (default 100), `--interval <s>` (default 3) | Recent logs (last hour), all containers merged; `-f` keeps streaming. |
| `service events` | `-s` | Last 20 service events, oldest first, errors in red. |

## steer image (alias: img)

| Command | Flags | What it does |
| --- | --- | --- |
| `image ls` | — | Repos with their latest tag and push date. |
| `image tags` | `-r <repo>` | Tags of a repo: `TAG · AGE · SIZE · DIGEST`, `● now` on the running one. |

Requires the `[contexts.<name>.images]` block — without it, these commands explain how
to enable the capability.

## Exit codes

`0` on success. Non-zero when a command fails, a deploy is blocked by validation, or a
watched rollout fails or gets stuck — safe to gate CI on.
````

- [ ] **Step 3: Build y verificación**

```bash
cd /Users/juanmaav92/Documents/juanMa/juanMaAV92.github.io && npm run build
test -f dist/steer/docs/operations/index.html && echo OK-ops
test -f dist/steer/docs/cli/index.html && echo OK-cli
grep -o 'last 100 lines' dist/steer/docs/operations/index.html | head -1
grep -o 'STEER_CONTEXT' dist/steer/docs/cli/index.html | head -1
```

- [ ] **Step 4: Commit**

```bash
git add src/content/steer-docs/operations.md src/content/steer-docs/cli.md
git commit -m "feat: steer docs — operations and CLI reference pages"
```

---

### Task 4: Páginas TUI guide y Troubleshooting

**Files:**
- Create: `src/content/steer-docs/tui.md`
- Create: `src/content/steer-docs/troubleshooting.md`

**Interfaces:**
- Consumes: colección y clases del layout (Task 1), incluidas `.term`/`.tui` para el mock.

- [ ] **Step 1: tui.md**

Crear `src/content/steer-docs/tui.md`:

````markdown
---
title: TUI guide
description: The dashboard, tab by tab — keyboard, mouse, filters, context switching and live tabs.
order: 5
---

## The layout

```bash
steer tui
```

<div class="term">
  <div class="term-bar"><i></i><i></i><i></i><span>steer — tui</span></div>
  <pre class="tui"><span class="topbar">⛵ steer · <span class="c">aws</span> · <span class="c">staging</span> <span class="dim">(cluster: staging-cluster)</span>          <span class="ok">writable ●</span></span>
<span class="row">
<span class="side"><span class="sec">SERVICES        <span class="dim">(4)</span></span>
<span class="item sel"><span class="up">●</span> api      2/2  <span class="c">v1.4</span></span>
<span class="item"><span class="up">●</span> web      3/3  <span class="c">v2.0</span></span>
<span class="item"><span class="warn">◐</span> worker   1/2  <span class="c">v1.1</span></span>
<span class="item"><span class="off">○</span> cron     0/1  <span class="dim">—</span></span>

<span class="sec">IMAGES          <span class="dim">(3)</span></span>
<span class="item">▸ api</span>
<span class="item">▸ web</span>
<span class="item">▸ worker</span>

<span class="sec dim">DATABASES       ···</span></span><span class="main"><span class="tabs"><span class="tab on">Details</span> <span class="tab">Events</span> <span class="tab">Logs</span></span>
  running   <span class="c">2/2</span>
  pending   0
  status    <span class="ok">ACTIVE</span>
  tag       <span class="c">v1.4</span>
  cpu·mem   <span class="c">0.5 vCPU · 2 GB</span>

  <span class="act">[d]</span> deploy  <span class="act">[s]</span> scale  <span class="act">[z]</span> resize  <span class="act">[R]</span> rollback</span></span>
<span class="botbar">↑↓ select · tab switch panel · / filter · c context · ? help · q quit</span></pre>
</div>

Four zones: the **top bar** (cloud · context · cluster · write mode), the **sidebar**
(services and images), the **panel** (tabs for the selected item) and the **help bar**
(every shortcut, always visible).

## Keyboard and mouse

Everything works both ways — this is a TUI you can actually click.

| Keys | Action |
| --- | --- |
| `↑` `↓` | Move the selection (or scroll the panel when it has focus). |
| `tab` | Switch focus sidebar ↔ panel. |
| `←` `→` | Switch panel tab (Details / Events / Logs). |
| `enter` / `space` | Collapse or expand a sidebar section. |
| `/` | Filter the sidebar live; `esc` clears, `enter` keeps the query. |
| `d` `s` `z` `R` | Deploy · Scale · Resize · Rollback the selected service. |
| `c` | Context switcher (also: click the top bar). |
| `r` | Refresh services and images. |
| `q` | Quit. |

Mouse: click to select services, repos, tabs and section headers; click the action
buttons; scroll with the wheel — sidebar or panel, whichever is under the cursor.

## The three tabs

- **Details** — counts, state, running tag, resources, and the action buttons. Actions
  open an **inline form** right here (type a tag, pick from the tag list, confirm).
- **Events** — the service's recent history at rest, refreshed while you watch. When a
  deploy or resize starts, the live rollout feed takes over until it finishes.
- **Logs** — tails the last lines and follows new ones live. Scroll up to read history:
  new lines won't yank you back down until you return to the bottom.

## Contexts and safety

The context switcher (`c` or click the top bar) swaps account/environment/cloud without
relaunching — sidebar, panel and capabilities reload for the new target. Contexts with
`writable = false` show a read-only notice and block every mutating action; the buttons
tell you why instead of failing silently.

No `steer.toml` yet? The TUI tells you exactly what to run: `steer config init`.
````

- [ ] **Step 2: troubleshooting.md**

Crear `src/content/steer-docs/troubleshooting.md`:

````markdown
---
title: Troubleshooting
description: Steer's errors teach the remedy. The common ones, what they mean and how to fix them.
order: 7
---

## Errors that teach

When something cloud-side fails, steer doesn't dump a stack trace — it maps the failure
to what you should actually do. These are the common ones:

| You see | It means | Fix |
| --- | --- | --- |
| `AWS session expired` | Your SSO token aged out. | `aws sso login --profile <your-profile>` |
| `AWS profile not found` | The `profile` in `steer.toml` doesn't exist in `~/.aws`. | `aws configure --profile <name>`, or fix the name in `steer.toml`. |
| `no AWS credentials found` | Nothing to authenticate with. | `aws configure`, or `aws sso login` if your team uses SSO. |
| `access denied` | Your role lacks read permissions. | Ask whoever manages AWS to grant ECS / ECR / CloudWatch Logs read access. |
| `cluster not found in this account/region` | Wrong cluster name or region. | Check `cluster` in `steer.toml` and the profile's region. |
| `could not reach AWS` | Network problem. | Check your connection/VPN and retry. |

## "context X is read-only"

That context has `writable = false` in `steer.toml` — the guardrail, not a bug. Deploy,
scale, rollback and resize are blocked in both CLI and TUI. If the environment really
should accept writes, flip `writable = true` (and think twice for prod).

## Deploy blocked: "tag not found" / "repository not found"

Registry validation caught a tag that doesn't exist, or `images.repo_template` points at
a repo that doesn't. Check `steer image tags -r <service>` for what's actually pushed,
and the [images block](/steer/docs/configuration#the-images-block) for the template. If
the registry is merely unreachable, deploys proceed with a warning instead.

## "deployment stuck: image pull failing"

The rollout hit 3 provisioning failures — usually a tag that exists in the registry but
can't be pulled by the cluster, or no capacity. Roll back
(`steer service rollback -s <service>`) and check the tag/architecture.

## Logs say "no log source for this service"

The service's containers don't log through the `awslogs` driver (firelens, splunk…), so
steer can't read them yet. Logs from those drivers live wherever that pipeline ships
them.

## No logs shown, but the service runs

`service logs` reads the **last hour** — a quiet service legitimately shows
`no logs in the last hour`. Use `-f` to wait for new lines.

## macOS: "cannot be opened" on a downloaded binary

Direct downloads (not Homebrew) aren't notarized; clear the quarantine flag once:

```bash
xattr -d com.apple.quarantine ./steer
```

Installing via `brew install juanMaAV92/tap/steer` avoids this entirely.

## Windows: the TUI looks broken

Use **Windows Terminal**. The legacy `cmd.exe` console degrades the TUI (mouse included).

## Still stuck?

`steer config validate` checks your config; `steer --version` tells you what you're
running; [open an issue](https://github.com/juanMaAV92/steer/issues) with both outputs.
````

- [ ] **Step 3: Build y verificación**

```bash
cd /Users/juanmaav92/Documents/juanMa/juanMaAV92.github.io && npm run build
test -f dist/steer/docs/tui/index.html && echo OK-tui
test -f dist/steer/docs/troubleshooting/index.html && echo OK-ts
grep -o 'class="tui"' dist/steer/docs/tui/index.html | head -1
grep -o 'aws sso login' dist/steer/docs/troubleshooting/index.html | head -1
grep -o 'class="side-link' dist/steer/docs/index.html | wc -l    # 7 páginas × 2 (sidebar + variante mobile) = 14
```

- [ ] **Step 4: Commit**

```bash
git add src/content/steer-docs/tui.md src/content/steer-docs/troubleshooting.md
git commit -m "feat: steer docs — TUI guide and troubleshooting pages"
```

---

### Task 5: Refresh de la landing `/steer`

**Files:**
- Modify: `src/pages/steer.astro`

**Interfaces:**
- Consumes: nada nuevo. La wiki ya existe en `/steer/docs` (Tasks 1–4).

- [ ] **Step 1: Mock del TUI del hero al día**

En `src/pages/steer.astro`, dentro del `<pre class="tui">` del hero, reemplazar:

```html
<span class="sec dim">IMAGES (ECR)    ···</span>
<span class="dim">  coming soon</span>

<span class="sec dim">DATABASES       ···</span></span>
```

por:

```html
<span class="sec">IMAGES          <span class="dim">(3)</span></span>
<span class="item">▸ api</span>
<span class="item">▸ web</span>
<span class="item">▸ worker</span>

<span class="sec dim">DATABASES       ···</span></span>
```

y reemplazar la línea de acciones:

```html
  <span class="act">[d]</span> deploy   <span class="act">[s]</span> scale   <span class="act">[R]</span> rollback</span></span>
```

por:

```html
  <span class="act">[d]</span> deploy   <span class="act">[s]</span> scale   <span class="act">[z]</span> resize   <span class="act">[R]</span> rollback</span></span>
```

- [ ] **Step 2: Highlights al día (mismas 6 tarjetas, 3 descripciones reescritas)**

En el array `highlights`, reemplazar estos tres objetos (los otros tres quedan igual):

```js
{ icon: '🚀', title: 'Interactive deploys', desc: 'Pick services and image tags from live, fuzzy-filtered lists — the tag picker reads your registry, and every deploy is validated against it before it runs. Stuck rollouts are detected, not waited on forever.' },
{ icon: '📊', title: 'Hybrid TUI', desc: 'The health of everything at a glance in a persistent multi-panel layout — keyboard-driven, mouse-friendly, with live Events and Logs tabs per service. Switch account or cloud from inside the TUI. Inspired by lazydocker / lazygit.' },
{ icon: '⚙️', title: 'Config-driven', desc: 'An interactive wizard (steer config init) detects your AWS profiles, lists your real clusters and writes steer.toml for you. Several accounts or environments are just several contexts.' },
```

- [ ] **Step 3: CTA a la doc en nav y hero**

En la nav, añadir el enlace Docs antes del de GitHub:

```html
<a href="/steer/docs" class="ghost">Docs</a>
<a href={repo} class="ghost" target="_blank" rel="noopener">GitHub ↗</a>
```

En el bloque `.cta` del hero, añadir el botón de docs entre los dos existentes:

```html
<a class="btn" href={repo} target="_blank" rel="noopener">View on GitHub ↗</a>
<a class="btn btn-ghost" href="/steer/docs">Read the docs →</a>
<a class="btn btn-ghost" href="#how">See how it works ↓</a>
```

- [ ] **Step 4: Build y verificación**

```bash
cd /Users/juanmaav92/Documents/juanMa/juanMaAV92.github.io && npm run build
grep -c 'coming soon' dist/steer/index.html        # 0
grep -o 'Read the docs' dist/steer/index.html | head -1
grep -o '\[z\]</span> resize' dist/steer/index.html | head -1
grep -o 'href="/steer/docs"' dist/steer/index.html | head -1
```
Expected: `coming soon` = 0; el resto imprime.

- [ ] **Step 5: Commit**

```bash
git add src/pages/steer.astro
git commit -m "feat: refresh steer landing — images/resize in the TUI mock, updated highlights, docs CTA"
```

---

### Task 6: README de steer enlaza la doc (repo steer)

**Files:**
- Modify: `/Users/juanmaav92/Documents/juanMa/steer/README.md:16-19` (bloque alpha)

Nota: este task vive en el **repo de steer** y su commit va en español (convención de ese
repo). El enlace apunta a la doc que se publica al pushear el sitio — coordinar con el
push del sitio para no publicar un enlace muerto.

- [ ] **Step 1: Añadir el enlace**

En `/Users/juanmaav92/Documents/juanMa/steer/README.md`, reemplazar el bloque:

```markdown
> 🚧 **Alpha.** The `service` vertical (deploy, scale, rollback, status) and the interactive
> TUI work today on AWS ECS. Registry, databases and more capabilities are on the
> [roadmap](docs/superpowers/plans/2026-06-15-roadmap.md).
> Design: [`docs/design.md`](docs/design.md).
```

por:

```markdown
> 🚧 **Alpha.** The `service` vertical (deploy, scale, rollback, status, logs, events) and
> the interactive TUI work today on AWS ECS. Registry, databases and more capabilities are
> on the [roadmap](docs/superpowers/plans/2026-06-15-roadmap.md).
> Design: [`docs/design.md`](docs/design.md).
>
> 📖 **Documentation:** <https://juanmaav92.github.io/steer/docs>
```

- [ ] **Step 2: Commit (en el repo de steer)**

```bash
git -C /Users/juanmaav92/Documents/juanMa/steer add README.md
git -C /Users/juanmaav92/Documents/juanMa/steer commit -m "docs: README enlaza la documentación publicada"
```
