import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { languageList } from "./utils";

i18n
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	.use(Backend)
	// .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: false,
		fallbackLng: Object.keys(languageList),
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		backend: {
			loadPath: "/interview_0415/locales/{{lng}}/{{ns}}.json",
		},
	});

export default i18n;
