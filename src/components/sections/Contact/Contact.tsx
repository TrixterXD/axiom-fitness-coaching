import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";

export default function Contact({
  text,
  online,
  personal,
}: {
  text: Dictionary["contact"];
  online: string;
  personal: string;
}) {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={`container ${styles.layout}`}>
        <header>
          <p className={styles.eyebrow}>{text.eyebrow}</p>
          <h2 id="contact-heading" className={styles.heading}>
            <span>{text.headingLead}</span> {text.headingEnd}
          </h2>
          <p className={styles.description}>{text.description}</p>
        </header>
        <ContactForm text={text.form} online={online} personal={personal} />
      </div>
    </section>
  );
}
