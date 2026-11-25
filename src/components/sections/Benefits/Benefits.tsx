import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./Benefits.module.css";

export default function Benefits({ text }: { text: Dictionary["benefits"] }) {
  return (
    <section id="benefits" className={styles.section} aria-labelledby="benefits-heading">
      <div className="container">
        <p className={styles.eyebrow}>{text.eyebrow}</p>
        <h2 id="benefits-heading" className={styles.heading}>
          {text.heading}
        </h2>
        {/* biome-ignore lint/a11y/noRedundantRoles: Safari needs this when list markers are removed. */}
        <ul className={styles.benefits} role="list">
          <li className={styles.benefit}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1" />
            </svg>
            <div>
              <h3>{text.plan.title}</h3>
              <p>{text.plan.description}</p>
            </div>
          </li>
          <li className={styles.benefit}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />
            </svg>
            <div>
              <h3>{text.progress.title}</h3>
              <p>{text.progress.description}</p>
            </div>
          </li>
          <li className={styles.benefit}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m13 2-9 12h7l-1 8 10-12h-7V2Z" />
            </svg>
            <div>
              <h3>{text.support.title}</h3>
              <p>{text.support.description}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
