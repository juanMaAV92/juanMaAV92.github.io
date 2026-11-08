---
title: Primeros pasos
description: Instala steer, conéctalo a tu cuenta de AWS y haz tu primer deploy.
order: 1
---

## Instalación

### macOS — Homebrew (recomendado)

```bash
brew install juanMaAV92/tap/steer

# para actualizar después
brew update && brew upgrade steer
```

Sin avisos de Gatekeeper: el cask quita la marca de cuarentena al instalar.

### Linux (y cualquier sistema con Go instalado)

```bash
# instala Y actualiza — el mismo comando, siempre trae la última versión
go install github.com/juanMaAV92/steer/cmd/steer@latest
```

¿Sin Go? Descarga `steer_*_linux_{amd64,arm64}.tar.gz` de la
[última versión](https://github.com/juanMaAV92/steer/releases/latest) y pon `steer`
en tu `PATH`.

### Windows

Descarga `steer_*_windows_amd64.zip` de la
[última versión](https://github.com/juanMaAV92/steer/releases/latest), descomprímelo y agrega
`steer.exe` a tu `PATH`. Usa **Windows Terminal**: en la consola antigua `cmd.exe` la TUI
(mouse incluido) se ve mal.

Revisa tu instalación cuando quieras:

```bash
steer --version
```

## Conecta tu nube

Corre el asistente interactivo. Este es el paso único para quien conoce la nube:

```bash
steer config init
```

El asistente lee los perfiles de AWS que ya tienes en `~/.aws`, te muestra tus clusters
**reales** para que elijas, hace una prueba de conexión y escribe `steer.toml` por ti.
Después puedes agregar más cuentas o entornos con `steer config add`.

¿Prefieres un archivo? `steer config init --example` escribe un `steer.toml` inicial
comentado para que lo edites a mano. Los detalles están en [Configuración](/es/steer/docs/configuration).

## Abre el dashboard

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

Elige un servicio, presiona un botón (o `d` / `s` / `z` / `R`), confirma en el formulario
en línea y mira cómo el rollout llega en vivo a la pestaña Events. El recorrido completo está en la
[guía de la TUI](/es/steer/docs/tui).

## Haz tu primer deploy

Desde la TUI: selecciona el servicio, presiona `d`, elige un tag en el selector (lee tu
registry) y confirma. O hazlo con un script:

```bash
# interactivo: sin flags → se abre un selector con búsqueda para servicio y tag
steer service deploy

# explícito y listo para CI
steer --context stg service deploy -s api -t v1.2.3 --watch
```

Cada deploy muestra una vista previa (tag actual → tag nuevo) y pregunta antes de aplicar. El rollback
es un solo comando: `steer service rollback -s api`. El flujo completo, incluida la validación
de los deploys contra tu registry, está en [Deploys](/es/steer/docs/deploys).

## Siguientes pasos

- [Configuración](/es/steer/docs/configuration) — contextos, plantillas de nombres, prod en solo lectura.
- [Deploys](/es/steer/docs/deploys) — vistas previas, validación de tags, watch, rollback.
- [Operación](/es/steer/docs/operations) — status, scale, resize, logs, events.
- [Referencia de la CLI](/es/steer/docs/cli) — todos los comandos y flags.
