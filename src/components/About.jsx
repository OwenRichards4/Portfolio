import selfImg from "../assets/self-img.jpg";
import { about, education } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import "./Section.css";
import "./About.css";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section__inner">
        <Reveal>
          <SectionHeading index="01" title="About Me" />
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__photo-wrap" y={20}>
            <img
              className="about__photo"
              src={selfImg}
              alt="Photo of Owen Richards"
            />
          </Reveal>

          <Reveal className="about__body" delay={0.1} y={20}>
            <div className="about__education">
              {education.map((item) => (
                <div className="about__degree" key={item.degree}>
                  <h3>{item.degree}</h3>
                  {item.detail && <p className="about__detail">{item.detail}</p>}
                  <p className="about__meta">
                    {item.school} — {item.period}
                  </p>
                </div>
              ))}
            </div>

            {about.map((paragraph) => (
              <p className="about__paragraph" key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
