import { FAQ } from "@/components/hub/FAQ";
import { FinalCTA } from "@/components/hub/FinalCTA";

export const metadata = {
  title: "FAQ — TX3 Group",
  description:
    "The questions everyone asks first about the TX3 Group affiliate ecosystem.",
};

export default function FaqPage() {
  return (
    <main>
      <FAQ />
      <FinalCTA />
    </main>
  );
}
