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
            <Reveal className="experience__item" delay={i * 0.08} key={job.company}>
              <div className="experience__marker">
                <span className="experience__dot"></span>
                <span className="experience__line"></span>
              </div>
              <div className="experience__card">
                <div className="experience__header">
                  <h3>{job.company}</h3>
                  <span className="experience__period">{job.period}</span>
                </div>
                <p className="experience__note">{job.note}</p>

                <div className="experience__rotations">
                  {job.rotations.map((rotation) => (
                    <div className="rotation" key={rotation.title}>
                      <div className="rotation__header">
                        <h4>{rotation.title}</h4>
                        <span className="rotation__period">{rotation.period}</span>
                      </div>
                      <ul className="rotation__points">
                        {rotation.points.map((point) => (
                          <li key={point.label}>
                            <strong>{point.label}:</strong> {point.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
