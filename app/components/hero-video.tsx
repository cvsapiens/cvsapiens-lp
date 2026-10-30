"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "../content/en";

const { demo } = content;

const VIDEO = {
  small: "/video/cvsapiens-demo-720.mp4",
  full: "/video/cvsapiens-demo-1080.mp4",
  captions: "/video/cvsapiens-demo.en.vtt",
  // The first frame, so the muted preview starts without a jump.
  poster: "/video/cvsapiens-demo-poster.jpg",
  // The job match, for visitors who see a still instead of the preview.
  still: "/video/cvsapiens-demo-poster-match.jpg",
};

/**
 * The demo film in the hero. It plays muted and on a loop while it is on screen; "Watch with
 * sound" restarts it from 0:00 with sound and the browser's controls. Visitors who ask for
 * reduced motion get the job-match still and start it themselves.
 */
export function HeroVideo() {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Set when the visitor pauses, so scrolling back into view doesn't restart it.
  const pausedByVisitor = useRef(false);
  const [withSound, setWithSound] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    const video = videoRef.current;
    if (!frame || !video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.poster = VIDEO.still;
      pausedByVisitor.current = true;
      return;
    }
    video.muted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) video.pause();
        else if (!pausedByVisitor.current) video.play().catch(() => {});
      },
      { threshold: 0.35 },
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    pausedByVisitor.current = !video.paused;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const watchWithSound = () => {
    const video = videoRef.current;
    if (!video) return;
    pausedByVisitor.current = false;
    video.currentTime = 0;
    video.muted = false;
    setWithSound(true);
    video.play().catch(() => {});
  };

  return (
    <div className="demo" ref={frameRef}>
      <span className="anchor demo__anchor" data-thread-pin="scene" aria-hidden />
      <video
        ref={videoRef}
        className="demo__video"
        aria-label={demo.label}
        poster={VIDEO.poster}
        controls={withSound}
        loop={!withSound}
        muted
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={VIDEO.small} type="video/mp4" media="(max-width: 767px)" />
        <source src={VIDEO.full} type="video/mp4" />
        <track kind="captions" src={VIDEO.captions} srcLang="en" label={demo.captions} />
      </video>
      {!withSound && (
        <div className="demo__controls">
          <button type="button" className="demo__sound" onClick={watchWithSound}>
            <SoundIcon />
            {demo.watch}
            <span className="demo__length">{demo.length}</span>
          </button>
          <button
            type="button"
            className="demo__toggle"
            onClick={togglePlay}
            aria-label={playing ? demo.pause : demo.play}
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>
      )}
    </div>
  );
}

function SoundIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden>
      <path d="M3 8v4h3l4 3.5v-11L6 8H3Z" fill="currentColor" />
      <path d="M13 7.5a3.5 3.5 0 0 1 0 5M15.2 5.3a6.6 6.6 0 0 1 0 9.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden>
      <path d="M6 4.2v11.6c0 .6.7 1 1.2.7l9-5.8a.8.8 0 0 0 0-1.4l-9-5.8C6.7 3.2 6 3.6 6 4.2Z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden>
      <rect x="5" y="4" width="3.5" height="12" rx="1" fill="currentColor" />
      <rect x="11.5" y="4" width="3.5" height="12" rx="1" fill="currentColor" />
    </svg>
  );
}
