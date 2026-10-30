import { content } from "../content/en";
import { Thread, type ThreadStop } from "./thread";
import { Clip, StatusDot } from "./ui";

const { kit, example } = content;

// Down the left margin, across to the clip holding the resume, then behind the papers to the next gap.
const THREAD: ThreadStop[] = [
  { x: -0.035, y: 0 },
  { x: -0.035, level: "desk", dy: -24 },
  { pin: "desk" },
  { x: 0.42, fromBottom: 0 },
];

type Item = (typeof kit.items)[number];
const item = (id: Item["id"]) => kit.items.find((entry) => entry.id === id) as Item;

/** On phones each document carries its own label underneath; on desktop the labels flank the desk. */
function Caption({ id }: { id: Item["id"] }) {
  const { title, body } = item(id);
  return (
    <div className="spread__caption">
      <h3 className="h3">{title}</h3>
      <p>{body}</p>
    </div>
  );
}

function Labels({ ids, side }: { ids: Array<Item["id"]>; side: "left" | "right" }) {
  return (
    <ul className={`spread__labels spread__labels--${side}`}>
      {ids.map((id) => (
        <li key={id} className="spread__label">
          <h3 className="h3">{item(id).title}</h3>
          <p>{item(id).body}</p>
        </li>
      ))}
    </ul>
  );
}

/** The finished kit laid out on the desk: the documents at their own scale, labelled around them. */
export function KitSpread() {
  return (
    <section className="band band--deep" aria-labelledby="kit-title">
      <div className="container lane">
        <Thread stops={THREAD} />
        <div className="section-head section-head--center">
          <h2 id="kit-title" className="h2">
            {kit.title}
          </h2>
          <p className="body-lg">{kit.lead}</p>
        </div>

        <div className="spread">
          {/* Each label sits on the side of the desk where its document lies. */}
          <Labels ids={["resume", "board", "export"]} side="left" />

          <div className="spread__desk" role="group" aria-label={kit.label}>
            <article className="spread__resume doc">
              <Clip pin="desk" />
              <span className="stamp">{example.stamp}</span>
              <p className="resume__name">{kit.resume.name}</p>
              <p className="resume__role">{kit.resume.role}</p>
              <p className="resume__contact">{kit.resume.contact}</p>
              <p className="resume__heading">{kit.resume.summaryTitle}</p>
              <p className="resume__text">{kit.resume.summary}</p>
              <p className="resume__heading">{kit.resume.historyTitle}</p>
              <p className="resume__job">
                <span>{kit.resume.jobTitle}</span>
                <span>{kit.resume.jobDates}</span>
              </p>
              <ul className="resume__bullets">
                {kit.resume.bullets.map((bullet, index) => (
                  <li key={bullet} className={index === 0 ? "resume__changed" : undefined}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
            <Caption id="resume" />

            <aside className="spread__match doc">
              <p className="doc__kind">{kit.match.title}</p>
              <p className="match__count">
                <strong>{kit.match.found}</strong> {kit.match.of}
              </p>
              <ul className="match__rows">
                {kit.match.rows.map((row) => (
                  <li key={row.requirement}>
                    <span>{row.requirement}</span>
                    <span className={`match-status match-status--${row.status}`}>
                      <StatusDot status={row.status} />
                      {row.label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="match__footnote">{kit.match.footnote}</p>
            </aside>
            <Caption id="match" />

            <article className="spread__letter doc">
              <p className="letter__greeting">{kit.letter.greeting}</p>
              <p>{kit.letter.body}</p>
              <span className="doc-lines" aria-hidden />
            </article>
            <Caption id="letter" />

            <div className="spread__card app-card doc">
              <span className="app-card__mark" aria-hidden>
                LP
              </span>
              <span className="app-card__text">
                <span className="app-card__role">{kit.card.role}</span>
                <span className="app-card__company">{kit.card.company}</span>
              </span>
              <span className="pill pill--applied">{kit.card.pill}</span>
            </div>
            <Caption id="board" />

            <aside className="spread__prep doc">
              <p className="doc__kind">{kit.prep.title}</p>
              <p className="prep__question">{kit.prep.question}</p>
              <p className="prep__tip">{kit.prep.tip}</p>
            </aside>
            <Caption id="prep" />

            <p className="spread__exports">
              {kit.exports.map((format) => (
                <span key={format}>{format}</span>
              ))}
            </p>
            <Caption id="export" />
          </div>

          <Labels ids={["letter", "match", "prep"]} side="right" />
        </div>
      </div>
    </section>
  );
}
