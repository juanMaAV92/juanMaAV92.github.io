import type { Lang } from '../site';
import type { HomeDict } from './types';
import en from './en';
import es from './es';

export const homeDict: Record<Lang, HomeDict> = { en, es };
