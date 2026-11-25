import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./About.module.css";

export default function About({ text }: { text: Dictionary["about"] }) {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={`container ${styles.layout}`}>
        <div className={styles.photo}>
          <Image
            src="/images/about/about-trainer.webp"
            alt={text.alt}
            width={1200}
            height={401}
            loading="lazy"
          />
        </div>
        <div>
          <p className={styles.eyebrow}>{text.eyebrow}</p>
          <h2 id="about-heading" className={styles.heading}>
            {text.heading}
          </h2>
          <p className={styles.copy}>{text.intro}</p>
          <p className={styles.copy}>{text.approach}</p>
          {/* biome-ignore lint/a11y/noRedundantRoles: Safari needs this when list markers are removed. */}
          <ol className={styles.principles} role="list">
            <li>
              <span aria-hidden="true">01</span>
              {text.strategy}
            </li>
            <li>
              <span aria-hidden="true">02</span>
              {text.effort}
            </li>
            <li>
              <span aria-hidden="true">03</span>
              {text.progress}
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
