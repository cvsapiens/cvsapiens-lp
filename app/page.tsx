"use client";

import Link from "next/link";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { COLOR_TOKENS } from "./lib/design-tokens";

const ASSETS = {
  logoBlack: "/illustration-icons-lp-svg/logo-black.svg",
  logoDefault: "/illustration-icons-lp-svg/logo-default.svg",
  heroShapeOne: "/illustration-icons-lp-svg/iilustration-shape-one.svg",
  heroShapeTwo: "/illustration-icons-lp-svg/iilustration-shape-two.svg",
  heroShapeThree: "/illustration-icons-lp-svg/iilustration-shape-three.svg",
  heroSapienEdit: "/illustration-icons-lp-svg/sapien-edit.svg",
  heroSapienHappy: "/illustration-icons-lp-svg/sapien-happy.svg",
  heroSapienThinking: "/illustration-icons-lp-svg/sapien-thinking.svg",
  heroSapienSad: "/illustration-icons-lp-svg/sapien-sad.svg",
  problemVague: "/illustration-icons-lp-svg/illustration-bullet-points.svg",
  problemRole: "/illustration-icons-lp-svg/illustration-not-tailored.svg",
  problemGeneric: "/illustration-icons-lp-svg/illustration-generic-content.svg",
  howIconResume: "/illustration-icons-lp-svg/illustration-how-it-works-one.svg",
  howIconJob: "/illustration-icons-lp-svg/illustration-how-it-works-two.svg",
  howIconOptimize: "/illustration-icons-lp-svg/illustration-how-it-works-three.svg",
  howIconExport: "/illustration-icons-lp-svg/illustration-how-it-works-four.svg",
  howIllustrationOne: "/illustration-icons-lp-svg/illustration-sapien-how-it-works-one.svg",
  howIllustrationTwo: "/illustration-icons-lp-svg/illustration-sapien-how-it-works-two.svg",
  howIllustrationThree: "/illustration-icons-lp-svg/illustration-sapien-how-it-works-three.svg",
  howIllustrationFour: "/illustration-icons-lp-svg/illustration-sapien-how-it-works-four.svg",
  cleanTemplateScreen: "/illustration-icons-lp-svg/cvsapien-print.png",
  limitedOfferBadge: "/illustration-icons-lp-svg/illustration-limited-offer.svg",
  check: "/illustration-icons-lp-svg/Check.svg",
  cross: "/illustration-icons-lp-svg/X.svg",
  aiIcon: "/illustration-icons-lp-svg/illustration-impact-four.svg",
  jdIcon: "/illustration-icons-lp-svg/illustration-impact-five.svg",
  atsIcon: "/illustration-icons-lp-svg/illustration-impact-six.svg",
  templateIcon: "/illustration-icons-lp-svg/illustration-impact-seven.svg",
  ctaIllustration: "/illustration-icons-lp-svg/sapien-video.svg",
  footerShapes: "/illustration-icons-lp-svg/illustration-footer.svg",
} as const;

type ButtonVariant = "primary" | "secondary" | "ghost";

type ActionButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function ActionButton({ children, variant = "primary", href = "#", className }: ActionButtonProps) {
  const baseClasses =
    "inline-flex min-h-[52px] items-center justify-center rounded-[43px] px-8 font-semibold text-[18px] leading-[1.4] tracking-[0.2px] transition-all duration-200";
  const styles: Record<ButtonVariant, string> = {
    primary:
      "bg-[var(--slate-grey)] !text-[var(--white)] [text-shadow:0_1px_0_rgba(0,0,0,0.35)] hover:-translate-y-0.5 hover:shadow-lg",
    secondary:
      "border border-[var(--slate-grey)] bg-[var(--chalk-white)] text-[var(--slate-grey)] hover:bg-[var(--coral-hover)]",
    ghost: "text-[var(--slate-grey)] hover:text-[var(--coral-orange)]",
  };

  return (
    <Link href={href} className={cn(baseClasses, styles[variant], className)}>
      <span className={variant === "primary" ? "text-[var(--white)]" : undefined}>{children}</span>
    </Link>
  );
}

function Logo({ dark = true }: { dark?: boolean }) {
  const logo = dark ? ASSETS.logoBlack : ASSETS.logoDefault;
  return (
    <div className="flex items-center">
      <img src={logo} alt="cv sapiens" width={623} height={92} className="h-8 w-auto" />
    </div>
  );
}

