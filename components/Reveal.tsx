"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Master switch: set to false to turn every scroll animation off site-wide
const ENABLED = true;

type Phase = "in" | "below" | "above";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before animating in (used for staggering) */
  delay?: number;
  /** true = animate in once and stay; false = also animate out when leaving */
  once?: boolean;
};

export function Reveal({ children, className, delay = 0, once = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useRef(false);
  const [armed, setArmed] = useState(false);
  const [phase, setPhase] = useState<Phase>("in");

  useEffect(() => {
    if (!ENABLED) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    setArmed(true);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          seen.current = true;
          setPhase("in");
          return;
        }
        if (once && seen.current) return;
        // Left through the top = "above", otherwise it is still below the fold
        setPhase(entry.boundingClientRect.top < 0 ? "above" : "below");
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: armed && phase === "in" ? `${delay}s` : "0s" }}
      className={cn(
        armed && "transition-[opacity,transform] duration-700 ease-soft will-change-transform",
        armed && phase === "below" && "translate-y-8 opacity-0",
        armed && phase === "above" && "-translate-y-6 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}