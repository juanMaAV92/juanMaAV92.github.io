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

Priority order: `--context` flag → `STEER_CONTEXT` env var → `default_context`
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
