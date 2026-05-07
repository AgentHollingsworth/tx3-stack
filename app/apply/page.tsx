import { Suspense } from "react";
import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { ApplyHero } from "@/components/apply/ApplyHero";
import { SocialProofSidebar } from "@/components/apply/SocialProofSidebar";

export const metadata = {
  title: "Apply — TX3 Group Partners",
  description:
    "Apply now to become a TX3 Group Partner. Three brands. One audience. Compounding revenue.",
};

/**
 * Lightweight skeleton shown while the form's client bundle loads inside
 * the Suspense boundary. Matches the form card's surface so there's no
 * layout shift between the fallback and the real form.
 */
function FormFallback() {
  return (
    <div className="rounded-2xl border border-tx3-border bg-tx3-charcoal p-10">
      <div className="mb-6 h-4 w-24 animate-pulse rounded bg-tx3-border" />
      <div className="mb-6 h-8 w-2/3 animate-pulse rounded bg-tx3-border" />
      <div className="space-y-4">
        <div className="h-10 animate-pulse rounded-lg bg-tx3-near-black" />
        <div className="h-10 animate-pulse rounded-lg bg-tx3-near-black" />
        <div className="h-10 animate-pulse rounded-lg bg-tx3-near-black" />
        <div className="h-10 animate-pulse rounded-lg bg-tx3-near-black" />
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <main>
      <ApplyHero />

      <section className="bg-tx3-near-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
            {/* Form (Suspense required because ApplicationForm uses useSearchParams) */}
            <Suspense fallback={<FormFallback />}>
              <ApplicationForm />
            </Suspense>

            {/* Sidebar — desktop only */}
            <div className="hidden lg:block">
              <SocialProofSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
