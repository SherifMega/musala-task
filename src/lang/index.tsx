import { initReactI18next } from 'react-i18next';
import enLang from './en.json';
import zhLang from './zh.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from "i18next";

const LOCALE_PERSISTENCE_KEY = "selectedAppLang";
const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  detect: async (language: any) => {
    const persistedLocale = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);
    if (!persistedLocale) {
      return language("en");
    }
    language(persistedLocale);
  },
  init: () => { },
  cacheUserLanguage: (locale: any) => {
    AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale);
  }
};
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: enLang,
      },
      zh: {
        translation: zhLang,
      },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    }
  });

export default i18next;