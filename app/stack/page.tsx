import { FinalCTA } from "@/components/hub/FinalCTA";
import { ProgramCards } from "@/components/hub/ProgramCards";
import { SolutionPillars } from "@/components/hub/SolutionPillars";

export const metadata = {
  title: "The Stack — TX3 Group",
  description:
    "Three brands. Four programs. One audience. How the TX3 Group stack composes.",
};

export default function StackPage() {
  return (
    <main>
      <SolutionPillars />
      <ProgramCards />
      <FinalCTA />
    </main>
  );
}
