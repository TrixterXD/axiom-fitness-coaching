import Image from "next/image";
import styles from "./Services.module.css";

const services = [
  {
    title: "ONLINE COACHING",
    description:
      "Personalized training programs, progress tracking and ongoing support. Train anywhere, with a clear plan and professional guidance.",
    image: "/images/services/online-coaching.webp",
    imageHeight: 519,
  },
  {
    title: "PERSONAL TRAINING",
    description:
      "One-on-one sessions focused on proper technique, building strength and achieving measurable progress.",
    image: "/images/services/personal-training.webp",
    imageHeight: 486,
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        <p className={styles.eyebrow}>SERVICES</p>
        <h2 id="services-heading" className={styles.heading}>
          TRAIN WITH PURPOSE.
        </h2>
        <div className={styles.cards}>
          {services.map(({ title, description, image, imageHeight }) => (
            <article key={title} className={styles.card}>
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
                <a className={styles.cta} href="#contact" aria-label={`Get started: ${title}`}>
                  GET STARTED <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
