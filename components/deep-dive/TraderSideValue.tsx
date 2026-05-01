import type { LucideIcon } from "lucide-react";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import type { DeepDivePillar } from "./DeepDiveHero";
import { cn } from "@/lib/utils";

const PILLAR_STYLES: Record<
  DeepDivePillar,
  { iconBg: string; iconText: string; eyebrow: string }
> = {
  edge: {
    iconBg: "bg-edge-teal/10 ring-edge-teal/30",
    iconText: "text-edge-teal",
    eyebrow: "text-edge-teal",
  },
  execution: {
    iconBg: "bg-exec-gold/10 ring-exec-gold/30",
    iconText: "text-exec-gold",
    eyebrow: "text-exec-gold",
  },
  earn: {
    iconBg: "bg-earn-green/10 ring-earn-green/30",
    iconText: "text-earn-green",
    eyebrow: "text-earn-green",
  },
};

export type Benefit = {
  icon: LucideIcon;
  title: React.ReactNode;
  body: React.ReactNode;
};

type Props = {
  pillar: DeepDivePillar;
  headline?: string;
  benefits: [Benefit, Benefit, Benefit, Benefit, Benefit, Benefit];
};

export function TraderSideValue({
  pillar,
  headline = "What your audience gets",
  benefits,
}: Props) {
  const style = PILLAR_STYLES[pillar];
  return (
    <section
      id="trader-value"
      className="relative bg-tx3-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <div
            className={cn(
              "mb-3 font-mono text-xs tracking-widest uppercase",
              style.eyebrow,
            )}
          >
            Trader Value
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-tx3-white md:text-5xl">
            {headline}
          </h2>
          <PrismaticRibbon thickness="thin" className="mt-6 max-w-32" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, body }, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-tx3-border bg-tx3-charcoal p-6 transition-colors hover:border-tx3-muted/40"
            >
              <span
                className={cn(
                  "mb-4 inline-flex size-10 items-center justify-center rounded-lg ring-1 ring-inset",
                  style.iconBg,
                  style.iconText,
                )}
              >
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mb-2 font-display text-base font-bold text-tx3-white md:text-lg">
                {title}
              </h3>
              <p className="text-sm text-tx3-off-white/80">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
