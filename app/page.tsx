import { BonusStack } from "@/components/hub/BonusStack";
import { ExclusivitySection } from "@/components/hub/ExclusivitySection";
import { FAQ } from "@/components/hub/FAQ";
import { FinalCTA } from "@/components/hub/FinalCTA";
import { FounderSection } from "@/components/hub/FounderSection";
import { GrandSlamOffer } from "@/components/hub/GrandSlamOffer";
import { Hero } from "@/components/hub/Hero";
import { ProblemSection } from "@/components/hub/ProblemSection";
import { ProgramCards } from "@/components/hub/ProgramCards";
import { RiskReversal } from "@/components/hub/RiskReversal";
import { SolutionPillars } from "@/components/hub/SolutionPillars";
import { TierLadder } from "@/components/hub/TierLadder";
import { UrgencySection } from "@/components/hub/UrgencySection";
import { EarningsCalculator } from "@/components/shared/EarningsCalculator";

export default function HubPage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionPillars />
      <GrandSlamOffer />
      <ProgramCards />
      <TierLadder />
      {/* The interactive earnings calculator — proves the "compounding revenue
          from one audience" thesis live, sits after the tiers so the user has
          context for the numbers. defaultProgram="memo" highlights the EDGE
          card (recurring revenue is the most striking demo). */}
      <EarningsCalculator defaultProgram="memo" />
      <BonusStack />
      <ExclusivitySection />
      <FounderSection />
      <RiskReversal />
      <UrgencySection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
