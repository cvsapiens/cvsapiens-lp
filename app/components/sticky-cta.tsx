"use client";

import { useEffect, useState } from "react";
import { APP_URLS, content } from "../content/en";
import { ButtonLink } from "./ui";

const { stickyCta } = content;

/** A Start free bar on phones, shown once the hero's button has scrolled away and hidden at the closing call. */
export function StickyCta() {
  const [heroGone, setHeroGone] = useState(false);
  const [finalShown, setFinalShown] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-cta");
    const final = document.getElementById("final-cta");
    if (!hero || !final) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) setHeroGone(!entry.isIntersecting && entry.boundingClientRect.top < 0);
        if (entry.target === final) setFinalShown(entry.isIntersecting);
      }
    });
    observer.observe(hero);
    observer.observe(final);
    return () => observer.disconnect();
  }, []);

  const visible = heroGone && !finalShown;

  return (
    <div className="sticky-cta" data-visible={visible ? "" : undefined} inert={!visible}>
      <p>{stickyCta.text}</p>
      <ButtonLink href={APP_URLS.signUp} size="sm">
        {stickyCta.action}
      </ButtonLink>
    </div>
  );
}
