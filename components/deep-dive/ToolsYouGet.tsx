import type { LucideIcon } from "lucide-react";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import type { DeepDivePillar } from "./DeepDiveHero";
import { cn } from "@/lib/utils";

const PILLAR_ACCENT: Record<DeepDivePillar, string> = {
  edge: "text-edge-teal",
  execution: "text-exec-gold",
  earn: "text-earn-green",
};

export type Tool = {
  icon: LucideIcon;
  title: React.ReactNode;
  body: React.ReactNode;
};

type Props = {
  pillar: DeepDivePillar;
  headline?: string;
  tools: [Tool, Tool, Tool, Tool, Tool, Tool];
};

export function ToolsYouGet({
  pillar,
  headline = "Everything you need to start earning",
  tools,
}: Props) {
  const accent = PILLAR_ACCENT[pillar];
  return (
    <section id="tools" className="relative bg-tx3-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <div
            className={cn(
              "mb-3 font-mono text-xs tracking-widest uppercase",
              accent,
            )}
          >
            Tools You Get
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-tx3-white md:text-5xl">
            {headline}
          </h2>
          <PrismaticRibbon thickness="thin" className="mt-6 max-w-32" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map(({ icon: Icon, title, body }, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-tx3-border bg-tx3-charcoal p-6 transition-colors hover:border-tx3-gold/30"
            >
              <span className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-tx3-near-black text-tx3-gold ring-1 ring-inset ring-tx3-border">
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
