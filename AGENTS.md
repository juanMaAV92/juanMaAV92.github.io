# Portafolio (juanMaAV92.github.io)

Sitio Astro estático publicado en GitHub Pages. Cada proyecto tiene su página en `src/pages/`.

## Reglas

### Las capturas siempre se pueden ampliar

Toda captura de pantalla de una página de proyecto debe abrirse en grande al hacer clic. No se publica ninguna captura que no se pueda ampliar.

- Envuelve la imagen en `<button type="button" class="frame zoomable" aria-label="Ampliar captura: …">` con un indicador `.zoom-hint` ("Ampliar ⤢").
- La captura ampliada se muestra en un `<dialog class="lightbox">` nativo:
  - Si la página tiene varias capturas, muestra los botones ‹ › y un contador "n / total". También se navega con las flechas del teclado.
  - Si la imagen es más alta que la pantalla, se ve completa con scroll vertical, nunca recortada.
  - Cierra con Esc, con el botón ✕ o con un clic fuera de la imagen. Un clic sobre la imagen o sobre las flechas no la cierra.
  - Al cerrar, el foco vuelve a la captura que estaba abierta.
  - Las capturas de celular (verticales) se ajustan al alto de la pantalla y se ven completas, sin scroll ni zoom gigante. En `cuentas-claras.astro` se hace con `data-group="mobile"` y la clase `.fit`.
- Implementación de referencia:
  - `src/pages/cuentas-claras.astro`: carrusel, grupos y lightbox con navegación.
  - `src/pages/mermaid-styler.astro`: un solo grupo.
- Si hay más de 3 o 4 capturas de escritorio, usa un carrusel con pestañas por funcionalidad en lugar de una pila de imágenes.

### Capturas reales, no maquetas

Las capturas salen de la app real corriendo con datos ficticios. No se usan maquetas hechas en HTML o SVG que imiten la interfaz.

Formato:
- WebP, con `cwebp -q 80`.
- Ancho máximo de 1600 px.
- `width` y `height` declarados en el `<img>`.
- `loading="lazy"` en todas menos la primera.

### Videos de demo

- **Origen:** se graban sobre la app real. No se recrea la interfaz.
- **Dónde vive el proyecto de render (Remotion):** fuera de este repo y fuera del repo del producto, en una carpeta temporal en `~/Documents`. Aquí solo entran el video final y su póster.
- **Idioma:** un solo video para todos los idiomas. Sin leyendas ni texto en el video, salvo el nombre del producto. El contexto lo da el texto de cada página.
- **Formato:** MP4 H.264, de unos 25 s y de 3 MB o menos. Póster en WebP.
- **Reproducción:** `muted loop playsinline`, con botón visible de pausa y reproducción. Con `prefers-reduced-motion` no arranca solo.
- **Referencia:** `src/pages/mermaid-styler.astro`.
