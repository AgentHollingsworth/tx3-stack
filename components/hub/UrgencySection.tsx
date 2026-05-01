import { Award, Sparkles, TrendingUp } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";

function P({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-tx3-gold/95">{children}</span>;
}

const PERKS = [
  {
    icon: TrendingUp,
    title: "Locked tier rate",
    body: (
      <>
        <P>[FOUNDING BONUS: TBD]</P> — locked rate that never decreases, even as
        the program scales.
      </>
    ),
  },
  {
    icon: Sparkles,
    title: "Priority placement",
    body: <>First in line in launch campaigns and co-marketing pushes.</>,
  },
  {
    icon: Award,
    title: "Founding Partner Seal",
    body: (
      <>
        Founding-only badge variant of the Official Seal — recognizable as
        early-cohort status.
      </>
    ),
  },
];

/**
 * Hub page — Urgency / Scarcity (Section 7.11).
 * Founding Partner Cohort banner. Gold accent, soft glow, prismatic ribbon
 * at the top edge of the banner card.
 */
export function UrgencySection() {
  return (
    <section
      id="founding-cohort"
      className="relative bg-tx3-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-tx3-gold/30 bg-tx3-charcoal shadow-[0_0_60px_rgba(255,184,31,0.15)]">
          {/* Top prismatic ribbon */}
          <PrismaticRibbon thickness="thick" />

          {/* Soft gold ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,184,31,0.10),transparent_60%)]"
          />

          <div className="relative px-6 py-10 md:px-12 md:py-14">
            {/* Eyebrow + heading */}
            <div className="mb-3 flex items-center gap-3">
              <span className="size-2 rounded-full bg-tx3-gold shadow-[0_0_12px_rgba(255,184,31,0.8)]" />
              <span className="font-mono text-xs tracking-widest text-tx3-gold uppercase">
                Founding Partner Cohort · Limited Window
              </span>
            </div>
            <h2 className="font-display text-2xl font-bold leading-tight text-tx3-white md:text-4xl">
              Founding TX3 Stack Partners get{" "}
              <span className="bg-gold-gradient bg-clip-text text-transparent">
                locked-in benefits.
              </span>
            </h2>

            <p className="mt-4 text-tx3-off-white/85 md:text-lg">
              The first <P>[N: TBD]</P> approved partners receive perks no later
              cohort will:
            </p>

            {/* Three perks */}
            <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {PERKS.map(({ icon: Icon, title, body }) => (
                <li
                  key={title}
                  className="rounded-xl border border-tx3-border bg-tx3-near-black/80 p-5"
                >
                  <span className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-tx3-gold/10 text-tx3-gold ring-1 ring-inset ring-tx3-gold/30">
                    <Icon className="size-4" strokeWidth={2} />
                  </span>
                  <div className="mb-1 font-display text-base font-bold text-tx3-white">
                    {title}
                  </div>
                  <p className="text-sm text-tx3-off-white/80">{body}</p>
                </li>
              ))}
            </ul>

            {/* Closing line + CTA */}
            <div className="mt-8 flex flex-col items-start gap-4 border-t border-tx3-border pt-6 md:flex-row md:items-center md:justify-between">
              <p className="font-display text-sm italic text-tx3-off-white/85 md:text-base">
                Application window closes when the cohort fills.
              </p>
              <CTAButton variant="primary" size="md" href="/apply">
                Claim a founding spot →
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
