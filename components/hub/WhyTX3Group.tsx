import { Activity, Banknote, Sparkles, type LucideIcon } from "lucide-react";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";

type Capability = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const CAPABILITIES: Capability[] = [
  {
    icon: Activity,
    title: "Unified tracking",
    body: "Every referral, every program, one dashboard. No spreadsheet stitching, no reconciling three different cookie windows.",
  },
  {
    icon: Sparkles,
    title: "Creatives that convert",
    body: "Pre-built ad sets, landing pages, scripts. Refreshed quarterly. Battle-tested across the trader audience.",
  },
  {
    icon: Banknote,
    title: "Global payouts",
    body: "Wire, ACH, USDC. Weekly at top tiers. No surprise holds, no shadow-banning.",
  },
];

/**
 * Hub page — Why TX3 Group section.
 *
 * Three short capability tiles. Sits between ProgramCards and FinalCTA on
 * the simplified hub, replacing what used to be a longer SolutionPillars +
 * RiskReversal stretch. Hormozi-direct wording on the design-system
 * primitives (.h-section, .t-eyebrow, .t-lead, .t-body, PrismaticRibbon).
 */
export function WhyTX3Group() {
  return (
    <section
      id="why"
      className="relative bg-tx3-near-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-3 t-eyebrow">
            Why TX3 Group
          </div>
          <h2 className="h-section">
            What every TX3 Group partner gets.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl t-lead">
            Tracking that actually tracks. Creatives that actually convert.
            Payouts that actually arrive.
          </p>
          <PrismaticRibbon thickness="thin" className="mx-auto mt-6 max-w-32" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-tx3-border bg-tx3-charcoal p-6 transition-colors hover:border-tx3-gold/30"
            >
              <span className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-tx3-near-black ring-1 ring-inset ring-tx3-border text-tx3-gold">
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mb-2 font-display text-lg font-bold text-tx3-white">
                {title}
              </h3>
              <p className="t-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
