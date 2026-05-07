import {
  BarChart3,
  CalendarDays,
  Clock,
  FileBarChart,
  Handshake,
  Headphones,
  LayoutDashboard,
  Link2,
  Megaphone,
  Scale,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
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
import { P } from "@/components/shared/Placeholder";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "TX3 Funding FX — Affiliate Program · TX3 Group",
  description:
    "5-tier commission ladder, up to 20% on every challenge sold, plus profit share on funded traders.",
};

const FX_TIERS = [
  {
    name: "Base",
    commission: "10%",
    perk: "Simple entry point",
    threshold: "Open enrollment",
    accent: "text-tx3-muted",
    bar: "bg-tx3-border",
  },
  {
    name: "Silver",
    commission: "12.5%",
    perk: "1 free $25K challenge",
    threshold: "~50 referrals · or $10K rev",
    accent: "text-zinc-300",
    bar: "bg-zinc-300/60",
  },
  {
    name: "Gold",
    commission: "15%",
    perk: "1 free $50K challenge · weekly payouts",
    threshold: "~125 referrals · or $25K rev",
    accent: "text-exec-gold",
    bar: "bg-exec-gold",
  },
  {
    name: "Diamond",
    commission: "17.5%",
    perk: "1 free $100K challenge",
    threshold: "~250 referrals · or $50K rev",
    accent: "text-edge-teal",
    bar: "bg-edge-teal",
  },
  {
    name: "Elite",
    commission: "20%",
    perk: "5 free $100Ks · private circle · co-marketing · retreats",
    threshold: "~500 referrals (invite only)",
    accent: "text-stack-gradient",
    bar: "bg-stack-gradient",
    isElite: true,
  },
];

