import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatMessage } from "@/i18n/format";
import styles from "./Services.module.css";

const services = [
  {
    id: "online",
    image: "/images/services/online-coaching.webp",
    imageHeight: 519,
  },
  {
    id: "personal",
    image: "/images/services/personal-training.webp",
    imageHeight: 486,
  },
] as const;

export default function Services({ text }: { text: Dictionary["services"] }) {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        <p className={styles.eyebrow}>{text.eyebrow}</p>
        <h2 id="services-heading" className={styles.heading}>
          {text.heading}
        </h2>
        <div className={styles.cards}>
          {services.map(({ id, image, imageHeight }) => {
            const { title, description } = text[id];
            return (
              <article key={id} className={styles.card}>
                <Image
                  className={styles.photo}
                  src={image}
                  alt=""
                  width={1200}
                  height={imageHeight}
                  loading="lazy"
                />
                <div className={styles.content}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a
                    className={styles.cta}
                    href="#contact"
                    aria-label={formatMessage(text.ctaLabel, title)}
                  >
                    {text.cta} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
