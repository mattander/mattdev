import type { ReactNode } from "react";
import { activity, links, projects, skillGroups, work } from "../siteData";

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
  imageAlt: string;
  imageSrc: string;
  githubUrl: string;
  liveUrl: string;
  tags: string[];
};

function FocusCard({
  name,
  description,
  imageAlt,
  imageSrc,
  githubUrl,
  liveUrl,
  tags,
}: FocusCardProps) {
  return (
    <article className="project-card">
      <img className="project-card__image" src={imageSrc} alt={imageAlt} loading="lazy" />
      <div className="project-card__body">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="project-card__links" aria-label={`${name} links`}>
        <ExternalLink className="project-link" href={githubUrl}>
          GitHub
        </ExternalLink>
        <ExternalLink className="project-link" href={liveUrl}>
          Live site
        </ExternalLink>
      </div>
      <ul className="project-tags" aria-label={`${name} tech stack`}>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}

export function HomePage() {
  return (
    <div className="resume-site">
      <main>
        <section className="hero" aria-labelledby="intro-heading">
          <p className="eyebrow">Matt Anderson / software engineer in Canada</p>
          <h1 id="intro-heading">I build sturdy React interfaces and weird browser things.</h1>
          <p className="intro">
            I work in the useful middle between product UI, typed frontend systems, and AI-assisted
            development loops. The common thread is making software easier to understand after the
            clever part is over.
          </p>
          <dl className="activity-list" aria-label="Current project signals">
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
            <p className="section-kicker">Where I am useful</p>
            <h2>Typed UI, browser checks, and release paths that stay boring.</h2>
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
            <p className="section-kicker">Working stack</p>
            <h2>Tools grouped by the job they do.</h2>
          </div>
          <div className="skill-groups" aria-label="Skills grouped by workflow">
            {skillGroups.map((group) => (
              <section className="skill-group" key={group.label} aria-label={group.label}>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="project-section" id="projects">
          <div className="section-heading">
            <p className="section-kicker">Side projects</p>
            <h2>Playable ideas with real systems underneath.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <FocusCard
                key={project.name}
                name={project.name}
                description={project.description}
                imageAlt={project.imageAlt}
                imageSrc={project.imageSrc}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                tags={project.tags}
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
