"use client";

import Image from "next/image";
import { type CSSProperties, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatMessage } from "@/i18n/format";
import styles from "./ClientStories.module.css";

export default function ClientStoriesCarousel({
  clientStories,
  alt,
  labels,
}: {
  clientStories: { id: string; image: string; title: string; description: string }[];
  alt: string;
  labels: Dictionary["clientStories"]["controls"];
}) {
  const count = clientStories.length;
  const wrap = (index: number) => ((index % count) + count) % count;
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<{ pointerId: number; x: number; y: number } | null>(null);
  const swiped = useRef(false);
  const current = wrap(activeIndex);

  function move(direction: number) {
    setActiveIndex((index) => index + direction);
  }

  function showStory(target: number) {
    setActiveIndex((index) => {
      const distance = wrap(target - index);
      return index + (distance > count / 2 ? distance - count : distance);
    });
  }

  return (
    <>
      <div
        className={styles.viewport}
        onPointerDown={(event) => {
          if (!event.isPrimary) return;
          swiped.current = false;
          if (event.pointerType === "touch") {
            touchStart.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
          }
        }}
        onPointerCancel={() => {
          touchStart.current = null;
        }}
        onPointerUp={(event) => {
          const start = touchStart.current;
          if (!start || start.pointerId !== event.pointerId) return;
          touchStart.current = null;
          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy)) {
            swiped.current = true;
            move(dx < 0 ? 1 : -1);
          }
        }}
      >
        {/* Virtual indices keep visible cards mounted as they move across the loop boundary. */}
        {[-3, -2, -1, 0, 1, 2, 3].map((offset) => {
          const index = activeIndex + offset;
          const story = clientStories[wrap(index)];
          const neighbor = Math.abs(offset) === 1;

          return (
            <div
              key={index}
              className={`${styles.slide} ${offset === 0 ? styles.active : neighbor ? styles.neighbor : ""}`}
              style={{ "--offset": offset } as CSSProperties}
              aria-hidden={Math.abs(offset) > 1 || undefined}
            >
              <article className={styles.card}>
                <Image
                  className={styles.photo}
                  src={story.image}
                  alt={alt}
                  width={1000}
                  height={667}
                  loading="lazy"
                />
                <div className={styles.content}>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                </div>
              </article>
              {neighbor && (
                <button
                  type="button"
                  className={styles.cardButton}
                  tabIndex={-1}
                  aria-label={formatMessage(labels.showTitle, story.title)}
                  onClick={(event) => {
                    if (!swiped.current || event.detail === 0) showStory(wrap(index));
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          aria-label={labels.previous}
          onClick={() => move(-1)}
        >
          <span aria-hidden="true">←</span>
        </button>
        {clientStories.map(({ id, title }, index) => (
          <button
            key={id}
            type="button"
            className={styles.dot}
            aria-label={formatMessage(labels.show, index + 1, count, title)}
            aria-current={current === index ? "true" : undefined}
            onClick={() => showStory(index)}
          />
        ))}
        <button
          type="button"
          className={styles.arrow}
          aria-label={labels.next}
          onClick={() => move(1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <p className={styles.status} role="status">
        {formatMessage(labels.status, current + 1, count, clientStories[current].title)}
      </p>
    </>
  );
}
