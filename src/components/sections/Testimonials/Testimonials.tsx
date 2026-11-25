import styles from "./Testimonials.module.css";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Testimonials() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading" className={styles.heading}>
          Testimonials
        </h2>
        <p className={styles.disclosure}>Fictional testimonials for demonstration only.</p>
        <TestimonialsCarousel />
      </div>
    </section>
  );
}
