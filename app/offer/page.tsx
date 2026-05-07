import { FinalCTA } from "@/components/hub/FinalCTA";
import { GrandSlamOffer } from "@/components/hub/GrandSlamOffer";

export const metadata = {
  title: "The Offer — TX3 Group",
  description:
    "What you get as a TX3 Group Partner. One application, twelve revenue lines, stacked.",
};

export default function OfferPage() {
  return (
    <main>
      <GrandSlamOffer />
      <FinalCTA />
    </main>
  );
}
