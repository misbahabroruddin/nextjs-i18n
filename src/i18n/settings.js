export const fallbackLng = "id";
export const locales = [fallbackLng, "id", "en"];
export const defaultNS = "common";

export function getOptions(lang = fallbackLng, ns = defaultNS) {
  return {
    // debug: true, // Set to true to see console logs
    supportedLngs: locales,
    fallbackLng,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
