import { FinalCTA } from "@/components/hub/FinalCTA";
import { Hero } from "@/components/hub/Hero";
import { ProgramCards } from "@/components/hub/ProgramCards";
import { WhyTX3Group } from "@/components/hub/WhyTX3Group";

/**
 * Hub page — the simplified TX3 Group landing page.
 *
 * Hub-and-spoke IA: the hub answers "what is TX3 Group" in four sections
 * (hero · 3-product grid · capability tiles · closing CTA), and every
 * deeper sales motion (Problem, GrandSlam, Bonuses, Exclusivity, Founders,
 * RiskReversal, Urgency, FAQ, Calculator, TierLadder) lives on the
 * destination it actually serves — deep-dives for the trader-side pitch,
 * /apply for the closing pitch, /about for the credibility story.
 *
 * Section components for the moved sections still live in components/hub/
 * — they're imported by the deep-dive pages, /apply, and /about now.
 */
export default function HubPage() {
  return (
    <>
      <Hero />
      <ProgramCards />
      <WhyTX3Group />
      <FinalCTA />
    </>
  );
}
