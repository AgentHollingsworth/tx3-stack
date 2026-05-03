import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import type { DeepDivePillar } from "./DeepDiveHero";
import { cn } from "@/lib/utils";

const PILLAR_ACCENT: Record<DeepDivePillar, string> = {
  edge: "text-edge-teal",
  execution: "text-exec-gold",
  earn: "text-earn-green",
};

type Props = {
  pillar: DeepDivePillar;
  headline: string;
  /**
   * Body / layout is fully owned by each page since the compensation
   * structure varies (2-col for Markets, tier ladder for FX, math example
   * for Memo, tier breakdown + Topstep block for Futures).
   */
  children: React.ReactNode;
};

export function PartnerCompensation({ pillar, headline, children }: Props) {
  const accent = PILLAR_ACCENT[pillar];
  return (
    <section
      id="compensation"
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
            Partner Compensation
          </div>
          <h2 className="h-section">
            {headline}
          </h2>
          <PrismaticRibbon thickness="thin" className="mt-6 max-w-32" />
        </div>

        {children}
      </div>
    </section>
  );
}
