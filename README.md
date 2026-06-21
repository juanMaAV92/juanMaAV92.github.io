# juanMaAV92.github.io

Landing personal servida en **https://juanMaAV92.github.io** — listado de repos de backend con estética _terminal refinado_. Hecha con [Astro](https://astro.build).

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # genera ./dist
npm run preview    # sirve el build localmente
```

## Editar el listado de repos

Todo el contenido vive en [`src/data/repos.ts`](src/data/repos.ts):

- Añade/quita objetos del array `repos` (el orden = orden en pantalla).
- `featured: true` resalta un repo con el acento verde y una estrella.
- Edita `profile` para nombre, roles, blurb y enlaces.

No hay que tocar el HTML para cambiar contenido.

## Deploy

Automático: cada push a `main` dispara `.github/workflows/deploy.yml`, que compila y publica.

> **Una vez tras crear el repo:** ve a **Settings → Pages → Build and deployment → Source: _GitHub Actions_**.

## Notas

- Es la _user page_, por eso se sirve en el dominio raíz y `astro.config.mjs` va **sin `base`**.
- El README de tu **perfil** vive en otro repo distinto: `juanMaAV92/juanMaAV92`.