export default function FundingFxPage() {
  return (
    <main>
      <DeepDiveHero
        pillar="earn"
        eyebrow="TX3 GROUP · EARN · FX"
        brand="funding"
        brandOrientation="horizontal"
        brandWidth={260}
        headline={
          <>
            Get paid every time someone takes a{" "}
            <span className="text-earn-gradient">
              TX3 Funding challenge.
            </span>
          </>
        }
        subhead={
          <>
            5-tier commission ladder. Up to{" "}
            <strong className="font-semibold text-tx3-white">
              20% on every challenge sold.
            </strong>{" "}
            Plus profit share on funded traders.
          </>
        }
        primaryCta={{
          label: "Become a Funding FX Partner →",
          href: "/apply?program=funding-fx",
        }}
        secondaryCta={{ label: "← Back to TX3 Group overview", href: "/" }}
      />

      <ProgramOverview
        pillar="earn"
        headline="What is TX3 Funding FX?"
        body={
          <>
            <p>
              <P>[PLACEHOLDER: Paragraph 1 — TX3 Funding FX is the FX prop firm
              formerly known as Top Tier Trader. Cover the rebrand, regulator
              posture, and brand heritage.]</P>
            </p>
            <p>
              <P>[PLACEHOLDER: Paragraph 2 — Account sizes ($25K, $50K, $100K,
              $200K, etc.), evaluation structure (1-step, 2-step, instant),
              profit splits, payout cadence.]</P>
            </p>
            <p>
              <P>[PLACEHOLDER: Paragraph 3 — Trader journey from challenge to
              funded → why the audience is sticky and converts back into Memo +
              Markets across the stack.]</P>
            </p>
          </>
        }
        stats={[
          { label: "Account Sizes", value: <P>[PLACEHOLDER: Sizes]</P> },
          { label: "Profit Split", value: <P>[PLACEHOLDER: %]</P> },
          {
            label: "Funded Traders to Date",
            value: <P>[PLACEHOLDER: # funded]</P>,
          },
          {
            label: "Avg Time to Funding",
            value: <P>[PLACEHOLDER: # days]</P>,
          },
        ]}
      />

      <TraderSideValue
        pillar="earn"
        benefits={[
          {
            icon: Scale,
            title: "Multiple account sizes",
            body: "$25K to $200K — match the account to the trader's risk profile.",
          },
          {
            icon: TrendingUp,
            title: "Generous profit split",
            body: <P>[PLACEHOLDER: split %]</P>,
          },
          {
            icon: Clock,
            title: "No time limits",
            body: "Trade at your own pace — no daily minimums on most account types.",
          },
          {
            icon: Target,
            title: "Scaling plan",
            body: "Hit consistent profit and unlock larger account sizes automatically.",
          },
          {
            icon: BarChart3,
            title: (
              <>
                2-step or instant funding · <P>[TBD]</P>
              </>
            ),
            body: "Pick the path that fits your audience's experience level.",
          },
          {
            icon: Headphones,
            title: "24/7 support",
            body: "Real humans, real fast — across every major time zone.",
          },
        ]}
      />

      <PartnerCompensation
        pillar="earn"
        headline="5 tiers. 20% ceiling. Lifetime payments."
      >
        {/* Tier ladder visual */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {FX_TIERS.map((tier, i) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-xl border bg-tx3-charcoal p-6 transition-all",
                tier.isElite
                  ? "border-tx3-gold/30 shadow-[0_0_40px_rgba(255,184,31,0.12)]"
                  : "border-tx3-border",
              )}
            >
              <div
                className={cn("absolute inset-x-0 top-0 h-1", tier.bar)}
              />
              <div className="mb-4 t-eyebrow">
                Tier {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mb-1 flex items-center justify-between gap-2">
                <h3
                  className={cn(
                    "font-display text-2xl font-extrabold uppercase",
                    tier.accent,
                  )}
                >
                  {tier.name}
                </h3>
                {tier.isElite && (
                  <span className="rounded-full border border-tx3-gold/40 bg-tx3-gold/10 px-2 py-0.5 font-mono text-[9px] tracking-widest text-tx3-gold uppercase">
                    Invite only
                  </span>
                )}
              </div>
              <div
                className={cn(
                  "mb-4 font-display text-5xl leading-none font-extrabold tracking-tight",
                  tier.accent,
                )}
              >
                {tier.commission}
              </div>
              <p className="mb-4 min-h-[3rem] text-sm leading-snug text-tx3-off-white/85">
                {tier.perk}
              </p>
              <div className="mt-auto border-t border-tx3-border pt-3 t-figure text-xs text-tx3-off-white/85">
                {tier.threshold}
              </div>
            </div>
          ))}
        </div>

        {/* Profit share bonus */}
        <div className="mt-10 rounded-2xl border border-earn-green/30 bg-tx3-charcoal p-8 shadow-[0_0_40px_rgba(63,226,107,0.10)]">
          <div className="mb-3 font-mono text-[11px] tracking-widest text-earn-green uppercase">
            Plus · Profit Share Bonus
          </div>
          <h3 className="mb-3 font-display text-2xl font-bold text-tx3-white md:text-3xl">
            <P>[PROFIT SHARE BONUS: TBD]</P> when your referrals get funded.
          </h3>
          <p className="text-tx3-off-white/85">
            On top of every challenge commission you earn{" "}
            <strong className="font-semibold text-tx3-white">
              an additional cut on funded-trader profits
            </strong>{" "}
            — turning a one-time challenge sale into recurring revenue when
            your audience actually trades the funding.
          </p>
        </div>
      </PartnerCompensation>

      <EarningsCalculator defaultProgram="funding-fx" />

      <ToolsYouGet
        pillar="earn"
        tools={[
          {
            icon: Link2,
            title: "Branded tracking links",
            body: "Sub-IDs and UTMs for every campaign you run.",
          },
          {
            icon: LayoutDashboard,
            title: "Real-time partner dashboard",
            body: "Every challenge sold, every funded trader, surfaced live.",
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
            body: "Direct line at Gold tier and above.",
          },
          {
            icon: FileBarChart,
            title: "Monthly performance reports",
            body: "PDF + dashboard exports for your own records.",
          },
        ]}
      />

      <ProgramFAQ
        pillar="earn"
        headline="Funding FX — common questions"
        questions={[
          {
            q: "What's the profit split for funded traders?",
            a: <P>[PLACEHOLDER: Answer TBD — profit split structure.]</P>,
          },
          {
            q: "Are there scaling rules I need to explain to my audience?",
            a: (
              <P>
                [PLACEHOLDER: Answer TBD — daily loss, max drawdown, profit
                target, scaling plan rules.]
              </P>
            ),
          },
          {
            q: "What happens if a funded trader violates rules?",
            a: (
              <>
                Account is closed and the trader can purchase another
                challenge. You earn commission on the new challenge if they
                rebuy through your link inside the cookie window.{" "}
                <P>[PLACEHOLDER: Re-attribution policy specifics TBD.]</P>
              </>
            ),
          },
          {
            q: "How long does the evaluation process take?",
            a: <P>[PLACEHOLDER: Answer TBD — typical eval window.]</P>,
          },
          {
            q: "Do I get credit if my referral retakes a failed challenge?",
            a: (
              <P>
                [PLACEHOLDER: Answer TBD — re-attribution rule for repeat
                challenge purchases.]
              </P>
            ),
          },
        ]}
      />

      <CrossLinkPrograms currentProgram="funding-fx" />

      <DeepDiveFinalCTA
        pillar="earn"
        headline={
          <>
            Ready to monetize{" "}
            <span className="text-earn-gradient">
              trader ambition?
            </span>
          </>
        }
        subhead={
          <>
            Five tiers, 20% ceiling, lifetime payments. Apply now and start
            earning on every challenge your audience takes.
          </>
        }
        cta={{
          label: "Apply for Funding FX Partners →",
          href: "/apply?program=funding-fx",
        }}
      />
    </main>
  );
}
