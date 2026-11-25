import Image from "next/image";

import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={`container ${styles.layout}`}>
        <div className={styles.photo}>
          <Image
            src="/images/about/about-trainer.webp"
            alt="The AXIOM coach seated in a gym"
            width={1200}
            height={401}
            loading="lazy"
          />
        </div>
        <div>
          <p className={styles.eyebrow}>ABOUT</p>
          <h2 id="about-heading" className={styles.heading}>
            THE COACH BEHIND AXIOM
          </h2>
          <p className={styles.copy}>
            I&apos;m a strength and conditioning coach with a passion for helping people become
            stronger, healthier and more capable — in and out of the gym.
          </p>
          <p className={styles.copy}>
            My approach is simple: proven methods, consistent effort and a long-term focus on
            progress. No shortcuts. No gimmicks. Just a clear process that works.
          </p>
          {/* biome-ignore lint/a11y/noRedundantRoles: Safari needs this when list markers are removed. */}
          <ol className={styles.principles} role="list">
            <li>
              <span aria-hidden="true">01</span>
              Clear strategy
            </li>
            <li>
              <span aria-hidden="true">02</span>
              Consistent effort
            </li>
            <li>
              <span aria-hidden="true">03</span>
              Lasting progress
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
