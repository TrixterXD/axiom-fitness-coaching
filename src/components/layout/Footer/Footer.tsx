import Link from "next/link";
import brandStyles from "../Header/Header.module.css";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.bar}>
          <Link href="/" className={`${brandStyles.brand} ${styles.brand}`}>
            <span className={brandStyles.wordmark}>AXIOM</span>
            <span className={brandStyles.subtitle}>Strength &amp; Conditioning</span>
          </Link>
          <nav aria-label="Footer" className={styles.nav}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#client-stories">Client Stories</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className={styles.socials}>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <rect x="2" y="5" width="20" height="14" rx="4" />
              <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3h3a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.75V16a5 5 0 1 1-5-5h1v3h-1a2 2 0 1 0 2 2z" />
            </svg>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 AXIOM</p>
          <p>Demo website by IVACOV FLOW</p>
        </div>
      </div>
    </footer>
  );
}
