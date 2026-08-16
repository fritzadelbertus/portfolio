// src/i18n/hero.ts

export const languages = {
  en: { label: 'English', flag: '🇬🇧' },
  ja: { label: '日本語', flag: '🇯🇵' },
  id: { label: 'Bahasa Indonesia', flag: '🇮🇩' },
};

export const defaultLang = 'en';

export const hero = {
  en: {
    'name': 'Fritz Adelbertus Sitindaon',
    'greeting': "Hello, I'm",
    'role': 'A Mathematician and Software Engineer',
    'creative_bio': 'A simple human that loves to explore the world.',
    'btn.resume': 'Download CV',
  },
  ja: {
    'name': "フリツ・アデルベルトゥス・シチンダオン",
    'greeting': '初めまして、',
    'role': '数学者 兼 ソフトウェアエンジニアです',
    'creative_bio': '世界を探検するのが大好きな、ごく普通の人。',
    'btn.resume': '履歴書 (CV) を見る',
  },
  id: {
    'name': "Fritz Adelbertus Sitindaon",
    'greeting': 'Halo, saya',
    'role': 'Seorang Matematikawan dan Software Engineer',
    'creative_bio': 'Manusia biasa yang suka mencoba hal baru.',
    'btn.resume': 'Unduh CV',
  },
} as const;

export function useTranslations(lang: keyof typeof hero) {
  return function t(key: keyof (typeof hero)[typeof defaultLang]) {
    return hero[lang]?.[key] || hero[defaultLang][key];
  };
}