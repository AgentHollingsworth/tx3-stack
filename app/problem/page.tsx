import { FinalCTA } from "@/components/hub/FinalCTA";
import { ProblemSection } from "@/components/hub/ProblemSection";

export const metadata = {
  title: "The Problem — TX3 Group",
  description:
    "Why most trading affiliate programs leave money on the table.",
};

export default function ProblemPage() {
  return (
    <main>
      <ProblemSection />
      <FinalCTA />
    </main>
  );
}
