import Link from "next/link";
import styles from "./Header.module.css";
import MobileNavigation from "./MobileNavigation";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#client-stories", label: "Client Stories" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand}>
          <span className={styles.wordmark}>AXIOM</span>
          <span className={styles.subtitle}>Strength &amp; Conditioning</span>
        </Link>
        <nav aria-label="Primary" className={styles.desktopNav}>
          {links.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <MobileNavigation links={links} />
      </div>
    </header>
  );
}