function Navbar() {
  return (
    <header className="section-wrap reveal pt-4">
      <div className="flex items-center justify-between rounded-2xl border-2 border-[var(--slate-grey)] bg-[var(--chalk-white)] px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {["About", "Features", "Pricing", "FAQ"].map((item) => (
            <ActionButton key={item} variant="ghost" className="min-h-0 px-0 text-[18px]" href={`#${item.toLowerCase()}`}>
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
    <section className="section-wrap reveal grid gap-8 py-12 lg:grid-cols-[1fr_515px] lg:items-center">
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

const problemCards: Array<{ title: string; description: string; image: string }> = [
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
    description: "Worked on backend systems is not enough. Impact, metrics and relevant skills matter.",
    image: ASSETS.problemGeneric,
  },
];

function ProblemSection() {
  return (
    <section id="about" className="border-y-2 border-[var(--slate-grey)] bg-[var(--pistachio)] py-16 lg:py-20">
      <div className="section-wrap">
        <h2 className="mx-auto max-w-[604px] text-center text-[42px] leading-[1.05] sm:text-[60px]">Most resumes never reach a human</h2>
        <div className="mx-auto mt-16 grid max-w-[1180px] gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-x-24 xl:gap-x-32">
          {problemCards.map((card, index) => (
            <article
              key={card.title}
              className={cn(
                "w-[265px] text-center",
                index === 0 && "lg:justify-self-start",
                index === 1 && "lg:justify-self-center",
                index === 2 && "lg:justify-self-end",
              )}
            >
              <div className="mx-auto w-[246px]">
                <img src={card.image} alt={card.title} width={246} height={298} />
              </div>
              <h3 className="mt-6 font-medium text-[24px] tracking-[0.5px]">{card.title}</h3>
              <p className="mx-auto mt-2 max-w-[265px] text-[18px] leading-[1.4]">
                {card.title === "Generic Content"
                  ? "“Worked on backend systems” is not enough. Impact, metrics and relevant skills matter."
                  : card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const HOW_IT_WORKS_STEP_DURATION_MS = 5500;

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
    <section id="features" className="section-wrap py-20 lg:py-24">
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
              style={{
                animationDuration: `${HOW_IT_WORKS_STEP_DURATION_MS}ms`,
              }}
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
                  className="block font-[var(--font-zilla-slab)] font-medium text-[24px] leading-[1.45] tracking-[0.5px] transition-colors duration-200 group-hover:text-[#626262]"
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

function TemplateSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--chalk-pink)] py-16">
      <div className="section-wrap">
        <h2 className="text-center text-[42px] leading-[1.05] sm:text-[60px]">Clean templates. No distractions.</h2>
        <p className="mt-4 text-center text-[18px] leading-[1.4]">Get $50+ discount today</p>
        <div className="mt-6 flex justify-center">
          <ActionButton>Start Free Trial</ActionButton>
        </div>
        <div className="relative mt-10">
          <div className="absolute left-2 top-2 z-10 w-[120px] sm:w-[191px]">
            <img src={ASSETS.limitedOfferBadge} alt="Limited offer badge" width={191} height={191} />
          </div>
          <img
            src={ASSETS.cleanTemplateScreen}
            alt="CV Sapiens template editor screenshot"
            width={1218}
            height={590}
            className="rounded-[32px] border border-[var(--slate-grey)]"
          />
        </div>
      </div>
    </section>
  );
}

type Plan = {
  name: string;
  price: string;
  cadence: string;
  subtitle: string;
  cta: string;
  features: Array<{ label: string; included: boolean }>;
  highlighted?: boolean;
  popular?: boolean;
  tone?: "default" | "elevated";
};

const planFeatures = [
  "Create unlimited resumes",
  "Access to all templates",
  "Edit and customize anytime",
  "Preview your resume",
  "Export 10 resumes per month",
  "Export 10 cover letters per month",
  "PDF & Word formats",
  "Priority support",
];

const plans: Plan[] = [
  {
    name: "Free Trial",
    price: "$0",
    cadence: "per member",
    subtitle: "Start creating your resume today",
    cta: "Start Free Trial",
    features: planFeatures.map((label, idx) => ({ label: label.replace("10 ", ""), included: idx < 4 })),
  },
  {
    name: "Monthly",
    price: "$30",
    cadence: "/ month",
    subtitle: "Perfect for active job seekers",
    cta: "Get Started",
    highlighted: true,
    features: planFeatures.map((label) => ({ label, included: true })),
  },
  {
    name: "Quarterly",
    price: "$19",
    cadence: "/ quarter",
    subtitle: "Best value for your job search",
    cta: "Get Started",
    popular: true,
    tone: "elevated",
    features: planFeatures.map((label) => ({ label, included: true })),
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="section-wrap py-20">
      <h2 className="text-center text-[42px] leading-[1.05] sm:text-[60px]">Simple pricing</h2>
      <p className="mt-4 text-center text-[18px] leading-[1.4] text-[var(--grey)]">
        Choose the plan that works best for your job search
      </p>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={cn(
              "relative rounded-[30px] border-2 border-[var(--coral-orange)] bg-[var(--chalk-white)] p-7",
              plan.tone === "elevated" && "border-[var(--slate-grey)] bg-[#F9ECE8] shadow-xl",
            )}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--coral-orange)] px-5 py-1 text-[14px] font-semibold text-[var(--white)]">
                POPULAR
              </span>
            )}
            <h3 className="text-[32px] leading-none">{plan.name}</h3>
            <div className="mt-3 flex items-end gap-3">
              <span className="font-[var(--font-zilla-slab)] text-[48px] font-bold leading-none">{plan.price}</span>
              <span className="mb-1 text-[18px] text-[var(--grey)]">{plan.cadence}</span>
            </div>
            <p className="mt-2 text-[18px] leading-[1.4]">{plan.subtitle}</p>
            <ActionButton
              variant={plan.highlighted || plan.tone === "elevated" ? "primary" : "secondary"}
              className="mt-8 w-full"
            >
              {plan.cta}
            </ActionButton>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature.label} className="flex items-center gap-3">
                  <img src={feature.included ? ASSETS.check : ASSETS.cross} alt="" aria-hidden width={20} height={20} />
                  <span className={cn("text-[18px] leading-[1.4]", !feature.included && "text-[var(--grey)]")}>{feature.label}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-8 text-center text-[18px] leading-[1.4] text-[var(--grey)]">
        All plans include secure data storage and regular updates
      </p>
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
];

