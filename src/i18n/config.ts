export const LOCALES = ['zh-TW', 'en', 'ja'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'zh-TW';

export const localeLabels: Record<Locale, string> = {
  'zh-TW': '繁中',
  en: 'EN',
  ja: '日本語'
};

export const localeHtmlLang: Record<Locale, string> = {
  'zh-TW': 'zh-Hant-TW',
  en: 'en',
  ja: 'ja'
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && LOCALES.includes(value as Locale);
}

export function routeForLocale(locale: Locale, path = '/'): string {
  const cleanPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${cleanPath}`;
}
