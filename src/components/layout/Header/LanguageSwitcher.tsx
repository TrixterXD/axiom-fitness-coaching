"use client";

import { useSyncExternalStore } from "react";
import { type Locale, languageNames, locales } from "@/i18n/config";
import styles from "./Header.module.css";

function subscribe(listener: () => void) {
  window.addEventListener("hashchange", listener);
  return () => window.removeEventListener("hashchange", listener);
}

export default function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const hash = useSyncExternalStore(
    subscribe,
    () => window.location.hash,
    () => "",
  );

  return (
    <nav aria-label={label} className={styles.languages}>
      {locales.map((language) => (
        <a
          key={language}
          href={`/${language}/${hash}`}
          lang={language}
          hrefLang={language}
          aria-label={languageNames[language]}
          aria-current={locale === language ? "page" : undefined}
        >
          {language.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
