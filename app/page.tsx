"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

const ASSETS = {
  logoBlack: "/illustration-icons-lp-svg/logo-horizontal-black.svg",
  logoDefault: "/illustration-icons-lp-svg/logo-horizontal-default.svg",
  logoWhite: "/illustration-icons-lp-svg/logo-horizontal-white.svg",
  logoVerticalBlack: "/illustration-icons-lp-svg/logo-vertical-black.svg",
  heroShapeOne: "/illustration-icons-lp-svg/iilustration-shape-one.svg",
  heroShapeTwo: "/illustration-icons-lp-svg/iilustration-shape-two.svg",
  heroShapeThree: "/illustration-icons-lp-svg/iilustration-shape-three.svg",
  heroSapienEdit: "/illustration-icons-lp-svg/sapien-edit.svg",
  heroSapienHappy: "/illustration-icons-lp-svg/sapien-happy.svg",
  heroSapienThinking: "/illustration-icons-lp-svg/sapien-thinking.svg",
  problemSecondSection: "/illustration-icons-lp-svg/illustration-second-section.svg",
  secondSectionArrow: "/illustration-icons-lp-svg/arrow-second-section.svg",
  sapiensBannerAvif: "/illustration-icons-lp-svg/SapiensLP-Banner.avif",
  sapiensBannerPng: "/illustration-icons-lp-svg/SapiensLP-Banner.png",
  limitedOfferBadge: "/illustration-icons-lp-svg/illustration-limited-offer.svg",
  check: "/illustration-icons-lp-svg/Check.svg",
  cross: "/illustration-icons-lp-svg/X.svg",
  aiIcon: "/illustration-icons-lp-svg/illustration-impact-four.svg",
  jdIcon: "/illustration-icons-lp-svg/illustration-impact-five.svg",
  atsIcon: "/illustration-icons-lp-svg/illustration-impact-six.svg",
  templateIcon: "/illustration-icons-lp-svg/illustration-impact-seven.svg",
  impactTitleOne: "/illustration-icons-lp-svg/illustration-impact-one.svg",
  impactTitleTwo: "/illustration-icons-lp-svg/illustration-impact-two.svg",
  impactTitleThree: "/illustration-icons-lp-svg/illustration-impact-three.svg",
  sapienVideo: "/illustration-icons-lp-svg/sapien-video-02.mp4",
  ctaIllustration: "/illustration-icons-lp-svg/sapien-svg.svg",
  instagramLogo: "/illustration-icons-lp-svg/instagram-logo.svg",
  linkedinLogo: "/illustration-icons-lp-svg/linkedin-logo.svg",
  facebookLogo: "/illustration-icons-lp-svg/facebook-logo.svg",
} as const;

const AUTH_URLS = {
  login: "https://app.cvsapiens.com/auth/signin",
  signUp: "https://app.cvsapiens.com/auth/signup",
} as const;

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ActionButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  scrollTarget?: string;
  className?: string;
  onClick?: () => void;
};

