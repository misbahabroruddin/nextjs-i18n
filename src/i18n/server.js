import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions, LocaleTypes } from './settings';

const initI18next = async (lang, ns) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language, namespace) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lang, ns));

  return i18nInstance;
};

export async function createTranslation(lang, ns) {
  const i18nextInstance = await initI18next(lang, ns);

  return {
    t: i18nextInstance.getFixedT(lang, Array.isArray(ns) ? ns[0] : ns),
  };
}
