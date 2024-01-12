// i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
/* import { LanguageDetector } from 'i18next';
.use(LanguageDetector) */

i18next
.use(initReactI18next)
.init({
  fallbackLng: 'en',
  debug: false,
  resources: {
    en: {
      translation: require('./locales/en/en.json'),
    },
    fr: {
      translation: require('./locales/fr/fr.json'),
    },
  },
  
});

export default i18next;
