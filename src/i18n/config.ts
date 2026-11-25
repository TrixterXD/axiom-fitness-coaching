export const locales = ["ro", "ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ro";
export const productionUrl = "https://axiom-fitness-coaching.vercel.app";

export const languageNames = {
  ro: "Română",
  ru: "Русский",
  en: "English",
} satisfies Record<Locale, string>;

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
