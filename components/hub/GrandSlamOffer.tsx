import { Check } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import { PartnerSeal } from "@/components/shared/PartnerSeal";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import { cn } from "@/lib/utils";

type ItemPillar =
  | "edge"
  | "execution"
  | "earn"
  | "bonus"
  | "status"
  | "support"
  | "tools"
  | "trust";

type OfferItem = {
  pillar: ItemPillar;
  /** What you get (left side). */
  label: React.ReactNode;
  /** Real-world value anchor (right side). Mark [TBD] visibly. */
  value: React.ReactNode;
  /** Whether `value` is a literal placeholder (renders in mono). */
  isPlaceholder?: boolean;
};

const checkColor: Record<ItemPillar, string> = {
  edge: "text-edge-teal",
  execution: "text-exec-gold",
  earn: "text-earn-green",
  bonus: "text-tx3-gold", // gradient applied separately for ::before badge
  status: "text-tx3-gold",
  support: "text-tx3-off-white",
  tools: "text-tx3-off-white",
  trust: "text-tx3-off-white",
};

const pillarLabel: Record<ItemPillar, string> = {
  edge: "EDGE",
  execution: "EXECUTION",
  earn: "EARN",
  bonus: "BONUS",
  status: "STATUS",
  support: "SUPPORT",
  tools: "TOOLS",
  trust: "TRUST",
};

const PROGRAMS: OfferItem[] = [
  {
    pillar: "edge",
    label: (
      <>
        <strong className="font-semibold text-tx3-white">Market Memo:</strong>{" "}
        15% lifetime recurring SaaS commission
      </>
    ),
    value: "[VALUE: $XXX/mo per 10 referrals]",
    isPlaceholder: true,
  },
  {
    pillar: "execution",
    label: (
      <>
        <strong className="font-semibold text-tx3-white">TX3 Markets:</strong>{" "}
        Up to $12/lot direct + $3/lot indirect (2-tier IB)
      </>
    ),
    value: "[VALUE: $XXX per 100 lots traded]",
    isPlaceholder: true,
  },
  {
    pillar: "earn",
    label: (
      <>
        <strong className="font-semibold text-tx3-white">
          TX3 Funding FX:
        </strong>{" "}
        10%–20% commission across 5 scaling tiers
      </>
    ),
    value: "[VALUE: Up to $XXX,XXX/year at Elite]",
    isPlaceholder: true,
  },
  {
    pillar: "earn",
    label: (
      <>
        <strong className="font-semibold text-tx3-white">
          TX3 Funding Futures:
        </strong>{" "}
        10%–15% commission with custom coupons
      </>
    ),
    value: "[VALUE: $XXX,XXX/year potential]",
    isPlaceholder: true,
  },
];

const BONUSES: OfferItem[] = [
  {
    pillar: "bonus",
    label: (
      <strong className="font-semibold text-tx3-white">The Edge Bonus</strong>
    ),
    value: "[BONUS AMOUNT: TBD]",
    isPlaceholder: true,
  },
  {
    pillar: "bonus",
    label: (
      <strong className="font-semibold text-tx3-white">
        The Execution Accelerator
      </strong>
    ),
    value: "[BONUS AMOUNT: TBD]",
    isPlaceholder: true,
  },
  {
    pillar: "bonus",
    label: (
      <strong className="font-semibold text-tx3-white">
        The Earner's Circle (invite-only)
      </strong>
    ),
    value: "[VALUE: Co-marketing + retreats]",
    isPlaceholder: true,
  },
  {
    pillar: "bonus",
    label: (
      <strong className="font-semibold text-tx3-white">
        The Triple Stack Multiplier
      </strong>
    ),
    value: "[BONUS %: TBD]",
    isPlaceholder: true,
  },
];

const ESSENTIALS: OfferItem[] = [
  {
    pillar: "status",
    label: (
      <>
        <strong className="font-semibold text-tx3-white">
          Official TX3 Partner Seal
        </strong>{" "}
        — wear it on your site, your channel, your bio
      </>
    ),
    value: "Status",
  },
  {
    pillar: "support",
    label: (
      <>
        <strong className="font-semibold text-tx3-white">
          Dedicated partner support
        </strong>
      </>
    ),
    value: "[VALUE: Priority Slack/Discord access]",
    isPlaceholder: true,
  },
  {
    pillar: "tools",
    label: (
      <>
        <strong className="font-semibold text-tx3-white">
          Real-time tracking dashboard
        </strong>{" "}
        — transparency by default
      </>
    ),
    value: "Tools",
  },
  {
    pillar: "trust",
    label: (
      <>
        <strong className="font-semibold text-tx3-white">
          On-time, reliable payouts
        </strong>{" "}
        (weekly at top tiers) — no shadow-banning, no surprise holds
      </>
    ),
    value: "Trust",
  },
];

