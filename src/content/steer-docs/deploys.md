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
