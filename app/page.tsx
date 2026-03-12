"use client";

import Link from "next/link";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";

const ASSETS = {
  logoBlack: "/illustration-icons-lp-svg/logo-black.svg",
  logoDefault: "/illustration-icons-lp-svg/logo-default.svg",
  heroShapeOne: "/illustration-icons-lp-svg/iilustration-shape-one.svg",
  heroShapeTwo: "/illustration-icons-lp-svg/iilustration-shape-two.svg",
  heroShapeThree: "/illustration-icons-lp-svg/iilustration-shape-three.svg",
  heroSapienEdit: "/illustration-icons-lp-svg/sapien-edit.svg",
  heroSapienHappy: "/illustration-icons-lp-svg/sapien-happy.svg",
  heroSapienThinking: "/illustration-icons-lp-svg/sapien-thinking.svg",
  problemVague: "/illustration-icons-lp-svg/illustration-bullet-points.svg",
  problemRole: "/illustration-icons-lp-svg/illustration-not-tailored.svg",
  problemGeneric: "/illustration-icons-lp-svg/illustration-generic-content.svg",
  secondSectionBg: "/illustration-icons-lp-svg/second-section-bg.svg",
  secondSectionVector: "/illustration-icons-lp-svg/vector-second-section.svg",
  howIconResume: "/illustration-icons-lp-svg/illustration-how-it-works-one.svg",
  howIconJob: "/illustration-icons-lp-svg/illustration-how-it-works-two.svg",
  howIconOptimize: "/illustration-icons-lp-svg/illustration-how-it-works-three.svg",
  howIconExport: "/illustration-icons-lp-svg/illustration-how-it-works-four.svg",
  howIllustrationOne: "/illustration-icons-lp-svg/illustration-sapien-how-it-works-one.svg",
  howIllustrationTwo: "/illustration-icons-lp-svg/illustration-sapien-how-it-works-two.svg",
  howIllustrationThree: "/illustration-icons-lp-svg/illustration-sapien-how-it-works-three.svg",
  howIllustrationFour: "/illustration-icons-lp-svg/illustration-sapien-how-it-works-four.svg",
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
  ctaIllustration: "/illustration-icons-lp-svg/sapien-svg.svg",
  footerShapes: "/illustration-icons-lp-svg/illustration-footer.svg",
} as const;

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ActionButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
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

function ActionButton({ children, variant = "primary", href = "#", className }: ActionButtonProps) {
  const baseClasses =
    "inline-flex min-h-[52px] items-center justify-center rounded-[43px] px-8 font-normal text-[18px] leading-[1.4] tracking-[0.2px] transition-colors duration-200";
  const styles: Record<ButtonVariant, string> = {
    primary:
      "bg-[var(--slate-grey)] !text-[var(--white)] [text-shadow:0_1px_0_rgba(0,0,0,0.32)] hover:bg-[var(--coral-orange-hover)] hover:!text-[var(--white)]",
    secondary:
      "border border-[var(--slate-grey)] text-[var(--slate-grey)] bg-transparent hover:border-[var(--slate-grey)] hover:bg-[var(--coral-orange-soft)] hover:text-[var(--slate-grey)]",
    tertiary:
      "min-h-0 rounded-none px-0 !text-[var(--slate-grey)] hover:!text-[var(--coral-orange-hover)]",
  };

  return (
    <Link href={href} className={cn(baseClasses, styles[variant], className)}>
      {children}
    </Link>
  );
}

function Logo({ dark = true }: { dark?: boolean }) {
  const logo = dark ? ASSETS.logoBlack : ASSETS.logoDefault;

  return <img src={logo} alt="cv sapiens" width={623} height={92} className="h-8 w-auto" />;
}

