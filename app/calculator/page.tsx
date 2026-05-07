import { FinalCTA } from "@/components/hub/FinalCTA";
import { EarningsCalculator } from "@/components/shared/EarningsCalculator";

export const metadata = {
  title: "Earnings Calculator — TX3 Group",
  description:
    "Move the slider. Watch the math. See what one audience pays you across three brands.",
};

export default function CalculatorPage() {
  return (
    <main>
      <EarningsCalculator defaultProgram="memo" />
      <FinalCTA />
    </main>
  );
}
