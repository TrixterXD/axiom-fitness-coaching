import styles from "./ClientStories.module.css";
import ClientStoriesCarousel from "./ClientStoriesCarousel";

export default function ClientStories() {
  return (
    <section
      id="client-stories"
      className={styles.section}
      aria-labelledby="client-stories-heading"
    >
      <div className="container">
        <p className={styles.eyebrow}>CLIENT STORIES</p>
        <h2 id="client-stories-heading" className={styles.heading}>
          REAL WORK. REAL PROGRESS.
        </h2>
        <p className={styles.disclosure}>
          These AI-generated transformations illustrate fictional stories for this demonstration
          website. They are not actual client results.
        </p>
        <ClientStoriesCarousel />
      </div>
    </section>
  );
}
