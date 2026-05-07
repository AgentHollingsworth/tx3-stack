import { FinalCTA } from "@/components/hub/FinalCTA";
import { TierLadder } from "@/components/hub/TierLadder";

export const metadata = {
  title: "Tiers — TX3 Group",
  description:
    "Five tiers. Bigger commissions, faster payouts, rarer perks at every step. Each program has its own structure — see the deep-dive pages for full ladders.",
};

export default function TiersPage() {
  return (
    <main>
      <TierLadder />
      <FinalCTA />
    </main>
  );
}
