import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo, type Brand } from "@/components/shared/BrandLogo";
import { cn } from "@/lib/utils";

export type CrossLinkProgram =
  | "markets"
  | "funding-fx"
  | "funding-futures"
  | "memo";

type ProgramCard = {
  key: CrossLinkProgram;
  brand: Brand;
  /** Brand-colored top accent bar. */
  accentBar: string;
  /** Eyebrow color (static). */
  eyebrowText: string;
  /** Title color shift on card hover (static; needed for Tailwind JIT). */
  hoverTitle: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  /** Brand-colored hover glow. */
  hoverGlow: string;
  /** Brand-colored hover border. */
  hoverBorder: string;
};

const PROGRAMS: ProgramCard[] = [
  {
    key: "markets",
    brand: "markets",
    accentBar: "bg-exec-gold",
    eyebrowText: "text-exec-gold",
    hoverTitle: "group-hover:text-exec-gold",
    eyebrow: "EXECUTION",
    title: "TX3 Markets",
    description:
      "$12/lot direct + $3/lot indirect. Lifetime brokerage commissions.",
    href: "/markets",
    hoverGlow: "hover:shadow-exec-glow",
    hoverBorder: "hover:border-exec-gold/40",
  },
  {
    key: "funding-fx",
    brand: "funding",
    accentBar: "bg-earn-gradient",
    eyebrowText: "text-earn-green",
    hoverTitle: "group-hover:text-earn-green",
    eyebrow: "EARN · FX",
    title: "TX3 Funding FX",
    description:
      "5-tier ladder up to 20%. Plus profit share on funded traders.",
    href: "/funding-fx",
    hoverGlow: "hover:shadow-earn-glow",
    hoverBorder: "hover:border-earn-green/40",
  },
  {
    key: "funding-futures",
    brand: "funding",
    accentBar: "bg-earn-gradient",
    eyebrowText: "text-earn-green",
    hoverTitle: "group-hover:text-earn-green",
    eyebrow: "EARN · FUTURES",
    title: "TX3 Funding Futures",
    description:
      "10–15% commission on every Topstep-powered futures challenge.",
    href: "/funding-futures",
    hoverGlow: "hover:shadow-earn-glow",
    hoverBorder: "hover:border-earn-green/40",
  },
  {
    key: "memo",
    brand: "memo",
    accentBar: "bg-edge-gradient",
    eyebrowText: "text-edge-teal",
    hoverTitle: "group-hover:text-edge-teal",
    eyebrow: "EDGE",
    title: "Market Memo",
    description:
      "15% recurring. For life. The stickiest product in the stack.",
    href: "/memo",
    hoverGlow: "hover:shadow-edge-glow",
    hoverBorder: "hover:border-edge-teal/40",
  },
];

type Props = {
  /** Current page — that program is excluded so only the OTHER 3 render. */
  currentProgram: CrossLinkProgram;
};

/**
 * Cross-link section that appears at the bottom of every deep-dive page,
 * just above the DeepDiveFinalCTA. Renders three pillar cards linking to
 * the OTHER programs to keep visitors moving through the funnel instead
 * of dead-ending at one program.
 */
export function CrossLinkPrograms({ currentProgram }: Props) {
  const others = PROGRAMS.filter((p) => p.key !== currentProgram);

  return (
    <section
      id="cross-link-programs"
      className="relative bg-tx3-black py-20 md:py-28"
    >
      {/* Thin gold top border */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-tx3-gold/40"
      />

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Section header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <div className="mb-3 t-eyebrow text-tx3-gold">
            TX3 Stack
          </div>
          <h2 className="h-section">
            One audience. Three brands.{" "}
            <span className="text-stack-gradient">
              Compounding revenue.
            </span>
          </h2>
          <p className="mt-4 text-tx3-off-white/75 md:text-lg">
            You're not limited to one program.{" "}
            <strong className="font-semibold text-tx3-white">
              Stack them all.
            </strong>
          </p>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {others.map((p) => (
            <Link
              key={p.key}
              href={p.href}
              aria-label={`${p.title} — ${p.description}`}
              className={cn(
                "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-tx3-border bg-tx3-charcoal p-6 transition-all duration-300",
                p.hoverBorder,
                p.hoverGlow,
                // More pronounced lift + subtle background lighten = clear "clickable card" affordance
                "hover:-translate-y-1 hover:bg-[#1a1a1a]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tx3-gold focus-visible:ring-offset-2 focus-visible:ring-offset-tx3-black",
              )}
            >
              {/* Brand-colored accent bar */}
              <div
                aria-hidden="true"
                className={cn("absolute inset-x-0 top-0 h-1", p.accentBar)}
              />

              {/* Top-right arrow indicator — universal "this is a link" cue */}
              <div
                aria-hidden="true"
                className={cn(
                  "absolute right-5 top-5 inline-flex size-8 items-center justify-center rounded-full border border-tx3-border bg-tx3-near-black/80 opacity-60 transition-all duration-300",
                  "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100",
                  p.eyebrowText,
                  p.hoverBorder,
                )}
              >
                <ArrowUpRight className="size-4" strokeWidth={2.25} />
              </div>

              {/* Brand logo (right padding so it doesn't collide with the arrow indicator) */}
              <div className="mb-5 flex h-10 items-center pr-12">
                <BrandLogo
                  brand={p.brand}
                  variant="color"
                  orientation="horizontal"
                  width={p.brand === "memo" ? 140 : 120}
                />
              </div>

              {/* Eyebrow */}
              <div
                className={cn(
                  "mb-2 font-mono text-[10px] tracking-widest uppercase",
                  p.eyebrowText,
                )}
              >
                {p.eyebrow}
              </div>

              {/* Title — color shifts to pillar accent on hover for clear link affordance */}
              <h3
                className={cn(
                  "mb-2 font-display text-lg font-bold text-tx3-white transition-colors md:text-xl",
                  p.hoverTitle,
                )}
              >
                {p.title}
              </h3>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-tx3-off-white/80">
                {p.description}
              </p>

              {/* Footer cue — underline solidifies on hover */}
              <div
                className={cn(
                  "mt-auto inline-flex items-center gap-1 font-mono text-[11px] tracking-widest uppercase transition-transform group-hover:translate-x-0.5",
                  p.eyebrowText,
                )}
              >
                <span className="underline decoration-current/40 underline-offset-4 transition-colors group-hover:decoration-current">
                  Learn more
                </span>
                <ArrowUpRight className="size-3.5" strokeWidth={2.5} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
