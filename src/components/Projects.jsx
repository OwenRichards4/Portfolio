import liveStreamPlatform from "../assets/live-streaming-platform.webp";
import databaseSystem from "../assets/client-database.webp";
import financialDash from "../assets/financial-dashboard.webp";
import rlStatTracker from "../assets/rocket-league-stats-tracker.webp";
import financeTracker from "../assets/finance-tracker.webp";
import { featuredProject, projects } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import "./Section.css";
import "./Projects.css";

const ASSETS = {
  liveStreamPlatform,
  databaseSystem,
  financialDash,
  rlStatTracker,
  financeTracker,
};

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section__inner">
        <Reveal>
          <SectionHeading index="04" title="Projects" />
        </Reveal>

        <Reveal y={20}>
          <TiltCard className="featured">
            <a
              href={featuredProject.demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="featured__link"
            >
              <div className="featured__preview">
                <img
                  src={ASSETS[featuredProject.assetKey]}
                  alt={`Screenshot of the ${featuredProject.name} dashboard`}
                  loading="lazy"
                  className="featured__image"
                />
              </div>
              <div className="featured__info">
                <span className="featured__label">Featured</span>
                <div className="featured__title-row">
                  <h3>{featuredProject.name}</h3>
                  <span className="featured__badge">{featuredProject.status}</span>
                </div>
                <p>{featuredProject.description}</p>
                <span className="featured__cta">
                  View Demo
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </div>
            </a>
          </TiltCard>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal delay={i * 0.06} y={18} key={project.name}>
              <TiltCard className="project-card">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  <div className="project-card__image-wrap">
                    <img
                      src={ASSETS[project.assetKey]}
                      alt={`Screenshot of the ${project.name} project`}
                      loading="lazy"
                      className="project-card__image"
                    />
                  </div>
                  <div className="project-card__footer">
                    <h3>{project.name}</h3>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
