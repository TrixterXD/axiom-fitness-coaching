"use client";

import { type FormEvent, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./Contact.module.css";

function focusField(element: HTMLElement | null) {
  element?.focus();
}

export default function ContactForm({
  text,
  online,
  personal,
}: {
  text: Dictionary["contact"]["form"];
  online: string;
  personal: string;
}) {
  const [phase, setPhase] = useState<"initial" | "success" | "return">("initial");
  const [errors, setErrors] = useState({ name: "", email: "", service: "", goals: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.querySelector<HTMLInputElement>("#contact-name");
    const email = form.querySelector<HTMLInputElement>("#contact-email");
    const service = form.querySelector('input[name="contact-service"]:checked');
    const goals = form.querySelector<HTMLTextAreaElement>("#contact-goals");
    if (!name || !email || !goals) return;

    const next = { name: "", email: "", service: "", goals: "" };
    if (!name.value.trim()) next.name = text.errors.name;
    else if (name.value.length > 100) next.name = text.errors.nameLength;
    if (!email.value.trim()) next.email = text.errors.email;
    else if (email.validity.typeMismatch) next.email = text.errors.emailInvalid;
    if (!service) next.service = text.errors.service;
    if (goals.value.length > 1000) next.goals = text.errors.goalsLength;
    setErrors(next);

    if (next.name) name.focus();
    else if (next.email) email.focus();
    else if (next.service) form.querySelector<HTMLInputElement>("#contact-online")?.focus();
    else if (next.goals) goals.focus();
    else setPhase("success");
  }

  return (
    <div className={styles.panel}>
      <p className={styles.status} role="status">
        {phase === "success" ? text.success : null}
      </p>
      {phase === "success" ? (
        <button
          className={styles.submit}
          type="button"
          ref={focusField}
          onClick={() => setPhase("return")}
        >
          {text.back}
        </button>
      ) : (
        // The dialog method prevents network submission even before React hydrates.
        <form
          className={styles.form}
          method="dialog"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className={styles.fields}>
            <div>
              <label htmlFor="contact-name">{text.name}</label>
              <input
                id="contact-name"
                type="text"
                required
                maxLength={100}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                ref={phase === "return" ? focusField : undefined}
              />
              <p id="contact-name-error" className={styles.error} aria-live="polite">
                {errors.name}
              </p>
            </div>
            <div>
              <label htmlFor="contact-email">{text.email}</label>
              <input
                id="contact-email"
                type="email"
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
              />
              <p id="contact-email-error" className={styles.error} aria-live="polite">
                {errors.email}
              </p>
            </div>
          </div>

          <fieldset
            className={styles.services}
            aria-describedby={errors.service ? "contact-service-error" : undefined}
          >
            <legend>{text.interests}</legend>
            <div className={styles.options}>
              <label htmlFor="contact-online">
                <input
                  id="contact-online"
                  type="radio"
                  name="contact-service"
                  value="online"
                  required
                  aria-invalid={Boolean(errors.service)}
                />
                {online}
              </label>
              <label htmlFor="contact-personal">
                <input
                  id="contact-personal"
                  type="radio"
                  name="contact-service"
                  value="personal"
                  required
                  aria-invalid={Boolean(errors.service)}
                />
                {personal}
              </label>
            </div>
            <p id="contact-service-error" className={styles.error} aria-live="polite">
              {errors.service}
            </p>
          </fieldset>

          <div>
            <label htmlFor="contact-goals">
              {text.goals} <span>{text.optional}</span>
            </label>
            <div className={styles.message}>
              <textarea
                id="contact-goals"
                rows={3}
                maxLength={1000}
                aria-invalid={Boolean(errors.goals)}
                aria-describedby={errors.goals ? "contact-goals-error" : undefined}
              />
              <div className={styles.actions}>
                <button
                  className={styles.submit}
                  type="submit"
                  aria-describedby="contact-disclosure"
                >
                  {text.submit} <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
            <p id="contact-goals-error" className={styles.error} aria-live="polite">
              {errors.goals}
            </p>
          </div>
        </form>
      )}
      <p id="contact-disclosure" className={styles.disclosure}>
        {text.disclosure}
      </p>
    </div>
  );
}
