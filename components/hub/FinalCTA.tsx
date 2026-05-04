import { CTAButton } from "@/components/shared/CTAButton";
import { PartnerSeal } from "@/components/shared/PartnerSeal";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";

/**
 * Hub page — Final CTA (Section 7.13).
 *
 * Layout follows the design system mockup (screenshot 4):
 *   thin prismatic ribbon as a full-bleed section divider at the top,
 *   centered Partner Seal with golden glow,
 *   uppercase mono eyebrow "ONE APPLICATION · FOUR PROGRAMS",
 *   2-line H2 with the closing prismatic-gradient phrase
 *   ("the whole journey."),
 *   trust-strip subhead,
 *   primary gold CTA + "Re-read the offer" secondary CTA.
 */
export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative isolate overflow-hidden bg-tx3-black"
    >
      {/* Full-bleed prismatic ribbon as the section divider */}
      <PrismaticRibbon thickness="medium" />

      {/* Ambient glow blobs — pillar trio, mirrors the hero treatment. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-20 top-1/3 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-edge-teal/10 blur-[140px]" />
        <div className="absolute right-[-8%] top-1/3 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-exec-gold/14 blur-[160px]" />
        <div className="absolute bottom-[-20%] left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-earn-green/10 blur-[180px]" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center md:px-10 md:py-32">
        {/* Centered partner seal with golden glow — the "earned status" mark */}
        <div className="mb-12">
          <PartnerSeal variant="gold" size="lg" glow />
        </div>

        {/* Eyebrow */}
        <div className="mb-6 t-eyebrow">
          One Application · Four Programs
        </div>

        {/* H2 — two lines, closing phrase in stack gradient */}
        <h2 className="h-hero">
          Stop monetizing one moment.
          <br />
          Start monetizing{" "}
          <span className="text-stack-gradient">
            the whole journey.
          </span>
        </h2>

        {/* Subhead */}
        <p className="mt-8 max-w-2xl text-lg text-tx3-off-white/85 md:text-xl">
          Approval in 1–3 business days. Weekly payouts at top tiers. No
          shadow-banning, no surprise holds.{" "}
          <strong className="font-semibold text-tx3-white">
            The TX3 Stack opens once — get in.
          </strong>
        </p>

        {/* CTA pair */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <CTAButton variant="primary" size="xl" href="/apply">
            Become a TX3 Stack Partner →
          </CTAButton>
          <CTAButton variant="secondary" size="xl" href="#offer">
            Re-read the offer
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
