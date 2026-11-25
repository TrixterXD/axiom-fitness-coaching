import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import BrandFilm from "./BrandFilm";
import styles from "./Hero.module.css";

export default function Hero({ text, brand }: { text: Dictionary["hero"]; brand: string }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.backdrop}>
        <Image src="/images/hero/hero-trainer.webp" alt="" fill preload className={styles.photo} />
      </div>
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>{brand}</p>
        <h1 id="hero-heading" className={styles.heading}>
          {text.heading}
          <br />
          {text.discipline}
          <br />
          <span>{text.progress}</span>
        </h1>
        <p className={styles.description}>{text.description}</p>
        <div className={styles.actions}>
          <a className={styles.cta} href="#contact">
            {text.cta} <span aria-hidden="true">→</span>
          </a>
          <BrandFilm text={text.film} />
        </div>
      </div>
    </section>
  );
}
