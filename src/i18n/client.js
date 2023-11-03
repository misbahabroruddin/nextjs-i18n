"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTransAlias,
} from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, locales } from "./settings";

const runsOnServerSide = typeof window === "undefined";

// Initialize i18next for the client side
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language, namespace) =>
      import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined, // detect the language on the client
    detection: {
      order: ["path", "htmlTag"],
    },
    preload: runsOnServerSide ? locales : [],
  });

export function useTranslation(lng, ns) {
  const translator = useTransAlias(ns);
  const { i18n } = translator;

  // Run content is being rendered on server side
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    // Use our custom implementation when running on the client side
    useCustomTranslationImplem(i18n, lng);
  }
  return translator;
}

function useCustomTranslationImplem(i18n, lng) {
  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

  // This effect updates the active language state variable when the resolved language changes
  useEffect(() => {
    if (activeLng === i18n.resolvedLanguage) return;
    setActiveLng(i18n.resolvedLanguage);
  }, [activeLng, i18n.resolvedLanguage]);

  // This effect changes the language of the application when the lng prop changes
  useEffect(() => {
    if (!lng || i18n.resolvedLanguage === lng) return;
    i18n.changeLanguage(lng);
  }, [lng, i18n]);
}
