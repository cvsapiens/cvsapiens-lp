"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "./ui";

/**
 * A point the thread passes through, measured in its section's container:
 * - `{ pin }` is the centre of the element marked `data-thread-pin={pin}`;
 * - `{ x, y }` is x as a share of the container's width (below 0 or above 1 runs in
 *   the page margin) and y in px from the top, or `fromBottom` px from the bottom,
 *   or `at` as a share of the height, or level with a pin (`level`, shifted by `dy`).
 */
export type ThreadStop =
  | { pin: string }
  | { x: number; y?: number; fromBottom?: number; at?: number; level?: string; dy?: number };

type Geometry = { width: number; height: number; d: string };

/**
 * The orange thread that ties each section back to the example posting. It is measured
 * from the real layout, so it meets its pins and stays in the gaps at any desktop width,
 * and each section's last stop is the next one's first. Desktop only; it draws itself as
 * the section scrolls into view.
 */
export function Thread({ stops, className, dashed }: { stops: ThreadStop[]; className?: string; dashed?: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [geometry, setGeometry] = useState<Geometry | null>(null);

  useEffect(() => {
    const lane = svgRef.current?.parentElement;
    if (!lane) return;
    const desktop = window.matchMedia("(min-width: 1024px)");

    const measure = () => {
      if (!desktop.matches) {
        setGeometry(null);
        return;
      }
      const box = lane.getBoundingClientRect();
      const pinCentre = (id: string) => {
        const pin = lane.querySelector<HTMLElement>(`[data-thread-pin="${id}"]`);
        if (!pin) return null;
        const rect = pin.getBoundingClientRect();
        return [rect.left + rect.width / 2 - box.left, rect.top + rect.height / 2 - box.top] as const;
      };

      const points: Array<readonly [number, number]> = [];
      for (const stop of stops) {
        if ("pin" in stop) {
          const centre = pinCentre(stop.pin);
          if (centre) points.push(centre);
          continue;
        }
        let y = stop.y ?? 0;
        if (stop.fromBottom !== undefined) y = box.height - stop.fromBottom;
        if (stop.at !== undefined) y = stop.at * box.height;
        if (stop.level) {
          const centre = pinCentre(stop.level);
          if (!centre) continue;
          y = centre[1] + (stop.dy ?? 0);
        }
        points.push([stop.x * box.width, y]);
      }
      if (points.length < 2) return;
      setGeometry({ width: box.width, height: box.height, d: spline(points, box.height) });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(lane);
    desktop.addEventListener("change", measure);
    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", measure);
    };
  }, [stops]);

  return (
    <svg
      ref={svgRef}
      className={cn("thread", className)}
      viewBox={geometry ? `0 0 ${geometry.width} ${geometry.height}` : "0 0 1 1"}
      aria-hidden
      focusable="false"
    >
      {/* A dashed leg keeps real lengths for its dashes, so it fades in instead of drawing. */}
      {geometry && <path d={geometry.d} pathLength={dashed ? undefined : 1} />}
    </svg>
  );
}

type Point = readonly [number, number];

/**
 * A Catmull-Rom curve through every point, leaving the first and reaching the last heading
 * down. Each handle is capped at under half its span, so a short hop next to a long drop
 * doesn't loop, and kept inside the section so the curve never spills into its neighbours.
 */
function spline(points: ReadonlyArray<Point>, height: number) {
  const at = (index: number): Point => {
    if (index < 0) return [points[0][0], points[0][1] - 120];
    if (index >= points.length) {
      const last = points[points.length - 1];
      return [last[0], last[1] + 120];
    }
    return points[index];
  };
  const handle = (from: Point, towards: Point, span: number, sign: 1 | -1): Point => {
    let dx = (towards[0] / 6) * sign;
    let dy = (towards[1] / 6) * sign;
    const length = Math.hypot(dx, dy);
    const cap = span * 0.42;
    if (length > cap && length > 0) {
      dx *= cap / length;
      dy *= cap / length;
    }
    return [from[0] + dx, Math.min(Math.max(from[1] + dy, 0), height)];
  };
  const f = (value: number) => value.toFixed(1);
  let d = `M ${f(points[0][0])} ${f(points[0][1])}`;
  for (let index = 0; index < points.length - 1; index += 1) {
    const p0 = at(index - 1);
    const p1 = at(index);
    const p2 = at(index + 1);
    const p3 = at(index + 2);
    const span = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
    const c1 = handle(p1, [p2[0] - p0[0], p2[1] - p0[1]], span, 1);
    const c2 = handle(p2, [p3[0] - p1[0], p3[1] - p1[1]], span, -1);
    d += ` C ${f(c1[0])} ${f(c1[1])}, ${f(c2[0])} ${f(c2[1])}, ${f(p2[0])} ${f(p2[1])}`;
  }
  return d;
}
