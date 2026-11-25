import Image from "next/image";
import BrandFilm from "./BrandFilm";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.backdrop}>
        <Image src="/images/hero/hero-trainer.webp" alt="" fill preload className={styles.photo} />
      </div>
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>STRENGTH &amp; CONDITIONING</p>
        <h1 id="hero-heading" className={styles.heading}>
          BUILD STRENGTH.
          <br />
          DISCIPLINE.
          <br />
          <span>PROGRESS.</span>
        </h1>
        <p className={styles.description}>
          Personal training and online coaching built on proven principles, consistency and
          measurable results.
        </p>
        <div className={styles.actions}>
          <a className={styles.cta} href="#contact">
            BOOK A CONSULTATION <span aria-hidden="true">→</span>
          </a>
          <BrandFilm />
        </div>
      </div>
    </section>
  );
}
