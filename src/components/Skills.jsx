import { skills } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import "./Section.css";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <Reveal>
          <SectionHeading
            index="03"
            title="Skills"
            kicker="Technologies I've used across coursework, co-ops, and personal projects."
          />
        </Reveal>

        <div className="skills__groups">
          {skills.map((group, i) => (
            <Reveal className="skills__group" delay={i * 0.08} key={group.label}>
              <p className="skills__group-label">{group.label}</p>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <span className="skills__tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
