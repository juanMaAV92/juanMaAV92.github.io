---
title: Solución de problemas
description: Los errores de steer te enseñan el remedio. Los más comunes, qué significan y cómo arreglarlos.
order: 7
---

## Errores que enseñan

Cuando algo falla del lado de la nube, steer no te suelta un stack trace: traduce el fallo
a lo que de verdad tienes que hacer. Estos son los más comunes:

| Ves | Significa | Solución |
| --- | --- | --- |
| `AWS session expired` | Tu token de SSO venció. | `aws sso login --profile <your-profile>` |
| `AWS profile not found` | El `profile` de `steer.toml` no existe en `~/.aws`. | `aws configure --profile <name>`, o corrige el nombre en `steer.toml`. |
| `no AWS credentials found` | No hay con qué autenticarse. | `aws configure`, o `aws sso login` si tu equipo usa SSO. |
| `access denied` | Tu rol no tiene permisos de lectura. | Pídele a quien administra AWS acceso de lectura a ECS / ECR / CloudWatch Logs. |
| `cluster not found in this account/region` | Nombre de cluster o región equivocados. | Revisa `cluster` en `steer.toml` y la región del perfil. |
| `could not reach AWS` | Problema de red. | Revisa tu conexión/VPN y vuelve a intentar. |

## "context X is read-only"

Ese contexto tiene `writable = false` en `steer.toml`: es el guardrail, no un bug. Deploy,
scale, rollback y resize quedan bloqueados en la CLI y en la TUI. Si de verdad ese entorno
debe aceptar cambios, pon `writable = true` (y piénsalo dos veces si es prod).

## Deploy bloqueado: "tag not found" / "repository not found"

La validación del registry atrapó un tag que no existe, o `images.repo_template` apunta a
un repo que no existe. Revisa con `steer image tags -r <service>` qué está publicado de verdad,
y el [bloque images](/es/steer/docs/configuration#el-bloque-images) para la plantilla. Si
el registry simplemente no responde, los deploys siguen con una advertencia.

## "deployment stuck: image pull failing"

El rollout llegó a 3 fallos de aprovisionamiento. Casi siempre es un tag que existe en el registry pero
que el cluster no puede bajar, o falta de capacidad. Haz rollback
(`steer service rollback -s <service>`) y revisa el tag/la arquitectura.

## Los logs dicen "no log source for this service"

Los contenedores del servicio no envían sus logs con el driver `awslogs` (firelens, splunk…), así que
steer todavía no puede leerlos. Los logs de esos drivers quedan donde sea que ese pipeline los
envíe.

## No aparecen logs, pero el servicio está corriendo

`service logs` lee la **última hora**: un servicio tranquilo puede mostrar con toda razón
`no logs in the last hour`. Usa `-f` para esperar líneas nuevas.

## macOS: "cannot be opened" en un binario descargado

Las descargas directas (no Homebrew) no están notarizadas; quita la marca de cuarentena una vez:

```bash
xattr -d com.apple.quarantine ./steer
```

Si instalas con `brew install juanMaAV92/tap/steer`, te evitas esto por completo.

## Windows: la TUI se ve rota

Usa **Windows Terminal**. La consola antigua `cmd.exe` daña la TUI (mouse incluido).

## ¿Sigues atascado?

`steer config validate` revisa tu configuración; `steer --version` te dice qué versión estás
corriendo; [abre un issue](https://github.com/juanMaAV92/steer/issues) con ambas salidas.
