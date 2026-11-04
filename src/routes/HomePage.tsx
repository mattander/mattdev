import {
  ArrowUpRight,
  CircleCheck,
  FileCode,
  GitCommitHorizontal,
  GitMerge,
  GitPullRequest,
  MessageSquare,
  TriangleAlert,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { MergeBox } from "../components/MergeBox";
import { ReviewThread } from "../components/ReviewThread";
import {
  agentsThread,
  checks,
  commitGroups,
  headlineThread,
  links,
  projects,
  pullRequest,
  readmeDiff,
} from "../siteData";

const commitCount = commitGroups.reduce((total, group) => total + group.commits.length, 0);
const warnings = checks.filter((check) => check.status === "warn").length;
const passed = checks.length - warnings;

const tabs = [
  { id: "conversation", label: "Conversation", count: 2 },
  { id: "commits", label: "Commits", count: commitCount },
  { id: "checks", label: "Checks", count: checks.length },
  { id: "files", label: "Files changed", count: projects.length },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const tabIds = tabs.map((tab) => tab.id);

function TimelineEvent({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="event">
      <span className="event__marker" aria-hidden="true">
        {icon}
      </span>
      <div className="event__content">{children}</div>
    </div>
  );
}

function DiffLine({
  kind,
  number,
  children,
}: {
  kind: "context" | "add" | "del";
  number: string;
  children: ReactNode;
}) {
  const sign = kind === "add" ? "+" : kind === "del" ? "−" : " ";

  return (
    <div className={`diff-line diff-line--${kind}`}>
      <span className="diff-line__gutter" aria-hidden="true">
        <span>{number}</span>
        <span>{sign}</span>
      </span>
      <div className="diff-line__code">{children}</div>
    </div>
  );
}

export function HomePage() {
  const [merged, setMerged] = useState(false);
  const active = useActiveSection(tabIds);

  return (
    <div className="pr-site">
      <main>
        <header className="pr-header" aria-labelledby="intro-heading">
          <p className="pr-header__crumb">mattdev.ca / pulls / {pullRequest.number}</p>
          <h1 className="pr-header__title" id="intro-heading">
            {pullRequest.title} <span>#{pullRequest.number}</span>
          </h1>
          <div className="pr-header__meta">
            <span className="status-pill" data-merged={merged}>
              {merged ? (
                <GitMerge size={15} strokeWidth={2.5} aria-hidden="true" />
              ) : (
                <GitPullRequest size={15} strokeWidth={2.5} aria-hidden="true" />
              )}
              {merged ? "Merged" : "Open"}
            </span>
            <p>
              <strong>{pullRequest.author}</strong> {merged ? "merged" : "wants to merge"}{" "}
              <code className="branch">{pullRequest.head}</code> into{" "}
              <code className="branch">{pullRequest.base}</code>
            </p>
          </div>
        </header>

        <nav className="pr-tabs" aria-label="Sections">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              aria-current={active === tab.id ? "true" : undefined}
            >
              {tab.label}
              <span className="pr-tabs__count">{tab.count}</span>
            </a>
          ))}
        </nav>

        <div className="pr-layout">
          <div className="pr-main">
            <section id="conversation" className="pr-section" aria-label="Conversation">
              <TimelineEvent icon={<MessageSquare size={16} strokeWidth={2.25} />}>
                <div className="card diff">
                  <div className="card__header">
                    <span className="mono">
                      <FileCode size={15} strokeWidth={2.25} aria-hidden="true" /> {readmeDiff.file}
                    </span>
                    <span className="diff__stats" aria-label="3 additions, 1 deletion">
                      <span className="diff__plus">+3</span> <span className="diff__minus">−1</span>
                    </span>
                  </div>
                  <DiffLine kind="context" number="1">
                    <p className="diff__context">{readmeDiff.context}</p>
                  </DiffLine>
                  <DiffLine kind="del" number="2">
                    <del className="diff__removed">
                      <span className="sr-only">Previous headline: </span>
                      {readmeDiff.removed}
                    </del>
                  </DiffLine>
                  <DiffLine kind="add" number="2">
                    <p className="diff__headline">{readmeDiff.added}</p>
                  </DiffLine>
                  <div className="diff__thread">
                    <ReviewThread thread={headlineThread} />
                  </div>
                  {readmeDiff.body.map((line, index) => (
                    <DiffLine kind="add" number={String(index + 3)} key={line}>
                      <p className="diff__body">{line}</p>
                    </DiffLine>
                  ))}
                  <div className="diff__thread">
                    <ReviewThread thread={agentsThread} />
                  </div>
                </div>
              </TimelineEvent>
            </section>

            <section id="commits" className="pr-section" aria-labelledby="commits-heading">
              <h2 id="commits-heading" className="section-title">
                Commits <span>A career, squashed</span>
              </h2>
              {commitGroups.map((group) => (
                <TimelineEvent
                  key={group.label}
                  icon={<GitCommitHorizontal size={16} strokeWidth={2.25} />}
                >
                  <h3 className="commit-group__label">
                    {group.label}
                    {group.period ? <span>{group.period}</span> : null}
                  </h3>
                  <ol className="card commit-list">
                    {group.commits.map((commit) => (
                      <li className="commit" key={commit.hash}>
                        <div className="commit__text">
                          <p className="commit__message">
                            <code className="commit__type">{commit.type}</code>
                            {commit.message}
                          </p>
                          <p className="commit__detail">{commit.detail}</p>
                        </div>
                        <code className="commit__hash" aria-hidden="true">
                          {commit.hash}
                        </code>
                      </li>
                    ))}
                  </ol>
                </TimelineEvent>
              ))}
            </section>

            <section id="checks" className="pr-section" aria-labelledby="checks-heading">
              <h2 id="checks-heading" className="section-title">
                Checks <span>Skills, continuously integrated</span>
              </h2>
              <TimelineEvent icon={<CircleCheck size={16} strokeWidth={2.25} />}>
                <div className="card checks">
                  <div className="card__header">
                    <span>
                      <strong>
                        {passed} passed, {warnings} warning
                      </strong>
                    </span>
                    <span className="mono">ci / skills.yml</span>
                  </div>
                  <ul className="checks__list">
                    {checks.map((check) => (
                      <li key={check.name}>
                        <details className="check" data-status={check.status}>
                          <summary>
                            {check.status === "pass" ? (
                              <CircleCheck
                                className="check__icon"
                                size={17}
                                strokeWidth={2.25}
                                aria-label="Passed"
                              />
                            ) : (
                              <TriangleAlert
                                className="check__icon"
                                size={17}
                                strokeWidth={2.25}
                                aria-label="Warning"
                              />
                            )}
                            <code className="check__name">{check.name}</code>
                            <span className="check__summary">{check.summary}</span>
                            <span className="check__duration" aria-hidden="true">
                              {check.duration}
                            </span>
                          </summary>
                          <ul className="chip-list" aria-label={`${check.name} skills`}>
                            {check.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </details>
                      </li>
                    ))}
                  </ul>
                </div>
              </TimelineEvent>
            </section>

            <section id="files" className="pr-section" aria-labelledby="files-heading">
              <h2 id="files-heading" className="section-title">
                Files changed <span>Side projects</span>
              </h2>
              <TimelineEvent icon={<FileCode size={16} strokeWidth={2.25} />}>
                <div className="file-list">
                  {projects.map((project) => (
                    <article
                      className="card file"
                      key={project.path}
                      aria-labelledby={project.path}
                    >
                      <div className="card__header">
                        <h3 className="mono" id={project.path}>
                          <span className="sr-only">{project.name}, </span>
                          {project.path}
                        </h3>
                        <span className="diff__plus mono" aria-hidden="true">
                          +{project.tags.length}
                        </span>
                      </div>
                      <div className="file__body">
                        <img
                          className="file__image"
                          src={project.imageSrc}
                          alt={project.imageAlt}
                          loading="lazy"
                        />
                        <div className="file__text">
                          <p>{project.description}</p>
                          <ul className="chip-list" aria-label={`${project.name} tech stack`}>
                            {project.tags.map((tag) => (
                              <li key={tag}>{tag}</li>
                            ))}
                          </ul>
                          <div className="file__links">
                            {project.liveUrl ? (
                              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                View deployment
                                <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" />
                              </a>
                            ) : null}
                            {project.githubUrl ? (
                              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                Source
                                <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" />
                              </a>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </TimelineEvent>
            </section>

            <MergeBox merged={merged} onMerge={() => setMerged(true)} />
          </div>

          <aside className="pr-sidebar" aria-label="Pull request details">
            <dl>
              <div>
                <dt>Reviewers</dt>
                <dd className="reviewer">
                  <span className="avatar avatar--you" aria-hidden="true">
                    you
                  </span>
                  {merged ? "Approved" : "Review requested"}
                </dd>
              </div>
              <div>
                <dt>Labels</dt>
                <dd>
                  <ul className="labels">
                    {pullRequest.labels.map((label) => (
                      <li key={label} data-label={label}>
                        {label}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt>Currently</dt>
                <dd>Software engineer at {pullRequest.currently}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{pullRequest.location}</dd>
              </div>
              <div>
                <dt>Links</dt>
                <dd>
                  <ul className="sidebar-links">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                          <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </main>

      <footer className="site-footer">
        <span>Matt Anderson</span>
        <span>Reviewed by you. Built with React and TanStack Router.</span>
      </footer>
    </div>
  );
}
