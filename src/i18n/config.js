import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'fr',
        lng: 'fr',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    pages: {
                        about: 'About us',
                        contact: 'Contact',
                        projects: 'Our projects',
                        editions: 'All editions',
                    },
                },
            },
            fr: {
                translation: {
                    pages: {
                        about: 'Qui sommes-nous?',
                        contact: 'Contact',
                        projects: 'Nos projets',
                        editions: 'Les editions',
                    },
                },
            },
        },
    });

i18n.languages = ['en', 'fr'];

export default i18n;
