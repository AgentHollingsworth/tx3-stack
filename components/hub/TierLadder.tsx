import { CTAButton } from "@/components/shared/CTAButton";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  commission: string;
  perk: string;
  threshold: string;
  /** Tailwind class for the tier name + accent. */
  accentText: string;
  /** Tailwind class for the commission number. */
  numberText: string;
  /** Tailwind class for the top accent bar. */
  bar: string;
  /** Optional invite-only badge text. */
  badge?: string;
  /** Whether this is the elite/top tier — gets the prismatic treatment. */
  isElite?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Base",
    commission: "10%",
    perk: "Simple entry point",
    threshold: "Open enrollment",
    accentText: "text-tx3-muted",
    numberText: "text-tx3-off-white",
    bar: "bg-tx3-border",
  },
  {
    name: "Silver",
    commission: "12.5%",
    perk: "1 free $25K challenge",
    threshold: "~50 referrals · or $10K rev",
    accentText: "text-zinc-300",
    numberText: "text-zinc-100",
    bar: "bg-zinc-300/60",
  },
  {
    name: "Gold",
    commission: "15%",
    perk: "1 free $50K challenge · weekly payouts",
    threshold: "~125 referrals · or $25K rev",
    accentText: "text-exec-gold",
    numberText: "text-exec-gold",
    bar: "bg-exec-gold",
  },
  {
    name: "Diamond",
    commission: "17.5%",
    perk: "1 free $100K challenge",
    threshold: "~250 referrals · or $50K rev",
    accentText: "text-edge-teal",
    numberText: "text-edge-teal",
    bar: "bg-edge-teal",
  },
  {
    name: "Elite",
    commission: "20%",
    perk: "5 free $100K challenges · private circle · co-marketing · retreats",
    threshold: "~500 referrals",
    accentText: "text-stack-gradient",
    numberText: "text-stack-gradient",
    bar: "bg-stack-gradient",
    badge: "Invite only",
    isElite: true,
  },
];

function TierCard({ tier, index }: { tier: Tier; index: number }) {
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-xl border bg-tx3-charcoal p-6 transition-all",
        tier.isElite
          ? "border-tx3-gold/30 shadow-[0_0_40px_rgba(255,184,31,0.12)] hover:shadow-[0_0_60px_rgba(255,184,31,0.25)]"
          : "border-tx3-border hover:border-tx3-muted/50",
      )}
    >
      {/* Top accent bar */}
      <div className={cn("absolute inset-x-0 top-0 h-1", tier.bar)} />

      {/* Step number */}
      <div className="mb-4 t-eyebrow">
        Tier {String(index + 1).padStart(2, "0")}
      </div>

      {/* Tier name */}
      <div className="mb-1 flex items-center justify-between gap-2">
        <h3
          className={cn(
            "font-display text-2xl font-extrabold uppercase",
            tier.accentText,
          )}
        >
          {tier.name}
        </h3>
        {tier.badge && (
          <span className="rounded-full border border-tx3-gold/40 bg-tx3-gold/10 px-2 py-0.5 font-mono text-[9px] tracking-widest text-tx3-gold uppercase">
            {tier.badge}
          </span>
        )}
      </div>

      {/* Commission % */}
      <div
        className={cn(
          "mb-4 font-display text-5xl leading-none font-extrabold tracking-tight md:text-6xl",
          tier.numberText,
        )}
      >
        {tier.commission}
      </div>

      {/* Perk */}
      <p className="mb-4 min-h-[3rem] text-sm leading-snug text-tx3-off-white/85">
        {tier.perk}
      </p>

      {/* Threshold */}
      <div className="mt-auto border-t border-tx3-border pt-3">
        <div className="mb-1 t-eyebrow">
          Threshold
        </div>
        <div className="t-figure text-xs text-tx3-off-white/85">
          {tier.threshold}
        </div>
      </div>
    </div>
  );
}

/**
 * Hub page — Tier Ladder / aspiration engine (Section 7.6).
 * Shows the most aspirational tier ladder in the stack: TX3 Funding FX,
 * Base → Silver → Gold → Diamond → Elite.
 */
export function TierLadder() {
  return (
    <section
      id="tiers"
      className="relative bg-tx3-near-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="mb-3 t-eyebrow">
            The Aspiration Engine · TX3 Funding FX
          </div>
          <h2 className="h-section">
            How far can you{" "}
            <span className="text-earn-gradient">
              climb?
            </span>
          </h2>
          <PrismaticRibbon thickness="thin" className="mt-6 max-w-32" />
          <p className="mt-6 text-tx3-off-white/70 md:text-lg">
            The most aspirational ladder in the stack. Five tiers. Every step up
            unlocks bigger commission, faster payouts, and rarer perks — capped
            at an invite-only inner circle.
          </p>
        </div>

        {/* Ladder — 5 tiers across on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {TIERS.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        {/* Footnote */}
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-tx3-muted">
          Each program has its own tier structure —{" "}
          <span className="text-tx3-off-white/80">
            see the deep-dive pages
          </span>{" "}
          for full Markets, Funding Futures, and Memo details.
        </p>

        {/* Soft CTA */}
        <div className="mt-10 flex justify-center">
          <CTAButton variant="secondary" size="md" href="/funding-fx">
            See the full FX tier breakdown →
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
