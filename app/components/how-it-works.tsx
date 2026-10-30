import Image from "next/image";
import { content } from "../content/en";
import { SuggestionDemo } from "./suggestion-demo";
import { Thread, type ThreadStop } from "./thread";

const { howItWorks, showcase } = content;

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
      <p className="doc__kind">{paste.label}</p>
      <div className="paste__box">
        <p className="paste__text">{paste.text}</p>
      </div>
      <p className="paste__meta">{paste.counts}</p>
      <p className="paste__hint">{paste.hint}</p>
    </div>
  );
}

/** The tailored copy as a file: a thumbnail of the real template page, its name and formats. */
function DownloadMock() {
  const { download } = howItWorks;
  return (
    <div className="download doc">
      <p className="doc__kind">{download.label}</p>
      <div className="download__file">
        <Image
          src={showcase.image.src}
          alt=""
          width={showcase.image.width}
          height={showcase.image.height}
          sizes="4.5rem"
          className="download__thumb"
        />
        <span className="download__text">
          <span className="download__name">{download.file}</span>
          <span className="download__meta">{showcase.thumbCaption}</span>
        </span>
      </div>
      <p className="download__formats">
        {download.formats.map((format) => (
          <span key={format}>{format}</span>
        ))}
      </p>
      <p className="paste__hint">{download.hint}</p>
    </div>
  );
}

const VISUALS = [<PasteMock key="paste" />, <SuggestionDemo key="suggest" />, <DownloadMock key="download" />];

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
