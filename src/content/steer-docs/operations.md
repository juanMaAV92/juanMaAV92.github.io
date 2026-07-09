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
