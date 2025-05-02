import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        saveMissing: true
    })


export default i18n;