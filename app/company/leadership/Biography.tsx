"use client";

import { useState } from "react";

type BiographyProps = {
  bio: string;
};

export default function Biography({ bio }: BiographyProps) {
  const [expanded, setExpanded] = useState(false);

  const end = bio.indexOf(". ");
  const opening = end === -1 ? bio : bio.slice(0, end + 1);
  const remaining = end === -1 ? "" : bio.slice(end + 2);

  return (
    <div className="mt-3">
      <p className="text-sm leading-relaxed text-[var(--color-slate)] sm:text-base">
        {opening}

        {remaining && (
          <>
            {" "}
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className={`${expanded ? "hidden" : "inline"} font-semibold underline underline-offset-4`}
              aria-expanded={expanded}
            >
              Read full bio
            </button>
          </>
        )}

        {remaining && (
          <span className={expanded ? "inline" : "hidden"}>
            {" "}
            {remaining}
            {" "}
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="font-semibold underline underline-offset-4"
              aria-expanded={expanded}
            >
              Collapse ↑
            </button>
          </span>
        )}
      </p>

      <div
        aria-hidden="true"
        className="mt-4 border-b border-[var(--color-line,#DCE6E5)]"
      />
    </div>
  );
}
