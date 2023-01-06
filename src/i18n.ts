import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import de from '@/translations/de.json';
import en from '@/translations/en.json';
import pl from '@/translations/pl.json';

const resources = {
  en: { translation: en },
  pl: { translation: pl },
  de: { translation: de },
};

export const availableLanguages = Object.keys(resources);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
    },
    initImmediate: false,
    react: {
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: false,
    },
  });

export default i18n;
