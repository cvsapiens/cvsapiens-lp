"use client";

import { useState } from "react";
import { content } from "../content/en";
import { cn } from "./ui";

const { suggestion } = content.howItWorks;

type Decision = "pending" | "kept" | "skipped";

/** One suggested change the visitor can keep or skip; keeping it recounts the job match. */
export function SuggestionDemo() {
  const [decision, setDecision] = useState<Decision>("pending");
  const found = decision === "kept" ? 9 : 8;

  return (
    <div className="suggest doc" role="group" aria-label={suggestion.groupLabel} data-decision={decision}>
      <span className="stamp">{content.example.stamp}</span>
      <p className="doc__kind">{suggestion.where}</p>
      <p className="suggest__before">
        <del>{suggestion.before}</del>
      </p>
      <p className="suggest__after">
        <ins>{suggestion.after}</ins>
      </p>
      <p className="suggest__why">{suggestion.why}</p>
      <div className="suggest__actions">
        {decision === "pending" ? (
          <>
            <button type="button" className="button button--primary button--xs" onClick={() => setDecision("kept")}>
              {suggestion.keep}
            </button>
            <button type="button" className="button button--secondary button--xs" onClick={() => setDecision("skipped")}>
              {suggestion.skip}
            </button>
          </>
        ) : (
          <>
            <span className={cn("suggest__verdict", decision === "kept" && "suggest__verdict--kept")}>
              {decision === "kept" ? suggestion.kept : suggestion.skipped}
            </span>
            <button type="button" className="text-button" onClick={() => setDecision("pending")}>
              {suggestion.undo}
            </button>
          </>
        )}
      </div>
      <p className="suggest__match" aria-live="polite">
        <span>{suggestion.matchLabel}</span>
        <strong key={found} className="suggest__count">
          {found}
        </strong>
        <span>{suggestion.matchOf}</span>
      </p>
    </div>
  );
}
