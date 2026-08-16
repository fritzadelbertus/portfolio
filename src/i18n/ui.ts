// src/i18n/ui.ts

export const languages = {
  en: { label: 'English', flag: '🇬🇧' },
  ja: { label: '日本語', flag: '🇯🇵' },
  id: { label: 'Bahasa Indonesia', flag: '🇮🇩' },
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'name': 'Fritz Adelbertus Sitindaon',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.mode_pro': 'Mode: Professional',
    'nav.mode_creative': 'Mode: Creative',
    'projects.title': 'Featured Projects',
    'projects.title_creative': "Creative Projects",
  },
  ja: {
    'name': "フリツ・アデルベルトゥス・シチンダオン",
    'nav.projects': 'プロジェクト',
    'nav.about': '経歴・概要',
    'nav.mode_pro': 'モード:プロフェッショナル',
    'nav.mode_creative': 'モード：クリエイティブ',
    'projects.title': '注目のプロジェクト',
    'projects.title_creative': "クリエイティブなプロジェクト",
  },
  id: {
    'name': "Fritz Adelbertus Sitindaon",
    'nav.projects': 'Proyek',
    'nav.about': 'Tentang',
    'nav.mode_pro': 'Mode: Profesional',
    'nav.mode_creative': 'Mode: Kreatif',
    'projects.title': 'Proyek Utama',
    'projects.title_creative': "Proyek Kreatif",
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}