function Navbar() {
  return (
    <header className="section-wrap reveal pt-4">
      <div className="flex items-center justify-between rounded-2xl border-2 border-[var(--slate-grey)] bg-[var(--page-background)] px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {["About", "Features", "Pricing", "FAQ"].map((item) => (
            <ActionButton key={item} variant="tertiary" className="text-[18px]" href={`#${item.toLowerCase()}`}>
              {item}
            </ActionButton>
          ))}
          <ActionButton variant="secondary" className="min-h-[38px] px-6 py-2 text-[18px]">
            Log in
          </ActionButton>
          <ActionButton variant="primary" className="min-h-[38px] px-6 py-2 text-[18px]">
            Sign up
          </ActionButton>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="section-wrap reveal grid gap-8 px-6 py-12 lg:grid-cols-[1fr_515px] lg:items-center">
      <div>
        <p className="mb-6 text-[18px] italic leading-[1.4]">
          Built for professionals in tech - useful for anyone applying globally.
        </p>
        <h1 className="max-w-[576px] text-[42px] leading-[1.05] sm:text-[60px]">Build a resume that passes ATS and gets interviews</h1>
        <p className="mt-8 max-w-[410px] text-[18px] leading-[1.4]">
          Create, optimize and tailor your resume with AI.
          <br />
          Match job descriptions, improve keywords, and export a clean, professional PDF.
        </p>
        <ActionButton className="mt-8 w-fit">Start Free Trial</ActionButton>
      </div>
      <div className="grid h-[678px] w-full max-w-[515px] grid-cols-2 grid-rows-3 items-center justify-items-center gap-x-20">
        <img src={ASSETS.heroShapeOne} alt="" aria-hidden className="h-[188px] w-[182px]" />
        <img src={ASSETS.heroSapienEdit} alt="" aria-hidden className="h-[195px] w-[214px]" />
        <img src={ASSETS.heroSapienHappy} alt="" aria-hidden className="h-[189px] w-[257px]" />
        <img src={ASSETS.heroShapeTwo} alt="" aria-hidden className="h-[188px] w-[182px]" />
        <div className="shape-three-rotator h-[184px] w-[184px]">
          <img src={ASSETS.heroShapeThree} alt="" aria-hidden className="h-[184px] w-[184px]" />
        </div>
        <img src={ASSETS.heroSapienThinking} alt="" aria-hidden className="h-[188px] w-[205px]" />
      </div>
    </section>
  );
}

const problemCards = [
  {
    title: "Vague bullet points",
    description:
      "Your resume is scanned by an Applicant Tracking System. If it lacks the right keywords, it gets rejected automatically.",
    image: ASSETS.problemVague,
  },
  {
    title: "Not tailored to the role",
    description:
      "Sending the same resume everywhere lowers your chances. Recruiters expect clear alignment with the job description.",
    image: ASSETS.problemRole,
  },
  {
    title: "Generic Content",
    description: "“Worked on backend systems” is not enough. Impact, metrics and relevant skills matter.",
    image: ASSETS.problemGeneric,
  },
] as const;

function ProblemSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--white)] py-16 lg:py-20">
      <img
        src={ASSETS.secondSectionBg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 w-full min-w-[1440px] -translate-x-1/2"
      />
      <div className="section-wrap relative z-10 px-6">
        <div className="relative mx-auto max-w-[1126px]">
          <h2 className="max-w-[604px] text-[42px] leading-[1.05] sm:text-[60px]">Most resumes never reach a human</h2>
          <img
            src={ASSETS.secondSectionVector}
            alt=""
            aria-hidden
            className="absolute right-0 top-4 hidden w-[494px] max-w-[45%] lg:block"
          />
        </div>
        <div className="mx-auto mt-14 grid max-w-[1126px] justify-center gap-8 lg:grid-cols-3 lg:gap-[118px]">
          {problemCards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[478px] flex-col gap-6 rounded-[20px] bg-[var(--surface-alt)] px-8 py-6"
            >
              <img src={card.image} alt={card.title} width={156} height={189} className="h-[189px] w-[156px]" />
              <div className="space-y-4">
                <h3 className="max-w-[226px] text-[32px] font-medium leading-[1.2] tracking-[0.5px]">{card.title}</h3>
                <p className="max-w-[226px] text-[18px] leading-[1.4] text-[var(--text-secondary)]">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const HOW_IT_WORKS_STEP_DURATION_MS = 7500;

const howSteps = [
  {
    text: "Create or import your resume",
    icon: ASSETS.howIconResume,
    panelColor: "bg-[var(--coral-orange)]",
    progressColor: "bg-[var(--coral-orange)]",
    illustration: ASSETS.howIllustrationOne,
    description: "Choose a template and fill your experience, or paste your existing content",
    descriptionWidth: "w-[307px]",
  },
  {
    text: "Upload the job description",
    icon: ASSETS.howIconJob,
    panelColor: "bg-[var(--chalk-pink)]",
    progressColor: "bg-[var(--chalk-pink)]",
    illustration: ASSETS.howIllustrationTwo,
    description: "We analyze the role and extract key requirements and skills",
    descriptionWidth: "w-[307px]",
  },
  {
    text: "Optimize with AI",
    icon: ASSETS.howIconOptimize,
    panelColor: "bg-[var(--windjammer-blue)]",
    progressColor: "bg-[var(--windjammer-blue)]",
    illustration: ASSETS.howIllustrationThree,
    description: "Keyword gap analysis, tailored suggestions per job and much more improvements",
    descriptionWidth: "w-[307px]",
  },
  {
    text: "Export and apply",
    icon: ASSETS.howIconExport,
    panelColor: "bg-[var(--daffodil)]",
    progressColor: "bg-[var(--daffodil)]",
    illustration: ASSETS.howIllustrationFour,
    description: "Download a clean, ATS-friendly PDF",
    descriptionWidth: "w-[232px]",
  },
] as const;

function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const progressOverlayRef = useRef<HTMLDivElement | null>(null);
  const stepLabelRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const panelTextRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveStep((currentStep) => (currentStep + 1) % howSteps.length);
      setCycleKey((currentKey) => currentKey + 1);
    }, HOW_IT_WORKS_STEP_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeStep, cycleKey]);

  function restartStep(stepIndex: number) {
    setActiveStep(stepIndex);
    setCycleKey((currentKey) => currentKey + 1);
  }

  const currentStep = howSteps[activeStep];

  useLayoutEffect(() => {
    const grid = gridRef.current;
    const overlay = progressOverlayRef.current;
    const activeLabel = stepLabelRefs.current[activeStep];
    const panelText = panelTextRef.current;

    if (!grid || !overlay || !activeLabel || !panelText) {
      return;
    }

    const updateProgressLine = () => {
      const gridRect = grid.getBoundingClientRect();
      const labelRect = activeLabel.getBoundingClientRect();
      const panelTextRect = panelText.getBoundingClientRect();

      const left = labelRect.left - gridRect.left;
      const top = labelRect.bottom - gridRect.top + 8;
      const width = Math.max(0, panelTextRect.left - gridRect.left - left);

      overlay.style.setProperty("--how-it-works-line-left", `${left}px`);
      overlay.style.setProperty("--how-it-works-line-top", `${top}px`);
      overlay.style.setProperty("--how-it-works-line-width", `${width}px`);
    };

    updateProgressLine();

    const resizeObserver = new ResizeObserver(updateProgressLine);
    resizeObserver.observe(grid);
    resizeObserver.observe(activeLabel);
    resizeObserver.observe(panelText);

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeStep, currentStep.descriptionWidth]);

  return (
    <section id="features" className="section-wrap px-6 py-20 lg:py-24">
      <h2 className="mx-auto max-w-[697px] text-center text-[42px] leading-[1.05] sm:text-[60px]">From draft to optimized resume in minutes</h2>
      <div ref={gridRef} className="relative mt-16 grid items-center gap-12 lg:grid-cols-[1fr_701px]">
        <div ref={progressOverlayRef} className="pointer-events-none absolute inset-0 hidden lg:block">
          <span
            className="absolute h-[2px] rounded-full bg-[var(--slate-grey)]"
            style={{
              left: "var(--how-it-works-line-left)",
              top: "var(--how-it-works-line-top)",
              width: "var(--how-it-works-line-width)",
            }}
          />
          <span
            className="absolute h-[4px] overflow-hidden rounded-full"
            style={{
              left: "var(--how-it-works-line-left)",
              top: "calc(var(--how-it-works-line-top) - 1px)",
              width: "var(--how-it-works-line-width)",
            }}
          >
            <span
              key={`${activeStep}-${cycleKey}`}
              className={cn("how-it-works-progress block h-full", currentStep.progressColor)}
              style={{ animationDuration: `${HOW_IT_WORKS_STEP_DURATION_MS}ms` }}
            />
          </span>
        </div>
        <ul className="relative z-10 space-y-16">
          {howSteps.map((step, index) => (
            <li key={step.text}>
              <button
                type="button"
                onClick={() => restartStep(index)}
                className="group flex cursor-pointer items-start gap-[30px] text-left"
                aria-pressed={index === activeStep}
              >
                <img src={step.icon} alt="" aria-hidden width={31} height={32} className="mt-[2px] h-auto w-[31px] shrink-0" />
                <span
                  ref={(element) => {
                    stepLabelRefs.current[index] = element;
                  }}
                  className="block font-[var(--font-zilla-slab)] font-medium text-[24px] leading-[1.45] tracking-[0.5px] transition-colors duration-200 group-hover:text-[var(--ink-700)]"
                >
                  {step.text}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div
          className={cn(
            "relative z-10 h-[555px] w-full rounded-[41px] border-2 border-[var(--slate-grey)] transition-colors duration-500 ease-out",
            currentStep.panelColor,
          )}
        >
          <div key={`${activeStep}-${cycleKey}`} className="how-it-works-card-content absolute inset-0">
            <img
              src={currentStep.illustration}
              alt="How CV Sapiens works"
              width={388}
              height={439}
              className="absolute -left-[68px] top-[30px] h-[439px] w-[388px]"
            />
            <p
              ref={panelTextRef}
              className={cn("absolute left-[362px] top-[146px] font-[var(--font-zilla-slab)] text-[38px] leading-[1.2] tracking-[0.5px]", currentStep.descriptionWidth)}
            >
              {currentStep.description}
            </p>
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
    <section id="pricing" className="section-wrap px-6 py-20">
      <div className="mx-auto max-w-[1171px]">
        <h2 className="text-center text-[42px] leading-[1.05] sm:text-[60px]">Simple pricing</h2>
        <p className="mt-4 text-center text-[18px] leading-[1.4] text-[var(--text-secondary)]">
          Choose the plan that works best for your job search
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex h-full flex-col rounded-[30px] p-7",
                plan.variant === "featured"
                  ? "border-[3px] border-[var(--slate-grey)] bg-[var(--surface)] shadow-[0_12px_28px_rgba(30,30,30,0.16)]"
                  : "border border-[var(--coral-orange)] bg-[var(--coral-orange-wash)]",
              )}
            >
              {plan.variant === "trial" && (
                <div className="limited-offer-rotator absolute -left-10 -top-12 hidden w-[112px] lg:block">
                  <img src={ASSETS.limitedOfferBadge} alt="Limited offer badge" width={191} height={191} />
                </div>
              )}
              {plan.variant === "featured" && (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--coral-orange)] px-5 py-1 text-[14px] font-semibold leading-none text-[var(--white)]">
                  POPULAR
                </span>
              )}
              <div className="min-h-[132px]">
                <h3 className="text-[32px] font-semibold leading-[1.05]">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-3">
                  <span className="text-[48px] font-semibold leading-none">{plan.price}</span>
                  <span className="mb-1 text-[18px] leading-[1.4] text-[var(--text-disabled)]">{plan.cadence}</span>
                </div>
                {plan.eyebrow && <p className="mt-2 text-[18px] leading-[1.4] text-[var(--text-disabled)]">{plan.eyebrow}</p>}
                <p className="mt-2 text-[18px] leading-[1.4] text-[var(--text-primary)]">{plan.subtitle}</p>
              </div>
              <ActionButton
                variant={plan.variant === "trial" ? "secondary" : "primary"}
                className="mt-8 w-full px-6"
              >
                {plan.cta}
              </ActionButton>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-3">
                    <img
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
        <p className="mt-8 text-center text-[18px] leading-[1.4] text-[var(--text-disabled)]">
          All plans include secure data storage and regular updates
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
    <section className="section-wrap px-6 py-20">
      <h2 className="mx-auto flex max-w-[1040px] flex-col items-center text-center text-[42px] leading-[1.26] tracking-[-0.6px] sm:text-[60px]">
        <span className="flex flex-wrap items-center justify-center gap-x-[16px] gap-y-2">
          <span className="font-light">cv sapiens helps you</span>
          <img
            src={ASSETS.impactTitleThree}
            alt=""
            aria-hidden
            width={53}
            height={55}
            className="h-[38px] w-auto shrink-0 self-center sm:h-[55px]"
          />
          <span className="font-medium italic">build stronger</span>
        </span>
        <span className="mt-3 flex flex-wrap items-center justify-center gap-x-[16px] gap-y-2 sm:mt-2">
          <span className="font-medium italic">resumes,</span>
          <img
            src={ASSETS.impactTitleOne}
            alt=""
            aria-hidden
            width={48}
            height={50}
            className="h-[34px] w-auto shrink-0 self-center sm:h-[50px]"
          />
          <span className="font-medium italic">match job descriptions,</span>
          <span className="font-light">and</span>
        </span>
        <span className="mt-3 flex flex-wrap items-center justify-center gap-x-[16px] gap-y-2 sm:mt-2">
          <img
            src={ASSETS.impactTitleTwo}
            alt=""
            aria-hidden
            width={47}
            height={48}
            className="h-[34px] w-auto shrink-0 self-center sm:h-[48px]"
          />
          <span className="font-medium italic">pass ATS screening</span>
        </span>
      </h2>
      <div className="mt-8 border-y-2 border-[var(--slate-grey)]">
        {pointerFeatureRows.map((row, rowIndex) => (
          <div
            key={row.map((feature) => feature.title).join("-")}
            className={cn(
              "grid gap-10 py-12 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] md:items-center md:gap-12 md:py-[38px]",
              rowIndex === 0 && "border-b-2 border-[var(--slate-grey)]",
            )}
          >
            <article className="flex gap-5 px-4 md:px-[55px]">
              <img src={row[0].icon} alt="" aria-hidden width={56} height={56} className="mt-1 h-[56px] w-[56px] shrink-0" />
              <div>
                <h3 className="max-w-[276px] text-[32px] font-light leading-[1.2] tracking-[0.5px]">{row[0].title}</h3>
                <p className="mt-4 max-w-[340px] text-[18px] leading-[1.4]">{row[0].body}</p>
              </div>
            </article>
            <div className="hidden h-[148px] w-[2px] self-center bg-[var(--slate-grey)] md:block" />
            <article className="flex gap-5 px-4 md:px-[55px]">
              <img src={row[1].icon} alt="" aria-hidden width={56} height={56} className="mt-1 h-[56px] w-[56px] shrink-0" />
              <div>
                <h3 className="max-w-[276px] text-[32px] font-light leading-[1.2] tracking-[0.5px]">{row[1].title}</h3>
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
    <section className="section-wrap grid gap-12 px-6 py-20 lg:grid-cols-[minmax(0,709px)_minmax(0,480px)] lg:items-center lg:justify-between">
      <div className="overflow-hidden rounded-[44px] border-4 border-[var(--coral-orange)] bg-[var(--surface)] p-6 md:p-10 lg:rounded-[72px]">
        <img
          src={ASSETS.ctaIllustration}
          alt="CV Sapiens mascot working on a laptop"
          width={846}
          height={565}
          className="mx-auto h-auto w-full max-w-[620px]"
        />
      </div>
      <div className="max-w-[506px]">
        <h2 className="text-[42px] leading-[1.05] sm:text-[60px]">Stop sending the same resume everywhere.</h2>
        <div className="mt-8 max-w-[480px] space-y-6 text-[18px] leading-[1.4] text-[var(--text-primary)]">
          <p>You&apos;ve already done the hard work: building skills, shipping projects, gaining experience.</p>
          <p>
            With <strong>cv sapiens</strong> you can refine your experience, align your resume with job descriptions, and present
            your skills in a way that both ATS systems and recruiters understand.
          </p>
        </div>
        <ActionButton className="mt-10">Start Free Trial</ActionButton>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer id="faq" className="relative mt-8 overflow-hidden border-t border-[var(--slate-grey)] pt-16">
      <div className="section-wrap relative z-10 grid gap-12 px-6 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-[120px]">
        <div className="flex items-center gap-10">
          <Logo dark={false} />
          <div className="hidden h-[154px] w-px bg-[var(--slate-grey)] lg:block" />
        </div>
        <div className="grid gap-10 text-[18px] leading-[1.43] md:grid-cols-3 md:gap-[79px]">
          <div className="space-y-6">
            <ActionButton variant="tertiary" href="#">
              Link Button
            </ActionButton>
            <ActionButton variant="tertiary" href="#">
              Link Button
            </ActionButton>
            <ActionButton variant="tertiary" href="#">
              Terms
            </ActionButton>
            <ActionButton variant="tertiary" href="#">
              Privacy
            </ActionButton>
          </div>
          <div className="space-y-6">
            <ActionButton variant="tertiary" href="#">
              Link Button
            </ActionButton>
            <ActionButton variant="tertiary" href="#">
              Link Button
            </ActionButton>
            <ActionButton variant="tertiary" href="#">
              Link Button
            </ActionButton>
          </div>
          <div className="space-y-6">
            <ActionButton variant="tertiary" href="#">
              Help
            </ActionButton>
            <ActionButton variant="tertiary" href="#">
              Link Button
            </ActionButton>
          </div>
        </div>
      </div>
      <div className="relative mt-16 min-h-[520px]">
        <img src={ASSETS.footerShapes} alt="" aria-hidden className="absolute inset-x-1/2 bottom-0 min-w-[1200px] max-w-none -translate-x-1/2" />
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-[var(--page-background)] text-[var(--text-primary)]">
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