type Plan = {
  name: string;
  price: string;
  cadence: string;
  eyebrow?: string;
  subtitle: string;
  cta: string;
  variant: "trial" | "standard" | "featured";
  features: Array<{ label: string; included: boolean }>;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function scrollToSection(targetId: string) {
  if (typeof window === "undefined") {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";

  if (targetId === "top") {
    window.scrollTo({ top: 0, behavior });
  } else {
    document.getElementById(targetId)?.scrollIntoView({ behavior, block: "start" });
  }

  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
}

function useHorizontalRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({ canScrollLeft: false, canScrollRight: false });

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const updateScrollState = () => {
      const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
      setScrollState({
        canScrollLeft: rail.scrollLeft > 8,
        canScrollRight: maxScrollLeft - rail.scrollLeft > 8,
      });
    };

    updateScrollState();
    rail.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      rail.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollRail = (direction: "left" | "right") => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const distance = Math.max(rail.clientWidth * 0.86, 220);
    rail.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return { railRef, scrollState, scrollRail };
}

function ActionButton({ children, variant = "primary", href = "#", scrollTarget, className, onClick }: ActionButtonProps) {
  const baseClasses =
    "inline-flex min-h-[52px] cursor-pointer items-center justify-center rounded-[43px] px-8 font-normal text-[18px] leading-[1.4] tracking-[0.2px] transition-colors duration-200";
  const styles: Record<ButtonVariant, string> = {
    primary:
      "bg-[var(--slate-grey)] !text-[var(--white)] [text-shadow:0_1px_0_rgba(0,0,0,0.32)] hover:bg-[var(--coral-orange-hover)] hover:!text-[var(--white)]",
    secondary:
      "border border-[var(--slate-grey)] text-[var(--slate-grey)] bg-transparent hover:border-[var(--slate-grey)] hover:bg-[var(--coral-orange-soft)] hover:text-[var(--slate-grey)]",
    tertiary:
      "min-h-0 rounded-none px-0 !text-[var(--slate-grey)] hover:!text-[var(--coral-orange-hover)]",
  };

  if (scrollTarget) {
    return (
      <button
        type="button"
        onClick={() => {
          scrollToSection(scrollTarget);
          onClick?.();
        }}
        className={cn(baseClasses, styles[variant], className)}
      >
        {children}
      </button>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={cn(baseClasses, styles[variant], className)}>
      {children}
    </Link>
  );
}

function ScrollArrowButton({
  direction,
  onClick,
  className,
}: {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Scroll cards to the left" : "Scroll cards to the right"}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ink-200)] bg-[var(--white)] text-[var(--slate-grey)] shadow-[0_4px_4px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:scale-[1.03] hover:bg-[var(--page-background)]",
        className,
      )}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
        className={direction === "left" ? "rotate-180" : undefined}
      >
        <path d="M8 5L14 11L8 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function Logo({ dark = true }: { dark?: boolean }) {
  const logo = dark ? ASSETS.logoBlack : ASSETS.logoDefault;

  return <Image src={logo} alt="cv sapiens" width={623} height={92} className="h-8 w-auto" />;
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Why it matters", target: "why-it-matters" },
    { label: "How it works", target: "how-it-works" },
    { label: "Prices", target: "prices" },
  ] as const;

  return (
    <header className="section-wrap reveal pt-4">
      <div className="relative rounded-2xl border-2 border-[var(--slate-grey)] bg-[var(--page-background)] px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            aria-label="Go to the top of the page"
            onClick={() => scrollToSection("top")}
            className="shrink-0 cursor-pointer"
          >
            <Logo />
          </button>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--slate-grey)] bg-[var(--surface)] text-[var(--slate-grey)] transition-colors duration-200 hover:bg-[var(--coral-orange-soft)] lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {isMenuOpen ? (
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <ActionButton key={item.label} variant="tertiary" className="text-[18px]" scrollTarget={item.target}>
                {item.label}
              </ActionButton>
            ))}
            <ActionButton
              variant="secondary"
              className="min-h-[38px] px-6 py-2 text-[18px]"
              href={AUTH_URLS.login}
            >
              Log in
            </ActionButton>
            <ActionButton
              variant="primary"
              className="min-h-[38px] px-6 py-2 text-[18px]"
              href={AUTH_URLS.signUp}
            >
              Sign up
            </ActionButton>
          </nav>
        </div>
        <div
          id="mobile-nav"
          className={cn(
            "overflow-hidden transition-[max-height,opacity,margin] duration-300 lg:hidden",
            isMenuOpen ? "mt-4 max-h-[420px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="rounded-[24px] border-2 border-[var(--slate-grey)] bg-[var(--surface)] p-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <ActionButton
                  key={item.label}
                  variant="tertiary"
                  scrollTarget={item.target}
                  className="min-h-[48px] justify-start rounded-[18px] px-4 text-[18px]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </ActionButton>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <ActionButton
                variant="secondary"
                className="min-h-[48px] px-6 py-2 text-[18px]"
                href={AUTH_URLS.login}
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </ActionButton>
              <ActionButton
                variant="primary"
                className="min-h-[48px] px-6 py-2 text-[18px]"
                href={AUTH_URLS.signUp}
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </ActionButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="section-wrap reveal grid gap-8 px-6 py-8 sm:py-10 lg:grid-cols-[1fr_515px] lg:items-center lg:py-12">
      <div className="max-w-[580px]">
        <p className="mb-5 text-[16px] italic leading-[1.4] sm:text-[18px]">
          Built for professionals in tech - useful for anyone applying globally.
        </p>
        <h1 className="max-w-[576px] text-[38px] leading-[0.98] sm:text-[52px] lg:text-[60px]">
          Build a resume that passes ATS and gets interviews
        </h1>
        <p className="mt-6 max-w-[440px] text-[17px] leading-[1.4] sm:text-[18px]">
          Create, optimize and tailor your resume with AI.
          <br />
          Match job descriptions, improve keywords, and export a clean, professional PDF.
        </p>
        <ActionButton className="mt-7 w-full sm:mt-8 sm:w-fit" href={AUTH_URLS.signUp}>
          Start Free Trial
        </ActionButton>
      </div>
      <div className="mx-auto grid w-full max-w-[360px] grid-cols-3 items-center justify-items-center gap-3 sm:max-w-[520px] sm:gap-4 lg:max-w-[560px] lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-24 lg:gap-y-4">
        <Image
          src={ASSETS.heroShapeOne}
          alt=""
          aria-hidden
          width={182}
          height={188}
          className="order-1 h-[96px] w-[92px] sm:h-[132px] sm:w-[128px] lg:order-1 lg:h-[188px] lg:w-[182px]"
        />
        <Image
          src={ASSETS.heroSapienEdit}
          alt=""
          aria-hidden
          width={214}
          height={195}
          className="order-2 h-[110px] w-[122px] sm:h-[148px] sm:w-[162px] lg:order-2 lg:h-[195px] lg:w-[214px]"
        />
        <Image
          src={ASSETS.heroShapeTwo}
          alt=""
          aria-hidden
          width={182}
          height={188}
          className="order-3 h-[96px] w-[92px] sm:h-[132px] sm:w-[128px] lg:order-4 lg:h-[188px] lg:w-[182px]"
        />
        <Image
          src={ASSETS.heroSapienHappy}
          alt=""
          aria-hidden
          width={257}
          height={189}
          className="order-4 h-[110px] w-[148px] sm:h-[150px] sm:w-[202px] lg:order-3 lg:h-[189px] lg:w-[257px]"
        />
        <div className="shape-three-rotator order-5 h-[94px] w-[94px] sm:h-[128px] sm:w-[128px] lg:order-5 lg:h-[184px] lg:w-[184px]">
          <Image src={ASSETS.heroShapeThree} alt="" aria-hidden width={184} height={184} className="h-full w-full" />
        </div>
        <Image
          src={ASSETS.heroSapienThinking}
          alt=""
          aria-hidden
          width={205}
          height={188}
          className="order-6 h-[104px] w-[114px] sm:h-[144px] sm:w-[156px] lg:order-6 lg:h-[188px] lg:w-[205px]"
        />
      </div>
    </section>
  );
}

