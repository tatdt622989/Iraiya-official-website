import { links } from './links';
import type { Locale } from '../i18n/config';

type Localized<T> = Record<Locale, T>;

export type LabStatus = 'live' | 'experimental' | 'archived';
export type LinkStatus = 'live' | 'detail-page-only' | 'todo';

export interface Lab {
  id: 'ai-components' | 'guessai-canvas' | 'diary-box' | 'topic-chat';
  name: string;
  description: Localized<string>;
  category: Localized<string>;
  url: string | null;
  status: LabStatus;
  linkStatus: LinkStatus;
  accent: 'cyan' | 'red' | 'gold' | 'violet';
  sortOrder: number;
}

const labItems: Lab[] = [
  {
    id: 'ai-components',
    name: 'AI Components',
    description: {
      'zh-TW': '收集可重複使用的 AI 互動元件與產品化介面實驗。',
      en: 'Reusable AI interaction components and product interface experiments.',
      ja: '再利用できるAIインタラクション部品とプロダクトUI実験。'
    },
    category: {
      'zh-TW': 'AI UI',
      en: 'AI UI',
      ja: 'AI UI'
    },
    url: links.aiComponents,
    status: 'live',
    linkStatus: 'live',
    accent: 'cyan',
    sortOrder: 1
  },
  {
    id: 'guessai-canvas',
    name: 'GuessAI Canvas',
    description: {
      'zh-TW': '以 AI 與 Canvas 互動為主的實驗頁；目前保留可公開的 detail page 連結。',
      en: 'An AI and canvas interaction experiment; currently linked through the public detail page.',
      ja: 'AI と Canvas インタラクションの実験。現在は公開 detail page 経由で案内。'
    },
    category: {
      'zh-TW': 'AI Experiment',
      en: 'AI Experiment',
      ja: 'AI Experiment'
    },
    url: links.guessAiCanvas,
    status: 'experimental',
    linkStatus: 'detail-page-only',
    accent: 'violet',
    sortOrder: 2
  },
  {
    id: 'diary-box',
    name: 'Diary Box',
    description: {
      'zh-TW': '輕量的日記與私人工具實驗，適合放在 Labs 而非正式產品主線。',
      en: 'A lightweight diary and personal tool experiment suited for Labs rather than the main product line.',
      ja: '軽量な日記・個人ツール実験。正式プロダクトではなく Labs 向け。'
    },
    category: {
      'zh-TW': 'Personal Tool',
      en: 'Personal Tool',
      ja: 'Personal Tool'
    },
    url: links.diaryBox,
    status: 'live',
    linkStatus: 'live',
    accent: 'gold',
    sortOrder: 3
  },
  {
    id: 'topic-chat',
    name: 'Topic Chat',
    description: {
      'zh-TW': '以主題對話為核心的 Web tool，作為 Iraiya Labs 的可用實驗入口。',
      en: 'A topic-centered web conversation tool included as a practical Iraiya Labs experiment.',
      ja: 'トピック中心の会話Webツール。Iraiya Labs の実用実験として掲載。'
    },
    category: {
      'zh-TW': 'Web Tool',
      en: 'Web Tool',
      ja: 'Web Tool'
    },
    url: links.topicChat,
    status: 'live',
    linkStatus: 'live',
    accent: 'red',
    sortOrder: 4
  }
];

export const labs: Lab[] = [...labItems].sort((a, b) => a.sortOrder - b.sortOrder);
