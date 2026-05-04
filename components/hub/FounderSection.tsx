import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import { P } from "@/components/shared/Placeholder";
import { cn } from "@/lib/utils";

type Person = {
  initials: string;
  name: string;
  role: string;
  /** Tailwind classes for the silhouette gradient. */
  silhouette: string;
};

const QUILLAN: Person = {
  initials: "QB",
  name: "Quillan Black",
  role: "Founder",
  silhouette: "bg-gold-gradient",
};
const ANTHONY: Person = {
  initials: "AW",
  name: "Anthony Williams",
  role: "Founder",
  silhouette: "bg-gold-gradient",
};
const NICOLAS: Person = {
  initials: "NC",
  name: "Nicolas Castillo",
  role: "CEO",
  silhouette: "bg-edge-gradient",
};
const JAMAL: Person = {
  initials: "JH",
  name: "Jamal Hollingsworth",
  role: "COO",
  silhouette: "bg-earn-gradient",
};

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-tx3-border bg-tx3-charcoal p-6 text-center transition-colors hover:border-tx3-muted/40">
      <div
        className={cn(
          "mb-4 flex size-20 items-center justify-center rounded-full font-display text-xl font-extrabold text-tx3-black ring-2 ring-inset ring-tx3-black/20",
          person.silhouette,
        )}
      >
        {person.initials}
      </div>
      <div className="font-display text-lg font-bold text-tx3-white">
        {person.name}
      </div>
      <div className="mt-1 t-eyebrow">
        {person.role}
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
          <h2 className="h-section">
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

        {/* The People — pyramid hierarchy: founders / CEO / COO */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="mb-6 text-center t-eyebrow">
            The People
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 sm:gap-8">
            {/* Tier 1 — co-founders, side by side */}
            <div className="sm:col-span-2">
              <PersonCard person={QUILLAN} />
            </div>
            <div className="sm:col-span-2">
              <PersonCard person={ANTHONY} />
            </div>
            {/* Tier 2 — CEO, centered */}
            <div className="sm:col-span-2 sm:col-start-2">
              <PersonCard person={NICOLAS} />
            </div>
            {/* Tier 3 — COO, centered */}
            <div className="sm:col-span-2 sm:col-start-2">
              <PersonCard person={JAMAL} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
