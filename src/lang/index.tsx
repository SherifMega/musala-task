import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enLang from './en.json';
import frLang from './fr.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: enLang,
    },
    de: {
      translation: frLang,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;