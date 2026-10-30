import Image from "next/image";
import { APP_URLS, content } from "../content/en";
import { Thread, type ThreadStop } from "./thread";
import { ButtonLink } from "./ui";

const { finalCta } = content;

// The thread ends here, tied off beside the button.
const THREAD: ThreadStop[] = [{ x: 0.345, y: 0 }, { pin: "knot" }];

export function FinalCta() {
  return (
    <section className="band band--deep final" aria-labelledby="final-title" id="final-cta">
      <div className="container lane final__grid">
        <Thread stops={THREAD} />
        <Image
          src="/illustrations/account-welcome.png"
          alt=""
          width={1536}
          height={1024}
          sizes="(min-width: 1024px) 460px, 80vw"
          className="final__art"
        />
        <div className="final__text">
          <h2 id="final-title" className="h2">
            {finalCta.title}
          </h2>
          <p className="body-lg">{finalCta.body}</p>
          <div className="final__actions">
            <span className="knot" data-thread-pin="knot" aria-hidden>
              {/* The thread's end, tied in a bow beside the button. */}
              <svg viewBox="0 0 32 32" focusable="false">
                <path d="M16 15 C 10 5, 2 9, 5 15 C 7 19, 13 17, 16 15 C 19 17, 25 19, 27 15 C 30 9, 22 5, 16 15 Z" />
                <path d="M16 15 L 11 26 M16 15 L 21 27" />
              </svg>
            </span>
            <ButtonLink href={APP_URLS.signUp}>{finalCta.primary}</ButtonLink>
            <p className="reassure">{finalCta.reassurance}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
