import { FinalCTA } from "@/components/hub/FinalCTA";
import { FounderSection } from "@/components/hub/FounderSection";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";

export const metadata = {
  title: "About — TX3 Group",
  description:
    "Three brands. One operator. Built by traders. Backed by a brokerage. Battle-tested by Top Tier Trader.",
};

export default function AboutPage() {
  return (
    <main>
      {/* About hero — minimal; the FounderSection below carries the credibility */}
      <section
        id="top"
        className="relative isolate overflow-hidden bg-tx3-black"
      >
        {/* Subtle ambient glow blobs — same brand-trio treatment as the hub Hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -left-32 top-32 h-[420px] w-[420px] rounded-full bg-edge-teal/8 blur-[140px]" />
          <div className="absolute right-[-10%] top-[-10%] h-[460px] w-[460px] rounded-full bg-exec-gold/10 blur-[160px]" />
          <div className="absolute bottom-[-20%] left-[20%] h-[480px] w-[480px] rounded-full bg-earn-green/8 blur-[160px]" />
        </div>

        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center md:px-10 md:py-40">
          <div className="mb-3 t-eyebrow">
            About TX3 Group
          </div>
          <h1 className="h-hero">
            Three brands.{" "}
            <span className="text-stack-gradient">One operator.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl t-lead">
            TX3 Group runs the affiliate ecosystem for{" "}
            <strong className="font-semibold text-tx3-white">Market Memo</strong>,{" "}
            <strong className="font-semibold text-tx3-white">TX3 Markets</strong>,
            and{" "}
            <strong className="font-semibold text-tx3-white">TX3 Funding</strong>{" "}
            — three brands traders already use to learn, execute, and earn.
          </p>
          <PrismaticRibbon
            thickness="thin"
            className="mx-auto mt-8 max-w-32"
          />
        </div>
      </section>

      {/* Heritage stats + the People pyramid — moved here from the hub */}
      <FounderSection />

      <FinalCTA />
    </main>
  );
}
