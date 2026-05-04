import { PillarCard, type Pillar } from "@/components/shared/PillarCard";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import { P } from "@/components/shared/Placeholder";

type Bonus = {
  pillar: Pillar;
  number: string;
  name: string;
  /** Body copy with the placeholder rendered inline. */
  body: React.ReactNode;
  /** Why this bonus exists. */
  why: React.ReactNode;
  /** Optional eligibility line (used by Earner's Circle). */
  eligibility?: React.ReactNode;
};

const BONUSES: Bonus[] = [
  {
    pillar: "edge",
    number: "01",
    name: "The Edge Bonus",
    body: (
      <>
        Refer audiences to Market Memo <em className="text-tx3-white">first</em>
        , then convert them into Markets and Funding traders, and earn an
        additional <P>[BONUS %: TBD]</P> on every conversion.
      </>
    ),
    why: "Market Memo users have higher LTV across the entire stack.",
  },
  {
    pillar: "execution",
    number: "02",
    name: "The Execution Accelerator",
    body: (
      <>
        Hit <P>[VOLUME THRESHOLD: TBD]</P> lots in any 30-day window and unlock
        an immediate tier rate bump on TX3 Markets — no depositor requirement.
      </>
    ),
    why: "Reward volume velocity, not just depth.",
  },
  {
    pillar: "earn",
    number: "03",
    name: "The Earner's Circle",
    body: (
      <>
        The invite-only inner circle. Top affiliates across the entire TX3
        Stack get co-marketing, retreats, direct line to founders, early
        access to product launches, and the gold Partner Seal.
      </>
    ),
    why: "Status compounds. The room you're in is the leverage you didn't have last year.",
    eligibility: (
      <>
        Top <P>[N: TBD]</P> affiliates per quarter, or auto-qualifying via TX3
        Funding FX Elite tier.
      </>
    ),
  },
  {
    pillar: "stack",
    number: "04",
    name: "The Triple Stack Multiplier",
    body: (
      <>
        Promote all three brands actively in any 90-day window and earn an
        additional <P>[BONUS %: TBD]</P> across your entire affiliate book.
      </>
    ),
    why: "This is the bonus that turns affiliates into ambassadors.",
  },
];

/**
 * Hub page — BonusStack (Section 7.7).
 * Four named bonus cards, each in its pillar's color treatment.
 */
export function BonusStack() {
  return (
    <section
      id="bonuses"
      className="relative bg-tx3-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="mb-3 t-eyebrow">
            The Bonus Stack
          </div>
          <h2 className="h-section">
            Bonuses that{" "}
            <span className="text-stack-gradient">
              compound
            </span>{" "}
            your earnings.
          </h2>
          <PrismaticRibbon thickness="thin" className="mt-6 max-w-32" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {BONUSES.map((bonus) => (
            <PillarCard
              key={bonus.number}
              pillar={bonus.pillar}
              className="flex flex-col"
            >
              {/* Number + label */}
              <div className="mb-4 flex items-center gap-3">
                <span className="t-eyebrow">
                  Bonus {bonus.number}
                </span>
                <span className="h-px flex-1 bg-tx3-border" />
              </div>

              {/* Bonus name (headline) */}
              <h3 className="h-card mb-5">
                {bonus.name}
              </h3>

              {/* Body */}
              <p className="t-body">{bonus.body}</p>

              {/* Optional eligibility */}
              {bonus.eligibility && (
                <div className="mt-5 rounded-lg border border-tx3-border bg-tx3-near-black/60 p-4">
                  <div className="mb-1 t-eyebrow">
                    Eligibility
                  </div>
                  <p className="text-sm text-tx3-off-white/85">
                    {bonus.eligibility}
                  </p>
                </div>
              )}

              {/* "Why" footer */}
              <div className="mt-auto border-t border-tx3-border pt-5">
                <div className="mb-1 t-eyebrow">
                  Why
                </div>
                <p className="font-display text-sm italic text-tx3-off-white/80">
                  {bonus.why}
                </p>
              </div>
            </PillarCard>
          ))}
        </div>
      </div>
    </section>
  );
}
