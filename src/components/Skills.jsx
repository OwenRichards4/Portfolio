import { skills } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import "./Section.css";
import "./Skills.css";

const GROUPS = [
  { key: "core", label: "Most Confident", items: skills.core },
  { key: "familiar", label: "Also Comfortable With", items: skills.familiar },
  { key: "other", label: "Used Professionally / Academically", items: skills.other },
  { key: "learning", label: "Currently Learning", items: skills.learning },
];

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <Reveal>
          <SectionHeading
            index="03"
            title="Skills"
            kicker="I've taken on numerous projects and classes that have required me to learn or increase my knowledge of new programming languages."
          />
        </Reveal>

        <div className="skills__groups">
          {GROUPS.map((group, i) => (
            <Reveal className="skills__group" delay={i * 0.08} key={group.key}>
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
