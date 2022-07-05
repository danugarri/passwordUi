import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const supportedLanguages = {
  es: 'Español',
  en: 'EInglés',
};
i18n
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
    supportedLngs: ['es', 'en'],
  });
