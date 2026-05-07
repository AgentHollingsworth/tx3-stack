import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import { P } from "@/components/shared/Placeholder";

type QA = {
  q: string;
  a: React.ReactNode;
};

const FAQS: QA[] = [
  {
    q: "How do payouts work across the three brands?",
    a: (
      <>
        Each brand pays out on its own cadence — Memo monthly, Funding weekly
        at Gold tier and above, Markets monthly with the IB tree settled
        end-of-month. Your TX3 Group dashboard surfaces every payout in one
        place so you don't have to track three separate programs.
      </>
    ),
  },
  {
    q: "Do I need to promote all three to qualify?",
    a: (
      <>
        No. You can apply for a single program (Markets, Funding FX, Funding
        Futures, or Memo) and earn from that one. The Triple Stack Multiplier
        bonus only triggers when you actively promote all three brands in any
        90-day window — it's an upside, not a requirement.
      </>
    ),
  },
  {
    q: "What's the cookie window / attribution model?",
    a: (
      <>
        <P>[COOKIE WINDOW: TBD DAYS]</P> · last-touch attribution within the
        window across all four programs. If your referral signs up for Memo
        first and converts to Funding inside the window, you earn on{" "}
        <em className="text-tx3-white">both</em>.
      </>
    ),
  },
  {
    q: "Can I use paid ads?",
    a: (
      <>
        Yes — with one rule: no bidding on TX3-branded keywords (TX3 Markets,
        TX3 Funding, Market Memo, Top Tier Trader). Full creative pack and
        approved-language guide ship in the partner portal.
      </>
    ),
  },
  {
    q: "What if my referral signs up for Memo first, then Funding later — do I earn on both?",
    a: (
      <>
        Yes. That's the entire point of the stack. Last-touch attribution on
        each program tracks independently, so a Memo signup earns you the 15%
        recurring SaaS commission AND any subsequent Funding or Markets
        conversion inside the cookie window earns the full program rate plus
        the Edge Bonus on top.
      </>
    ),
  },
  {
    q: "What if my audience is small?",
    a: (
      <>
        We don't grade on size, we grade on signal. A 2,000-follower channel
        that converts beats 200,000 dead followers every time. Apply with a
        real audience and a real plan — that's the bar.
      </>
    ),
  },
  {
    q: "How long does approval take?",
    a: (
      <>
        1–3 business days. Apply with a real audience and a real plan and
        you're approved within that window. Every application gets a human
        read — no automated queue.
      </>
    ),
  },
  {
    q: "Are there exclusivity requirements?",
    a: (
      <>
        No exclusivity requirement to join. Promote whatever else you want.
        The only exception is the Earner's Circle (top-tier inner circle) and
        the Founding Partner Cohort, which carry softer expectations around
        actively championing the stack.
      </>
    ),
  },
  {
    q: "What creative assets do you provide?",
    a: (
      <>
        Logo packs, banners, video swipe files, email templates, social
        graphics, and pre-written long-form scripts — all available inside the
        partner portal post-approval. Refreshed quarterly.
      </>
    ),
  },
];

/**
 * Hub page — FAQ (Section 7.12).
 * Standard objection-handling. Single-open accordion (collapsible) using
 * the shadcn Accordion primitive, restyled for the dark TX3 theme.
 */
export function FAQ() {
  return (
    <section id="faq" className="relative bg-tx3-near-black py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="mb-3 t-eyebrow">
            Frequently Asked
          </div>
          <h2 className="h-section">
            The questions{" "}
            <span className="text-gold-gradient">
              everyone asks first.
            </span>
          </h2>
          <PrismaticRibbon thickness="thin" className="mt-6 max-w-32" />
        </div>

        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-tx3-border bg-tx3-charcoal px-2 md:px-4"
        >
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="not-last:border-b not-last:border-tx3-border"
            >
              <AccordionTrigger className="px-4 py-5 font-display text-base font-semibold text-tx3-white hover:no-underline md:text-lg [&_svg]:!text-tx3-muted">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-5 t-body">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-8 text-center t-small">
          Have something else?{" "}
          <a
            href="/apply"
            className="text-tx3-off-white/90 underline underline-offset-4 hover:text-tx3-white"
          >
            Apply
          </a>{" "}
          and ask the team directly.
        </p>
      </div>
    </section>
  );
}
