import { GrandSlamOffer } from "@/components/hub/GrandSlamOffer";
import { Hero } from "@/components/hub/Hero";
import { ProblemSection } from "@/components/hub/ProblemSection";
import { ProgramCards } from "@/components/hub/ProgramCards";
import { SolutionPillars } from "@/components/hub/SolutionPillars";
import { TierLadder } from "@/components/hub/TierLadder";

export default function HubPage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionPillars />
      <GrandSlamOffer />
      <ProgramCards />
      <TierLadder />
    </>
  );
}
