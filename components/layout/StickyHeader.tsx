"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import { cn } from "@/lib/utils";

/**
 * Sticky page header — modeled on the V1 mockup
 * (`tx3-stack-design/ui_kits/marketing/Header.jsx`).
 *
 * Transparent at scroll-top, becomes blurred-black after scrollY > 12px,
 * with a 1px hairline border and the prismatic gradient accent below.
 *
 * Left:  TX3 Group gradient logo → /
 * Mid:   THE PROBLEM · THE STACK · THE OFFER · TIERS · FAQ
 *        (cross-page hash links so they work from /apply or any deep-dive)
 * Right: gold "Apply →" pill → /apply
 */

const NAV_LINKS = [
  { label: "The problem", href: "/problem" },
  { label: "The stack", href: "/stack" },
  { label: "The offer", href: "/offer" },
  { label: "Tiers", href: "/tiers" },
  { label: "FAQ", href: "/faq" },
];

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-tx3-border bg-tx3-black/72 backdrop-blur-md backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          aria-label="TX3 Group home"
          className="flex shrink-0 items-center"
          onClick={() => setMobileOpen(false)}
        >
          <span className="font-display text-lg font-extrabold tracking-tight whitespace-nowrap text-tx3-white">
            TX3 Group
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="t-eyebrow transition-colors hover:text-tx3-white"
            >
              {link.label}
            </Link>
          ))}
          <CTAButton variant="primary" size="sm" href="/apply">
            Apply →
          </CTAButton>
        </nav>

        {/* Mobile: just the Apply button + hamburger */}
        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <CTAButton variant="primary" size="sm" href="/apply">
            Apply →
          </CTAButton>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="inline-flex size-9 items-center justify-center rounded-md border border-tx3-border bg-tx3-charcoal text-tx3-off-white transition-colors hover:bg-tx3-near-black"
          >
            {mobileOpen ? (
              <X className="size-4" strokeWidth={2} />
            ) : (
              <Menu className="size-4" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Prismatic accent line at the bottom edge */}
      <div
        aria-hidden="true"
        className={cn(
          "h-px w-full bg-stack-gradient transition-opacity duration-200",
          scrolled ? "opacity-90" : "opacity-60",
        )}
      />

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-tx3-border bg-tx3-near-black md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 t-eyebrow transition-colors hover:bg-tx3-charcoal hover:text-tx3-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
