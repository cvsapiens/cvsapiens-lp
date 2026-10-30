import Image from "next/image";
import { content } from "../content/en";
import { LanguageDemo } from "./language-demo";
import { Thread, type ThreadStop } from "./thread";

const { honest, abroad } = content;

// Swaying down the gap between the columns to the pin on the language sheet's corner,
// then under the sheet and across the bottom margin to the right edge.
const THREAD: ThreadStop[] = [
  { x: 0.42, y: 0 },
  { x: 0.438, at: 0.28 },
  { x: 0.402, at: 0.56 },
  { pin: "lang" },
  { x: 0.62, fromBottom: 44 },
  { x: 1.035, fromBottom: 28 },
  { x: 1.035, fromBottom: 0 },
];

export function Honest() {
  return (
    <section className="band" aria-labelledby="honest-title">
      <div className="container lane honest">
        <Thread stops={THREAD} />
        <div className="honest__intro">
          <h2 id="honest-title" className="h2">
            {honest.title}
          </h2>
          <p className="body-lg">{honest.lead}</p>
          <Image
            src="/illustrations/ai-generation-complete.png"
            alt=""
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 440px, 80vw"
            className="honest__art"
          />
        </div>
        <dl className="honest__list">
          {honest.points.map((point) => (
            <div key={point.title} className="honest__item">
              <dt className="h3">{point.title}</dt>
              <dd>{point.body}</dd>
            </div>
          ))}
        </dl>
        <div className="abroad">
          <div className="abroad__text">
            <h3 className="h2 h2--sm">{abroad.title}</h3>
            <p className="body-lg">{abroad.body}</p>
          </div>
          <LanguageDemo />
        </div>
      </div>
    </section>
  );
}
