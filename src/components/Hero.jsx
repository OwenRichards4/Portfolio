import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { profile, social } from "../data/content";
import "./Hero.css";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true"></div>
      <div className="hero__glow" aria-hidden="true"></div>

      <div className="hero__content">
        <Motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm
        </Motion.p>

        <Motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {profile.name}
        </Motion.h1>

        <div className="hero__role">
          <AnimatePresence mode="wait">
            <Motion.span
              key={profile.roles[roleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="hero__role-text"
            >
              {profile.roles[roleIndex]}
            </Motion.span>
          </AnimatePresence>
        </div>

        <Motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {profile.tagline}
        </Motion.p>

        <Motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a href="#projects" className="hero__btn hero__btn--primary">
            View Projects
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">
            Get in Touch
          </a>
        </Motion.div>

        <Motion.div
          className="hero__socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="#contact" aria-label="Go to contact form">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </Motion.div>
      </div>

      <Motion.a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 0.6 }, y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" } }}
      >
        <ion-icon name="chevron-down-outline"></ion-icon>
      </Motion.a>
    </section>
  );
}
