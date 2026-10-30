import { content } from "../content/en";
import { SuggestionDemo } from "./suggestion-demo";
import { Thread, type ThreadStop } from "./thread";

const { howItWorks, example } = content;

// In from above the third step, along the row of step pins like a line, out down the left margin.
const THREAD: ThreadStop[] = [
  { x: 0.75, y: 0 },
  { pin: "step-3" },
  { pin: "step-2" },
  { pin: "step-1" },
  { x: -0.035, level: "step-1", dy: 28 },
  { x: -0.035, fromBottom: 0 },
];

function PasteMock() {
  const { paste } = howItWorks;
  return (
    <div className="paste doc">
      <span className="stamp">{example.stamp}</span>
      <p className="doc__kind">{paste.label}</p>
      <div className="paste__box">
        <p className="paste__text">{paste.text}</p>
      </div>
      <p className="paste__meta">{paste.counts}</p>
      <p className="paste__hint">{paste.hint}</p>
    </div>
  );
}

function BoardMock() {
  const { board } = howItWorks;
  return (
    <div className="mini-board" role="group" aria-label={board.label}>
      {board.columns.map((column) => (
        <div key={column.title} className="mini-board__column">
          <p className="mini-board__title">{column.title}</p>
          {column.cards.map((card) => (
            <div key={card.company} className="app-card doc">
              <span className="app-card__mark" aria-hidden>
                {card.company.slice(0, 2).toUpperCase()}
              </span>
              <span className="app-card__text">
                <span className="app-card__role">{card.role}</span>
                <span className="app-card__company">{card.company}</span>
              </span>
              <span className={`pill pill--${card.tone}`}>{card.pill}</span>
              <span className="app-card__meta">{card.meta}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const VISUALS = [<PasteMock key="paste" />, <SuggestionDemo key="suggest" />, <BoardMock key="board" />];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="band" aria-labelledby="how-title">
      <div className="container lane">
        <Thread stops={THREAD} />
        <div className="section-head">
          <h2 id="how-title" className="h2">
            {howItWorks.title}
          </h2>
          <p className="body-lg">{howItWorks.lead}</p>
        </div>
        <ol className="steps">
          {howItWorks.steps.map((step, index) => (
            <li key={step.title} className={`step step--${index + 1}`}>
              <span className="step__pin" data-thread-pin={`step-${index + 1}`} aria-hidden>
                {index + 1}
              </span>
              <h3 className="h3">{step.title}</h3>
              <p>{step.body}</p>
              <div className="step__visual">{VISUALS[index]}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
