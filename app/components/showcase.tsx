import Image from "next/image";
import { APP_URLS, content } from "../content/en";
import { Thread, type ThreadStop } from "./thread";
import { ButtonLink, CheckIcon, Clip } from "./ui";

const { showcase } = content;

// Down the left margin, across to the clip holding the page, then behind it and back out.
const THREAD: ThreadStop[] = [
  { x: -0.035, y: 0 },
  { x: -0.035, level: "sample", dy: -28 },
  { pin: "sample" },
  { x: -0.035, at: 0.82 },
  { x: -0.035, fromBottom: 0 },
];

/** The tailored resume as the app renders it: a real page from one of its templates. */
export function Showcase() {
  return (
    <section id="templates" className="band band--deep showcase-band" aria-labelledby="showcase-title">
      <div className="container lane showcase">
        <Thread stops={THREAD} />
        <figure className="showcase__page">
          <div className="showcase__stack">
            <div className="showcase__sheet showcase__sheet--behind doc" aria-hidden>
              <Image
                src={showcase.behind.src}
                alt=""
                width={showcase.behind.width}
                height={showcase.behind.height}
                sizes="(min-width: 1024px) 480px, 80vw"
              />
            </div>
            <div className="showcase__sheet doc">
              <Clip pin="sample" />
              <Image
                src={showcase.image.src}
                alt={showcase.alt}
                width={showcase.image.width}
                height={showcase.image.height}
                sizes="(min-width: 1024px) 480px, 80vw"
              />
            </div>
          </div>
          <figcaption className="showcase__caption">{showcase.caption}</figcaption>
        </figure>
        <div className="showcase__text">
          <h2 id="showcase-title" className="h2">
            {showcase.title}
          </h2>
          <p className="body-lg">{showcase.lead}</p>
          <ul className="showcase__points">
            {showcase.points.map((point) => (
              <li key={point}>
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>
          <div className="showcase__actions">
            <ButtonLink href={APP_URLS.signUp}>{showcase.primary}</ButtonLink>
            <a className="text-link" href={showcase.pdf} download>
              {showcase.sample}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
