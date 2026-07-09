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
