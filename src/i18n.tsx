import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      searchPlaceholder: "Search for products...",
      searchButton: "Search",
      home: "Home",
      products: "Products",
      login: "Login",
      cart: "Cart"
    }
  },
  hi: {
    translation: {
      searchPlaceholder: "उत्पाद खोजें...",
      searchButton: "खोजें",
      home: "होम",
      products: "उत्पाद",
      login: "लॉगिन",
      cart: "कार्ट"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;