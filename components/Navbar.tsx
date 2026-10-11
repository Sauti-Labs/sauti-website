"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWaveformVisible, setIsWaveformVisible] = useState(false);

  useEffect(() => {
    const waveformSection = document.querySelector("[data-waveform-section]");
    if (!waveformSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsWaveformVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(waveformSection);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-ivory/85 backdrop-blur-md border-b border-stone/30 font-sans transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo & Identifier */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Sauti Labs Home"
        >
          <div className="relative w-9 h-9 overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/sauti-logo1.png"
              alt="Sauti Logo"
              fill
              className="object-contain"
            />
          </div>
          {!isWaveformVisible && (
            <span className="text-xl font-heading font-semibold text-ink tracking-tight transition-opacity duration-300">
              Sauti Labs
            </span>
          )}
        </button>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center gap-2 font-heading">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              
              {/* Home Link */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:text-ink hover:bg-oat/50 text-sm font-heading font-medium"
                  )}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:text-ink hover:bg-oat/50 text-sm font-heading font-medium">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[320px] p-4 bg-ivory border border-stone/30 rounded-2xl shadow-xl space-y-2">
                    <Link
                      href="/about"
                      className="block p-3 rounded-xl hover:bg-oat/60 transition-colors group"
                    >
                      <div className="text-sm font-heading font-semibold text-ink group-hover:text-clay">
                        About Us
                      </div>
                      <p className="text-xs font-serif text-slate line-clamp-2 mt-0.5">
                        Overview of Sauti Labs, our mission, and core values.
                      </p>
                    </Link>

                    <Link
                      href="/about#story"
                      className="block p-3 rounded-xl hover:bg-oat/60 transition-colors group"
                    >
                      <div className="text-sm font-heading font-semibold text-ink group-hover:text-clay">
                        Our Story
                      </div>
                      <p className="text-xs font-serif text-slate line-clamp-2 mt-0.5">
                        Building language intelligence infrastructure for African speech.
                      </p>
                    </Link>

                    <Link
                      href="/about#leadership"
                      className="block p-3 rounded-xl hover:bg-oat/60 transition-colors group"
                    >
                      <div className="text-sm font-heading font-semibold text-ink group-hover:text-clay">
                        Leadership
                      </div>
                      <p className="text-xs font-serif text-slate line-clamp-2 mt-0.5">
                        Meet the team, researchers, and advisors behind Sauti.
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Research Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:text-ink hover:bg-oat/50 text-sm font-heading font-medium">
                  Research
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[340px] p-4 bg-ivory border border-stone/30 rounded-2xl shadow-xl space-y-2">
                    <Link
                      href="/research"
                      className="block p-3 rounded-xl hover:bg-oat/60 transition-colors group"
                    >
                      <div className="text-sm font-heading font-semibold text-ink group-hover:text-clay">
                        Overview
                      </div>
                      <p className="text-xs font-serif text-slate line-clamp-2 mt-0.5">
                        Speech recognition, datasets, and multilingual benchmarks.
                      </p>
                    </Link>
                    <div className="p-3 bg-oat/40 rounded-xl border border-stone/20">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-clay font-semibold">
                        Featured Research
                      </span>
                      <p className="text-xs font-serif text-ink font-medium mt-1">
                        African Speech & Multilingual Benchmarking
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact Link */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:text-ink hover:bg-oat/50 text-sm font-heading font-medium"
                  )}
                >
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right CTA Area: Try Dhonam */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/dhonam"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-ivory hover:bg-ink/90 font-heading font-medium text-xs tracking-wide transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>Try Dhonam</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
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
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate hover:text-ink rounded-lg hover:bg-oat/50 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-stone/30 bg-ivory px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-heading">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate hover:text-ink py-1"
            >
              Home
            </Link>
            
            <div className="pl-2 border-l-2 border-stone/30 space-y-2 py-1">
              <span className="text-xs uppercase font-mono tracking-wider text-clay font-semibold">About</span>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-slate hover:text-ink"
              >
                About Us
              </Link>
              <Link
                href="/about#story"
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-slate hover:text-ink"
              >
                Our Story
              </Link>
              <Link
                href="/about#leadership"
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-slate hover:text-ink"
              >
                Leadership
              </Link>
            </div>

            <Link
              href="/research"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate hover:text-ink py-1"
            >
              Research
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate hover:text-ink py-1"
            >
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-stone/20">
            <Link
              href="/dhonam"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-ink text-ivory font-heading font-medium text-sm"
            >
              <span>Try Dhonam</span>
              <svg
                className="w-4 h-4"
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
          </div>
        </div>
      )}
    </nav>
  );
}