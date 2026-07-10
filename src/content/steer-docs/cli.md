---
title: CLI reference
description: Every steer command and flag, in one page.
order: 6
---

## Global

| Flag / var | What it does |
| --- | --- |
| `--context <name>` | Pick the context for this invocation. |
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