function OfferRow({ item }: { item: OfferItem }) {
  const isBonus = item.pillar === "bonus";
  return (
    <li className="grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-2 border-b border-tx3-border/60 py-4 last:border-b-0 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-x-6">
      <span
        className={cn(
          "flex size-7 shrink-0 items-center justify-center rounded-md ring-1 ring-inset ring-tx3-border md:size-8",
          isBonus ? "bg-stack-gradient" : "bg-tx3-near-black",
        )}
      >
        <Check
          className={cn(
            "size-4",
            isBonus ? "text-tx3-black" : checkColor[item.pillar],
          )}
          strokeWidth={3}
        />
      </span>

      <div className="text-sm leading-relaxed text-tx3-off-white/90 md:text-base">
        <div className="mb-1 t-eyebrow md:hidden">
          {pillarLabel[item.pillar]}
        </div>
        {item.label}
      </div>

      <div
        className={cn(
          "col-start-2 text-sm md:col-start-3 md:text-right",
          item.isPlaceholder ? "t-placeholder" : "text-tx3-muted",
        )}
      >
        {item.value}
      </div>
    </li>
  );
}

function GroupHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 mb-1 flex items-center gap-3">
      <span className="t-eyebrow">
        {children}
      </span>
      <span className="h-px flex-1 bg-tx3-border" />
    </div>
  );
}

/**
 * Hub page — Grand Slam Offer (Section 7.4).
 * Single large card with prismatic ribbon at top, value-stacked items
 * grouped Programs / Bonuses / Partner Essentials, total stated value, CTA.
 */
export function GrandSlamOffer() {
  return (
    <section
      id="offer"
      className="relative scroll-mt-16 bg-tx3-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <div className="mb-3 t-eyebrow">
            The Grand Slam Offer
          </div>
          <h2 className="h-section">
            What you get as a{" "}
            <span className="text-gold-gradient">
              TX3 Stack Partner.
            </span>
          </h2>
          <p className="mt-4 text-tx3-off-white/70 md:text-lg">
            One application. One audience. Twelve revenue lines — stacked.
          </p>
        </div>

        {/* The card */}
        <div className="relative overflow-hidden rounded-2xl border border-tx3-border bg-tx3-charcoal shadow-[0_0_60px_rgba(255,184,31,0.08)]">
          <PrismaticRibbon thickness="thick" />

          <div className="px-6 py-8 md:px-10 md:py-12">
            {/* PROGRAMS */}
            <GroupHeader>4 Programs · Real Numbers</GroupHeader>
            <ul>
              {PROGRAMS.map((item, i) => (
                <OfferRow key={`p-${i}`} item={item} />
              ))}
            </ul>

            {/* BONUSES */}
            <div className="mt-8">
              <GroupHeader>4 Named Bonuses</GroupHeader>
              <ul>
                {BONUSES.map((item, i) => (
                  <OfferRow key={`b-${i}`} item={item} />
                ))}
              </ul>
            </div>

            {/* PARTNER ESSENTIALS */}
            <div className="mt-8">
              <GroupHeader>Partner Essentials</GroupHeader>
              <ul>
                {ESSENTIALS.map((item, i) => (
                  <OfferRow key={`e-${i}`} item={item} />
                ))}
              </ul>
            </div>

            {/* Partner seal flourish */}
            <div className="mt-10 flex flex-col items-center gap-4 border-t border-tx3-border pt-10 text-center">
              <PartnerSeal variant="gold" size="md" glow />
              <p className="max-w-md t-pullquote text-tx3-off-white/85">
                And the visible proof of all of it — the Official Partner Seal.
              </p>
            </div>

            {/* Total stated value */}
            <div className="mt-10 rounded-xl border border-tx3-gold/30 bg-tx3-gold/5 p-6 text-center md:p-8">
              <div className="mb-2 t-eyebrow text-tx3-gold">
                Total Stated Value
              </div>
              <p className="t-lead">
                Stack all four programs:
              </p>
              <p className="mt-3 h-stat">
                <span className="text-gold-gradient">
                  [$XXX,XXX+ /year — TBD]
                </span>
              </p>
              <p className="mx-auto mt-3 max-w-md t-eyebrow">
                Placeholder · finalize before launch
              </p>
            </div>

            {/* Closing CTA */}
            <div className="mt-10 flex flex-col items-center gap-4 md:mt-12">
              <CTAButton variant="primary" size="xl" href="/apply">
                Apply to Become a TX3 Stack Partner →
              </CTAButton>
              <p className="t-eyebrow">
                Approval in 1–3 business days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
