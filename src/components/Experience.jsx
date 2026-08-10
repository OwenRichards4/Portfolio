import { experience } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import "./Section.css";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section__inner">
        <Reveal>
          <SectionHeading index="02" title="Experience" />
        </Reveal>

        <div className="experience__list">
          {experience.map((job, i) => (
            <Reveal className="experience__item" delay={i * 0.08} key={job.org}>
              <div className="experience__marker">
                <span className="experience__dot"></span>
                <span className="experience__line"></span>
              </div>
              <div className="experience__card">
                <div className="experience__header">
                  <h3>{job.role}</h3>
                  <span className="experience__period">{job.period}</span>
                </div>
                <p className="experience__org">{job.org}</p>
                <ul className="experience__points">
                  {job.points.map((point) => (
                    <li key={point.slice(0, 24)}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
