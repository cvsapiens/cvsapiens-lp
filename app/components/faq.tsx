import Image from "next/image";
import { APP_URLS, content } from "../content/en";
import { Thread, type ThreadStop } from "./thread";

const { faq } = content;

// Hanging loose down the gap beside the questions.
const THREAD: ThreadStop[] = [
  { x: 0.345, y: 0 },
  { x: 0.326, at: 0.34 },
  { x: 0.364, at: 0.68 },
  { x: 0.345, fromBottom: 0 },
];

export function Faq() {
  return (
    <section id="faq" className="band band--deep" aria-labelledby="faq-title">
      <div className="container lane faq">
        <Thread stops={THREAD} />
        <div className="faq__intro">
          <h2 id="faq-title" className="h2">
            {faq.title}
          </h2>
          <Image
            src="/illustration-icons-lp-svg/sapien-thinking.svg"
            alt=""
            width={278}
            height={255}
            className="faq__art"
          />
        </div>
        <div className="faq__list">
          {faq.items.map((item) => (
            <details key={item.question} className="faq__item">
              <summary>
                <span>{item.question}</span>
                <svg className="icon faq__chevron" viewBox="0 0 20 20" aria-hidden focusable="false">
                  <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
          <a className="text-link faq__privacy" href={APP_URLS.privacy}>
            {faq.privacyLink}
          </a>
        </div>
      </div>
    </section>
  );
}
