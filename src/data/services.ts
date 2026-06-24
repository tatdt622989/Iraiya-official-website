import type { Locale } from '../i18n/config';

type Localized<T> = Record<Locale, T>;

export interface Service {
  id: 'technical-rescue' | 'ai-pr-review' | 'repo-qa-bot';
  title: Localized<string>;
  description: Localized<string>;
  suitableFor: Localized<string>;
  solves: Localized<string>;
  deliverables: Localized<string>;
  start: Localized<string>;
  bullets: Localized<string[]>;
}

export const services: Service[] = [
  {
    id: 'technical-rescue',
    title: {
      'zh-TW': 'Frontend / App Technical Rescue',
      en: 'Frontend / App Technical Rescue',
      ja: 'Frontend / App Technical Rescue'
    },
    description: {
      'zh-TW': 'Diagnose and fix frontend, WebView, Capacitor, CI/CD, API integration, UI, and build issues.',
      en: 'Diagnose and fix frontend, WebView, Capacitor, CI/CD, API integration, UI, and build issues.',
      ja: 'Frontend、WebView、Capacitor、CI/CD、API連携、UI、build issues を診断して修正します。'
    },
    suitableFor: {
      'zh-TW': '卡在發版、WebView、前端 bug 或 build 問題的產品團隊。',
      en: 'Teams blocked by release, WebView, frontend, or build issues.',
      ja: 'リリース、WebView、フロントエンド、ビルド課題で止まっているチーム。'
    },
    solves: {
      'zh-TW': '縮小問題範圍，找出可落地修正點。',
      en: 'Narrow the issue and identify a small fixable scope.',
      ja: '問題範囲を絞り、実装可能な修正範囲を定義します。'
    },
    deliverables: {
      'zh-TW': '診斷紀錄、修正 PR 或小範圍交付建議。',
      en: 'Diagnosis notes, a fix PR, or a small scoped delivery plan.',
      ja: '診断メモ、修正PR、または小さな納品スコープ案。'
    },
    start: {
      'zh-TW': 'Start with a short technical diagnosis.',
      en: 'Start with a short technical diagnosis.',
      ja: '短い技術診断から開始します。'
    },
    bullets: {
      'zh-TW': ['WebView / Capacitor issues', 'CI/CD and build problems', 'API integration debugging', 'UI and frontend bug fixing'],
      en: ['WebView / Capacitor issues', 'CI/CD and build problems', 'API integration debugging', 'UI and frontend bug fixing'],
      ja: ['WebView / Capacitor issues', 'CI/CD and build problems', 'API integration debugging', 'UI and frontend bug fixing']
    }
  },
  {
    id: 'ai-pr-review',
    title: {
      'zh-TW': 'AI PR Review Workflow',
      en: 'AI PR Review Workflow',
      ja: 'AI PR Review Workflow'
    },
    description: {
      'zh-TW': 'Set up AI-assisted PR review workflows with summaries, risk areas, test suggestions, and review checklists.',
      en: 'Set up AI-assisted PR review workflows with summaries, risk areas, test suggestions, and review checklists.',
      ja: '要約、リスク領域、テスト提案、レビュー checklist を含む AI-assisted PR review workflow を構築します。'
    },
    suitableFor: {
      'zh-TW': '希望把 AI review 接進 GitHub 或 Azure DevOps 的工程團隊。',
      en: 'Engineering teams adopting AI review in GitHub or Azure DevOps.',
      ja: 'GitHub や Azure DevOps に AI review を導入したい開発チーム。'
    },
    solves: {
      'zh-TW': '降低 review 資訊落差，讓風險與測試建議更一致。',
      en: 'Make risk notes, summaries, and test suggestions more consistent.',
      ja: 'リスクメモ、要約、テスト提案をより一貫させます。'
    },
    deliverables: {
      'zh-TW': 'PR summary、risk checklist、test suggestion workflow。',
      en: 'PR summaries, risk checklists, and test suggestion workflows.',
      ja: 'PR summary、risk checklist、test suggestion workflow。'
    },
    start: {
      'zh-TW': 'Start by reviewing the current PR flow.',
      en: 'Start by reviewing the current PR flow.',
      ja: '現在のPRフロー確認から開始します。'
    },
    bullets: {
      'zh-TW': ['PR summary generation', 'Risk and impact analysis', 'Test suggestion checklist', 'Review workflow setup'],
      en: ['PR summary generation', 'Risk and impact analysis', 'Test suggestion checklist', 'Review workflow setup'],
      ja: ['PR summary generation', 'Risk and impact analysis', 'Test suggestion checklist', 'Review workflow setup']
    }
  },
  {
    id: 'repo-qa-bot',
    title: {
      'zh-TW': 'Repo QA Bot / Project Knowledge Assistant',
      en: 'Repo QA Bot / Project Knowledge Assistant',
      ja: 'Repo QA Bot / Project Knowledge Assistant'
    },
    description: {
      'zh-TW': 'Build lightweight internal assistants for QA, PM, and engineers to ask questions about repo structure, APIs, features, and test direction.',
      en: 'Build lightweight internal assistants for QA, PM, and engineers to ask questions about repo structure, APIs, features, and test direction.',
      ja: 'QA、PM、エンジニアが repo structure、API、features、test direction を確認できる軽量 assistant を構築します。'
    },
    suitableFor: {
      'zh-TW': '文件分散、交接成本高、QA 問題需要快速定位的團隊。',
      en: 'Teams with scattered docs, costly handoffs, or repeated QA questions.',
      ja: 'ドキュメントが分散し、引き継ぎやQA確認に時間がかかるチーム。'
    },
    solves: {
      'zh-TW': '把 repo、docs 與產品知識整理成可詢問的入口。',
      en: 'Turn repo, docs, and product knowledge into a searchable assistant.',
      ja: 'repo、docs、product knowledge を質問できる入口にします。'
    },
    deliverables: {
      'zh-TW': '知識來源整理、問答流程、MVP-first assistant。',
      en: 'Knowledge source mapping, Q&A flow, and an MVP-first assistant.',
      ja: '知識ソース整理、Q&A flow、MVP-first assistant。'
    },
    start: {
      'zh-TW': 'Start with source selection and a small answer set.',
      en: 'Start with source selection and a small answer set.',
      ja: '対象ソース選定と小さな回答セットから開始します。'
    },
    bullets: {
      'zh-TW': ['Repo / docs Q&A', 'QA / PM knowledge support', 'Engineering workflow automation', 'MVP-first implementation'],
      en: ['Repo / docs Q&A', 'QA / PM knowledge support', 'Engineering workflow automation', 'MVP-first implementation'],
      ja: ['Repo / docs Q&A', 'QA / PM knowledge support', 'Engineering workflow automation', 'MVP-first implementation']
    }
  }
];
