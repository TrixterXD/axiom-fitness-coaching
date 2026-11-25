import { defaultLocale, languageNames } from "@/i18n/config";

export default function Entry() {
  return (
    <main className="container">
      <a href={`/${defaultLocale}/`}>AXIOM — {languageNames[defaultLocale]}</a>
    </main>
  );
}
