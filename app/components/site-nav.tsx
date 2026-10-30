"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { APP_URLS, content } from "../content/en";
import { ButtonLink } from "./ui";

const { nav } = content;

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [isOpen]);

  return (
    <header className="site-nav">
      <div className="container site-nav__bar">
        <a href="#top" className="site-nav__logo" aria-label={nav.home}>
          <Image src="/illustration-icons-lp-svg/logo-horizontal-black.svg" alt="" width={656} height={92} priority />
        </a>
        <nav className="site-nav__links" aria-label="Main">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href={APP_URLS.logIn}>{nav.logIn}</a>
        </nav>
        <ButtonLink href={APP_URLS.signUp} size="sm" className="site-nav__cta">
          {nav.startFree}
        </ButtonLink>
        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">{isOpen ? nav.closeMenu : nav.openMenu}</span>
          <svg viewBox="0 0 20 20" aria-hidden focusable="false">
            {isOpen ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      <div id="mobile-menu" className="site-nav__menu" hidden={!isOpen}>
        <nav className="container" aria-label="Main">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={APP_URLS.logIn}>{nav.logIn}</a>
        </nav>
      </div>
    </header>
  );
}
