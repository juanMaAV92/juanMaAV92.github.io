---
title: Referencia de la CLI
description: Todos los comandos y flags de steer, en una sola página.
order: 6
---

## Global

| Flag / variable | Qué hace |
| --- | --- |
| `--context <name>` | Elige el contexto para esta ejecución. |
| `STEER_CONTEXT` | Alternativa a `--context` como variable de entorno (útil en CI). |
| `default_context` | Valor por defecto, definido en `steer.toml`. Prioridad: flag → variable → archivo. |
| `--version` | Muestra la versión instalada. |

Los comandos que modifican algo (`deploy`, `scale`, `rollback`, `resize`) siempre muestran una vista previa y preguntan;
`-y` / `--yes` se salta la confirmación en scripts. Los contextos con `writable = false`
los rechazan por completo.

## steer tui

Abre el dashboard. Mira la [guía de la TUI](/es/steer/docs/tui).

## steer config

| Comando | Qué hace |
| --- | --- |
| `config init` | Asistente interactivo: detecta perfiles de AWS, lista clusters, prueba la conexión y escribe `steer.toml`. |
| `config init --example` | En su lugar, escribe un `steer.toml` inicial comentado. |
| `config add` | Asistente para agregar un contexto más al archivo existente. |
| `config list` | Tabla de contextos: `NAME · CLOUD · CLUSTER · MODE · DEFAULT`. |
| `config remove <name>` | Elimina un contexto; reasigna `default_context` si apuntaba ahí. |
| `config validate` | Revisa el `steer.toml` encontrado. |

## steer service (alias: svc)

| Comando | Flags | Qué hace |
| --- | --- | --- |
| `service status` (alias `ls`) | `-w`, `--interval <s>` (por defecto 15) | Tabla de servicios: conteos, estado, tag en ejecución, CPU/MEM. |
| `service deploy` | `-s`, `-t`, `-y`, `-w`, `--interval <s>` (por defecto 3) | Despliega un tag. Sin `-s`/`-t` → selector interactivo. Valida el tag contra el registry cuando está configurado. |
| `service scale` | `-s`, `-c <count>`, `-y` | Fija el número deseado de tareas. |
| `service rollback` | `-s`, `-y` | Vuelve a la task definition anterior (recursos incluidos). |
| `service resize` | `-s`, `--cpu`, `--memory`, `-y`, `-w`, `--interval <s>` (por defecto 3) | Nueva revisión con otra CPU/memoria + rollout. Las combinaciones inválidas se rechazan mostrando los niveles válidos. |
| `service logs` | `-s`, `-f`, `-n <lines>` (por defecto 100), `--interval <s>` (por defecto 3) | Logs recientes (última hora), todos los contenedores unidos; `-f` sigue transmitiendo. |
| `service events` | `-s` | Los últimos 20 eventos del servicio, del más antiguo al más reciente, errores en rojo. |

## steer image (alias: img)

| Comando | Flags | Qué hace |
| --- | --- | --- |
| `image ls` | — | Repos con su último tag y fecha de push. |
| `image tags` | `-r <repo>` | Tags de un repo: `TAG · AGE · SIZE · DIGEST`, con `● now` en el que está corriendo. |

Requiere el bloque `[contexts.<name>.images]`; sin él, estos comandos te explican cómo
activar la capacidad.

## Códigos de salida

`0` si todo sale bien. Distinto de cero cuando un comando falla, cuando la validación bloquea un deploy o cuando un
rollout seguido con watch falla o se atasca. Puedes condicionar tu CI a él con tranquilidad.
