"use client";

import { useState } from "react";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { CTAButton } from "@/components/shared/CTAButton";
import { PillarCard, type Pillar } from "@/components/shared/PillarCard";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import { cn } from "@/lib/utils";

type Stat = string;

type ProgramContent = {
  pillarWord: string;
  brandLabel: string;
  headline: string;
  stats: Stat[];
  body: React.ReactNode;
  ctaLabel: string;
  ctaHref: string;
};

function StatRow({
  stats,
  pillar,
}: {
  stats: Stat[];
  pillar: Exclude<Pillar, "stack">;
}) {
  const dotColor =
    pillar === "edge"
      ? "bg-edge-teal"
      : pillar === "execution"
        ? "bg-exec-gold"
        : "bg-earn-green";

  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3 border-y border-tx3-border py-4">
      {stats.map((stat, i) => (
        <li
          key={i}
          className="flex items-center gap-2 font-mono text-xs tracking-tight text-tx3-off-white/85"
        >
          <span className={cn("size-1.5 shrink-0 rounded-full", dotColor)} />
          {stat}
        </li>
      ))}
    </ul>
  );
}

function ProgramBody({
  pillar,
  content,
  logoSlot,
}: {
  pillar: Exclude<Pillar, "stack">;
  content: ProgramContent;
  logoSlot: React.ReactNode;
}) {
  const wordColor =
    pillar === "edge"
      ? "text-edge-teal"
      : pillar === "execution"
        ? "text-exec-gold"
        : "text-earn-green";

  return (
    <div className="flex flex-col">
      {/* Eyebrow + logo */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <span
          className={cn(
            "font-mono text-xs tracking-widest uppercase",
            wordColor,
          )}
        >
          {content.pillarWord} · {content.brandLabel}
        </span>
        <div className="flex h-10 items-center">{logoSlot}</div>
      </div>

      {/* Headline */}
      <h3 className="mb-5 font-display text-2xl leading-tight font-bold text-tx3-white md:text-3xl">
        {content.headline}
      </h3>

      {/* Stat row */}
      <StatRow stats={content.stats} pillar={pillar} />

      {/* Body */}
      <p className="mt-5 text-tx3-off-white/80">{content.body}</p>

      {/* CTA */}
      <div className="mt-auto pt-6">
        <CTAButton variant="ghost" size="md" href={content.ctaHref}>
          {content.ctaLabel}
        </CTAButton>
      </div>
    </div>
  );
}

const MARKETS: ProgramContent = {
  pillarWord: "EXECUTION",
  brandLabel: "TX3 Markets",
  headline: "The only multi-tier IB structure in the stack.",
  stats: [
    "Up to $12/lot direct",
    "Up to $3/lot indirect",
    "4 tiers",
    "2-level IB tree",
  ],
  body: (
    <>
      TX3 Markets is a brokerage. Affiliates earn on every lot their referrals
      trade — <em className="text-tx3-white">plus</em> a second layer of
      commission on every sub-affiliate's volume.{" "}
      <strong className="font-semibold text-exec-gold">
        Reduced upgrade thresholds for a limited time
      </strong>{" "}
      — only 10 depositors needed to reach Tier 2 (was 100).
    </>
  ),
  ctaLabel: "See the full TX3 Markets program →",
  ctaHref: "/markets",
};

const FUNDING_FX: ProgramContent = {
  pillarWord: "EARN — FX",
  brandLabel: "TX3 Funding",
  headline: "From 10% to 20% — and an invite-only inner circle.",
  stats: [
    "5 tiers",
    "Up to 20% commission",
    "Weekly payouts at Gold+",
    "Free challenge accounts at Silver+",
  ],
  body: (
    <>
      TX3 Funding FX scales aggressively as you grow. Hit Elite (~500 referrals)
      and unlock 5 free $100K challenges, private Slack, co-marketing, and
      partner retreats.
    </>
  ),
  ctaLabel: "See the full FX program →",
  ctaHref: "/funding-fx",
};

const FUNDING_FUTURES: ProgramContent = {
  pillarWord: "EARN — Futures",
  brandLabel: "TX3 Funding",
  headline:
    "Permanent tier status. Custom coupons. Built for the futures audience.",
  stats: [
    "3 tiers",
    "10%–15% commission",
    "Permanent tier status",
    "Custom campaign coupons at Tier 3",
  ],
  body: (
    <>
      Tier up to Tier 3 and unlock the ability to issue your own coupon codes —
      perfect for trading communities and educators running campaigns.
    </>
  ),
  ctaLabel: "See the full Futures program →",
  ctaHref: "/funding-futures",
};

const MEMO: ProgramContent = {
  pillarWord: "EDGE",
  brandLabel: "Market Memo",
  headline: "15% recurring. For life. On a tool traders use every day.",
  stats: [
    "15% recurring",
    "Lifetime revenue share",
    "Monthly payouts",
    "High-retention SaaS",
  ],
  body: (
    <>
      Market Memo is the trader's journal — automatic trade logging, performance
      analytics, pattern recognition. Traders who adopt it stay subscribed for
      years. Refer 10 Pro Plan users ($59/mo) and earn ~$88/mo in recurring
      revenue that compounds with every new referral.
    </>
  ),
  ctaLabel: "See the full Memo program →",
  ctaHref: "/memo",
};

function FundingCard() {
  const [tab, setTab] = useState<"fx" | "futures">("fx");
  const content = tab === "fx" ? FUNDING_FX : FUNDING_FUTURES;

  return (
    <PillarCard pillar="earn" className="flex flex-col">
      {/* Tab toggle */}
      <div
        role="tablist"
        aria-label="TX3 Funding program type"
        className="mb-6 inline-flex w-fit gap-1 rounded-lg border border-tx3-border bg-tx3-near-black p-1"
      >
        {(["fx", "futures"] as const).map((id) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={cn(
              "rounded-md px-3 py-1 font-mono text-[11px] tracking-widest uppercase transition-colors",
              tab === id
                ? "bg-earn-green text-tx3-black"
                : "text-tx3-muted hover:text-tx3-off-white",
            )}
          >
            {id === "fx" ? "FX" : "Futures"}
          </button>
        ))}
      </div>

      <ProgramBody
        pillar="earn"
        content={content}
        logoSlot={
          <BrandLogo
            brand="funding"
            variant="color"
            orientation="horizontal"
            width={150}
          />
        }
      />
    </PillarCard>
  );
}

