"use client";

import { type CSSProperties, useState, useSyncExternalStore } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatMessage } from "@/i18n/format";
import styles from "./Testimonials.module.css";

// Match the responsive track columns in Testimonials.module.css.
const mobile = "(max-width: 640px)";
const tablet = "(max-width: 900px)";

function subscribe(listener: () => void) {
  const queries = [window.matchMedia(mobile), window.matchMedia(tablet)];
  for (const query of queries) query.addEventListener("change", listener);
  return () => {
    for (const query of queries) query.removeEventListener("change", listener);
  };
}

function getPageSize() {
  if (window.matchMedia(mobile).matches) return 1;
  return window.matchMedia(tablet).matches ? 2 : 3;
}

export default function TestimonialsCarousel({
  testimonials,
  labels,
}: {
  testimonials: { id: string; name: string; quote: string; rating: number }[];
  labels: Dictionary["testimonials"]["controls"];
}) {
  const pageSize = useSyncExternalStore(subscribe, getPageSize, () => 3);
  const [anchor, setAnchor] = useState(0);
  const page = Math.floor(anchor / pageSize);
  const start = page * pageSize;
  const pageCount = Math.ceil(testimonials.length / pageSize);

  function movePage(direction: number) {
    setAnchor((index) => {
      const nextPage = (Math.floor(index / pageSize) + direction + pageCount) % pageCount;
      return nextPage * pageSize;
    });
  }

  return (
    <>
      <div className={styles.viewport}>
        <div
          className={styles.track}
          key={page}
          style={{ "--page-offset": -page } as CSSProperties}
        >
          {testimonials.map(({ id, name, quote, rating }, index) => (
            <figure
              className={styles.testimonial}
              key={id}
              aria-hidden={index < start || index >= start + pageSize}
            >
              <span
                className={styles.stars}
                role="img"
                aria-label={formatMessage(labels.rating, rating)}
              >
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
              </span>
              <blockquote className={styles.quote}>“{quote}”</blockquote>
              <figcaption className={styles.name}>{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          aria-label={labels.previous}
          onClick={() => movePage(-1)}
        >
          <span aria-hidden="true">←</span>
        </button>
        {testimonials
          .filter((_, index) => index % pageSize === 0)
          .map(({ id }, index) => (
            <button
              key={id}
              type="button"
              className={styles.dot}
              aria-label={formatMessage(labels.show, index + 1, pageCount)}
              aria-current={page === index ? "true" : undefined}
              onClick={() => setAnchor(index * pageSize)}
            />
          ))}
        <button
          type="button"
          className={styles.arrow}
          aria-label={labels.next}
          onClick={() => movePage(1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <p className={styles.status} role="status">
        {formatMessage(labels.status, page + 1, pageCount)}
      </p>
    </>
  );
}
