import { CTAButton } from "@/components/shared/CTAButton";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";

/**
 * Hub page — Final CTA (Section 7.13).
 * Full-width section with the prismatic ribbon top AND bottom — only place
 * on the page that uses both. Mirrors the hero promise to close the loop.
 */
export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative isolate overflow-hidden bg-tx3-black py-24 md:py-32"
    >
      <PrismaticRibbon
        thickness="thick"
        className="absolute inset-x-0 top-0 z-10"
      />

      {/* Ambient glow blobs — pillar trio, mirrors the hero treatment. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-edge-teal/10 blur-[140px]" />
        <div className="absolute right-[-8%] top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-exec-gold/12 blur-[160px]" />
        <div className="absolute left-1/2 bottom-[-30%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-earn-green/10 blur-[180px]" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-12 text-center md:px-10 md:py-16">
        <div className="mb-4 t-eyebrow">
          Apply Now
        </div>
        <h2 className="h-hero">
          Three brands.{" "}
          <span className="text-tx3-off-white/90">One audience.</span>{" "}
          <span className="text-stack-gradient">
            Compounding revenue.
          </span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-tx3-off-white/80 md:text-xl">
          Apply now to become a{" "}
          <strong className="font-semibold text-tx3-white">
            founding TX3 Stack Partner.
          </strong>
        </p>

        <div className="mt-10">
          <CTAButton variant="primary" size="xl" href="/apply">
            Apply to Become a TX3 Stack Partner →
          </CTAButton>
        </div>

        <p className="mt-6 t-eyebrow">
          Approval in 1–3 business days · No exclusivity required
        </p>
      </div>

      <PrismaticRibbon
        thickness="thick"
        className="absolute inset-x-0 bottom-0 z-10"
      />
    </section>
  );
}
