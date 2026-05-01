import {
  Banknote,
  BarChart3,
  BookOpenCheck,
  CalendarCheck,
  CircleCheck,
  FileBarChart,
  Handshake,
  LandPlot,
  LayoutDashboard,
  Link2,
  Megaphone,
  Sparkles,
  Tag,
  TrendingUp,
} from "lucide-react";
import { EarningsCalculator } from "@/components/shared/EarningsCalculator";
import { DeepDiveHero } from "@/components/deep-dive/DeepDiveHero";
import { DeepDiveFinalCTA } from "@/components/deep-dive/DeepDiveFinalCTA";
import { PartnerCompensation } from "@/components/deep-dive/PartnerCompensation";
import { ProgramFAQ } from "@/components/deep-dive/ProgramFAQ";
import { ProgramOverview } from "@/components/deep-dive/ProgramOverview";
import { ToolsYouGet } from "@/components/deep-dive/ToolsYouGet";
import { TraderSideValue } from "@/components/deep-dive/TraderSideValue";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "TX3 Funding Futures — Affiliate Program · TX3 Stack",
  description:
    "10–15% commission on every futures challenge. Powered by Topstep. Massive untapped audience.",
};

function P({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-tx3-gold/95">{children}</span>;
}

const FUTURES_TIERS = [
  {
    name: "Tier 1",
    commission: "10%",
    perk: "15% affiliate discount link",
    threshold: "Auto-assigned at signup",
    accent: "text-earn-green/80",
    bar: "bg-earn-green/40",
  },
  {
    name: "Tier 2",
    commission: "12.5%",
    perk: "15% discount link · permanent tier status",
    threshold: "$1,000 in referral earnings",
    accent: "text-earn-teal",
    bar: "bg-earn-teal",
  },
  {
    name: "Tier 3",
    commission: "15%",
    perk: "15% discount link · custom coupon codes",
    threshold: "Eligible for advanced tools",
    accent: "bg-earn-gradient bg-clip-text text-transparent",
    bar: "bg-earn-gradient",
    isTop: true,
  },
];

export default function FundingFuturesPage() {
  return (
    <main>
      <DeepDiveHero
        pillar="earn"
        eyebrow="TX3 STACK · EARN · FUTURES"
        brand="funding"
        brandOrientation="horizontal"
        brandWidth={260}
        headline={
          <>
            Earn on every futures challenge —{" "}
            <span className="bg-earn-gradient bg-clip-text text-transparent">
              powered by Topstep.
            </span>
          </>
        }
        subhead={
          <>
            10–15% commission. Industry-leading futures prop partnership.{" "}
            <strong className="font-semibold text-tx3-white">
              Massive untapped audience.
            </strong>
          </>
        }
        primaryCta={{
          label: "Become a Funding Futures Partner →",
          href: "/apply?program=funding-futures",
        }}
        secondaryCta={{ label: "← Back to TX3 Stack overview", href: "/" }}
      />

      <ProgramOverview
        pillar="earn"
        headline="What is TX3 Funding Futures?"
        body={
          <>
            <p>
              <P>[PLACEHOLDER: Paragraph 1 — Topstep partnership structure. How
              TX3 Funding Futures delivers Topstep-backed funding under the
              TX3 Stack umbrella.]</P>
            </p>
            <p>
              <P>[PLACEHOLDER: Paragraph 2 — Futures market opportunity. Why the
              futures audience is bigger and underserved compared to FX prop
              firms — and why now is the time to promote it.]</P>
            </p>
            <p>
              <P>[PLACEHOLDER: Paragraph 3 — How Futures differs from FX prop:
              account types, challenge structure, payout cadence, instrument
              coverage.]</P>
            </p>
          </>
        }
        stats={[
          {
            label: "Topstep Partnership",
            value: <P>[PLACEHOLDER: Stat]</P>,
          },
          { label: "Account Sizes", value: <P>[PLACEHOLDER: Sizes]</P> },
          {
            label: "Daily Loss Limit",
            value: <P>[PLACEHOLDER: $TBD]</P>,
          },
          {
            label: "Profit Target",
            value: <P>[PLACEHOLDER: $TBD]</P>,
          },
        ]}
      />

      <TraderSideValue
        pillar="earn"
        benefits={[
          {
            icon: BookOpenCheck,
            title: "Topstep-backed funding",
            body: "The same evaluation engine top futures traders already trust.",
          },
          {
            icon: LandPlot,
            title: "Multiple account sizes",
            body: <P>[PLACEHOLDER: Account sizes — $50K, $100K, etc.]</P>,
          },
          {
            icon: TrendingUp,
            title: "Trade real markets",
            body: "ES, NQ, CL, GC and the rest — directly on the live exchange.",
          },
          {
            icon: CalendarCheck,
            title: (
              <>
                Daily payouts · <P>[PLACEHOLDER: TBD]</P>
              </>
            ),
            body: "Payout cadence and minimums TBD — built for active funded traders.",
          },
          {
            icon: BookOpenCheck,
            title: (
              <>
                Coaching access · <P>[PLACEHOLDER: TBD]</P>
              </>
            ),
            body: "Optional coaching tier — TBD.",
          },
          {
            icon: BarChart3,
            title: "Integrated trading journal",
            body: (
              <>
                Auto-import futures fills into{" "}
                <strong className="font-semibold text-tx3-white">
                  Market Memo
                </strong>{" "}
                — performance review without copy-paste.
              </>
            ),
          },
        ]}
      />

      <PartnerCompensation
        pillar="earn"
        headline="10–15% commission on every futures challenge"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {FUTURES_TIERS.map((tier, i) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-xl border bg-tx3-charcoal p-6 transition-all",
                tier.isTop
                  ? "border-earn-green/30 shadow-[0_0_40px_rgba(63,226,107,0.10)]"
                  : "border-tx3-border",
              )}
            >
              <div
                className={cn("absolute inset-x-0 top-0 h-1", tier.bar)}
              />
              <div className="mb-4 font-mono text-[10px] tracking-widest text-tx3-muted uppercase">
                {String(i + 1).padStart(2, "0")} · {tier.name}
              </div>
              <h3
                className={cn(
                  "font-display text-xl font-extrabold uppercase",
                  tier.accent,
                )}
              >
                {tier.name}
              </h3>
              <div
                className={cn(
                  "mt-3 mb-4 font-display text-5xl leading-none font-extrabold tracking-tight",
                  tier.accent,
                )}
              >
                {tier.commission}
              </div>
              <p className="mb-4 min-h-[3rem] text-sm leading-snug text-tx3-off-white/85">
                {tier.perk}
              </p>
              <div className="mt-auto border-t border-tx3-border pt-3 font-mono text-xs text-tx3-off-white/85">
                {tier.threshold}
              </div>
            </div>
          ))}
        </div>

        {/* Topstep co-branding callout */}
        <div className="mt-10 rounded-2xl border border-earn-green/30 bg-tx3-charcoal p-8 shadow-[0_0_40px_rgba(63,226,107,0.08)]">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <div className="mb-2 font-mono text-[11px] tracking-widest text-earn-green uppercase">
                Topstep Partnership
              </div>
              <h3 className="font-display text-xl font-bold text-tx3-white md:text-2xl">
                The most-trusted name in futures prop, white-labeled into the
                TX3 Stack.
              </h3>
              <p className="mt-2 text-sm text-tx3-off-white/80">
                Co-branded materials, integrated tracking, and the same
                evaluation rigor that built Topstep's reputation.
              </p>
            </div>
            <div className="flex shrink-0 items-center justify-center rounded-xl border border-tx3-border bg-tx3-near-black px-6 py-4 text-center">
              <P>[PLACEHOLDER: Topstep co-brand visual / logo lockup]</P>
            </div>
          </div>
        </div>

        {/* Permanent tier flourish */}
        <div className="mt-6 flex items-center gap-3 rounded-xl border border-tx3-border bg-tx3-near-black/60 p-4 text-sm text-tx3-off-white/85">
          <CircleCheck className="size-5 shrink-0 text-earn-green" strokeWidth={2} />
          <span>
            <strong className="font-semibold text-tx3-white">
              Permanent tier status.
            </strong>{" "}
            Once you climb past Tier 1, you don't slide back — your rate sticks.
          </span>
        </div>
      </PartnerCompensation>

      <EarningsCalculator defaultProgram="funding-futures" />

      <ToolsYouGet
        pillar="earn"
        tools={[
          {
            icon: Link2,
            title: "Branded tracking links",
            body: "Sub-IDs and UTMs across both TX3 Funding and Topstep flows.",
          },
          {
            icon: LayoutDashboard,
            title: "Real-time partner dashboard",
            body: "Every challenge, payout, and funded outcome — surfaced live.",
          },
          {
            icon: Megaphone,
            title: "Marketing creative library",
            body: "Co-branded TX3 + Topstep banners and swipe copy.",
          },
          {
            icon: Tag,
            title: "Custom coupon codes (Tier 3)",
            body: "Issue your own discount codes for campaign-style launches.",
          },
          {
            icon: Handshake,
            title: "Dedicated partner manager",
            body: "Direct line for Tier 2+ and Founding Partners.",
          },
          {
            icon: FileBarChart,
            title: "Monthly performance reports",
            body: "Clean exports for your own books.",
          },
        ]}
      />

      <ProgramFAQ
        pillar="earn"
        headline="Funding Futures — common questions"
        questions={[
          {
            q: "How does the Topstep partnership work?",
            a: (
              <P>
                [PLACEHOLDER: Answer TBD — Topstep partnership structure,
                attribution flow, and what's TX3-branded vs. Topstep-branded.]
              </P>
            ),
          },
          {
            q: "Do I earn separately from FX referrals?",
            a: (
              <>
                Yes — Funding FX and Funding Futures are tracked independently.
                A Futures referral earns the Futures rate; an FX referral earns
                the FX rate. Both stack inside the cookie window if your
                audience converts on both.{" "}
                <P>[PLACEHOLDER: Cookie window TBD.]</P>
              </>
            ),
          },
          {
            q: "What futures markets can my audience trade?",
            a: <P>[PLACEHOLDER: Answer TBD — covered instruments list.]</P>,
          },
          {
            q: "Is futures harder to promote than FX?",
            a: (
              <>
                Different audience, similar conversion patterns — futures
                traders skew slightly more experienced and higher-LTV. The
                creative library covers both.{" "}
                <P>[PLACEHOLDER: Audience overlap data TBD.]</P>
              </>
            ),
          },
          {
            q: "Can I bundle FX + Futures referrals?",
            a: (
              <>
                Yes, and we encourage it — partners promoting both consistently
                see higher per-audience earnings. The Triple Stack Multiplier
                bonus also kicks in when you're actively promoting all three
                TX3 brands.
              </>
            ),
          },
        ]}
      />

      <DeepDiveFinalCTA
        pillar="earn"
        headline={
          <>
            Ready to claim the{" "}
            <span className="bg-earn-gradient bg-clip-text text-transparent">
              futures audience?
            </span>
          </>
        }
        subhead={
          <>
            Topstep-backed. Permanent tier status. Custom coupons at Tier 3.
            Apply now and start earning today.
          </>
        }
        cta={{
          label: "Apply for Funding Futures Partners →",
          href: "/apply?program=funding-futures",
        }}
      />
    </main>
  );
}
