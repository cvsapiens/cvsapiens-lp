import type { ReactNode } from "react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", size = "md", className }: ButtonLinkProps) {
  return (
    <a href={href} className={cn("button", `button--${variant}`, size === "sm" && "button--sm", className)}>
      {children}
    </a>
  );
}

/**
 * Renders "[word]" spans as marked requirements, the way the posting is highlighted in the app.
 * With `pin`, a zero-size anchor right after the mark gives the thread a place to start.
 */
export function MarkedText({ text, pin }: { text: string; pin?: string }) {
  const parts = text.split(/(\[[^\]]+\])/);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span key={index} className="mark-wrap">
            <mark>{part.slice(1, -1)}</mark>
            {pin && <span className="anchor-inline" data-thread-pin={pin} aria-hidden />}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** The earlier landing page's pink U, used as a clip holding a document to the thread. */
export function Clip({ pin }: { pin: string }) {
  return (
    <span className="clip" data-thread-pin={pin} aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element -- a 2rem decorative SVG; next/image adds nothing */}
      <img src="/illustration-icons-lp-svg/iilustration-shape-two.svg" alt="" width={182} height={188} />
    </span>
  );
}

export function CheckIcon() {
  return (
    <svg className="icon" viewBox="0 0 20 20" aria-hidden focusable="false">
      <path d="M4.5 10.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DashIcon() {
  return (
    <svg className="icon" viewBox="0 0 20 20" aria-hidden focusable="false">
      <path d="M5 10h10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function StatusDot({ status }: { status: string }) {
  return <span className={cn("status-dot", `status-dot--${status}`)} aria-hidden />;
}
