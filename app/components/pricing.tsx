import Image from "next/image";
import { APP_URLS, content } from "../content/en";
import { Thread, type ThreadStop } from "./thread";
import { ButtonLink, CheckIcon, Clip, cn } from "./ui";

const { pricing } = content;

// Down the right margin, across above the plans to the pass, then behind the panel to the next gap.
const THREAD: ThreadStop[] = [
  { x: 1.035, y: 0 },
  { x: 1.035, level: "pass", dy: -40 },
  { x: 0.62, level: "pass", dy: -34 },
  { pin: "pass" },
  { x: 0.345, fromBottom: 0 },
];

export function Pricing() {
  const [free, ...paid] = pricing.plans;

  return (
    <section id="pricing" className="band" aria-labelledby="pricing-title">
      <div className="container lane">
        <Thread stops={THREAD} />
        <div className="section-head pricing__head">
          <div>
            <h2 id="pricing-title" className="h2">
              {pricing.title}
            </h2>
            <p className="body-lg">{pricing.lead}</p>
          </div>
          <Image
            src="/illustrations/ai-generation-ready.svg"
            alt=""
            width={1536}
            height={1024}
            className="pricing__art"
          />
        </div>

        <div className="plans">
          {/* Each plan is top, button, terms (and Free's list): rows the plans share on wide screens,
              so every button lines up however long the copy above it runs. */}
          <div className="plan plan--free">
            <div className="plan__top">
              <h3 className="plan__name">{free.name}</h3>
              <p className="plan__price">
                <span className="figure">{free.price}</span>
                <span className="plan__cadence">{free.cadence}</span>
              </p>
              <p className="plan__summary">{free.summary}</p>
            </div>
            <ButtonLink href={APP_URLS.signUp} variant="secondary" className="plan__cta">
              {free.cta}
            </ButtonLink>
            <p className="plan__terms">{free.terms}</p>
            <div className="plan__includes">
              <p className="plan__list-title">{pricing.freeIncludesTitle}</p>
              <ul className="plan__list">
                {pricing.freeIncludes.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="plans__paid">
            <div className="plans__row">
              {paid.map((plan) => (
                <div key={plan.id} className={cn("plan", `plan--${plan.id}`)}>
                  {plan.id === "pass" && <Clip pin="pass" />}
                  <div className="plan__top">
                    <h3 className="plan__name">
                      {plan.name}
                      {"badge" in plan && <span className="plan__badge">{plan.badge}</span>}
                    </h3>
                    <p className="plan__price">
                      <span className="figure">{plan.price}</span>
                      <span className="plan__cadence">{plan.cadence}</span>
                    </p>
                    {"perDay" in plan && (
                      <p className="plan__per-day">
                        {plan.perDay} {pricing.perDay}
                      </p>
                    )}
                    <p className="plan__summary">{plan.summary}</p>
                  </div>
                  <ButtonLink
                    href={APP_URLS.signUp}
                    variant={plan.id === "pass" ? "primary" : "secondary"}
                    className="plan__cta"
                  >
                    {plan.cta}
                  </ButtonLink>
                  <p className={cn("plan__terms", plan.id === "pass" && "plan__terms--strong")}>{plan.terms}</p>
                </div>
              ))}
            </div>
            <div className="plans__includes">
              <p className="plan__list-title">{pricing.premiumTitle}</p>
              <ul className="plan__list plan__list--columns">
                {pricing.premiumIncludes.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="pricing__note">{pricing.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
