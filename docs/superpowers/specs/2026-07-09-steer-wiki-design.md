# Wiki de steer (multi-página) + actualización de la landing — Diseño

**Fecha:** 2026-07-09 · **Estado:** aprobado
**Objetivo:** documentación de producto para usuarios reales de steer bajo `/steer/docs`,
separada por flujos, escrita en Markdown sobre content collections de Astro; y actualizar
la landing `/steer` (case study) que quedó ~4 hitos atrás. El README de steer gana un
enlace a la wiki cuando esté publicada.

## Decisiones (votadas)

1. **Audiencia: usuarios reales de steer.** Docs de producto organizadas por tareas, no
   narrativa de portfolio. La estética del sitio las hace lucir de paso.
2. **Approach A: Markdown + layout compartido** (content collections de Astro v4). El
   contenido se escribe en `.md`; un layout único pone sidebar, TOC, Shiki y la estética.
   Descartados: páginas .astro artesanales por flujo (caro de mantener, el dolor de
   go-utils multiplicado) y Starlight (dependencia gorda, visualmente ajeno).
3. **go-utils y kotlin-utils NO migran.** Son listas planas estables ya pagadas; YAGNI.
   El layout/piezas quedan disponibles si algún día duelen.
4. **Sin MDX en v1.** Los mocks del TUI van como HTML inline dentro del markdown (2-3
   páginas), con clases que el layout estila. Cero dependencias nuevas.
5. **Idioma: inglés** (como el sitio y el producto). El contenido se escribe en el repo
   del sitio, destilado del README/parity/specs de steer — documenta comportamiento de
   usuario, no internals; no hay sync automático que mantener.

## URLs y mapa de páginas

```
/steer                        → landing / case study (steer.astro, actualizada)
/steer/docs                   → Getting started (portada de la wiki)
/steer/docs/configuration
/steer/docs/deploys
/steer/docs/operations
/steer/docs/tui
/steer/docs/cli
/steer/docs/troubleshooting
```

Siete páginas separadas por flujo. **Cada página de flujo muestra las dos superficies
(CLI y TUI)** — el principio de paridad del propio steer.

1. **Getting started** (`getting-started.md`, sirve `/steer/docs`) — instalar
   (brew / go install / binario / Windows), `config init` con el wizard, abrir el TUI,
   primer deploy. El camino feliz en una página corta.
2. **Configuration** — anatomía de `steer.toml`: contexto = cloud · credencial · cluster ·
   templates · `writable`; el bloque `[contexts.*.images]`; `config add/list/remove/validate`;
   dónde vive el fichero (repo actual o `~/.config/steer/`); nota de seguridad (no commitear).
3. **Deploys** — preview → confirmar; tag-picker; validación contra el registry
   (estricta si el tag/repo no existe, degradable si el registry no responde); `--watch`
   y detección de rollout atascado (3 fallos de pull); rollback.
4. **Operations** — `status` (+`-w`), `scale`, `resize` (tiers válidos por provider),
   `logs` (tail 100 de la última hora, `-f`, merge multi-contenedor con prefijo
   `[container]`) y `events` (últimos 20).
5. **TUI guide** — layout multi-panel, teclado y mouse, filtro `/`, secciones
   colapsables, switcher de contexto (`c`/click), formularios inline, pestañas
   Details/Events/Logs (Events histórico en reposo + feed de deploy en vivo; Logs con
   follow y auto-scroll que respeta la lectura).
6. **CLI reference** — todos los comandos y flags en tablas compactas. Única página de
   referencia pura. Incluye `--context`/`STEER_CONTEXT` y `-y` para CI.
7. **Troubleshooting** — los "errores que enseñan": SSO expirado, credenciales
   ausentes, perfil/cluster no encontrado, permisos IAM, guard de solo-lectura
   (`writable=false`), logs con driver no soportado, red/VPN.

**Patrón de crecimiento:** al cerrar un hito nuevo (db, promote…), o una sección nueva en
Operations o una página nueva si el flujo lo amerita; la sidebar (generada de la
colección) lo absorbe sin rediseño.

## Arquitectura técnica

**Contenido:**

