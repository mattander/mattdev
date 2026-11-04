import { ArrowUpRight, GitMerge } from "lucide-react";
import { useEffect, useRef } from "react";
import { links } from "../siteData";

type MergeBoxProps = {
  merged: boolean;
  onMerge: () => void;
};

export function MergeBox({ merged, onMerge }: MergeBoxProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (merged) {
      headingRef.current?.focus();
    }
  }, [merged]);

  return (
    <section className="merge-box" data-merged={merged} aria-labelledby="merge-heading">
      <div className="merge-box__status">
        <span className="merge-box__icon" aria-hidden="true">
          <GitMerge size={20} strokeWidth={2.25} />
        </span>
        <div>
          <h2 id="merge-heading" ref={headingRef} tabIndex={-1}>
            {merged ? "Merged. Thanks for the review." : "No conflicts with your team"}
          </h2>
          <p aria-live="polite">
            {merged
              ? "Now say hi. I'm always up for talking product, frontend, or agents."
              : "All checks have passed. Approving is a nice gesture; the links below are the real merge."}
          </p>
        </div>
      </div>
      <div className="merge-box__actions">
        {merged ? null : (
          <button className="button button--primary" type="button" onClick={onMerge}>
            Approve and merge
          </button>
        )}
        {links.map((link) => (
          <a className="button" key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
            <ArrowUpRight size={15} strokeWidth={2.25} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}
