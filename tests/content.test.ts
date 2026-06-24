import { describe, expect, it } from 'vitest';
import { DEFAULT_LOCALE, LOCALES, routeForLocale } from '../src/i18n/config';
import { labs } from '../src/data/labs';
import { products } from '../src/data/products';

describe('site content model', () => {
  it('supports the required locales and default route behavior', () => {
    expect(LOCALES).toEqual(['zh-TW', 'en', 'ja']);
    expect(DEFAULT_LOCALE).toBe('zh-TW');
    expect(routeForLocale('zh-TW', '/apps')).toBe('/zh-TW/apps');
    expect(routeForLocale('en', '/labs')).toBe('/en/labs');
  });

  it('contains the four official apps and games without fake release claims', () => {
    expect(products.map((product) => product.id)).toEqual([
      'nihongo-tango',
      'grassland-brick',
      'fishing-festival',
      'pocket-commissions'
    ]);

    const unreleased = products.filter((product) => product.status !== 'published' && product.status !== 'live-web-game');
    expect(unreleased.every((product) => product.url === null)).toBe(true);
    expect(unreleased.every((product) => product.ctaKind === 'disabled')).toBe(true);
  });

  it('keeps Labs curated and flags the broken GuessAI Canvas app link', () => {
    expect(labs.map((lab) => lab.id)).toEqual([
      'ai-components',
      'guessai-canvas',
      'diary-box',
      'topic-chat'
    ]);

    const guessai = labs.find((lab) => lab.id === 'guessai-canvas');
    expect(guessai?.linkStatus).toBe('detail-page-only');
  });
});
