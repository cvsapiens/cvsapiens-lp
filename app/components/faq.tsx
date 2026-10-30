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
    <section id="faq" className="band" aria-labelledby="faq-title">
      <div className="container lane faq">
        <Thread stops={THREAD} />
        <div className="faq__intro">
          <h2 id="faq-title" className="h2">
            {faq.title}
          </h2>
          <Image
            src="/illustrations/notifications-empty.png"
            alt=""
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 380px, 70vw"
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
