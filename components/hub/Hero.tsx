import { CTAButton } from "@/components/shared/CTAButton";
import { PartnerSeal } from "@/components/shared/PartnerSeal";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";

/**
 * Hub page — Hero section (Section 7.1 of the brief).
 * Pure-black background with subtle pillar-color ambient glows + a prismatic
 * ribbon at the very top edge.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-tx3-black"
    >
      <PrismaticRibbon thickness="medium" className="absolute inset-x-0 top-0 z-10" />

      {/* Ambient pillar-color glow blobs — very low opacity, decorative only. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-32 h-[480px] w-[480px] rounded-full bg-edge-teal/10 blur-[140px]" />
        <div className="absolute right-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-exec-gold/10 blur-[160px]" />
        <div className="absolute bottom-[-20%] left-[20%] h-[560px] w-[560px] rounded-full bg-earn-green/8 blur-[180px]" />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 py-32 text-center md:px-10 md:py-40">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-tx3-border bg-tx3-charcoal/60 px-4 py-1.5 backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-exec-gold shadow-[0_0_12px_rgba(255,184,31,0.8)]" />
          <span className="t-eyebrow text-tx3-off-white/80">
            TX3 Stack · Edge. Execution. Earn.
          </span>
        </div>

        {/* H1 */}
        <h1 className="h-hero">
          The Only Affiliate Stack in Trading
          <br className="hidden sm:block" />{" "}
          That Pays You{" "}
          <span className="text-stack-gradient">
            Three Ways
          </span>{" "}
          From{" "}
          <span className="text-gold-gradient">
            One Audience.
          </span>
        </h1>

        {/* Subhead */}
        <p className="mt-8 max-w-3xl text-lg text-tx3-off-white/80 md:text-xl">
          Edge. Execution. Earn. Promote the complete trader journey across{" "}
          <strong className="font-semibold text-tx3-white">three brands</strong>{" "}
          and{" "}
          <strong className="font-semibold text-tx3-white">four programs</strong>{" "}
          — and earn on every stage your audience walks through.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <CTAButton variant="primary" size="lg" href="/apply">
            Become a TX3 Stack Partner →
          </CTAButton>
          <CTAButton variant="secondary" size="lg" href="#offer">
            See the numbers ↓
          </CTAButton>
        </div>

        {/* Trust strip */}
        <div className="mt-16 flex flex-col items-center gap-5 text-sm text-tx3-muted sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-tx3-muted" />
            <span>
              <span className="font-medium text-tx3-off-white/90">
                Formerly Top Tier Trader
              </span>{" "}
              · TX3 Funding heritage
            </span>
          </div>
          <div className="hidden h-4 w-px bg-tx3-border sm:block" />
          <div className="flex items-center gap-2.5">
            <PartnerSeal variant="gold" size="xs" />
            <span>
              Trusted by{" "}
              <span className="font-mono text-tx3-off-white/90">
                [PLACEHOLDER: X]
              </span>{" "}
              active traders worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
