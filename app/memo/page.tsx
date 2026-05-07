import {
  BarChart3,
  Calendar,
  ChartCandlestick,
  Cloud,
  FileBarChart,
  Handshake,
  Headphones,
  Infinity as InfinityIcon,
  Layers,
  LayoutDashboard,
  Link2,
  Megaphone,
  RefreshCcw,
  Smartphone,
  Sparkles,
  Tag,
  Target,
} from "lucide-react";
import { EarningsCalculator } from "@/components/shared/EarningsCalculator";
import { CrossLinkPrograms } from "@/components/deep-dive/CrossLinkPrograms";
import { DeepDiveHero } from "@/components/deep-dive/DeepDiveHero";
import { DeepDiveFinalCTA } from "@/components/deep-dive/DeepDiveFinalCTA";
import { PartnerCompensation } from "@/components/deep-dive/PartnerCompensation";
import { ProgramFAQ } from "@/components/deep-dive/ProgramFAQ";
import { ProgramOverview } from "@/components/deep-dive/ProgramOverview";
import { ToolsYouGet } from "@/components/deep-dive/ToolsYouGet";
import { TraderSideValue } from "@/components/deep-dive/TraderSideValue";
import { BonusStack } from "@/components/hub/BonusStack";
import { ProblemSection } from "@/components/hub/ProblemSection";
import { RiskReversal } from "@/components/hub/RiskReversal";
import { UrgencySection } from "@/components/hub/UrgencySection";
import { P } from "@/components/shared/Placeholder";

export const metadata = {
  title: "Market Memo — Affiliate Program · TX3 Group",
  description:
    "15% lifetime recurring SaaS commission. Sticky product. Compounding payouts.",
};

