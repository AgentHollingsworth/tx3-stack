import { BrandLogo, type Brand } from "@/components/shared/BrandLogo";
import { PillarCard, type Pillar } from "@/components/shared/PillarCard";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";

type PillarSpec = {
  pillar: Exclude<Pillar, "stack">;
  word: string;
  brand: Brand;
  brandLabel: string;
  /** What it solves for the trader. */
  solves: React.ReactNode;
  /** What it earns for you. */
  earns: React.ReactNode;
};

const PILLARS: PillarSpec[] = [
  {
    pillar: "edge",
    word: "EDGE",
    brand: "memo",
    brandLabel: "Market Memo",
    solves: "Sharpens their analysis.",
    earns: (
      <>
        Pays you{" "}
        <strong className="font-semibold text-tx3-white">15% recurring</strong>,
        every month, for life.
      </>
    ),
  },
  {
    pillar: "execution",
    word: "EXECUTION",
    brand: "markets",
    brandLabel: "TX3 Markets",
    solves: "Where they trade live.",
    earns: (
      <>
        Pays you{" "}
        <strong className="font-semibold text-tx3-white">
          up to $12 per lot
        </strong>{" "}
        — plus indirect commissions on every sub-affiliate's volume.
      </>
    ),
  },
  {
    pillar: "earn",
    word: "EARN",
    brand: "funding",
    brandLabel: "TX3 Funding",
    solves: "Where they get funded.",
    earns: (
      <>
        Pays you{" "}
        <strong className="font-semibold text-tx3-white">
          up to 20% commission
        </strong>
        , weekly payouts, free challenge accounts, and an invite-only inner
        circle.
      </>
    ),
  },
];

/**
 * Hub page — The TX3 Stack Solution / three-pillar reveal (Section 7.3).
 * The visual answer to ProblemSection — three vertical pillars headed by a
 * single word in the pillar's accent color, with brand logo and the value
 * statement.
 */
export function SolutionPillars() {
  return (
    <section
      id="solution"
      className="relative bg-tx3-near-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="mb-3 font-mono text-xs tracking-widest text-tx3-muted uppercase">
            The TX3 Stack
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-tx3-white md:text-5xl">
            Three brands. One audience.{" "}
            <span className="bg-stack-gradient bg-clip-text text-transparent">
              Compounding revenue.
            </span>
          </h2>
          <PrismaticRibbon thickness="thin" className="mt-6 max-w-32" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <PillarCard
              key={p.word}
              pillar={p.pillar}
              eyebrow={p.word}
              className="flex flex-col"
            >
              {/* Brand logo */}
              <div className="mb-6 flex h-20 items-center">
                <BrandLogo
                  brand={p.brand}
                  variant="color"
                  orientation={p.brand === "memo" ? "horizontal" : "vertical"}
                  width={p.brand === "memo" ? 200 : 90}
                />
              </div>

              {/* What it solves */}
              <div className="mb-4">
                <div className="mb-1 font-mono text-[10px] tracking-widest text-tx3-muted uppercase">
                  For the trader
                </div>
                <p className="font-display text-lg font-medium text-tx3-white">
                  {p.solves}
                </p>
              </div>

              {/* What it earns */}
              <div className="mt-auto pt-4">
                <div className="mb-1 font-mono text-[10px] tracking-widest text-tx3-muted uppercase">
                  For you
                </div>
                <p className="text-tx3-off-white/85">{p.earns}</p>
              </div>

              {/* Footer brand label */}
              <div className="mt-6 border-t border-tx3-border pt-4">
                <span className="font-mono text-[11px] tracking-widest text-tx3-muted uppercase">
                  {p.brandLabel}
                </span>
              </div>
            </PillarCard>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center font-display text-xl italic leading-relaxed text-tx3-off-white/80 md:text-2xl">
          Your audience doesn't have to choose.{" "}
          <span className="font-semibold not-italic text-tx3-white">
            They convert across the stack.
          </span>
        </p>
      </div>
    </section>
  );
}
