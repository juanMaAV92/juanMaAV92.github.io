---
title: Operación
description: El trabajo del día a día — status, scale, resize, logs, events e imágenes, desde la CLI y la TUI.
order: 4
---

## Estado

```bash
steer service status        # alias: steer service ls
steer service status -w     # se refresca en el sitio (por defecto cada 15 s)
```

Una sola tabla: conteos de desired/running/pending, estado del servicio, el **tag de imagen que
realmente está corriendo** y la CPU/memoria de la tarea. Running en rojo = por debajo de lo deseado; pending en amarillo =
instancias arrancando. La barra lateral de la TUI muestra lo mismo y se actualiza sola.

## Escalar

```bash
steer service scale -s api -c 3
```

Fija el número deseado de tareas (con confirmación; `-y` para saltarla). En la TUI: `s` o el
botón `[ Scale (s) ]`.

## Cambiar recursos (CPU / memoria)

```bash
steer service resize -s api --cpu 0.5 --memory 2GB
```

Registra una nueva revisión con los recursos nuevos y hace el rollout (`-w` para seguirlo). La CPU
acepta `0.5`, `1` o `500m`; la memoria acepta `2GB`, `2048` o `512MB`. Solo se aceptan combinaciones que tu
proveedor soporta de verdad; si te equivocas, el error te lista los niveles
válidos. En la TUI, `z` abre un selector que solo muestra combinaciones válidas.
`rollback` también revierte los recursos.

## Logs

```bash
steer service logs -s api          # últimas 100 líneas de la última hora
steer service logs -s api -f      # sigue escuchando (consulta cada 3 s, Ctrl+C para parar)
steer service logs -s api -n 25   # menos líneas
```

Cero configuración: steer descubre dónde viven los logs a partir de la task definition del
servicio (el driver `awslogs`). Las tareas con varios contenedores (app + sidecars) se
unen en un solo flujo cronológico, con cada línea precedida por `[container]`. En la TUI,
la pestaña **Logs** muestra y sigue el servicio seleccionado automáticamente, y no te
mueve el scroll mientras lees el historial.

> Los logs se leen a través de CloudWatch Logs, que solo puede recorrer hacia adelante: "las últimas 100
> líneas" significa las últimas 100 dentro de la última hora. Un servicio que usa otro driver de logs
> (firelens, splunk…) muestra un mensaje claro en lugar de un volcado de errores.

## Eventos

```bash
steer service events -s api
```

La historia reciente del servicio contada por ECS: tareas iniciadas, health checks fallidos,
estado estable alcanzado. Los últimos 20 eventos, del más antiguo al más reciente, con los errores en rojo. En la TUI, la pestaña
**Events** los muestra para el servicio seleccionado y se refresca mientras miras; durante
un deploy, el flujo del rollout en vivo toma la pestaña.

## Imágenes

```bash
steer image ls              # repos: name · latest tag · pushed  (alias: img)
steer image tags -r api     # tags de un repo: TAG · AGE · SIZE · DIGEST · ● now
```

`● now` marca el tag que está corriendo en el servicio del mismo nombre. Solo se listan imágenes reales
y desplegables: los manifiestos huérfanos, las attestations y las firmas se filtran. En
la TUI, la sección IMAGES lista los repos; al seleccionar uno, sus tags aparecen en el panel.
