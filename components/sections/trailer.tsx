"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

export function ScrollWaveCta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll progress of this section relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Smooth out scroll animation physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // Smooth expansion transforms
  const scale = useTransform(smoothProgress, [0, 1], [0.85, 1]);
  const borderRadius = useTransform(smoothProgress, [0, 1], ["40px", "24px"]);
  const opacity = useTransform(smoothProgress, [0, 0.4, 1], [0.6, 0.9, 1]);

  // Autoplay video only when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-12 md:py-20 bg-transparent flex items-center justify-center px-4"
    >
      {/* Expanding Card Container */}
      <motion.div
        style={{ scale, borderRadius, opacity }}
        className="relative w-full max-w-6xl min-h-[70svh] md:min-h-[80svh] lg:min-h-[85vh] overflow-hidden shadow-2xl border border-stone/20 flex flex-col justify-end px-6 pt-16 pb-10 md:px-14 md:pb-16"
      >
        {/* Background Video */}
        <video
          ref={videoRef}
          src="/dhonam.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dual Scrim Gradient for Text Legibility */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" 
          aria-hidden="true" 
        />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10" 
          aria-hidden="true" 
        />

        {/* Content Container (z-30 ensures top layer over scrims) */}
        <div className="relative z-30 max-w-2xl space-y-5">
        

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold text-color-mist leading-tight tracking-tight"
          >
            Introducing Dhonam 1.0
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-lg md:text-xl font-serif leading-relaxed text-color-mist/85"
          >
            The Dholuo ASR.
          </motion.p>

          {/* Explicitly position and style the Read More button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-3"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ivory text-ink hover:bg-white font-heading font-medium text-sm transition-all duration-300 shadow-xl cursor-pointer hover:gap-3"
            >
              <span>Read More</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}