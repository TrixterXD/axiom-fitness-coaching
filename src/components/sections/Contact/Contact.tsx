import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={`container ${styles.layout}`}>
        <header>
          <p className={styles.eyebrow}>CONTACT</p>
          <h2 id="contact-heading" className={styles.heading}>
            <span>BOOK A</span> CONSULTATION
          </h2>
          <p className={styles.description}>
            Tell me about your goals, and let&apos;s build a plan that works for you.
          </p>
        </header>
        <ContactForm />
      </div>
    </section>
  );
}
