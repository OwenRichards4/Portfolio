import { useState } from "react";
import { contactFormAction } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import "./Section.css";
import "./Contact.css";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStatus === "sending") return;
    setFormStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="section__inner">
        <Reveal>
          <SectionHeading
            index="05"
            title="Contact Me"
            kicker="Have a role, project, or question in mind? I'd love to hear from you."
          />
        </Reveal>

        <Reveal y={20}>
          <form className="contact__form" action={contactFormAction} method="POST" onSubmit={handleSubmit}>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="first-name">First Name*</label>
                <input id="first-name" type="text" name="firstName" required />
              </div>
              <div className="contact__field">
                <label htmlFor="last-name">Last Name</label>
                <input id="last-name" type="text" name="lastName" />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email*</label>
              <input id="email" type="email" name="email" required />
            </div>

            <div className="contact__field">
              <label htmlFor="header">Subject</label>
              <input id="header" type="text" name="subject" />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message*</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <button className="contact__submit" type="submit" disabled={formStatus === "sending"}>
              {formStatus === "sending" ? "Sending…" : "Send Message"}
            </button>

            {formStatus === "success" && (
              <p className="contact__status contact__status--success">
                Thanks for reaching out — I'll get back to you soon.
              </p>
            )}
            {formStatus === "error" && (
              <p className="contact__status contact__status--error">
                Something went wrong. Please try again or contact me via LinkedIn.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