/**
 * Hub page — Program-by-Program Breakdown (Section 7.5).
 * Three cards (Markets, Funding with FX/Futures tabs, Memo) — each in its
 * pillar accent. Cards link to the deep-dive pages built in Phase 5.
 */
export function ProgramCards() {
  return (
    <section
      id="programs"
      className="relative bg-tx3-near-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="mb-3 font-mono text-xs tracking-widest text-tx3-muted uppercase">
            The Programs
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-tx3-white md:text-5xl">
            Four programs.{" "}
            <span className="text-tx3-off-white/85">Pick one.</span>{" "}
            <span className="bg-stack-gradient bg-clip-text text-transparent">
              Run all four.
            </span>
          </h2>
          <PrismaticRibbon thickness="thin" className="mt-6 max-w-32" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* TX3 Markets — execution */}
          <PillarCard pillar="execution" className="flex flex-col">
            <ProgramBody
              pillar="execution"
              content={MARKETS}
              logoSlot={
                <BrandLogo
                  brand="markets"
                  variant="color"
                  orientation="horizontal"
                  width={150}
                />
              }
            />
          </PillarCard>

          {/* TX3 Funding — earn (with FX/Futures tabs) */}
          <FundingCard />

          {/* Market Memo — edge */}
          <PillarCard pillar="edge" className="flex flex-col">
            <ProgramBody
              pillar="edge"
              content={MEMO}
              logoSlot={
                <BrandLogo
                  brand="memo"
                  variant="color"
                  orientation="horizontal"
                  width={150}
                />
              }
            />
          </PillarCard>
        </div>
      </div>
    </section>
  );
}
