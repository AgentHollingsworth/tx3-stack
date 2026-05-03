import * as React from "react";
import { cn } from "@/lib/utils";

export type Pillar = "edge" | "execution" | "earn" | "stack";

type PillarStyle = {
  /** Pillar word color (e.g. for the giant "EDGE" header). */
  text: string;
  /** Top-edge accent bar color/background. */
  accentBar: string;
  /** Glow shadow on hover. */
  glow: string;
  /** Subtle radial glow background tint behind card content. */
  ambient: string;
  /** Border color on hover. */
  hoverBorder: string;
};

const pillarStyles: Record<Pillar, PillarStyle> = {
  edge: {
    text: "text-edge-teal",
    accentBar: "bg-edge-gradient",
    glow: "hover:shadow-edge-glow",
    ambient:
      "before:bg-[radial-gradient(circle_at_top,rgba(31,182,193,0.18),transparent_60%)]",
    hoverBorder: "hover:border-edge-teal/40",
  },
  execution: {
    text: "text-exec-gold",
    accentBar: "bg-exec-gold",
    glow: "hover:shadow-exec-glow",
    ambient:
      "before:bg-[radial-gradient(circle_at_top,rgba(255,184,31,0.18),transparent_60%)]",
    hoverBorder: "hover:border-exec-gold/40",
  },
  earn: {
    text: "text-earn-green",
    accentBar: "bg-earn-gradient",
    glow: "hover:shadow-earn-glow",
    ambient:
      "before:bg-[radial-gradient(circle_at_top,rgba(63,226,107,0.18),transparent_60%)]",
    hoverBorder: "hover:border-earn-green/40",
  },
  stack: {
    text: "text-stack-gradient",
    accentBar: "bg-stack-gradient",
    glow: "hover:shadow-[0_0_40px_rgba(255,184,31,0.35)]",
    ambient:
      "before:bg-[radial-gradient(circle_at_top,rgba(255,184,31,0.12),transparent_60%)]",
    hoverBorder: "hover:border-tx3-gold/40",
  },
};

type PillarCardProps = React.HTMLAttributes<HTMLDivElement> & {
  pillar: Pillar;
  /** Show the pillar word as a giant header (EDGE / EXECUTION / EARN). */
  eyebrow?: string;
  /** Show the colored accent bar across the top of the card. Default true. */
  accentBar?: boolean;
  /** Disable the radial ambient glow inside the card. */
  noAmbient?: boolean;
  children: React.ReactNode;
};

/**
 * Pillar card — base surface for Edge / Execution / Earn sections.
 * Each pillar has its accent color, hover glow, and a subtle ambient radial
 * glow that gives the section visual identity without overwhelming the page.
 */
export function PillarCard({
  pillar,
  eyebrow,
  accentBar = true,
  noAmbient = false,
  className,
  children,
  ...rest
}: PillarCardProps) {
  const style = pillarStyles[pillar];

  return (
    <div
      data-pillar={pillar}
      className={cn(
        // Card surface
        "group relative overflow-hidden rounded-2xl border border-tx3-border bg-tx3-charcoal p-8",
        "transition-all duration-300",
        style.glow,
        style.hoverBorder,
        // Ambient radial glow as a ::before layer
        !noAmbient &&
          "before:pointer-events-none before:absolute before:inset-0 before:opacity-70 before:transition-opacity group-hover:before:opacity-100",
        !noAmbient && style.ambient,
        className,
      )}
      {...rest}
    >
      {accentBar && (
        <div
          aria-hidden="true"
          className={cn("absolute inset-x-0 top-0 h-1", style.accentBar)}
        />
      )}

      <div className="relative">
        {eyebrow && (
          <div
            className={cn(
              "mb-6 h-pillar",
              style.text,
            )}
          >
            {eyebrow}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
