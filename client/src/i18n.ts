import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en/translation.json5'
import fr from './locales/fr/translation.json5'

i18n
  .use(initReactI18next)
 .init({
    react: {
      wait: true
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources:{
      en, fr
    }, 
    lng: 'en'
  })

export default i18n