```
src/content/config.ts            → colección "steerDocs" (zod)
src/content/steer-docs/*.md      → las 7 páginas
```

Frontmatter mínimo (YAGNI): `title` (string), `description` (string, para `<meta>` y
sidebar), `order` (number, posición en sidebar). Sin tags, fechas ni drafts.

**Layout y ruta:**

- `src/layouts/SteerDocsLayout.astro` — header de steer (⛵ brand → `/steer`, GitHub,
  "← Portfolio"), **sidebar de navegación entre páginas** (colección ordenada por
  `order`, activa resaltada), contenido renderizado, prev/next al pie. Reutiliza el
  lenguaje visual de `steer.astro`: mismas variables CSS (`--bg`, `--accent` cian,
  Fraunces en títulos, JetBrains Mono), fondo grid-lines/grain. Los estilos del markdown
  renderizado (h2/h3 con anchors, tablas, código, blockquotes, `code` inline) viven aquí.
- `src/pages/steer/docs/[...slug].astro` — ruta dinámica única con `getStaticPaths()`
  sobre la colección; `getting-started` se mapea además a `/steer/docs` (slug undefined).
- **TOC "on this page"**: columna derecha con los h2 de la página actual, generada de
  `headings` que devuelve `render()`. En móvil colapsa a `<details>` (patrón go-utils).
  En pantallas estrechas la sidebar de páginas colapsa igual.

**Código:** Shiki integrado de Astro (config `markdown.shikiConfig` en
`astro.config.mjs`) con un tema oscuro acorde al sitio (p. ej. `one-dark-pro`, o
`css-variables` mapeado a la paleta propia si el resultado no casa). Fences normales en
el markdown (```bash, ```toml).

**Mocks del TUI:** HTML inline dentro del `.md` usando las clases `.term`/`.tui` — se
**extraen** de `steer.astro` a estilos compartidos por el layout (no se duplican). Solo
en las páginas que aportan (TUI guide, Deploys, Getting started).

**SEO:** cada página con `<title>`, `description` del frontmatter y `canonical`
(`https://juanmaav92.github.io/steer/docs/<slug>`). Favicon ⛵ como la landing.

## Actualización de la landing `/steer` (steer.astro)

- **Mock del TUI del hero:** IMAGES con repos reales (fuera "coming soon"), DATABASES
  sigue "···" (aún no existe), pestañas Details/Events/Logs como reales, acciones con
  `[z] resize` junto a deploy/scale/rollback.
- **Highlights:** se reescriben tarjetas existentes (sin crecer el grid) para cubrir:
  deploys validados contra el registry + tag-picker; logs/events en vivo en TUI y CLI;
  wizard de onboarding (`config init`).
- **CTA "Read the docs →"** a `/steer/docs` en el hero y en la nav.
- Lo demás (decisiones de ingeniería, who it's for, honest scope) se queda.

## README de steer

Un único cambio, **después** de publicar la wiki (no enlazar a un 404): enlace
"Documentation" a `https://juanmaav92.github.io/steer/docs` en la cabecera (junto a los
badges o en el bloque de alpha). Vive en el repo de steer, commit aparte.

## Fuera de alcance

MDX; búsqueda; versionado de docs; i18n; migración de go-utils/kotlin-utils; capturas
de pantalla reales (los mocks HTML cumplen); página de changelog (los releases de GitHub
ya lo dan); dark/light toggle (el sitio es dark).

## Criterios de aceptación

- `npm run build` verde; las 8 URLs (landing + 7 docs) se sirven en el build estático.
- Navegación: sidebar entre páginas con activa resaltada, TOC por página, prev/next.
- Los fences de código salen coloreados por Shiki sin spans manuales.
- Mobile: sidebar y TOC colapsan; sin scroll horizontal del body.
- La landing no rompe nada de lo existente (anchors, animaciones, responsive).
- El contenido cubre todo el CLI reference actual: `config init|add|list|remove|validate`,
  `service status|deploy|scale|rollback|resize|logs|events`, `image ls|tags`, `tui`,
  `--context`/`STEER_CONTEXT`, `-y`, `-w`, `-f`, `-n`.
