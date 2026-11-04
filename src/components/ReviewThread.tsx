import { Check } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { BrandMark } from "./BrandMark";
import type { Comment, ReviewThread as Thread } from "../siteData";

function Avatar({ author }: { author: Comment["author"] }) {
  if (author === "mattander") {
    return (
      <span className="avatar avatar--matt" aria-hidden="true">
        <BrandMark />
      </span>
    );
  }

  return (
    <span className="avatar avatar--you" aria-hidden="true">
      you
    </span>
  );
}

export function ReviewThread({ thread }: { thread: Thread }) {
  const [resolved, setResolved] = useState(false);
  const bodyId = useId();
  const [question] = thread.comments;
  const toggleRef = useRef<HTMLButtonElement>(null);
  const hasToggled = useRef(false);

  useEffect(() => {
    if (hasToggled.current) {
      toggleRef.current?.focus();
    }
  }, [resolved]);

  function toggle(next: boolean) {
    hasToggled.current = true;
    setResolved(next);
  }

  return (
    <article
      className="thread"
      data-resolved={resolved}
      aria-label={`Review thread: ${question.body}`}
    >
      {resolved ? (
        <div className="thread__resolved">
          <Check size={15} strokeWidth={2.5} aria-hidden="true" />
          <span>
            Resolved: <span className="thread__resolved-text">{question.body}</span>
          </span>
          <button
            className="text-button"
            type="button"
            aria-expanded="false"
            aria-controls={bodyId}
            ref={toggleRef}
            onClick={() => toggle(false)}
          >
            Show
          </button>
        </div>
      ) : (
        <div id={bodyId}>
          <ol className="thread__comments">
            {thread.comments.map((comment) => (
              <li className="comment" key={comment.author}>
                <Avatar author={comment.author} />
                <div className="comment__content">
                  <p className="comment__meta">
                    <strong>{comment.author}</strong>
                    <span className="badge">{comment.role}</span>
                  </p>
                  <p className="comment__body">{comment.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="thread__footer">
            <button className="button" type="button" ref={toggleRef} onClick={() => toggle(true)}>
              Resolve conversation
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
