import { links } from './links';
import type { Locale } from '../i18n/config';

type Localized<T> = Record<Locale, T>;

export type ProductStatus = 'published' | 'live-web-game' | 'coming-soon' | 'in-development';
export type ProductKind = 'app' | 'web-game' | 'mobile-game' | 'pwa';
export type CtaKind = 'link' | 'disabled';

export interface Product {
  id: 'nihongo-tango' | 'grassland-brick' | 'fishing-festival' | 'pocket-commissions';
  status: ProductStatus;
  productKind: ProductKind;
  names: Localized<string>;
  descriptions: Localized<string>;
  type: Localized<string>;
  platform: Localized<string>;
  url: string | null;
  ctaKind: CtaKind;
  ctaLabel: Localized<string>;
  tags: Localized<string[]>;
  image: string;
  accent: 'green' | 'cyan' | 'gold' | 'violet';
  isFeatured: boolean;
  sortOrder: number;
  notes: Localized<string | null>;
}

const productItems: Product[] = [
  {
    id: 'nihongo-tango',
    status: 'published',
    productKind: 'app',
    names: {
      'zh-TW': 'Nihongo Tango',
      en: 'Nihongo Tango',
      ja: 'Nihongo Tango'
    },
    descriptions: {
      'zh-TW': 'JLPT N5-N1 日語單字學習 App，包含四選一測驗、每日挑戰、錯題本、學習統計、每日提醒與離線記錄。',
      en: 'A JLPT N5-N1 Japanese vocabulary app with quick quizzes, daily challenges, error logs, learning stats, daily reminders, and offline records.',
      ja: 'JLPT N5-N1 向けの日本語単語学習アプリ。四択クイズ、毎日チャレンジ、間違いノート、学習統計、毎日リマインダー、オフライン記録に対応。'
    },
    type: {
      'zh-TW': '日語單字學習 App',
      en: 'Japanese Vocabulary Learning App',
      ja: '日本語単語学習アプリ'
    },
    platform: {
      'zh-TW': 'Google Play',
      en: 'Google Play',
      ja: 'Google Play'
    },
    url: links.nihongoTango,
    ctaKind: 'link',
    ctaLabel: {
      'zh-TW': 'Google Play',
      en: 'Google Play',
      ja: 'Google Play'
    },
    tags: {
      'zh-TW': ['JLPT N5-N1', '四選一測驗', '錯題本', '每日挑戰'],
      en: ['JLPT N5-N1', 'Quick quizzes', 'Error log', 'Daily challenge'],
      ja: ['JLPT N5-N1', '四択クイズ', '間違いノート', '毎日チャレンジ']
    },
    image: '/assets/product-nihongo-tango.png',
    accent: 'green',
    isFeatured: true,
    sortOrder: 1,
    notes: {
      'zh-TW': 'Contains ads；不宣稱無廣告。',
      en: 'Contains ads; no ad-free claim.',
      ja: '広告を含みます。広告なしとは記載しません。'
    }
  },
  {
    id: 'grassland-brick',
    status: 'live-web-game',
    productKind: 'web-game',
    names: {
      'zh-TW': '草原彈磚物語',
      en: 'Grassland Brick Story',
      ja: '草原彈磚物語'
    },
    descriptions: {
      'zh-TW': '手機優先的像素打磚塊 PWA，玩家收集金幣、解鎖發射器外觀，並可分享分數卡。',
      en: 'A mobile-first pixel brick-breaker PWA where players collect coins, unlock launcher skins, and share score cards.',
      ja: 'スマホ向けのピクセルブロック崩しPWA。コイン収集、ランチャースキンの解放、スコアカード共有に対応。'
    },
    type: {
      'zh-TW': '像素打磚塊 PWA',
      en: 'Pixel Brick Breaker PWA',
      ja: 'ピクセルブロック崩しPWA'
    },
    platform: {
      'zh-TW': 'Web / PWA',
      en: 'Web / PWA',
      ja: 'Web / PWA'
    },
    url: links.brickGame,
    ctaKind: 'link',
    ctaLabel: {
      'zh-TW': '開始遊玩',
      en: 'Play Web Game',
      ja: 'ゲームを遊ぶ'
    },
    tags: {
      'zh-TW': ['像素遊戲', 'PWA', '手機優先', '分數卡'],
      en: ['Pixel game', 'PWA', 'Mobile-first', 'Score card'],
      ja: ['ピクセルゲーム', 'PWA', 'スマホ優先', 'スコアカード']
    },
    image: '/assets/product-grassland-brick.png',
    accent: 'cyan',
    isFeatured: true,
    sortOrder: 2,
    notes: {
      'zh-TW': null,
      en: null,
      ja: null
    }
  },
  {
    id: 'fishing-festival',
    status: 'coming-soon',
    productKind: 'mobile-game',
    names: {
      'zh-TW': '伊萊雅 - 大漁祭',
      en: 'Iraiya - Great Fishing Festival',
      ja: 'イライヤ - 大漁祭'
    },
    descriptions: {
      'zh-TW': '釣魚、抽獎與收集結合的手機休閒遊戲。玩家透過釣魚獲得獎項、收集魚種並累積遊玩回饋。',
      en: 'A mobile casual game combining fishing, lottery rewards, and collection. Players fish for prizes, collect catches, and progress through a festival-inspired loop.',
      ja: '釣り、抽選、コレクションを組み合わせたモバイル向けカジュアルゲーム。大漁祭をテーマに、魚を釣って報酬やコレクションを楽しめます。'
    },
    type: {
      'zh-TW': '釣魚抽獎遊戲',
      en: 'Fishing Lottery Game',
      ja: '釣り抽選ゲーム'
    },
    platform: {
      'zh-TW': '即將推出',
      en: 'Coming soon',
      ja: '近日公開'
    },
    url: null,
    ctaKind: 'disabled',
    ctaLabel: {
      'zh-TW': '即將推出',
      en: 'Coming Soon',
      ja: '近日公開'
    },
    tags: {
      'zh-TW': ['釣魚', '抽獎獎勵', '收集', '手機休閒'],
      en: ['Fishing', 'Lottery rewards', 'Collection', 'Mobile casual'],
      ja: ['釣り', '抽選報酬', 'コレクション', 'スマホカジュアル']
    },
    image: '/assets/product-fishing-festival.png',
    accent: 'gold',
    isFeatured: true,
    sortOrder: 3,
    notes: {
      'zh-TW': '開發中；不宣稱 release date、商店連結或下載數。',
      en: 'In development; no release date, store link, or download claim.',
      ja: '開発中。リリース日、ストアリンク、ダウンロード数は記載しません。'
    }
  },
  {
    id: 'pocket-commissions',
    status: 'in-development',
    productKind: 'mobile-game',
    names: {
      'zh-TW': '伊萊雅 - 委託屋',
      en: 'Pocket Commissions',
      ja: 'イライヤ - 依頼屋'
    },
    descriptions: {
      'zh-TW': '以委託、養成與回合制戰鬥為核心的放置型手機 RPG。玩家可以完成任務、培養寵物、製作道具並強化裝備與技能。',
      en: 'An idle mobile RPG centered on commissions, progression, and turn-based battles. Players can complete quests, raise pets, craft items, and upgrade equipment and skills.',
      ja: '依頼、育成、ターン制バトルを中心とした放置系モバイルRPG。クエスト、ペット育成、クラフト、装備強化、スキル成長などを楽しめます。'
    },
    type: {
      'zh-TW': '放置型手機 RPG',
      en: 'Idle Mobile RPG',
      ja: '放置系モバイルRPG'
    },
    platform: {
      'zh-TW': '開發中',
      en: 'In development',
      ja: '開発中'
    },
    url: null,
    ctaKind: 'disabled',
    ctaLabel: {
      'zh-TW': '開發中',
      en: 'In Development',
      ja: '開発中'
    },
    tags: {
      'zh-TW': ['放置 RPG', '委託', '寵物', '製作'],
      en: ['Idle RPG', 'Commissions', 'Pets', 'Crafting'],
      ja: ['放置RPG', '依頼', 'ペット', 'クラフト']
    },
    image: '/assets/product-pocket-commissions.png',
    accent: 'violet',
    isFeatured: true,
    sortOrder: 4,
    notes: {
      'zh-TW': '英文與日文正式名稱仍需確認；多人小遊戲只可作為 future plan。',
      en: 'Official English and Japanese naming still needs confirmation; multiplayer mini-games are only a future plan.',
      ja: '英語・日本語の正式名称は確認中。マルチプレイミニゲームは将来予定のみ。'
    }
  }
];

export const products: Product[] = [...productItems].sort((a, b) => a.sortOrder - b.sortOrder);
