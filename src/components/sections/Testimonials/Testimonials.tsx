import { testimonials } from "@/data/testimonials";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./Testimonials.module.css";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Testimonials({ text }: { text: Dictionary["testimonials"] }) {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading" className={styles.heading}>
          {text.heading}
        </h2>
        <p className={styles.disclosure}>{text.disclosure}</p>
        <TestimonialsCarousel
          testimonials={testimonials.map((item) => ({ ...item, quote: text.quotes[item.id] }))}
          labels={text.controls}
        />
      </div>
    </section>
  );
}
