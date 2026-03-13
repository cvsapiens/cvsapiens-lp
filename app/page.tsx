"use client";

import Link from "next/link";
import { Fragment, ReactNode, useState } from "react";

const ASSETS = {
  logoBlack: "/illustration-icons-lp-svg/logo-horizontal-black.svg",
  logoDefault: "/illustration-icons-lp-svg/logo-horizontal-default.svg",
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
  const navItems = [
    { label: "Problem", href: "#problem" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Prices", href: "#prices" },
  ] as const;

  return (
    <header className="section-wrap reveal pt-4">
      <div className="flex items-center justify-between rounded-2xl border-2 border-[var(--slate-grey)] bg-[var(--page-background)] px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <ActionButton key={item.label} variant="tertiary" className="text-[18px]" href={item.href}>
              {item.label}
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
  return (
    <section id="problem" className="border-t-2 border-[var(--slate-grey)] bg-[var(--page-background)] py-16 lg:py-[86px]">
      <div className="section-wrap px-6">
        <div className="mx-auto max-w-[1146px] lg:hidden">
          <h2 className="max-w-[604px] text-[42px] leading-[1.05] sm:text-[60px]">Most resumes never reach a human</h2>
        </div>
        <div className="mx-auto mt-14 flex max-w-[1146px] flex-col items-center gap-6 lg:hidden">
          {problemCards.map((card, index) => (
            <Fragment key={card.title}>
              <article className="min-h-[321px] w-full max-w-[290px] rounded-[20px] bg-[var(--neutral-100)] px-8 py-6">
                <img
                  src={ASSETS.problemSecondSection}
                  alt=""
                  aria-hidden
                  width={33}
                  height={34}
                  className="h-[34px] w-[33px]"
                />
                <div className="mt-6 space-y-4">
                  <h3 className="max-w-[206px] text-[32px] font-medium leading-[1.2] tracking-[0.5px]">{card.title}</h3>
                  <p className="max-w-[226px] text-[18px] leading-[1.4] text-[var(--text-secondary)]">{card.description}</p>
                </div>
              </article>
              {index < problemCards.length - 1 && (
                <img
                  src={ASSETS.secondSectionArrow}
                  alt=""
                  aria-hidden
                  width={146}
                  height={17}
                  className="h-[17px] w-[146px] shrink-0 rotate-90"
                />
              )}
            </Fragment>
          ))}
        </div>
        <div className="relative mx-auto hidden h-[523px] max-w-[1146px] lg:block">
          <h2 className="absolute left-0 top-0 max-w-[604px] text-[60px] leading-[1.05]">Most resumes never reach a human</h2>

          <article className="absolute left-0 top-[202px] h-[321px] w-[290px] rounded-[20px] bg-[var(--neutral-100)] px-8 py-6">
            <img
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

          <img
            src={ASSETS.secondSectionArrow}
            alt=""
            aria-hidden
            width={146}
            height={17}
            className="absolute left-[290px] top-[202px] h-[17px] w-[146px]"
          />

          <article className="absolute left-[428px] top-[202px] h-[321px] w-[290px] rounded-[20px] bg-[var(--neutral-100)] px-8 py-6">
            <img
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

          <img
            src={ASSETS.secondSectionArrow}
            alt=""
            aria-hidden
            width={146}
            height={17}
            className="absolute left-[718px] top-[202px] h-[17px] w-[146px]"
          />

          <article className="absolute left-[856px] top-[202px] h-[321px] w-[290px] rounded-[20px] bg-[var(--neutral-100)] px-8 py-6">
            <img
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
    title: "Create or import your resume",
    description: "Choose a template and fill your experience, or paste your existing content.",
    previewSurface: "bg-[var(--ink-200)]",
    previewAccent: "bg-[var(--ink-100)]",
    previewFrame: "bg-[var(--paper)]",
  },
  {
    number: "2",
    title: "Upload the job description",
    description: "We analyze the role and extract key requirements and skills.",
    previewSurface: "bg-[var(--ink-100)]",
    previewAccent: "bg-[var(--paper)]",
    previewFrame: "bg-[var(--canvas)]",
  },
  {
    number: "3",
    title: "Generate application kit",
    description: "With only one click we generate a resume, cover letter and a preparation kit for your application.",
    previewSurface: "bg-[var(--paper)]",
    previewAccent: "bg-[var(--ink-100)]",
    previewFrame: "bg-[var(--ink-200)]",
  },
  {
    number: "4",
    title: "Export and\napply",
    description: "Download clean and ATS-optimized PDFs.",
    previewSurface: "bg-[var(--ink-200)]",
    previewAccent: "bg-[var(--canvas)]",
    previewFrame: "bg-[var(--ink-100)]",
  },
] as const;

function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = howSteps[activeStep];

  return (
    <section id="how-it-works" className="border-b-2 border-[var(--slate-grey)] py-16 lg:py-[53px]">
      <div className="section-wrap px-6">
        <div className="mx-auto max-w-[1244px]">
          <picture>
            <source srcSet={ASSETS.sapiensBannerAvif} type="image/avif" />
            <img
              src={ASSETS.sapiensBannerPng}
              alt="CV Sapiens characters banner"
              width={1244}
              height={174}
              className="mx-auto h-auto w-full"
            />
          </picture>
        </div>

        <h2 className="mx-auto mt-20 max-w-[697px] text-center text-[42px] leading-[1.05] sm:text-[60px] lg:mt-[102px]">
          From draft to optimized resume in minutes
        </h2>

        <div className="mx-auto mt-10 grid max-w-[1146px] gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-[27px]">
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
                  "grid min-h-[272px] grid-rows-[38px_80px_1fr] rounded-[20px] border-2 border-[var(--border)] px-6 py-5 text-left transition-colors duration-200",
                  isActive ? "bg-[var(--white)]" : "bg-[var(--page-background)] hover:bg-[var(--white)]",
                )}
                aria-pressed={isActive}
              >
                <span className="block self-start font-[var(--font-zilla-slab)] text-[32px] font-semibold leading-[1.2] tracking-[0.5px]">
                  {step.number}
                </span>
                <span className="mt-2 block max-w-[180px] self-start whitespace-pre-line font-[var(--font-zilla-slab)] text-[24px] font-medium leading-[1.45] tracking-[0.5px]">
                  {step.title}
                </span>
                <span className="mt-1 block max-w-[188px] self-start text-[18px] leading-[1.4] text-[var(--text-secondary)]">
                  {step.description}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className={cn(
            "mx-auto mt-6 max-w-[1146px] rounded-[30px] px-6 py-6 transition-colors duration-300 md:px-10 md:py-10 lg:min-h-[692px]",
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
    <section id="prices" className="section-wrap px-6 py-20">
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
