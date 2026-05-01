import { CTAButton } from "@/components/shared/CTAButton";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import type { DeepDivePillar } from "./DeepDiveHero";
import { cn } from "@/lib/utils";

const PILLAR_BLOB: Record<DeepDivePillar, string> = {
  edge: "bg-edge-teal/10",
  execution: "bg-exec-gold/12",
  earn: "bg-earn-green/10",
};

type Props = {
  pillar: DeepDivePillar;
  headline: React.ReactNode;
  subhead: React.ReactNode;
  cta: { label: string; href: string };
};

export function DeepDiveFinalCTA({ pillar, headline, subhead, cta }: Props) {
  const blob = PILLAR_BLOB[pillar];
  return (
    <section
      id="program-final-cta"
      className="relative isolate overflow-hidden bg-tx3-black py-24 md:py-32"
    >
      <PrismaticRibbon
        thickness="thick"
        className="absolute inset-x-0 top-0 z-10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className={cn(
            "absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]",
            blob,
          )}
        />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-12 text-center md:px-10 md:py-16">
        <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-tx3-white md:text-5xl lg:text-6xl">
          {headline}
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-tx3-off-white/80 md:text-xl">
          {subhead}
        </p>
        <div className="mt-10">
          <CTAButton variant="primary" size="xl" href={cta.href}>
            {cta.label}
          </CTAButton>
        </div>
        <p className="mt-6 font-mono text-[11px] tracking-widest text-tx3-muted uppercase">
          Approval in 1–3 business days · No exclusivity required
        </p>
      </div>

      <PrismaticRibbon
        thickness="thick"
        className="absolute inset-x-0 bottom-0 z-10"
      />
    </section>
  );
}
