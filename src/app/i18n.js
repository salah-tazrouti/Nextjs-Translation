// i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Lang } from './Currentlng';
/* import { LanguageDetector } from 'i18next';
.use(LanguageDetector) */
const C_lang=Lang();
i18next
.use(initReactI18next)
.init({
  lng: C_lang,
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
