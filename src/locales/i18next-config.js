import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import es from './index';
import en from './index';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: ' es',
  resources: {
    es: {
      translation: {
        title: 'Bienvenido',
      },
    },
    en: {
      translation: {
        title: 'welcome',
      },
    },
  },
});
