// Idiomas del sitio: inglés en la raíz, español bajo /es/.
export const LANGS = ['en', 'es'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';
export const SITE = 'https://juanmaav92.github.io';

/** Ruta de una página en un idioma. `path` es la ruta en inglés: '/', '/steer', '/steer/docs/cli', '/#contacto'. */
export function localePath(lang: Lang, path: string): string {
  if (lang === DEFAULT_LANG) return path;
  if (path === '/' || path.startsWith('/#')) return `/${lang}${path}`;
  return `/${lang}${path}`;
}

export function localeUrl(lang: Lang, path: string): string {
  return `${SITE}${localePath(lang, path)}`;
}

export const LANG_NAMES: Record<Lang, string> = { en: 'English', es: 'Español' };
export const OG_LOCALE: Record<Lang, string> = { en: 'en_US', es: 'es_CO' };
