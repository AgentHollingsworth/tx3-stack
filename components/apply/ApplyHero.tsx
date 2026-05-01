import { PartnerSeal } from "@/components/shared/PartnerSeal";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";

function P({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-tx3-gold/95">{children}</span>;
}

/**
 * /apply hero — full-width, prismatic ribbon at top, eyebrow + H1 with
 * prismatic-gradient "TX3 Stack", subhead, and the trust strip.
 */
export function ApplyHero() {
  return (
    <section
      id="apply-hero"
      className="relative isolate overflow-hidden bg-tx3-black"
    >
      <PrismaticRibbon
        thickness="medium"
        className="absolute inset-x-0 top-0 z-10"
      />

      {/* Subtle pillar-color ambient blobs to mirror the homepage hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 top-32 h-[420px] w-[420px] rounded-full bg-edge-teal/10 blur-[140px]" />
        <div className="absolute right-[-8%] top-[-10%] h-[460px] w-[460px] rounded-full bg-exec-gold/12 blur-[160px]" />
        <div className="absolute bottom-[-30%] left-[20%] h-[480px] w-[480px] rounded-full bg-earn-green/10 blur-[180px]" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center md:px-10 md:py-32">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-tx3-border bg-tx3-charcoal/70 px-4 py-1.5 backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-tx3-gold shadow-[0_0_10px_rgba(255,184,31,0.7)]" />
          <span className="font-mono text-[11px] tracking-widest text-tx3-off-white/85 uppercase">
            TX3 Stack · Apply
          </span>
        </div>

        {/* H1 */}
        <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-tx3-white sm:text-5xl md:text-6xl lg:text-7xl">
          Become a{" "}
          <span className="bg-stack-gradient bg-clip-text text-transparent">
            TX3 Stack
          </span>{" "}
          Partner
        </h1>

        {/* Subhead */}
        <p className="mt-6 max-w-2xl text-lg text-tx3-off-white/80 md:text-xl">
          Three brands. One audience. Compounding revenue. Apply now and we'll
          review your application within{" "}
          <P>[REVIEW TIMEFRAME: TBD]</P> business days.
        </p>

        {/* Trust strip */}
        <div className="mt-10 flex flex-col items-center gap-5 text-sm text-tx3-muted sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2.5">
            <PartnerSeal variant="gold" size="xs" />
            <span>
              Trusted by <P>[PLACEHOLDER: X]</P> active partners worldwide
            </span>
          </div>
          <div className="hidden h-4 w-px bg-tx3-border sm:block" />
          <div className="flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-tx3-muted" />
            <span>
              <span className="font-medium text-tx3-off-white/90">
                Formerly Top Tier Trader
              </span>{" "}
              · TX3 Funding heritage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
