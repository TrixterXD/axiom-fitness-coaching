"use client";

import styles from "./Header.module.css";

export default function MobileNavigation({
  links,
  label,
  toggle,
}: {
  links: { href: string; label: string }[];
  label: string;
  toggle: string;
}) {
  return (
    <details className={styles.mobileMenu}>
      <summary className={styles.toggle} aria-label={toggle}>
        <span className={styles.hamburger} aria-hidden="true" />
      </summary>
      <nav aria-label={label} className={styles.mobileNav}>
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={(event) => {
              const menu = event.currentTarget.closest("details");
              menu?.querySelector("summary")?.focus();
              menu?.removeAttribute("open");
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </details>
  );
}
