import { PillarCard } from "@/components/shared/PillarCard";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";

const PAINS = [
  {
    n: "01",
    title: "One-and-done payouts.",
    body: "You convert a trader once. They never come back. Your audience earned you a single check.",
  },
  {
    n: "02",
    title: "Race-to-the-bottom commissions.",
    body: "Every prop firm has the same offer. You compete on rate alone — and the rate keeps getting cut.",
  },
  {
    n: "03",
    title: "Dead audience after one sale.",
    body: "You sold them a challenge. Now what? They wash out. Your link goes cold. You start over.",
  },
];

/**
 * Hub page — The Problem section (Section 7.2 of the brief).
 * Sets up the negative space that the SolutionPillars then resolves.
 */
export function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative bg-tx3-near-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="mb-3 font-mono text-xs tracking-widest text-tx3-muted uppercase">
            The Problem
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-tx3-white md:text-5xl">
            Why most trading affiliate programs leave money on the table.
          </h2>
          <PrismaticRibbon thickness="thin" className="mt-6 max-w-32" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PAINS.map((pain) => (
            <PillarCard key={pain.n} pillar="stack" noAmbient accentBar>
              <div className="mb-4 font-mono text-xs tracking-widest text-tx3-muted uppercase">
                {pain.n}
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-tx3-white md:text-2xl">
                {pain.title}
              </h3>
              <p className="text-tx3-off-white/70">{pain.body}</p>
            </PillarCard>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center font-display text-xl italic leading-relaxed text-tx3-off-white/80 md:text-2xl">
          Promoting one program means you monetize one moment.{" "}
          <span className="font-semibold not-italic text-tx3-white">
            The TX3 Stack lets you monetize the whole journey.
          </span>
        </p>
      </div>
    </section>
  );
}
