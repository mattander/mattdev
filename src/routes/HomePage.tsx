import type { ReactNode } from "react";
import { activity, links, projects, skills, work } from "../siteData";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className: string;
};

function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

type FocusCardProps = {
  name: string;
  description: string;
  href?: string;
};

function FocusCard({ name, description, href }: FocusCardProps) {
  const content = (
    <>
      <span>{name}</span>
      <p>{description}</p>
    </>
  );

  if (href === undefined) {
    return <article className="project-card">{content}</article>;
  }

  return (
    <ExternalLink className="project-card" href={href}>
      {content}
    </ExternalLink>
  );
}

export function HomePage() {
  return (
    <div className="resume-site">
      <main>
        <section className="hero" aria-labelledby="intro-heading">
          <p className="eyebrow">Software engineer in Canada</p>
          <h1 id="intro-heading">
            Software engineer building practical web interfaces for real people.
          </h1>
          <p className="intro">
            I am Matt Anderson, a software engineer with a writing and UX background. My work sits
            in the useful middle: modern React, TypeScript, agentic development workflows, clear
            architecture, and interfaces that stay understandable after launch.
          </p>
          <dl className="activity-list" aria-label="GitHub activity highlights from the last year">
            {activity.map((item) => (
              <div className="activity-item" key={item.label}>
                <dt>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
          <div className="hero-actions" aria-label="Primary links">
            {links.map((link) => (
              <ExternalLink key={link.label} className="action-link" href={link.href}>
                <span>{link.label}</span>
                <small>{link.meta}</small>
              </ExternalLink>
            ))}
          </div>
        </section>

        <section className="split-section" id="work">
          <div>
            <p className="section-kicker">What I do</p>
            <h2>Recent work across product, platform, and agent workflows.</h2>
          </div>
          <div className="timeline">
            {work.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div>
                  <p>{item.period}</p>
                  <h3>{item.title}</h3>
                  <span>{item.place}</span>
                </div>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section compact">
          <div>
            <p className="section-kicker">Tooling</p>
            <h2>Mostly frontend, deliberately broad.</h2>
          </div>
          <ul className="skill-list" aria-label="Skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="project-section" id="projects">
          <div className="section-heading">
            <p className="section-kicker">Current focus</p>
            <h2>Modern systems, sharper workflows, fewer mysteries.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <FocusCard
                key={project.name}
                name={project.name}
                description={project.description}
                href={project.href}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Matt Anderson</span>
        <span>Software engineer</span>
      </footer>
    </div>
  );
}
