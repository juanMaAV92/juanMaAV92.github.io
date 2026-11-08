import type { Lang } from '../site';
import type { SteerDict } from './types';
import en from './en';
import es from './es';

const dictionaries: Record<Lang, SteerDict> = { en, es };

export function steerDict(lang: Lang): SteerDict {
  return dictionaries[lang];
}

/** Ruta (en inglés, sin prefijo de idioma) de una página de docs: getting-started es la portada. */
export function docPath(slug: string): string {
  return slug === 'getting-started' ? '/steer/docs' : `/steer/docs/${slug}`;
}
