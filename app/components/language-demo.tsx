"use client";

import { useState } from "react";
import { content } from "../content/en";
import { cn } from "./ui";

const { abroad, kit } = content;

/** The same resume header in each document language, with the app's own section titles. */
export function LanguageDemo() {
  const [languageId, setLanguageId] = useState<string>(abroad.languages[0].id);
  const language = abroad.languages.find((item) => item.id === languageId) ?? abroad.languages[0];

  return (
    <div className="lang">
      <div className="segmented" role="group" aria-label={abroad.label}>
        {abroad.languages.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === languageId}
            className={cn("segmented__item", item.id === languageId && "segmented__item--on")}
            onClick={() => setLanguageId(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="lang__sheet doc" lang={language.id} aria-live="polite">
        <span className="pin pin--corner" data-thread-pin="lang" aria-hidden />
        <p className="resume__name">{kit.resume.name}</p>
        <p className="resume__heading">{language.summary}</p>
        <span className="doc-lines doc-lines--two" aria-hidden />
        <p className="resume__heading">{language.history}</p>
        <p className="resume__job">
          <span>Fintech Brasil</span>
          <span>{language.dates}</span>
        </p>
        <span className="doc-lines" aria-hidden />
        <p className="resume__heading">{language.skills}</p>
        <p className="lang__letter">{language.salutation}</p>
      </div>
    </div>
  );
}
