import {
  BarChart3,
  FileBarChart,
  Gauge,
  Handshake,
  Headphones,
  Layers,
  LayoutDashboard,
  Link2,
  Megaphone,
  Shield,
  Sparkles,
  TrendingUp,
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
  title: "TX3 Markets — Affiliate Program · TX3 Group",
  description:
    "$12/lot direct + $3/lot indirect commission. The only multi-tier IB structure in the stack.",
};

export default function MarketsPage() {
  return (
    <main>
      <DeepDiveHero
        pillar="execution"
        eyebrow="TX3 GROUP · EXECUTION"
        brand="markets"
        brandOrientation="horizontal"
        brandWidth={260}
        headline={
          <>
            The brokerage that pays you{" "}
            <span className="text-gold-gradient">
              twice
            </span>{" "}
            on every trade your audience makes.
          </>
        }
        subhead={
          <>
            Direct commission. Indirect revenue share.{" "}
            <strong className="font-semibold text-tx3-white">
              Lifetime value, not one-time payouts.
            </strong>
          </>
        }
        primaryCta={{
          label: "Become a TX3 Markets Partner →",
          href: "/apply?program=markets",
        }}
        secondaryCta={{ label: "← Back to TX3 Group overview", href: "/" }}
      />

      <ProblemSection />

      <ProgramOverview
        pillar="execution"
        headline="What is TX3 Markets?"
        body={
          <>
            <p>
              <P>[PLACEHOLDER: Paragraph 1 — TX3 Markets positioning. A
              multi-asset brokerage built for serious traders. Cover regulation,
              jurisdiction, ownership.]</P>
            </p>
            <p>
              <P>[PLACEHOLDER: Paragraph 2 — Platforms supported (MT4 / MT5 /
              proprietary), product breadth (FX, indices, commodities, crypto),
              and the execution edge that makes it worth promoting.]</P>
            </p>
            <p>
              <P>[PLACEHOLDER: Paragraph 3 — Target trader profile. Discretionary
              vs. algorithmic, lot-size patterns, and why this audience converts
              from Memo and Funding referrals.]</P>
            </p>
          </>
        }
        stats={[
          {
            label: "Trading Pairs Available",
            value: <P>[PLACEHOLDER: # pairs]</P>,
          },
          { label: "Avg Spread", value: <P>[PLACEHOLDER: pips]</P> },
          { label: "Execution Speed", value: <P>[PLACEHOLDER: ms]</P> },
          { label: "Min Deposit", value: <P>[PLACEHOLDER: $TBD]</P> },
        ]}
      />

      <TraderSideValue
        pillar="execution"
        benefits={[
          {
            icon: TrendingUp,
            title: "Tight spreads",
            body: "Institutional pricing on majors and indices.",
          },
          {
            icon: Layers,
            title: "Multi-asset access",
            body: "FX, indices, commodities, and crypto — one account.",
          },
          {
            icon: Gauge,
            title: "Fast execution",
            body: "Low-latency order routing on every venue.",
          },
          {
            icon: BarChart3,
            title: (
              <>
                MT4 / MT5 / <P>[PLATFORM: TBD]</P>
              </>
            ),
            body: "Trade on whichever platform your audience already uses.",
          },
          {
            icon: Shield,
            title: "Regulated entity",
            body: "Held to standards your audience can verify.",
          },
          {
            icon: Headphones,
            title: "24/5 support",
            body: "Real humans across every major time zone.",
          },
        ]}
      />

      <PartnerCompensation
        pillar="execution"
        headline="How you get paid"
      >
        {/* Two-column compensation breakdown */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Direct */}
          <div className="rounded-2xl border border-exec-gold/30 bg-tx3-charcoal p-8 shadow-[0_0_40px_rgba(255,184,31,0.10)]">
            <div className="mb-3 font-mono text-[11px] tracking-widest text-exec-gold uppercase">
              Direct Referrals
            </div>
            <div className="h-stat text-exec-gold">
              $12<span className="text-2xl font-bold text-tx3-off-white/90">/lot</span>
            </div>
            <p className="mt-4 text-tx3-off-white/85">
              Every lot your direct referrals trade pays you up to{" "}
              <strong className="font-semibold text-tx3-white">
                $12 in direct commission
              </strong>{" "}
              — settled monthly, paid like clockwork.
            </p>
            <div className="mt-5 rounded-lg border border-tx3-border bg-tx3-near-black/60 p-4">
              <div className="mb-1 t-eyebrow">
                Example
              </div>
              <p className="text-sm text-tx3-off-white/85">
                100 lots/month from your audience ={" "}
                <span className="font-semibold tabular-nums text-tx3-white">
                  $1,200/month
                </span>{" "}
                recurring, every month they keep trading.
              </p>
            </div>
          </div>

          {/* Indirect */}
          <div className="rounded-2xl border border-tx3-border bg-tx3-charcoal p-8">
            <div className="mb-3 t-eyebrow">
              Indirect Revenue (2-tier IB)
            </div>
            <div className="h-stat text-tx3-off-white/90">
              $3<span className="text-2xl font-bold text-tx3-muted">/lot</span>
            </div>
            <p className="mt-4 text-tx3-off-white/85">
              Refer sub-affiliates and earn{" "}
              <strong className="font-semibold text-tx3-white">
                up to $3/lot on their volume too
              </strong>
              . The only stack with a real 2-tier IB tree.
            </p>
            <div className="mt-5 rounded-lg border border-tx3-border bg-tx3-near-black/60 p-4">
              <div className="mb-1 t-eyebrow">
                Example
              </div>
              <p className="text-sm text-tx3-off-white/85">
                Your sub-affiliates' volume pays you too — passive income on
                top of your direct earnings.
              </p>
            </div>
          </div>
        </div>

        {/* Tier ladder — 4 tiers from brief Section 8.2 */}
        <div className="mt-10">
          <div className="mb-6 font-mono text-[11px] tracking-widest text-exec-gold uppercase">
            4-Tier IB Ladder · Reduced Thresholds Live Now
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                tier: "Tier 1",
                direct: "Up to $6/lot",
                indirect: "Up to $1/lot",
                threshold: "Open enrollment",
                upgrade: "10 depositors (was 100)",
              },
              {
                tier: "Tier 2",
                direct: "Up to $7.50/lot",
                indirect: "Up to $2/lot",
                threshold: "Completed Tier 1",
                upgrade: "25 depositors (was 250)",
              },
              {
                tier: "Tier 3",
                direct: "Up to $10/lot",
                indirect: "Up to $2.50/lot",
                threshold: "Completed Tier 2",
                upgrade: "50 depositors (was 500)",
              },
              {
                tier: "Tier 4",
                direct: "Up to $12/lot",
                indirect: "Up to $3/lot",
                threshold: "Completed Tier 3",
                upgrade: "100 depositors — team contact",
              },
            ].map((t, i) => (
              <div
                key={t.tier}
                className="rounded-xl border border-tx3-border bg-tx3-charcoal p-5"
              >
                <div className="mb-2 t-eyebrow">
                  {String(i + 1).padStart(2, "0")} · {t.tier}
                </div>
                <div className="font-display text-2xl font-extrabold text-exec-gold">
                  {t.direct}
                </div>
                <div className="mt-1 text-sm text-tx3-off-white/85">
                  + {t.indirect} indirect
                </div>
                <div className="mt-4 border-t border-tx3-border pt-3 text-xs text-tx3-muted">
                  <div>Threshold: {t.threshold}</div>
                  <div className="mt-1 text-exec-gold/90">{t.upgrade}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PartnerCompensation>

      <BonusStack />

      <EarningsCalculator defaultProgram="markets" />

      <ToolsYouGet
        pillar="execution"
        tools={[
          {
            icon: Link2,
            title: "Branded tracking links",
            body: "Sub-IDs, UTMs, and shortlinks for clean attribution.",
          },
          {
            icon: LayoutDashboard,
            title: "Real-time partner dashboard",
            body: "Every click, deposit, and lot — surfaced live.",
          },
          {
            icon: Megaphone,
            title: "Marketing creative library",
            body: "Banners, swipe copy, video assets — refreshed quarterly.",
          },
          {
            icon: Sparkles,
            title: "Co-branded landing pages",
            body: <P>[PLACEHOLDER: TBD details]</P>,
          },
          {
            icon: Handshake,
            title: "Dedicated partner manager",
            body: "Direct line for top performers and Founding Partners.",
          },
          {
            icon: FileBarChart,
            title: "Monthly performance reports",
            body: "Clean PDF + dashboard exports for your own tracking.",
          },
        ]}
      />

      <RiskReversal />

      <ProgramFAQ
        pillar="execution"
        headline="TX3 Markets — common questions"
        questions={[
          {
            q: "How quickly do commissions pay out?",
            a: <P>[PLACEHOLDER: Answer TBD — payout cadence details.]</P>,
          },
          {
            q: "What CRM tracks my referrals?",
            a: (
              <P>
                [PLACEHOLDER: Answer TBD — CRM/affiliate platform name and
                attribution model.]
              </P>
            ),
          },
          {
            q: "Can I refer sub-affiliates and earn from their volume?",
            a: (
              <>
                Yes — that's the entire point of the 2-tier IB structure. You
                earn{" "}
                <strong className="font-semibold text-tx3-white">
                  up to $3/lot
                </strong>{" "}
                on every lot a sub-affiliate's referrals trade. Stack a small
                sub-affiliate network and the indirect income compounds fast.{" "}
                <P>[PLACEHOLDER: Sub-affiliate onboarding flow TBD.]</P>
              </>
            ),
          },
          {
            q: "What spreads does TX3 Markets offer compared to competitors?",
            a: <P>[PLACEHOLDER: Answer TBD — spread comparison.]</P>,
          },
          {
            q: "Is there a minimum number of referrals to qualify?",
            a: (
              <>
                No minimum to start earning — Tier 1 is open enrollment. To
                upgrade tiers you need depositors, not just sign-ups: 10 to
                reach Tier 2 (was 100), 25 for Tier 3 (was 250), 50 for Tier 4
                (was 500). Reduced thresholds are a limited-time perk.
              </>
            ),
          },
        ]}
      />

      <UrgencySection />

      <CrossLinkPrograms currentProgram="markets" />

      <DeepDiveFinalCTA
        pillar="execution"
        headline={
          <>
            Ready to monetize{" "}
            <span className="text-gold-gradient">
              every trade?
            </span>
          </>
        }
        subhead={
          <>
            Join TX3 Markets Partners and start earning on direct + indirect
            volume.
          </>
        }
        cta={{
          label: "Apply for TX3 Markets →",
          href: "/apply?program=markets",
        }}
      />
    </main>
  );
}
