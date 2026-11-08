---
title: Guía de la TUI
description: El dashboard, pestaña por pestaña — teclado, mouse, filtros, cambio de contexto y pestañas en vivo.
order: 5
---

## El layout

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

Cuatro zonas: la **barra superior** (nube · contexto · cluster · modo de escritura), la **barra lateral**
(servicios e imágenes), el **panel** (pestañas del elemento seleccionado) y la **barra de ayuda**
(todos los atajos, siempre visibles).

## Teclado y mouse

Todo funciona de las dos formas: esta es una TUI en la que de verdad puedes hacer clic.

| Teclas | Acción |
| --- | --- |
| `↑` `↓` | Mueve la selección (o hace scroll en el panel cuando tiene el foco). |
| `tab` | Cambia el foco entre barra lateral ↔ panel. |
| `←` `→` | Cambia de pestaña en el panel (Details / Events / Logs). |
| `enter` / `space` | Contrae o expande una sección de la barra lateral. |
| `/` | Filtra la barra lateral en vivo; `esc` limpia, `enter` conserva la búsqueda. |
| `d` `s` `z` `R` | Deploy · Scale · Resize · Rollback del servicio seleccionado. |
| `c` | Selector de contexto (también: clic en la barra superior). |
| `r` | Refresca servicios e imágenes. |
| `?` | Muestra la lista completa de atajos. |
| `q` | Salir. |

Mouse: clic para seleccionar servicios, repos, pestañas y encabezados de sección; clic en los botones
de acción; scroll con la rueda, en la barra lateral o en el panel, el que esté bajo el cursor.

## Las tres pestañas

- **Details** — conteos, estado, tag en ejecución, recursos y los botones de acción. Las acciones
  abren un **formulario en línea** ahí mismo (escribe un tag, elígelo de la lista de tags, confirma).
- **Events** — la historia reciente del servicio en reposo, refrescada mientras miras. Cuando
  arranca un deploy o un resize, el flujo del rollout en vivo toma la pestaña hasta que termina.
- **Logs** — muestra las últimas líneas y sigue las nuevas en vivo. Sube para leer el historial:
  las líneas nuevas no te devuelven abajo hasta que vuelvas al final.

## Contextos y seguridad

El selector de contexto (`c` o clic en la barra superior) cambia de cuenta/entorno/nube sin
reiniciar: la barra lateral, el panel y las capacidades se recargan para el nuevo destino. Los contextos con
`writable = false` muestran un aviso de solo lectura y bloquean toda acción que modifique algo; los botones
te dicen por qué en lugar de fallar en silencio.

¿Todavía no tienes `steer.toml`? La TUI te dice exactamente qué correr: `steer config init`.
