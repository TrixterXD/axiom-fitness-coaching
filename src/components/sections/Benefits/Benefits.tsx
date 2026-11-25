import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section id="benefits" className={styles.section} aria-labelledby="benefits-heading">
      <div className="container">
        <p className={styles.eyebrow}>BENEFITS</p>
        <h2 id="benefits-heading" className={styles.heading}>
          WHY WORK WITH AXIOM
        </h2>
        <ul className={styles.benefits} role="list">
          <li className={styles.benefit}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1" />
            </svg>
            <div>
              <h3>A CLEAR PLAN</h3>
              <p>Evidence-based training tailored to your goals.</p>
            </div>
          </li>
          <li className={styles.benefit}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />
            </svg>
            <div>
              <h3>REAL PROGRESS</h3>
              <p>Measurable progress through structure and consistency.</p>
            </div>
          </li>
          <li className={styles.benefit}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m13 2-9 12h7l-1 8 10-12h-7V2Z" />
            </svg>
            <div>
              <h3>ONGOING SUPPORT</h3>
              <p>Expert guidance, accountability and adjustments along the way.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
