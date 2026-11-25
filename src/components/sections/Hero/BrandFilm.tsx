"use client";

import { useRef } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./Hero.module.css";

export default function BrandFilm({ text }: { text: Dictionary["hero"]["film"] }) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  function openFilm() {
    const dialog = dialogRef.current;
    const video = videoRef.current;
    if (!dialog || !video || dialog.open) return;

    dialog.showModal();
    video.src = "/videos/axiom-brand-film.mp4";
    // Native controls remain available if the browser rejects playback.
    void video.play().catch(() => {});
  }

  function resetFilm() {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }
    triggerRef.current?.focus();
  }

  return (
    <>
      <button
        ref={triggerRef}
        className={styles.filmTrigger}
        type="button"
        aria-haspopup="dialog"
        onClick={openFilm}
      >
        <span className={styles.playIcon} aria-hidden="true" />
        {text.watch}
      </button>
      <dialog
        ref={dialogRef}
        className={styles.filmDialog}
        aria-label={text.title}
        onClose={resetFilm}
      >
        <button
          className={styles.filmClose}
          type="button"
          onClick={() => dialogRef.current?.close()}
        >
          {text.close} <span aria-hidden="true">×</span>
        </button>
        {/* biome-ignore lint/a11y/useMediaCaption: No caption track was supplied with the film. */}
        <video
          ref={videoRef}
          className={styles.filmVideo}
          width={1080}
          height={1920}
          controls
          playsInline
          preload="none"
        />
      </dialog>
    </>
  );
}
