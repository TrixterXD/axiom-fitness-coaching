import type { Locale } from "./config";

export type Dictionary = typeof import("./messages/en").default;

const dictionaries = {
  ro: () => import("./messages/ro"),
  ru: () => import("./messages/ru"),
  en: () => import("./messages/en"),
} satisfies Record<Locale, () => Promise<{ default: Dictionary }>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return (await dictionaries[locale]()).default;
}
