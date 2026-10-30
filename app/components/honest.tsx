import Image from "next/image";
import { content } from "../content/en";
import { Thread, type ThreadStop } from "./thread";

const { honest } = content;

// Swaying down the gap between the columns, then across the bottom margin to the right edge.
const THREAD: ThreadStop[] = [
  { x: 0.42, y: 0 },
  { x: 0.438, at: 0.3 },
  { x: 0.402, at: 0.62 },
  { x: 0.42, fromBottom: 64 },
  { x: 0.62, fromBottom: 40 },
  { x: 1.035, fromBottom: 28 },
  { x: 1.035, fromBottom: 0 },
];

export function Honest() {
  return (
    <section className="band band--deep" aria-labelledby="honest-title">
      <div className="container lane honest">
        <Thread stops={THREAD} />
        <div className="honest__intro">
          <h2 id="honest-title" className="h2">
            {honest.title}
          </h2>
          <p className="body-lg">{honest.lead}</p>
          <Image
            src="/illustrations/profile-incomplete.svg"
            alt=""
            width={1330}
            height={916}
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
      </div>
    </section>
  );
}
