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
