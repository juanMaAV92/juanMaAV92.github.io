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
