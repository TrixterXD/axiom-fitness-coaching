import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./Header.module.css";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNavigation from "./MobileNavigation";

export default function Header({
  locale,
  brand,
  links,
  navigation,
}: {
  locale: Locale;
  brand: string;
  links: { href: string; label: string }[];
  navigation: Dictionary["navigation"];
}) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href={`/${locale}/`} className={styles.brand}>
          <span className={styles.wordmark}>AXIOM</span>
          <span className={styles.subtitle}>{brand}</span>
        </Link>
        <nav aria-label={navigation.primary} className={styles.desktopNav}>
          {links.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <LanguageSwitcher locale={locale} label={navigation.languages} />
        <MobileNavigation links={links} label={navigation.primary} toggle={navigation.toggle} />
      </div>
    </header>
  );
}