const problemCards = [
  {
    title: "Vague bullet points",
    description:
      "Your resume is scanned by an Applicant Tracking System. If it lacks the right keywords, it gets rejected automatically.",
  },
  {
    title: "Not tailored to the role",
    description:
      "Sending the same resume everywhere lowers your chances. Recruiters expect clear alignment with the job description.",
  },
  {
    title: "Generic Content",
    description: "“Worked on backend systems” is not enough. Impact, metrics and relevant skills matter.",
  },
] as const;

function ProblemSection() {
  const { railRef, scrollState, scrollRail } = useHorizontalRail();

  return (
    <section id="why-it-matters" className="border-t-2 border-[var(--slate-grey)] bg-[var(--surface)] py-16 lg:py-[86px]">
      <div className="section-wrap px-6">
        <div className="mx-auto max-w-[1146px] xl:hidden">
          <h2 className="max-w-[604px] text-[38px] leading-[1.02] sm:text-[52px] lg:text-[56px]">
            Most resumes never reach a human
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-[1146px] xl:hidden">
          <div className="relative">
            {scrollState.canScrollLeft && (
              <ScrollArrowButton
                direction="left"
                onClick={() => scrollRail("left")}
                className="absolute left-0 top-1/2 z-10 -translate-x-1/3 -translate-y-1/2"
              />
            )}
            {scrollState.canScrollRight && (
              <ScrollArrowButton
                direction="right"
                onClick={() => scrollRail("right")}
                className="absolute right-0 top-1/2 z-10 translate-x-1/3 -translate-y-1/2"
              />
            )}
            <div ref={railRef} className="mobile-scroll-row mobile-scroll-row-tight snap-x snap-mandatory pb-4">
              {problemCards.map((card) => (
                <article
                  key={card.title}
                  className="flex min-h-[306px] w-[286px] shrink-0 snap-start flex-col rounded-[24px] bg-[var(--neutral-100)] px-6 py-6 sm:w-[320px] sm:px-8"
                >
                  <Image
                    src={ASSETS.problemSecondSection}
                    alt=""
                    aria-hidden
                    width={33}
                    height={34}
                    className="h-[34px] w-[33px]"
                  />
                  <div className="mt-6 space-y-4">
                    <h3 className="max-w-[220px] text-[30px] font-medium leading-[1.1] tracking-[0.4px] sm:text-[32px]">
                      {card.title}
                    </h3>
                    <p className="max-w-[240px] text-[17px] leading-[1.4] text-[var(--text-secondary)] sm:text-[18px]">
                      {card.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mx-auto hidden h-[523px] max-w-[1146px] xl:block">
          <h2 className="absolute left-0 top-0 max-w-[604px] text-[60px] leading-[1.05]">Most resumes never reach a human</h2>

          <article className="absolute left-0 top-[202px] h-[321px] w-[290px] rounded-[20px] bg-[var(--neutral-100)] px-8 py-6">
            <Image
              src={ASSETS.problemSecondSection}
              alt=""
              aria-hidden
              width={31}
              height={32}
              className="h-[32px] w-[31px]"
            />
            <div className="mt-6 space-y-4">
              <h3 className="max-w-[206px] text-[32px] font-medium leading-[1.2] tracking-[0.5px]">{problemCards[0].title}</h3>
              <p className="max-w-[226px] text-[18px] leading-[1.4] text-[var(--text-secondary)]">{problemCards[0].description}</p>
            </div>
          </article>

          <article className="absolute left-[428px] top-[202px] h-[321px] w-[290px] rounded-[20px] bg-[var(--neutral-100)] px-8 py-6">
            <Image
              src={ASSETS.problemSecondSection}
              alt=""
              aria-hidden
              width={31}
              height={32}
              className="h-[32px] w-[31px]"
            />
            <div className="mt-6 space-y-4">
              <h3 className="max-w-[206px] text-[32px] font-medium leading-[1.2] tracking-[0.5px]">{problemCards[1].title}</h3>
              <p className="max-w-[226px] text-[18px] leading-[1.4] text-[var(--text-secondary)]">{problemCards[1].description}</p>
            </div>
          </article>

          <div className="absolute left-[290px] top-[363px] flex -translate-y-1/2 items-center gap-[282px]">
            <Image
              src={ASSETS.secondSectionArrow}
              alt=""
              aria-hidden
              width={146}
              height={17}
              className="h-[17px] w-[146px]"
            />
            <Image
              src={ASSETS.secondSectionArrow}
              alt=""
              aria-hidden
              width={146}
              height={17}
              className="h-[17px] w-[146px]"
            />
          </div>

          <article className="absolute left-[856px] top-[202px] h-[321px] w-[290px] rounded-[20px] bg-[var(--neutral-100)] px-8 py-6">
            <Image
              src={ASSETS.problemSecondSection}
              alt=""
              aria-hidden
              width={31}
              height={32}
              className="h-[32px] w-[31px]"
            />
            <div className="mt-6 space-y-4">
              <h3 className="max-w-[206px] text-[32px] font-medium leading-[1.2] tracking-[0.5px]">{problemCards[2].title}</h3>
              <p className="max-w-[226px] text-[18px] leading-[1.4] text-[var(--text-secondary)]">{problemCards[2].description}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

const howSteps = [
  {
    number: "1",
    title: "Create or\nimport resume",
    description: "Start from scratch with a template, or paste your existing resume content.",
    previewSurface: "bg-[var(--ink-200)]",
    previewAccent: "bg-[var(--ink-100)]",
    previewFrame: "bg-[var(--paper)]",
  },
  {
    number: "2",
    title: "Upload job\ndescription",
    description: "We analyze the role and identify the skills, keywords, and requirements that matter.",
    previewSurface: "bg-[var(--ink-100)]",
    previewAccent: "bg-[var(--paper)]",
    previewFrame: "bg-[var(--canvas)]",
  },
  {
    number: "3",
    title: "Optimize with\nAI suggestions",
    description: "Get tailored improvements for bullet points, keywords, and overall alignment with the role.",
    previewSurface: "bg-[var(--paper)]",
    previewAccent: "bg-[var(--ink-100)]",
    previewFrame: "bg-[var(--ink-200)]",
  },
  {
    number: "4",
    title: "Export and\nstart applying",
    description: "Download a clean, ATS-friendly PDF ready to send with confidence.",
    previewSurface: "bg-[var(--ink-200)]",
    previewAccent: "bg-[var(--canvas)]",
    previewFrame: "bg-[var(--ink-100)]",
  },
] as const;

function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = howSteps[activeStep];
  const { railRef, scrollState, scrollRail } = useHorizontalRail();

  return (
    <section id="how-it-works" className="border-b-2 border-[var(--slate-grey)] bg-[var(--surface)] py-16 lg:py-[53px]">
      <div className="section-wrap px-6">
        <div className="mx-auto max-w-[1244px]">
          <Image
            src={ASSETS.sapiensBannerPng}
            alt="CV Sapiens characters banner"
            width={1244}
            height={174}
            className="mx-auto h-auto w-full"
          />
        </div>

        <h2 className="mx-auto mt-14 max-w-[697px] text-center text-[38px] leading-[1.02] sm:mt-20 sm:text-[52px] lg:mt-[102px] lg:text-[60px]">
          From draft to optimized resume in minutes
        </h2>

        <div className="mx-auto mt-10 max-w-[1146px] xl:grid xl:grid-cols-4 xl:gap-[27px]">
          <div className="relative xl:contents">
            {scrollState.canScrollLeft && (
              <ScrollArrowButton
                direction="left"
                onClick={() => scrollRail("left")}
                className="absolute left-0 top-[136px] z-10 -translate-x-1/3 -translate-y-1/2 xl:hidden"
              />
            )}
            {scrollState.canScrollRight && (
              <ScrollArrowButton
                direction="right"
                onClick={() => scrollRail("right")}
                className="absolute right-0 top-[136px] z-10 translate-x-1/3 -translate-y-1/2 xl:hidden"
              />
            )}
            <div ref={railRef} className="mobile-scroll-row snap-x snap-mandatory pb-4 xl:contents">
              {howSteps.map((step, index) => {
                const isActive = index === activeStep;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    className={cn(
                      "grid min-h-[272px] w-[280px] shrink-0 snap-start grid-rows-[38px_minmax(96px,auto)_1fr] rounded-[20px] border-2 border-[var(--border)] px-6 py-5 text-left transition-colors duration-200 sm:w-[308px] xl:w-auto xl:shrink-0 xl:snap-none",
                      isActive ? "bg-[var(--white)]" : "bg-[var(--page-background)] hover:bg-[var(--white)]",
                    )}
                    aria-pressed={isActive}
                  >
                    <span className="block self-start font-[var(--font-zilla-slab)] text-[32px] font-semibold leading-[1.2] tracking-[0.5px]">
                      {step.number}
                    </span>
                    <span
                      className="mt-2 block max-w-[180px] self-start whitespace-pre-line"
                      style={{
                        color: "#1E1E1E",
                        fontFamily: "var(--font-zilla-slab)",
                        fontSize: "24px",
                        fontWeight: 500,
                        lineHeight: "34.8px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {step.title}
                    </span>
                    <span className="mt-1 block max-w-[188px] self-start text-[18px] leading-[1.4] text-[var(--text-secondary)]">
                      {step.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "mx-auto mt-2 max-w-[1146px] rounded-[30px] px-5 py-5 transition-colors duration-300 md:mt-6 md:px-10 md:py-10 lg:min-h-[692px]",
            currentStep.previewSurface,
          )}
        >
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.95fr] lg:gap-10">
            <div className={cn("rounded-[24px] p-5 transition-colors duration-300 md:p-8", currentStep.previewFrame)}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className={cn("h-[220px] rounded-[18px] transition-colors duration-300 md:h-[280px]", currentStep.previewAccent)} />
                <div className="space-y-4">
                  <div className={cn("h-12 rounded-[14px] transition-colors duration-300", currentStep.previewAccent)} />
                  <div className={cn("h-28 rounded-[18px] transition-colors duration-300", currentStep.previewAccent)} />
                  <div className={cn("h-24 rounded-[18px] transition-colors duration-300", currentStep.previewAccent)} />
                </div>
              </div>
            </div>

            <div className={cn("rounded-[24px] p-6 transition-colors duration-300 md:p-8", currentStep.previewFrame)}>
              <p className="text-[16px] uppercase tracking-[0.18em] text-[var(--text-secondary)]">Preview placeholder</p>
              <p className="mt-6 max-w-[294px] font-[var(--font-zilla-slab)] text-[30px] leading-[1.2] tracking-[0.5px] md:text-[38px]">
                Step {currentStep.number}: {currentStep.title}
              </p>
              <p className="mt-4 max-w-[328px] text-[18px] leading-[1.4] text-[var(--text-secondary)]">{currentStep.description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className={cn("h-[112px] rounded-[18px] transition-colors duration-300", currentStep.previewAccent)} />
                <div className={cn("h-[112px] rounded-[18px] transition-colors duration-300", currentStep.previewAccent)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const plans: Plan[] = [
  {
    name: "Free Trial",
    price: "$0",
    cadence: "per member",
    subtitle: "Start creating your resume today",
    cta: "Start Free Trial",
    variant: "trial",
    features: [
      { label: "Create unlimited resumes", included: true },
      { label: "Access to all templates", included: true },
      { label: "Edit and customize anytime", included: true },
      { label: "Preview your resume", included: true },
      { label: "Export resumes", included: false },
      { label: "Export cover letters", included: false },
      { label: "PDF & Word formats", included: false },
      { label: "Priority support", included: false },
    ],
  },
  {
    name: "Monthly",
    price: "$30",
    cadence: "/ month",
    subtitle: "Perfect for active job seekers",
    cta: "Get Started",
    variant: "standard",
    features: [
      { label: "Create unlimited resumes", included: true },
      { label: "Access to all templates", included: true },
      { label: "Edit and customize anytime", included: true },
      { label: "Preview your resume", included: true },
      { label: "Export 10 resumes per month", included: true },
      { label: "Export 10 cover letters per month", included: true },
      { label: "PDF & Word formats", included: true },
      { label: "Priority support", included: true },
    ],
  },
  {
    name: "Quarterly",
    price: "$19",
    cadence: "/ quarter",
    eyebrow: "Save 21% vs. monthly",
    subtitle: "Best value for your job search",
    cta: "Get Started",
    variant: "featured",
    features: [
      { label: "Create unlimited resumes", included: true },
      { label: "Access to all templates", included: true },
      { label: "Edit and customize anytime", included: true },
      { label: "Preview your resume", included: true },
      { label: "Export 10 resumes per month", included: true },
      { label: "Export 10 cover letters per month", included: true },
      { label: "PDF & Word formats", included: true },
      { label: "Priority support", included: true },
    ],
  },
];

function PricingSection() {
  return (
    <section id="prices" className="section-wrap px-6 pb-8 pt-20 sm:pb-12 lg:pb-16">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-center text-[38px] leading-[1.02] sm:text-[52px] lg:text-[60px]">Simple pricing</h2>
        <p className="mt-4 text-center text-[18px] leading-[1.4] text-[var(--text-secondary)]">
          Choose the plan that works best for your job search
        </p>
        <div className="mx-auto mt-12 grid max-w-[1149px] gap-8 lg:grid-cols-[356px_356px_374px] lg:items-start lg:gap-[18px]">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex h-full flex-col rounded-[30px] px-6 pb-7 pt-7 sm:px-8 sm:pt-8",
                plan.variant === "featured"
                  ? "mt-[14px] min-h-[634px] border-[3px] border-[var(--slate-grey)] bg-[var(--surface)] shadow-[0_20px_25px_rgba(0,0,0,0.1),0_8px_10px_rgba(0,0,0,0.1)]"
                  : "mt-[28px] min-h-[620px] border-2 border-[var(--coral-orange)] bg-[var(--coral-orange-wash)]",
              )}
            >
              {plan.variant === "trial" && (
                <div className="limited-offer-rotator absolute right-4 top-4 z-10 w-[88px] sm:w-[108px] lg:-left-[48px] lg:-top-[102px] lg:right-auto lg:w-[132px] xl:-left-[56px] xl:-top-[120px] xl:w-[152px]">
                  <Image src={ASSETS.limitedOfferBadge} alt="Limited offer badge" width={152} height={152} />
                </div>
              )}
              {plan.variant === "featured" && (
                <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--coral-orange)] px-4 py-[5px] text-[12px] font-semibold leading-none tracking-[0.12em] text-[var(--white)] sm:px-[23px] sm:text-[14px]">
                  POPULAR
                </span>
              )}
              <div className={cn("min-h-[145px]", plan.variant === "trial" && "pr-20 sm:pr-28 lg:pr-0")}>
                <h3 className="text-[32px] font-semibold leading-[1]">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-3">
                  <span className="text-[48px] font-semibold leading-none">{plan.price}</span>
                  <span className="mb-1 text-[18px] leading-[1.4] text-[var(--text-disabled)]">{plan.cadence}</span>
                </div>
                <div className="mt-2 min-h-[56px]">
                  {plan.eyebrow ? (
                    <>
                      <p className="text-[18px] leading-[1.4] text-[var(--text-disabled)]">{plan.eyebrow}</p>
                      <p className="mt-[2px] text-[18px] leading-[1.4] text-[var(--text-primary)]">{plan.subtitle}</p>
                    </>
                  ) : (
                    <>
                      <div className="h-[25px]" aria-hidden />
                      <p className="text-[18px] leading-[1.4] text-[var(--text-primary)]">{plan.subtitle}</p>
                    </>
                  )}
                </div>
              </div>
              <ActionButton
                variant={plan.variant === "trial" ? "secondary" : "primary"}
                className="mt-6 w-full px-6"
                href={AUTH_URLS.signUp}
              >
                {plan.cta}
              </ActionButton>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-3">
                    <Image
                      src={feature.included ? ASSETS.check : ASSETS.cross}
                      alt=""
                      aria-hidden
                      width={20}
                      height={20}
                      className="mt-[2px] h-5 w-5 shrink-0"
                    />
                    <span className={cn("text-[18px] leading-[1.35]", !feature.included && "text-[var(--text-disabled)]")}>{feature.label}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-12 text-center text-[18px] leading-[1.4] text-[var(--text-disabled)] sm:mt-16">
          All plans include secure data storage and regular updates.
        </p>
      </div>
    </section>
  );
}

const pointerFeatures = [
  {
    title: "AI Resume Suggestions",
    body: "Improve bullet points and wording with AI",
    icon: ASSETS.aiIcon,
  },
  {
    title: "Job Description Matching",
    body: "See how well your resume matches the role",
    icon: ASSETS.jdIcon,
  },
  {
    title: "ATS Keyword Analysis",
    body: "Find missing keywords recruiters expect",
    icon: ASSETS.atsIcon,
  },
  {
    title: "Clean Resume Templates",
    body: "Simple layouts built for ATS readability",
    icon: ASSETS.templateIcon,
  },
] as const;

const pointerFeatureRows = [pointerFeatures.slice(0, 2), pointerFeatures.slice(2, 4)] as const;

function PointersSection() {
  return (
    <section className="section-wrap px-6 pb-20 pt-10 sm:pt-14 lg:pt-16">
      <h2 className="mx-auto max-w-[980px] text-center text-[36px] leading-[1.04] tracking-[-0.5px] sm:text-[50px] lg:hidden">
        <span className="block font-light">cv sapiens helps you</span>
        <span className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:mt-4">
          <span className="font-medium italic">build stronger resumes</span>
          <Image
            src={ASSETS.impactTitleThree}
            alt=""
            aria-hidden
            width={53}
            height={55}
            className="pointer-decor h-[34px] w-auto shrink-0 sm:h-[48px]"
          />
        </span>
        <span className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:mt-4">
          <Image
            src={ASSETS.impactTitleOne}
            alt=""
            aria-hidden
            width={48}
            height={50}
            className="pointer-decor h-[32px] w-auto shrink-0 sm:h-[44px]"
          />
          <span className="font-medium italic">match job descriptions</span>
          <span className="font-light">and</span>
          <Image
            src={ASSETS.impactTitleTwo}
            alt=""
            aria-hidden
            width={47}
            height={48}
            className="pointer-decor h-[32px] w-auto shrink-0 sm:h-[42px]"
          />
          <span className="font-medium italic">pass ATS screening</span>
        </span>
      </h2>
      <h2 className="mx-auto hidden max-w-[1040px] text-center text-[60px] leading-[1.26] tracking-[-1px] text-[var(--text-primary)] lg:block">
        <span className="flex items-center justify-center gap-5">
          <span className="font-light">cv sapiens helps you</span>
          <Image
            src={ASSETS.impactTitleThree}
            alt=""
            aria-hidden
            width={53}
            height={55}
            className="h-[55px] w-auto shrink-0"
          />
          <span className="font-medium italic">build stronger</span>
        </span>
        <span className="mt-3 flex items-center justify-center gap-4">
          <span className="font-medium italic">resumes,</span>
          <Image
            src={ASSETS.impactTitleOne}
            alt=""
            aria-hidden
            width={48}
            height={50}
            className="h-[50px] w-auto shrink-0"
          />
          <span className="font-medium italic">match job descriptions,</span>
          <span className="font-light">and</span>
        </span>
        <span className="mt-3 flex items-center justify-center gap-4">
          <Image
            src={ASSETS.impactTitleTwo}
            alt=""
            aria-hidden
            width={47}
            height={48}
            className="h-[48px] w-auto shrink-0"
          />
          <span className="font-medium italic">pass ATS screening</span>
        </span>
      </h2>
      <div className="mt-10 border-y-2 border-[var(--slate-grey)]">
        {pointerFeatureRows.map((row, rowIndex) => (
          <div
            key={row.map((feature) => feature.title).join("-")}
            className={cn(
              "grid gap-10 py-12 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] md:items-center md:gap-12 md:py-[38px]",
              rowIndex === 0 && "border-b-2 border-[var(--slate-grey)]",
            )}
          >
            <article className="flex gap-5 px-4 md:px-[55px]">
              <Image src={row[0].icon} alt="" aria-hidden width={56} height={56} className="mt-1 h-[56px] w-[56px] shrink-0" />
              <div>
                <h3 className="max-w-[276px] text-[32px] font-medium leading-[1.2] tracking-[0.5px] text-[var(--text-primary)]">
                  {row[0].title}
                </h3>
                <p className="mt-4 max-w-[340px] text-[18px] leading-[1.4]">{row[0].body}</p>
              </div>
            </article>
            <div className="pointer-divider hidden h-[148px] w-[2px] self-center bg-[var(--slate-grey)] md:block" />
            <article className="flex gap-5 px-4 md:px-[55px]">
              <Image src={row[1].icon} alt="" aria-hidden width={56} height={56} className="mt-1 h-[56px] w-[56px] shrink-0" />
              <div>
                <h3 className="max-w-[276px] text-[32px] font-medium leading-[1.2] tracking-[0.5px] text-[var(--text-primary)]">
                  {row[1].title}
                </h3>
                <p className="mt-4 max-w-[342px] text-[18px] leading-[1.4]">{row[1].body}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="section-wrap grid gap-12 px-6 py-20 lg:grid-cols-[658px_506px] lg:items-start lg:justify-between lg:gap-[80px] lg:pt-[56px]">
      <div className="h-[320px] overflow-hidden rounded-[44px] border-4 border-[var(--coral-orange)] bg-[var(--surface)] sm:h-[420px] lg:h-[525px] lg:rounded-[90px]">
        <video
          src={ASSETS.sapienVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="max-w-[506px] pt-1">
        <h2 className="max-w-[506px] text-[42px] leading-[1.05] sm:text-[60px]">Stop sending the same resume everywhere.</h2>
        <div className="mt-8 max-w-[480px] space-y-6 text-[18px] leading-[1.4] text-[var(--text-primary)] lg:mt-[32px]">
          <p>You&apos;ve already done the hard work: building skills, shipping projects, gaining experience.</p>
          <p>
            With <strong>cv sapiens</strong> you can refine your experience, align your resume with job descriptions, and present
            your skills in a way that both ATS systems and recruiters understand.
          </p>
        </div>
        <ActionButton className="mt-12 lg:mt-[48px]" href={AUTH_URLS.signUp}>
          Start Free Trial
        </ActionButton>
      </div>
    </section>
  );
}

function FooterSection() {
  const footerLinks = [
    { label: "Why it matters", target: "why-it-matters" },
    { label: "How it works", target: "how-it-works" },
    { label: "Terms", href: "#" },
  ] as const;
  const socialLinks = [
    { label: "Instagram", href: "#", icon: ASSETS.instagramLogo },
    { label: "LinkedIn", href: "#", icon: ASSETS.linkedinLogo },
    { label: "Facebook", href: "#", icon: ASSETS.facebookLogo },
  ] as const;

  return (
    <footer id="faq" className="mt-8 bg-[var(--slate-grey)] py-10 sm:py-12 lg:py-[46px]">
      <div className="section-wrap px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
          <div className="flex flex-col items-center gap-6 lg:min-w-[360px] lg:gap-5">
            <button
              type="button"
              aria-label="Go to the top of the page"
              onClick={() => scrollToSection("top")}
              className="cursor-pointer transition-opacity duration-200 hover:opacity-90"
            >
              <Image
                src={ASSETS.logoWhite}
                alt="cv sapiens"
                width={285}
                height={39}
                className="h-auto w-[220px] sm:w-[250px] lg:w-[285px]"
              />
            </button>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="transition-transform duration-200 hover:scale-[1.05]"
                >
                  <Image src={social.icon} alt="" aria-hidden width={20} height={20} className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mx-auto h-px w-full bg-[rgba(236,231,226,0.26)] lg:hidden" />
          <div className="hidden h-[120px] w-px shrink-0 bg-[rgba(236,231,226,0.82)] lg:block" />
          <div className="flex flex-1 flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <nav className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-4 lg:justify-start lg:gap-16 lg:gap-y-0">
              {footerLinks.map((item) => (
                <ActionButton
                  key={item.label}
                  variant="tertiary"
                  scrollTarget={"target" in item ? item.target : undefined}
                  href={"href" in item ? item.href : undefined}
                  className="!text-[var(--white)] text-[18px] leading-[1.43] hover:!text-[var(--coral-orange-soft)]"
                >
                  {item.label}
                </ActionButton>
              ))}
            </nav>
            <p className="text-center text-[18px] leading-[1.4] text-[var(--ink-300)] lg:text-right">© 2026 cv sapiens</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main id="top" className="bg-[var(--page-background)] text-[var(--text-primary)]">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <PricingSection />
      <PointersSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
