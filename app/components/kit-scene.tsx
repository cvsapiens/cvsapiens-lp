"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { content } from "../content/en";

// Ported from the app's KitScene (../cvsapiens/src/components/shared/progress-scenes/kit-scene.tsx):
// the same drawing, played once through its three stages instead of following a request.
const INK = "#1e1e1e";
const PAPER = "#ffffff";
const ACCENT = "#fd853a";
const STAGE_BLOB = "M58 72 C104 18 318 4 384 58 C438 102 436 210 380 248 C312 292 116 288 56 246 C8 212 12 126 58 72 Z";

/** Keywords lifted from the posting, and where on the resume each one lands. */
const CHIPS = [
  { x: 157, y: 150, dx: 78, dy: 21 },
  { x: 169, y: 168, dx: 66, dy: 11 },
  { x: 154, y: 186, dx: 82, dy: 1 },
];

/** How long each stage holds before the next, in ms. The last one holds. */
const STAGE_MS = [4200, 3900];

const { scene } = content.example;

export function KitScene() {
  const rootRef = useRef<HTMLDivElement>(null);
  // -1 is the still frame before the scene has been seen; 3 is the composed end.
  const [step, setStep] = useState(-1);
  const [run, setRun] = useState(0);

  const play = useCallback(() => {
    setStep(0);
    setRun((count) => count + 1);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        // Without motion, show the finished kit rather than stepping through it.
        if (reducedMotion) setStep(3);
        else play();
      },
      { threshold: 0.45 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [play]);

  useEffect(() => {
    if (step < 0 || step > 1) return;
    const timer = window.setTimeout(() => setStep(step === 1 ? 3 : step + 1), STAGE_MS[step]);
    return () => window.clearTimeout(timer);
  }, [step, run]);

  // Stage 2 (the card landing) and the composed end share a frame; 3 only stops the loops.
  const frame = step === 3 ? 2 : step;
  const status = step === 3 ? scene.done : step >= 0 ? scene.steps[step] : scene.steps[0];

  return (
    <div ref={rootRef} className="scene" data-step={frame} data-playing={step >= 0 && step < 3 ? "" : undefined}>
      <div className="scene__art">
      {/* The landing page's thread ties onto the small posting on the desk. */}
      <span className="anchor scene__anchor" data-thread-pin="scene" aria-hidden />
      <svg viewBox="0 0 440 280" className="kit-scene" role="img" aria-label={scene.label}>
        <path d={STAGE_BLOB} fill="var(--scene-stage)" />

        <g className="kit-posting">
          <g transform="translate(140 128) rotate(-6)">
            <rect width="66" height="90" rx="3" fill={PAPER} stroke={INK} strokeWidth="2.5" />
            <rect x="8" y="9" width="30" height="6" rx="1.5" fill={INK} />
            {[24, 33, 42, 51, 60, 69, 78].map((y, index) => (
              <line key={y} x1="8" x2={8 + [48, 42, 46, 34, 44, 38, 30][index]} y1={y} y2={y} stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
            ))}
            <g className="kit-posting__marks" fill={ACCENT}>
              <rect x="14" y="21" width="18" height="6" rx="3" />
              <rect x="26" y="39" width="16" height="6" rx="3" />
              <rect x="10" y="57" width="18" height="6" rx="3" />
            </g>
          </g>
        </g>

        <g className="kit-letter">
          <g transform="translate(254 98)">
            <rect width="88" height="118" rx="3" fill={PAPER} stroke={INK} strokeWidth="2.5" />
            <line x1="10" x2="34" y1="16" y2="16" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
            {[
              [28, 72],
              [37, 66],
              [46, 70],
              [55, 50],
            ].map(([y, length], index) => (
              <line
                key={y}
                className={`kit-letter__line kit-letter__line--${index + 1}`}
                x1="10"
                x2={10 + length}
                y1={y}
                y2={y}
                pathLength={1}
                stroke={INK}
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            ))}
            <path
              className="kit-letter__sign"
              d="M12 92 C18 82 22 98 28 88 S38 92 44 86"
              fill="none"
              stroke={INK}
              strokeWidth="2"
              strokeLinecap="round"
              pathLength={1}
            />
            <g className="kit-pen">
              <path d="M0 0 L5 -9 L23 -27 L29 -21 L11 -3 Z" fill={PAPER} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
              <path d="M0 0 L5 -9 L11 -3 Z" fill={INK} />
              <path d="M19 -23 L25 -17" stroke={INK} strokeWidth="2" />
            </g>
          </g>
        </g>

        <g className="kit-resume">
          <g transform="translate(220 82)">
            <rect width="100" height="136" rx="3" fill={PAPER} stroke={INK} strokeWidth="2.5" />
            <rect x="10" y="12" width="48" height="8" rx="2" fill={INK} />
            <line x1="10" x2="44" y1="27" y2="27" stroke={INK} strokeWidth="2" strokeLinecap="round" />
            <rect x="10" y="33" width="20" height="2.5" rx="1" fill={ACCENT} />
            <rect x="10" y="42" width="24" height="4" rx="1" fill={INK} />
            <rect className="kit-resume__highlight" x="8" y="57" width="72" height="9" rx="2" fill={ACCENT} />
            {[
              [53, 76],
              [61, 66],
              [69, 72],
            ].map(([y, length]) => (
              <line key={y} x1="10" x2={10 + length} y1={y} y2={y} stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
            ))}
            <rect x="10" y="80" width="24" height="4" rx="1" fill={INK} />
            {[
              [91, 70],
              [99, 78],
              [107, 60],
              [115, 74],
            ].map(([y, length], index) => (
              <line
                key={y}
                className="kit-resume__line"
                style={{ "--line": index } as CSSProperties}
                x1="10"
                x2={10 + length}
                y1={y}
                y2={y}
                pathLength={1}
                stroke={INK}
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            ))}
          </g>
        </g>

        <g fill={ACCENT}>
          {CHIPS.map((chip, index) => (
            <rect
              key={chip.x + chip.y}
              className="kit-chip"
              x={chip.x}
              y={chip.y}
              width="18"
              height="7"
              rx="3.5"
              style={{ "--dx": `${chip.dx}px`, "--dy": `${chip.dy}px`, "--chip": index } as CSSProperties}
            />
          ))}
        </g>

        <g className="kit-card">
          <g transform="translate(140 158)">
            <rect width="172" height="58" rx="10" fill={PAPER} stroke={INK} strokeWidth="2.5" />
            <rect className="kit-card__ring" x="-5" y="-5" width="182" height="68" rx="14" fill="none" stroke="#c44100" strokeWidth="2" />
            <rect x="12" y="15" width="28" height="28" rx="7" fill="#f6f2ee" stroke={INK} strokeWidth="1.6" />
            <text x="26" y="33" textAnchor="middle" fontSize="10" fontWeight="600" fill={INK}>
              LP
            </text>
            <line x1="50" x2="96" y1="22" y2="22" stroke={INK} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" x2="84" y1="34" y2="34" stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.45" />
            <g className="kit-card__pill">
              <rect x="106" y="20" width="56" height="18" rx="9" fill="#dbeafe" />
              <circle cx="115" cy="29" r="3" fill="#1d4ed8" />
              <text x="121" y="32.5" fontSize="9.5" fontWeight="600" fill="#1d4ed8">
                {scene.applied}
              </text>
            </g>
          </g>
        </g>

        <g clipPath="url(#kit-desk-clip)">
          <g className="kit-monkey">
            <image href="/avatars/scarf.svg" x="6" y="92" width="148" height="148" />
          </g>
        </g>
        <defs>
          <clipPath id="kit-desk-clip">
            <rect width="440" height="226" />
          </clipPath>
        </defs>

        <rect x="16" y="222" width="408" height="14" rx="4" fill={PAPER} stroke={INK} strokeWidth="2.5" />
      </svg>
      </div>
      <div className="scene__status">
        <p aria-live="polite">{status}</p>
        {step === 3 && (
          <button type="button" className="text-button" onClick={play}>
            <svg className="icon" viewBox="0 0 20 20" aria-hidden focusable="false">
              <path d="M4 10a6 6 0 1 0 2-4.5M4 3v3.5h3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {scene.replay}
          </button>
        )}
      </div>
    </div>
  );
}