export default function MemoPage() {
  return (
    <main>
      <DeepDiveHero
        pillar="edge"
        eyebrow="TX3 GROUP · EDGE"
        brand="memo"
        brandOrientation="horizontal"
        brandWidth={280}
        headline={
          <>
            Recurring revenue from a tool every trader{" "}
            <span className="text-edge-gradient">
              actually uses.
            </span>
          </>
        }
        subhead={
          <>
            <strong className="font-semibold text-tx3-white">
              15% lifetime commission
            </strong>{" "}
            on every Market Memo subscription. Sticky product. Compounding
            payouts.
          </>
        }
        primaryCta={{
          label: "Become a Market Memo Partner →",
          href: "/apply?program=memo",
        }}
        secondaryCta={{ label: "← Back to TX3 Group overview", href: "/" }}
      />

      <ProblemSection />

      <ProgramOverview
        pillar="edge"
        headline="What is Market Memo?"
        body={
          <>
            <p>
              <P>[PLACEHOLDER: Paragraph 1 — Market Memo is the trader's
              journal. Auto-imports trades from major brokers including TX3
              Markets. Performance analytics, pattern recognition, the works.]</P>
            </p>
            <p>
              <P>[PLACEHOLDER: Paragraph 2 — Why it's sticky SaaS: traders who
              start journaling don't stop. Average subscription length and
              churn rate beat most consumer SaaS — recurring revenue compounds.]</P>
            </p>
            <p>
              <P>[PLACEHOLDER: Paragraph 3 — Target user: discretionary trader
              looking to professionalize. Why this audience converts back into
              Funding (they want capital) and Markets (they want the broker
              integration) — Memo is the top-of-funnel for the entire stack.]</P>
            </p>
          </>
        }
        stats={[
          {
            label: "Active Subscribers",
            value: <P>[PLACEHOLDER: # subs]</P>,
          },
          {
            label: "Avg Subscription Length",
            value: <P>[PLACEHOLDER: months]</P>,
          },
          { label: "Churn Rate", value: <P>[PLACEHOLDER: %]</P> },
          { label: "NPS Score", value: <P>[PLACEHOLDER: NPS]</P> },
        ]}
      />

      <TraderSideValue
        pillar="edge"
        benefits={[
          {
            icon: RefreshCcw,
            title: "Auto-import trades",
            body: "Connect your broker once — every fill flows in automatically.",
          },
          {
            icon: BarChart3,
            title: "Performance analytics",
            body: "P&L curves, win rate by setup, drawdown analysis — all live.",
          },
          {
            icon: Tag,
            title: "Tag & journal entries",
            body: "Tag setups, attach screenshots, write notes. Searchable forever.",
          },
          {
            icon: ChartCandlestick,
            title: (
              <>
                Strategy backtesting · <P>[PLACEHOLDER: TBD]</P>
              </>
            ),
            body: "Validate ideas against your own historical fills.",
          },
          {
            icon: Smartphone,
            title: "Mobile + desktop apps",
            body: "Journal a trade from your phone, deep-dive on the desktop.",
          },
          {
            icon: Layers,
            title: "Integrates with TX3 Markets",
            body: "Native broker connection — no API keys, no copy-paste.",
          },
        ]}
      />

      <PartnerCompensation
        pillar="edge"
        headline="15% recurring. For life."
      >
        {/* Big recurring emphasis card */}
        <div className="rounded-2xl border border-edge-teal/30 bg-tx3-charcoal p-8 shadow-[0_0_40px_rgba(31,182,193,0.10)] md:p-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <div className="mb-3 font-mono text-[11px] tracking-widest text-edge-teal uppercase">
                The Compounding Math
              </div>
              <div className="font-display text-6xl font-extrabold leading-none tracking-tight md:text-7xl">
                <span className="text-edge-gradient">
                  15%
                </span>
              </div>
              <p className="mt-4 text-lg text-tx3-off-white/85">
                <strong className="font-semibold text-tx3-white">
                  Lifetime
                </strong>{" "}
                revenue share on every Market Memo subscription, paid every
                month they stay subscribed —{" "}
                <em className="text-tx3-white">forever.</em>
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-tx3-border bg-tx3-near-black px-3 py-1">
                <InfinityIcon
                  className="size-3.5 text-edge-teal"
                  strokeWidth={2.5}
                />
                <span className="t-eyebrow text-tx3-off-white/80">
                  Lifetime · monthly payouts
                </span>
              </div>
            </div>

            {/* Math example */}
            <div className="rounded-xl border border-tx3-border bg-tx3-near-black/80 p-6">
              <div className="mb-3 t-eyebrow">
                Example · One Cohort
              </div>
              <div className="space-y-2 t-figure text-sm text-tx3-off-white/85">
                <div className="flex items-center justify-between">
                  <span>Referrals</span>
                  <span className="tabular-nums text-tx3-white">100</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Pro Plan price</span>
                  <P>[MEMO PRICE: $TBD]</P>
                </div>
                <div className="flex items-center justify-between">
                  <span>Commission</span>
                  <span className="tabular-nums text-tx3-white">15%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Avg LTV</span>
                  <span className="tabular-nums text-tx3-white">24 months</span>
                </div>
                <div className="my-2 h-px bg-tx3-border" />
                <div className="flex items-center justify-between font-display text-lg font-bold">
                  <span className="text-tx3-white">Per cohort</span>
                  <P>[$XX,XXX TBD]</P>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why recurring beats one-time */}
        <div className="mt-10 rounded-2xl border border-tx3-border bg-tx3-charcoal p-6 md:p-8">
          <div className="mb-3 font-mono text-[11px] tracking-widest text-edge-teal uppercase">
            Why recurring &gt; one-time
          </div>
          <p className="text-tx3-off-white/85 md:text-lg">
            One-time payouts make you a hunter, hunting forever for the next
            referral. Recurring SaaS commissions make you a{" "}
            <strong className="font-semibold text-tx3-white">farmer</strong> —
            every Memo referral is an asset that pays you next month, the
            month after, and the year after that. Stack 100 referrals over a
            year and you've built a recurring revenue base that doesn't go to
            zero when you stop posting.
          </p>
        </div>
      </PartnerCompensation>

      <BonusStack />

      <EarningsCalculator defaultProgram="memo" />

      <ToolsYouGet
        pillar="edge"
        headline="Everything you need to grow MRR"
        tools={[
          {
            icon: Link2,
            title: "Affiliate tracking links",
            body: "Sub-IDs, UTMs, and shortlinks for clean attribution.",
          },
          {
            icon: LayoutDashboard,
            title: "Real-time MRR dashboard",
            body: "See cohort retention, churn, and projected lifetime value.",
          },
          {
            icon: Cloud,
            title: "Free Memo account for testing",
            body: "Promote what you actually use — every partner gets full Pro access.",
          },
          {
            icon: Sparkles,
            title: "Demo video library",
            body: "Pre-recorded walkthroughs and feature explainers — embed anywhere.",
          },
          {
            icon: Megaphone,
            title: "Email swipe copy",
            body: "Battle-tested copy for newsletter promos and welcome sequences.",
          },
          {
            icon: Handshake,
            title: "Co-marketing opportunities",
            body: "Joint webinars, podcast features, and creator spotlights.",
          },
        ]}
      />

      <RiskReversal />

      <ProgramFAQ
        pillar="edge"
        headline="Market Memo — common questions"
        questions={[
          {
            q: "What's the average subscription length?",
            a: <P>[PLACEHOLDER: Answer TBD — avg LTV in months.]</P>,
          },
          {
            q: "Can I test Memo before promoting it?",
            a: (
              <>
                Yes — every approved partner gets a free Pro account so you can
                actually use the tool you're promoting. Authentic adoption
                converts better than paid scripts.
              </>
            ),
          },
          {
            q: "What happens if a subscriber cancels?",
            a: (
              <>
                Commission stops the month they cancel — but you keep
                everything earned to date. If they reactivate later inside the
                cookie window you get re-attributed.{" "}
                <P>[PLACEHOLDER: Re-attribution rule TBD.]</P>
              </>
            ),
          },
          {
            q: "Do I earn on annual subscriptions too?",
            a: (
              <P>
                [PLACEHOLDER: Answer TBD — annual plan commission structure
                vs. monthly.]
              </P>
            ),
          },
          {
            q: "How does Memo integrate with TX3 Markets and Funding?",
            a: (
              <>
                Native — TX3 Markets fills auto-import into Memo, and the
                Funding evaluation interface integrates with Memo for
                performance review. The Edge Bonus rewards exactly this flow:
                refer to Memo first, then convert into Markets and Funding,
                and earn an additional rate on every conversion.
              </>
            ),
          },
        ]}
      />

      <UrgencySection />

      <CrossLinkPrograms currentProgram="memo" />

      <DeepDiveFinalCTA
        pillar="edge"
        headline={
          <>
            Ready to build{" "}
            <span className="text-edge-gradient">
              recurring revenue?
            </span>
          </>
        }
        subhead={
          <>
            One referral pays for years. Stack a base. Watch it compound. Apply
            to Market Memo Partners and start farming.
          </>
        }
        cta={{
          label: "Apply for Market Memo Partners →",
          href: "/apply?program=memo",
        }}
      />
    </main>
  );
}
