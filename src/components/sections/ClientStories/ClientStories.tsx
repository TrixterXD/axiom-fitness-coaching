import { clientStories } from "@/data/clientStories";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./ClientStories.module.css";
import ClientStoriesCarousel from "./ClientStoriesCarousel";

export default function ClientStories({ text }: { text: Dictionary["clientStories"] }) {
  return (
    <section
      id="client-stories"
      className={styles.section}
      aria-labelledby="client-stories-heading"
    >
      <div className="container">
        <p className={styles.eyebrow}>{text.eyebrow}</p>
        <h2 id="client-stories-heading" className={styles.heading}>
          {text.heading}
        </h2>
        <p className={styles.disclosure}>{text.disclosure}</p>
        <ClientStoriesCarousel
          clientStories={clientStories.map((item) => ({ ...item, ...text.stories[item.id] }))}
          alt={text.alt}
          labels={text.controls}
        />
      </div>
    </section>
  );
}
