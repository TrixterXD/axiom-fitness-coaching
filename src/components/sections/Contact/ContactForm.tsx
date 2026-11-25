"use client";

import { type FormEvent, useState } from "react";
import styles from "./Contact.module.css";

function focusField(element: HTMLElement | null) {
  element?.focus();
}

export default function ContactForm() {
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
    if (!name.value.trim()) next.name = "Enter your full name.";
    else if (name.value.length > 100) next.name = "Use 100 characters or fewer.";
    if (!email.value.trim()) next.email = "Enter your email address.";
    else if (email.validity.typeMismatch) next.email = "Enter a valid email address.";
    if (!service) next.service = "Choose a service.";
    if (goals.value.length > 1000) next.goals = "Use 1000 characters or fewer.";
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
        {phase === "success" ? "Demo completed successfully. No information was sent." : null}
      </p>
      {phase === "success" ? (
        <button
          className={styles.submit}
          type="button"
          ref={focusField}
          onClick={() => setPhase("return")}
        >
          Return to form
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
              <label htmlFor="contact-name">Full name</label>
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
              <label htmlFor="contact-email">Email</label>
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
            <legend>Interested in</legend>
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
                Online Coaching
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
                Personal Training
              </label>
            </div>
            <p id="contact-service-error" className={styles.error} aria-live="polite">
              {errors.service}
            </p>
          </fieldset>

          <div>
            <label htmlFor="contact-goals">
              Your goals <span>(optional)</span>
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
                  SEND REQUEST <span aria-hidden="true">→</span>
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
        Demo form. No information is transmitted or stored.
      </p>
    </div>
  );
}
