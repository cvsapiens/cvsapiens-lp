import { APP_URLS, content } from "../content/en";
import { HeroVideo } from "./hero-video";
import { Thread, type ThreadStop } from "./thread";
import { ButtonLink, MarkedText } from "./ui";

const { hero, example } = content;

// The thread starts at the posting's first marked requirement. Over the paper it is drawn
// on top; past the posting's edge it runs behind, into the demo film's left edge, behind
// the film to the right margin, and down into the next section.
const THREAD_ON_PAPER: ThreadStop[] = [{ pin: "mark" }, { pin: "posting" }];
const THREAD: ThreadStop[] = [
  { pin: "posting" },
  { pin: "scene" },
  { x: 1.035, level: "scene", dy: 24 },
  { x: 1.035, fromBottom: 0 },
];
// A dashed ink leg from the same mark to the headline: the job's words become the pitch.
const THREAD_TO_HEADLINE: ThreadStop[] = [{ pin: "headline" }, { pin: "mark" }];

export function ExamplePosting() {
  const { posting } = example;
  return (
    <article className="posting doc" aria-label={posting.label}>
      <span className="pin" aria-hidden />
      <span className="anchor posting__anchor" data-thread-pin="posting" aria-hidden />
      <p className="posting__title">{posting.title}</p>
      <p className="posting__company">
        {posting.company} <span aria-hidden>·</span> {posting.meta}
      </p>
      <p className="posting__intro">{posting.intro}</p>
      <p className="posting__subtitle">{posting.requirementsTitle}</p>
      <ul className="posting__list">
        {posting.requirements.map((requirement, index) => (
          <li key={requirement}>
            <MarkedText text={requirement} pin={index === 0 ? "mark" : undefined} />
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container lane hero__grid">
        <Thread className="thread--hero" stops={THREAD} />
        <Thread className="thread--hero thread--over" stops={THREAD_ON_PAPER} />
        <Thread className="thread--hero thread--over thread--ink" stops={THREAD_TO_HEADLINE} dashed />
        <div className="hero__copy">
          <span className="headline__anchor" data-thread-pin="headline" aria-hidden />
          <h1 id="hero-title" className="display">
            {hero.title}
          </h1>
          <p className="lead">{hero.lead}</p>
          <div className="hero__actions" id="hero-cta">
            <ButtonLink href={APP_URLS.signUp}>{hero.primary}</ButtonLink>
            <a href="#how-it-works" className="text-link">
              {hero.secondary}
            </a>
          </div>
        </div>
        <div className="hero__posting">
          <ExamplePosting />
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG sticker from the earlier landing page */}
          <img
            className="sticker sticker--asterisk"
            src="/illustration-icons-lp-svg/iilustration-shape-three.svg"
            alt=""
            width={184}
            height={184}
          />
        </div>
        <div className="hero__scene">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
