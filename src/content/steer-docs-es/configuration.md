---
title: Configuración
description: steer.toml explicado — contextos, plantillas de nombres, el bloque images y entornos de solo lectura.
order: 2
---

## Dónde vive la configuración

Steer busca `steer.toml` primero en el repo actual y luego en
`~/.config/steer/steer.toml`. Deja la configuración de cada proyecto junto al proyecto, o usa un solo
archivo global para todo.

> Tu configuración tiene IDs de cuenta y role ARNs. Se queda en tu máquina: **nunca la
> subas a un repo público**.

## Contextos

Un **contexto** es un destino de deploy: nube + credencial + cluster + nombres + modo de escritura.
Varias cuentas, entornos o proyectos son simplemente varios contextos.

```toml
default_context = "dev"

[contexts.dev]
cloud            = "aws"
profile          = "acme-dev"          # perfil de AWS en ~/.aws
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
writable         = false               # solo lectura: se bloquea toda acción que modifique algo
```

| Campo | Obligatorio | Qué hace |
| --- | --- | --- |
| `cloud` | sí | Proveedor. Hoy `aws`; `gcp`/`azure` se reconocen pero todavía no están implementados. |
| `profile` | sí (aws) | Perfil de AWS de `~/.aws/config` / `~/.aws/credentials`. Los perfiles SSO funcionan. |
| `cluster` | sí | El cluster de ECS con el que habla este contexto. |
| `service_template` | no | Traduce nombres cortos a los reales: `api` → `acme-dev-api`. Las listas ocultan el prefijo. |
| `writable` | no (por defecto `false`) | `false` bloquea deploy/scale/rollback/resize, en la CLI **y** en la TUI. |
| `account_id`, `role_arn`, `region` | no | Fija la cuenta, asume un rol o cambia la región del perfil. |
| `images.repo_template` | no | Activa la capacidad de registry; mira abajo. |

### Cómo se elige el contexto

Orden de prioridad: flag `--context` → variable de entorno `STEER_CONTEXT` → `default_context`
del archivo. En la TUI cambias en vivo con `c` o haciendo clic en la barra superior.

### El bloque images

Agrega `[contexts.<name>.images]` con un `repo_template` y steer gana poderes de registry en
ese contexto: la sección IMAGES en la TUI, `steer image ls` / `steer image tags`, el
selector de tags en los deploys y la validación del tag antes de desplegar. Sin el bloque, esas
funciones simplemente quedan apagadas; todo lo demás funciona.

## Administrar la configuración

El asistente es la forma más rápida de empezar: lee tus perfiles de AWS, lista tus clusters
**reales** y hace una prueba de conexión:

```bash
steer config init          # configuración interactiva del primer contexto
steer config add           # agrega otra cuenta/entorno después
steer config list          # NAME · CLOUD · CLUSTER · MODE · DEFAULT
steer config remove dev    # elimina un contexto (reasigna el default si hace falta)
steer config validate      # revisa el steer.toml encontrado
```

¿Lo editas a mano? `steer config init --example` escribe un archivo inicial comentado. Después de
editar, `steer config validate` te dice si algo está mal. Y si un comando se topa con un
problema de la nube (SSO vencido, cluster equivocado), el error te dice qué correr para arreglarlo.
Mira [Solución de problemas](/es/steer/docs/troubleshooting).
