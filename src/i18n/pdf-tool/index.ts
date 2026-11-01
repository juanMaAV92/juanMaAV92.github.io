import type { PdfToolDict } from './types';

// Cada `<código>.ts` de esta carpeta es un idioma: se descubren solos.
const modules = import.meta.glob<{ default: PdfToolDict }>('./*.ts', { eager: true });

export const DEFAULT_LANG = 'es';
const SITE = 'https://juanmaav92.github.io';

export const dictionaries: PdfToolDict[] = Object.entries(modules)
  .filter(([path]) => !path.endsWith('/types.ts') && !path.endsWith('/index.ts'))
  .map(([, mod]) => mod.default)
  .sort((a, b) => (a.lang === DEFAULT_LANG ? -1 : b.lang === DEFAULT_LANG ? 1 : a.lang.localeCompare(b.lang)));

/** Ruta de la página en un idioma: el idioma por defecto vive en /pdf-tool. */
export function pathFor(lang: string): string {
  return lang === DEFAULT_LANG ? '/pdf-tool' : `/${lang}/pdf-tool`;
}

export function urlFor(lang: string): string {
  return `${SITE}${pathFor(lang)}`;
}

export function dictFor(lang: string): PdfToolDict {
  const found = dictionaries.find((d) => d.lang === lang);
  if (!found) throw new Error(`Sin diccionario para ${lang}`);
  return found;
}
