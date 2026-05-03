import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import { P } from "@/components/shared/Placeholder";
import { cn } from "@/lib/utils";

type Founder = {
  initials: string;
  name: string;
  role: string;
  /** Tailwind classes for the silhouette gradient. */
  silhouette: string;
};

const FOUNDERS: Founder[] = [
  {
    initials: "C",
    name: "Cue",
    role: "Founder",
    silhouette: "bg-edge-gradient",
  },
  {
    initials: "A",
    name: "Anthony",
    role: "Founder",
    silhouette: "bg-earn-gradient",
  },
  {
    initials: "JH",
    name: "Jamal Hollingsworth",
    role: "COO",
    silhouette: "bg-gold-gradient",
  },
];

function FounderCard({ founder }: { founder: Founder }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-tx3-border bg-tx3-charcoal p-6 text-center transition-colors hover:border-tx3-muted/40">
      <div
        className={cn(
          "mb-4 flex size-20 items-center justify-center rounded-full font-display text-xl font-extrabold text-tx3-black ring-2 ring-inset ring-tx3-black/20",
          founder.silhouette,
        )}
      >
        {founder.initials}
      </div>
      <div className="font-display text-lg font-bold text-tx3-white">
        {founder.name}
      </div>
      <div className="mt-1 t-eyebrow">
        {founder.role}
      </div>
    </div>
  );
}

/**
 * Hub page — Founder & Heritage (Section 7.9).
 * Establishes credibility: TX3 Funding's Top Tier Trader heritage + the
 * three brand pillars + the people behind the stack.
 */
export function FounderSection() {
  return (
    <section
      id="founders"
      className="relative bg-tx3-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-3 t-eyebrow">
            Heritage
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-tx3-white md:text-4xl lg:text-5xl">
            Built by traders.{" "}
            <span className="text-tx3-off-white/90">
              Backed by a brokerage.
            </span>{" "}
            <span className="text-gold-gradient">
              Battle-tested by Top Tier Trader.
            </span>
          </h2>
          <PrismaticRibbon
            thickness="thin"
            className="mx-auto mt-6 max-w-32"
          />
        </div>

        {/* Top Tier Trader heritage stats */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 rounded-2xl border border-tx3-gold/25 bg-tx3-charcoal p-6 md:grid-cols-3 md:p-8">
          <div className="text-center md:border-r md:border-tx3-border md:px-4">
            <div className="t-eyebrow text-tx3-gold">
              Funded Traders
            </div>
            <div className="mt-2 font-display text-2xl font-extrabold">
              <P>[STATS PLACEHOLDER: #]</P>
            </div>
          </div>
          <div className="text-center md:border-r md:border-tx3-border md:px-4">
            <div className="t-eyebrow text-tx3-gold">
              Payouts Issued
            </div>
            <div className="mt-2 font-display text-2xl font-extrabold">
              <P>[STATS PLACEHOLDER: #]</P>
            </div>
          </div>
          <div className="text-center md:px-4">
            <div className="t-eyebrow text-tx3-gold">
              Paid Out To Date
            </div>
            <div className="mt-2 font-display text-2xl font-extrabold">
              <P>[STATS PLACEHOLDER: $X]</P>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-tx3-muted italic">
          TX3 Funding is{" "}
          <span className="text-tx3-off-white/90">
            formerly Top Tier Trader
          </span>{" "}
          — same trust, new tier ceiling. TX3 Markets is the brokerage execution
          arm. Market Memo is the analytics layer.
        </p>

        {/* Founders */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="mb-6 text-center t-eyebrow">
            The People
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {FOUNDERS.map((f) => (
              <FounderCard key={f.name} founder={f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
