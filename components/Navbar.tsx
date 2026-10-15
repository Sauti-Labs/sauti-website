"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import logo from "@/public/sauti-logo-mark.jpeg";
import {
  navGroups,
  newsLink,
  cta,
  type NavGroup,
  type NavLink,
} from "@/content/navigation";

// Set to false if the logo image already contains the "Sauti Labs" name
const SHOW_WORDMARK_TEXT = true;

const matches = (pathname: string, link: NavLink) =>
  link.exact
    ? pathname === link.href
    : pathname === link.href || pathname.startsWith(link.href + "/");

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4", className)}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function CtaButton({ className }: { className?: string }) {
  // Not rendered until a confirmed destination is configured
  if (!cta.href) return null;

  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-sun px-5 font-sans text-ui font-medium text-teal-900 transition-colors duration-200 hover:bg-sun-deep hover:text-white",
    className
  );

  const arrow = (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );

  return cta.external ? (
    <a href={cta.href} target="_blank" rel="noopener noreferrer" className={classes}>
      {cta.label}
      {arrow}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    <Link href={cta.href} className={classes}>
      {cta.label}
    </Link>
  );
}

function DesktopGroup({
  group,
  pathname,
  open,
  setOpen,
}: {
  group: NavGroup;
  pathname: string;
  open: boolean;
  setOpen: (id: string | null) => void;
}) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = `menu-${group.id}`;
  const sectionActive = group.items.some((i) => matches(pathname, i));
  const clear = () => {
    if (timer.current) clearTimeout(timer.current);
  };

  return (
    <div
      className="relative"
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse") return;
        clear();
        timer.current = setTimeout(() => setOpen(group.id), 150);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType !== "mouse") return;
        clear();
        timer.current = setTimeout(() => setOpen(null), 250);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(null);
      }}
    >
      <button
        id={`${menuId}-trigger`}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(open ? null : group.id)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(group.id);
            setTimeout(
              () => document.querySelector<HTMLAnchorElement>(`#${menuId} a`)?.focus(),
              0
            );
          }
        }}
        className={cn(
          "relative flex min-h-11 items-center gap-1 px-1 font-sans text-ui font-medium text-text transition-colors duration-200 hover:text-link",
          sectionActive && "font-semibold"
        )}
      >
        {group.label}
        <Chevron className={cn("transition-transform duration-200", open && "rotate-180")} />
        {sectionActive && (
          <span aria-hidden="true" className="absolute inset-x-1 bottom-1 h-0.5 bg-current" />
        )}
      </button>

      <ul
        id={menuId}
        hidden={!open}
        onKeyDown={(e) => {
          const links = Array.from(e.currentTarget.querySelectorAll<HTMLAnchorElement>("a"));
          const i = links.indexOf(document.activeElement as HTMLAnchorElement);
          const go = (n: number) => {
            e.preventDefault();
            links[(n + links.length) % links.length]?.focus();
          };
          if (e.key === "ArrowDown") go(i + 1);
          if (e.key === "ArrowUp") go(i - 1);
          if (e.key === "Home") go(0);
          if (e.key === "End") go(links.length - 1);
        }}
        className="absolute left-0 top-full z-50 mt-1 w-64 rounded-lg border border-border bg-surface py-2 shadow-lg"
      >
        {group.items.map((item) => {
          const current = matches(pathname, item);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                onClick={() => setOpen(null)}
                className={cn(
                  "flex min-h-11 items-center border-l-4 border-transparent px-4 font-sans text-ui text-text transition-colors hover:bg-bg-alt hover:text-link",
                  current && "border-link bg-bg-alt font-semibold"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function MobileGroup({ group, pathname }: { group: NavGroup; pathname: string }) {
  const sectionActive = group.items.some((i) => matches(pathname, i));
  const [open, setOpen] = useState(sectionActive);
  const id = `mobile-${group.id}`;

  return (
    <div className="border-b border-border">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
        className="flex min-h-12 w-full items-center justify-between py-3 text-left font-sans text-base font-medium text-text"
      >
        {group.label}
        <Chevron className={cn("transition-transform duration-200", open && "rotate-180")} />
      </button>
      <ul id={id} hidden={!open} className="pb-3 pl-4">
        {group.items.map((item) => {
          const current = matches(pathname, item);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "flex min-h-11 items-center border-l-4 border-transparent pl-3 font-sans text-ui text-muted hover:text-link",
                  current && "border-link font-semibold text-text"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tucked, setTucked] = useState(false);

  // Close everything on navigation
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Escape closes and returns focus; outside click closes dropdowns
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (openMenu) {
        document.getElementById(`menu-${openMenu}-trigger`)?.focus();
        setOpenMenu(null);
      }
      if (mobileOpen) {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (openMenu && !navRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [openMenu, mobileOpen]);

  // Hide on scroll down, reappear on scroll up (spec section 4.2 proposal)
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 8) return;
      setTucked(y > last && y > 96);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile panel is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const newsCurrent = matches(pathname, newsLink);

  return (
    <header
      onFocusCapture={() => setTucked(false)}
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-bg transition-transform duration-200 motion-reduce:transition-none",
        tucked && !openMenu && !mobileOpen && "-translate-y-full"
      )}
    >
      <nav ref={navRef} aria-label="Primary" className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and wordmark */}
          <Link
            href="/"
            aria-label="Sauti Labs — home"
            className="flex items-center gap-2.5 font-sans text-lg font-bold tracking-tight text-text hover:text-link"
          >
            <Image src={logo} alt="" priority className="h-8 w-auto rounded" />
            {SHOW_WORDMARK_TEXT && <span aria-hidden="true">SAUTI LABS</span>}
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-6 lg:flex">
            {navGroups.map((g) => (
              <DesktopGroup
                key={g.id}
                group={g}
                pathname={pathname}
                open={openMenu === g.id}
                setOpen={setOpenMenu}
              />
            ))}
            <Link
              href={newsLink.href}
              aria-current={newsCurrent ? "page" : undefined}
              className={cn(
                "relative flex min-h-11 items-center px-1 font-sans text-ui font-medium text-text transition-colors hover:text-link",
                newsCurrent && "font-semibold"
              )}
            >
              {newsLink.label}
              {newsCurrent && (
                <span aria-hidden="true" className="absolute inset-x-1 bottom-1 h-0.5 bg-current" />
              )}
            </Link>
            <CtaButton />
          </div>

          {/* Mobile bar */}
          <div className="flex items-center gap-2 lg:hidden">
            <CtaButton className="hidden min-[360px]:inline-flex" />
            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex size-11 items-center justify-center rounded-md text-text hover:bg-bg-alt"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                className="size-6"
              >
                {mobileOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          hidden={!mobileOpen}
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-border bg-bg px-5 pb-10 sm:px-8 lg:hidden"
        >
          {navGroups.map((g) => (
            <MobileGroup key={g.id} group={g} pathname={pathname} />
          ))}
          <Link
            href={newsLink.href}
            aria-current={newsCurrent ? "page" : undefined}
            className={cn(
              "flex min-h-12 items-center border-b border-border py-3 font-sans text-base font-medium text-text",
              newsCurrent && "font-semibold"
            )}
          >
            {newsLink.label}
          </Link>
          <CtaButton className="mt-6 flex w-full min-[360px]:hidden" />
        </div>
      </nav>
    </header>
  );
}