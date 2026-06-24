import en from './en';
import ja from './ja';
import zhTW from './zh-TW';
import { DEFAULT_LOCALE, type Locale } from './config';

export const dictionaries = {
  'zh-TW': zhTW,
  en,
  ja
} as const;

export type Dictionary = (typeof dictionaries)[typeof DEFAULT_LOCALE];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
