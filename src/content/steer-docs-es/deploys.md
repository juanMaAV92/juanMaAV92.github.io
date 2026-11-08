---
title: Deploys
description: Vista previa → confirmación → rollout en vivo. Selectores de tags, validación contra el registry, detección de atascos y rollback en un comando.
order: 3
---

## El flujo

Todo deploy sigue la misma forma, en la CLI y en la TUI: **vista previa de lo que va a pasar →
confirmación → seguimiento del rollout en vivo**. Nada cambia sin mostrártelo antes.

```bash
$ steer --context stg service deploy -s api -t v1.2.3
Deploy preview (stg):
  api: v1.2.2 -> v1.2.3
Apply? [y/N]:
```

¿Sin flags? Se abre un selector con búsqueda para el servicio y luego para el tag:

```bash
steer service deploy      # elige servicio y tag de forma interactiva
```

En la TUI: selecciona el servicio, presiona `d` (o haz clic en `[ Deploy (d) ]`) y se abre el
formulario en línea con un **selector de tags**: los tags recientes de tu registry, filtrados en vivo
mientras escribes; `↑↓` o clic para elegir, `enter` para confirmar.

## Validado contra tu registry

Con el [bloque images](/es/steer/docs/configuration#el-bloque-images) configurado, steer
revisa el tag **antes** de desplegar:

- **El tag no existe en el repo** → el deploy se bloquea. Se acabó desplegar un error de tipeo.
- **El repo no existe** → se bloquea, con la sugerencia de revisar `images.repo_template`.
- **El registry no responde** (red, permisos) → el deploy sigue con una advertencia.
  La validación nunca frena el CI por un problema pasajero del registry.

## Seguir el rollout

Agrega `--watch` (`-w`) y steer sigue el rollout hasta que termine o falle. Los eventos del
servicio van llegando a medida que ocurren (consulta cada 3 s):

```bash
$ steer service deploy -s api -t v1.2.3 -y -w
✓ deployed api -> v1.2.3
monitoring rollout (Ctrl+C to stop)...
[14:02:11] (service acme-stg-api) has started 2 tasks: (task abc123) (task def456).
Rollout: IN_PROGRESS | Running: 1 | Pending: 1 | Desired: 2
✓ deployment completed
```

En la TUI, ese mismo flujo llega solo a la pestaña **Events**.

### Los rollouts atascados no se quedan colgados

ECS reintenta para siempre un pull de imagen fallido sin reportar nunca el fallo. Steer lo detecta:
después de **3 fallos de aprovisionamiento** (errores al bajar la imagen, falta de capacidad) detiene el seguimiento,
te avisa que el rollout está atascado y te sugiere el comando de rollback. La TUI muestra lo mismo
y te señala `R`.

## Rollback

Un comando y vuelves a la task definition anterior (si hubo un resize, también se revierte):

```bash
steer service rollback -s api
```

En la TUI: `R` o el botón `[ Rollback (R) ]`, confirmas y listo.

## Uso en CI

`-y` se salta la confirmación; combínalo con `--context` y flags explícitos:

```bash
steer --context stg service deploy -s api -t "$GIT_TAG" -y --watch
```

El código de salida es distinto de cero si el deploy falla, si el tag no pasa la validación o si el rollout se
atasca con `--watch`. Puedes condicionar tus pipelines a él con tranquilidad.
