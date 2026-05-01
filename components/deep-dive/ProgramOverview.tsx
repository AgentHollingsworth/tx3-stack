import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import type { DeepDivePillar } from "./DeepDiveHero";
import { cn } from "@/lib/utils";

const PILLAR_ACCENT: Record<DeepDivePillar, string> = {
  edge: "text-edge-teal",
  execution: "text-exec-gold",
  earn: "text-earn-green",
};

type Stat = {
  label: string;
  /** Visible value — render placeholders with the <P/> helper from each page. */
  value: React.ReactNode;
};

type Props = {
  pillar: DeepDivePillar;
  headline: string;
  /** 2–3 paragraphs (placeholder copy is fine). */
  body: React.ReactNode;
  stats: [Stat, Stat, Stat, Stat];
};

export function ProgramOverview({ pillar, headline, body, stats }: Props) {
  const accent = PILLAR_ACCENT[pillar];
  return (
    <section
      id="overview"
      className="relative bg-tx3-near-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <div
            className={cn(
              "mb-3 font-mono text-xs tracking-widest uppercase",
              accent,
            )}
          >
            Program Overview
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-tx3-white md:text-5xl">
            {headline}
          </h2>
          <PrismaticRibbon thickness="thin" className="mt-6 max-w-32" />
        </div>

        {/* Body paragraphs */}
        <div className="prose-tx3 max-w-3xl space-y-5 text-tx3-off-white/85 md:text-lg">
          {body}
        </div>

        {/* Stat cards */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-tx3-border bg-tx3-charcoal p-6"
            >
              <div className="mb-2 font-mono text-[10px] tracking-widest text-tx3-muted uppercase">
                {stat.label}
              </div>
              <div className="font-display text-xl font-bold text-tx3-white md:text-2xl">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
