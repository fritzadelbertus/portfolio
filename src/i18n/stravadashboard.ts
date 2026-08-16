// src/i18n/hero.ts

export const languages = {
  en: { label: 'English', flag: '🇬🇧' },
  ja: { label: '日本語', flag: '🇯🇵' },
  id: { label: 'Bahasa Indonesia', flag: '🇮🇩' },
};

export const defaultLang = 'en';

export const stravadashboard = {
  en: {
    'global_target': 'Global Target',
    'total_activity': "Total Activities",
    'distance_left': 'Distance Left',
    'furthest_run': 'Furthest Run',
    'coverage': "Coverage",
    'activity_heatmap' : '365-Day Activity Heatmap',
    'milestone': 'Journey Milestones & Planetary Checkpoints',
    'mile1': 'Jakarta - Bali',
    'mile2': 'Washington - Florida',
    'mile3': 'Circumference of Moon',
    'mile4': 'Circumference of Mercury',
    'mile5': 'Circumference of Mars',
    'mile6': 'Circumference of Venus',
    'goal': "Goal",
    'runs': "Runs",
    'walks': "Walks",
  },
  ja: {
    'global_target': 'グローバルターゲット',
    'total_activity': "総活動量",
    'distance_left': '残りの距離',
    'furthest_run': '一番遠いところを走る',
    'coverage': "カバレッジ",
    'activity_heatmap' : '365日間のアクティビティヒートマップ',
    'milestone': '旅の節目と惑星のチェックポイント',
    'mile1': 'ジャカルタ - バリ',
    'mile2': 'ワシントン - フロリダ',
    'mile3': '月の円周',
    'mile4': '水星の円周',
    'mile5': '火星の円周',
    'mile6': '金星の円周',
    'goal': "ゴール",
    'runs': "の走る",
    'walks': "の散歩",
  },
  id: {
    'global_target': 'Target Global',
    'total_activity': "Aktivitas Total",
    'distance_left': 'Sisa Jarak',
    'furthest_run': 'Lari Terjauh',
    'coverage': "Persentase",
    'activity_heatmap' : 'Aktivitas dalm 365-Hari',
    'milestone': 'Journey Milestones & Planetary Checkpoints',
    'mile1': 'Jakarta - Bali',
    'mile2': 'Washington - Florida',
    'mile3': 'Keliling Bulan',
    'mile4': 'Keliling Merkurius',
    'mile5': 'Keliling Mars',
    'mile6': 'Keliling Venus',
    'goal': "Goal",
    'runs': "Lari",
    'walks': "Jalan",
  },
} as const;

export function useTranslations(lang: keyof typeof stravadashboard) {
  return function t(key: keyof (typeof stravadashboard)[typeof defaultLang]) {
    return stravadashboard[lang]?.[key] || stravadashboard[defaultLang][key];
  };
}