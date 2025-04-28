
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import am from './locales/am.json';
import om from './locales/om.json';

const resources = {
  en: { translation: en },
  am: { translation: am },
  om: { translation: om },
};

// Get the saved language preference or default to 'en'
const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