function PointersSection() {
  return (
    <section className="section-wrap py-20">
      <h2 className="mx-auto max-w-[1040px] text-center text-[42px] leading-[1.25] sm:text-[60px]">
        cv sapiens helps you{" "}
        <span style={{ color: COLOR_TOKENS["windjammer-blue"] }}>build stronger resumes</span>,{" "}
        <span style={{ color: COLOR_TOKENS["daffodil"] }}>match</span> job descriptions, and{" "}
        <span style={{ color: COLOR_TOKENS["sienna-red"] }}>pass ATS screening.</span>
      </h2>
      <div className="mt-8 grid gap-0 border-y border-[var(--slate-grey)] md:grid-cols-2">
        {pointerFeatures.map((feature, index) => (
          <article
            key={feature.title}
            className={cn(
              "flex gap-5 border-b border-[var(--slate-grey)] p-10 md:border-b-0",
              index % 2 === 0 ? "md:border-r" : "",
              index < 2 ? "md:border-b" : "",
            )}
          >
            <img src={feature.icon} alt="" aria-hidden width={56} height={56} />
            <div>
              <h3 className="text-[40px] leading-[1.2]">{feature.title}</h3>
              <p className="mt-3 text-[18px] leading-[1.4]">{feature.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="section-wrap grid gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
      <div className="relative rounded-[70px] border-2 border-[var(--slate-grey)] bg-[var(--coral-orange)] p-8 lg:p-12">
        <div className="max-w-[560px] rounded-[42px] bg-[var(--chalk-white)] p-3">
          <img src={ASSETS.ctaIllustration} alt="CV Sapiens assistant illustration" width={846} height={565} />
        </div>
      </div>
      <div>
        <h2 className="max-w-[506px] text-[42px] leading-[1.05] sm:text-[60px]">Stop sending the same resume everywhere.</h2>
        <p className="mt-8 max-w-[480px] text-[18px] leading-[1.4]">
          You have already done the hard work: building skills, shipping projects, gaining experience.
        </p>
        <p className="mt-4 max-w-[480px] text-[18px] leading-[1.4]">
          With <strong>cv sapiens</strong> you can refine your experience, align your resume with job descriptions, and present
          your skills in a way that both ATS systems and recruiters understand.
        </p>
        <ActionButton className="mt-8">Start Free Trial</ActionButton>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="relative mt-8 overflow-hidden border-t border-[var(--slate-grey)] pt-16">
      <div className="section-wrap relative z-10 grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="flex items-start gap-10">
          <Logo dark={false} />
          <div className="h-40 w-px bg-[var(--slate-grey)]" />
        </div>
        <div className="grid grid-cols-3 gap-8 text-[18px] leading-[1.43]">
          <div className="space-y-6">
            <Link href="#">Link Button</Link>
            <Link href="#">Link Button</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
          </div>
          <div className="space-y-6">
            <Link href="#">Link Button</Link>
            <Link href="#">Link Button</Link>
            <Link href="#">Link Button</Link>
          </div>
          <div className="space-y-6">
            <Link href="#">Help</Link>
            <Link href="#">Link Button</Link>
          </div>
        </div>
      </div>
      <div className="relative mt-20 min-h-[520px]">
        <img src={ASSETS.footerShapes} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover object-bottom" />
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-[var(--chalk-white)] text-[var(--slate-grey)]">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <TemplateSection />
      <PricingSection />
      <PointersSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
