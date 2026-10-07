"use client";

import { useEffect, useRef, useState } from "react";

const BARS = 64;
const STEP = 8;
const H = 90;

const frac = (n: number) => n - Math.floor(n);
const clamp = (n: number) => Math.min(1, Math.max(0, n));
const round = (n: number) => Number(n.toFixed(3));

// Deterministic, so server and client agree
const noise = Array.from({ length: BARS }, (_, i) => round(0.12 + 0.88 * frac(Math.sin(i * 12.9898) * 43758.5453)));
const voice = Array.from({ length: BARS }, (_, i) =>
  round(0.22 + 0.78 * Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.17)))
);

export function ScrollWaveCta() {
  const section = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const bars = useRef<(SVGRectElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const reduced = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  const animationRef = useRef<number | null>(null);

  // Writes straight to the DOM, so there is no React re-render per frame
  const render = (time: number) => {
    for (let i = 0; i < BARS; i++) {
      const el = bars.current[i];
      if (!el) continue;
      // Continuous animation using sine wave
      const wave = Math.sin(time * 0.003 + i * 0.2) * 0.5 + 0.5;
      const h = noise[i] + (voice[i] - noise[i]) * wave;
      el.style.transform = `scaleY(${h.toFixed(3)})`;
      el.style.opacity = (0.3 + 0.7 * wave).toFixed(3);
    }
  };

  // Apply zoom effect based on scroll position
  const updateZoom = () => {
    if (!section.current || !svgRef.current) return;

    const rect = section.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const scrollProgress = 1 - (rect.top / viewportHeight);
    const clampedProgress = clamp(scrollProgress);

    // Zoom in and out: scale from 0.8 to 1.2 and back
    const zoom = 0.8 + Math.sin(clampedProgress * Math.PI) * 0.4;

    svgRef.current.style.transform = `scale(${zoom.toFixed(3)})`;
  };

  useEffect(() => {
    if (reduced) {
      render(0);
      return;
    }

    const animate = (timestamp: number) => {
      if (isVisible) {
        render(timestamp);
        updateZoom();
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (isVisible) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, reduced]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (section.current) {
      observer.observe(section.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={section} data-waveform-section className="relative bg-ink text-ivory py-16 px-8 md:px-16 rounded-3xl mx-4 md:mx-8 my-8 shadow-2xl border border-stone/20">
      <div className="flex flex-col justify-center overflow-hidden min-h-[50svh]">
        {/* Waveform */}
        <svg
          ref={svgRef}
          viewBox={`0 0 ${BARS * STEP} 100`}
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute left-6 right-6 top-1/2 h-[46svh] w-auto -translate-y-1/2 text-clay transition-transform duration-75 ease-out"
        >
          {Array.from({ length: BARS }, (_, i) => (
            <rect
              key={i}
              ref={(el) => {
                bars.current[i] = el;
              }}
              x={i * STEP + 3}
              y={50 - H / 2}
              width={2}
              height={H}
              rx={1}
              fill="currentColor"
              style={{
                transform: `scaleY(${noise[i]})`,
                transformBox: "fill-box",
                transformOrigin: "center",
                opacity: 0.3,
              }}
            />
          ))}
        </svg>

        {/* Scrim keeps the text legible over the bars */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink" aria-hidden />

        <h2 className="relative z-10 text-3xl md:text-4xl font-heading font-semibold text-ivory">
          Scroll to see the waveform in action
        </h2>

        <p className="relative z-10 text-lg md:text-xl font-serif leading-relaxed text-ivory/80">
          As you scroll, the waveform will animate to create a dynamic visual effect.
        </p>
      </div>
    </section>
  );
}
