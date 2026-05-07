"use client";

import { useId, useMemo, useState } from "react";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { P } from "@/components/shared/Placeholder";
import { cn } from "@/lib/utils";

/**
 * EarningsCalculator
 *
 * Interactive value-stack calculator. Move the audience + 3 conversion-rate
 * sliders, watch live monthly + annual earnings update across all three
 * pillars (Edge / Execution / Earn) plus a totals bar.
 *
 * Real numbers are TBD — the math runs against the temporary constants
 * below so partners can see the calculator working today, while the
 * customer-facing sub-lines render the [PLACEHOLDER: $TBD] tokens in mono
 * gold for find-and-replace at launch.
 */

// === Temporary constants (used for math; placeholder tokens visible in UI) ===
const MEMO_PRICE = 97;
const MEMO_COMMISSION = 0.15; // 15% — locked, not TBD

const AVG_LOTS_PER_TRADER = 8;
const MARKETS_PER_LOT = 12; // $12/lot direct — locked, not TBD

const FX_CHALLENGE_PRICE = 199;
const FX_COMMISSION = 0.15;

const FUTURES_CHALLENGE_PRICE = 149;
const FUTURES_COMMISSION = 0.12;

export type CalculatorProgram =
  | "memo"
  | "markets"
  | "funding-fx"
  | "funding-futures";

type Props = {
  defaultProgram?: CalculatorProgram;
};

// --- helpers ---

function formatMoney(amount: number) {
  return `$${Math.round(amount).toLocaleString()}`;
}

// --- Slider ---

type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (next: number) => void;
  /** Right-side display (e.g. "10,000" or "2.0%"). Tabular-nums for steadiness. */
  displayValue: React.ReactNode;
  /** Hex color for the filled portion of the track. If omitted, prismatic. */
  fill?: string;
  description?: string;
};

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  displayValue,
  fill,
  description,
}: SliderProps) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;

  // For the audience slider (no `fill`), build a multi-stop prismatic gradient
  // that fades to the border color at the thumb position.
  const trackBg = useMemo(() => {
    if (fill) {
      return `linear-gradient(to right, ${fill} 0%, ${fill} ${pct}%, #1f1f1f ${pct}%, #1f1f1f 100%)`;
    }
    return (
      `linear-gradient(to right, ` +
      `#ffb81f 0%, ` +
      `#3fe26b ${pct * 0.33}%, ` +
      `#14b8a6 ${pct * 0.5}%, ` +
      `#1565f0 ${pct * 0.75}%, ` +
      `#1fb6c1 ${pct}%, ` +
      `#1f1f1f ${pct}%, ` +
      `#1f1f1f 100%)`
    );
  }, [pct, fill]);

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label
          htmlFor={id}
          className="t-eyebrow"
        >
          {label}
        </label>
        <span className="font-display text-base font-semibold tabular-nums text-tx3-white">
          {displayValue}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ background: trackBg }}
        className={cn(
          "h-2 w-full cursor-pointer appearance-none rounded-full outline-none",
          // WebKit thumb
          "[&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full",
          "[&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-tx3-black [&::-webkit-slider-thumb]:bg-tx3-white",
          "[&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(255,255,255,0.5)] [&::-webkit-slider-thumb]:cursor-grab",
          // Firefox thumb
          "[&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2",
          "[&::-moz-range-thumb]:border-tx3-black [&::-moz-range-thumb]:bg-tx3-white [&::-moz-range-thumb]:cursor-grab",
          "focus-visible:ring-2 focus-visible:ring-tx3-gold focus-visible:ring-offset-2 focus-visible:ring-offset-tx3-black",
        )}
      />
      {description && (
        <div className="mt-1 text-xs text-tx3-muted">{description}</div>
      )}
    </div>
  );
}

// --- Pillar output card ---

type OutputCardProps = {
  pillar: "edge" | "execution" | "earn";
  brand: "memo" | "markets" | "funding";
  eyebrow: string;
  label: string;
  monthly: number;
  /** Sub-line under the big number — shows the math with placeholders. */
  subline: React.ReactNode;
  highlighted: boolean;
  /** Optional tabbed sub-display (used by the Earn card). */
  tabs?: React.ReactNode;
};

const PILLAR_STYLES: Record<
  OutputCardProps["pillar"],
  {
    bar: string;
    eyebrow: string;
    glow: string;
    border: string;
  }
> = {
  edge: {
    bar: "bg-edge-gradient",
    eyebrow: "text-edge-teal",
    glow: "shadow-[0_0_40px_rgba(31,182,193,0.25)]",
    border: "border-edge-teal/40",
  },
  execution: {
    bar: "bg-exec-gold",
    eyebrow: "text-exec-gold",
    glow: "shadow-[0_0_40px_rgba(255,184,31,0.25)]",
    border: "border-exec-gold/40",
  },
  earn: {
    bar: "bg-earn-gradient",
    eyebrow: "text-earn-green",
    glow: "shadow-[0_0_40px_rgba(63,226,107,0.25)]",
    border: "border-earn-green/40",
  },
};

function OutputCard({
  pillar,
  brand,
  eyebrow,
  label,
  monthly,
  subline,
  highlighted,
  tabs,
}: OutputCardProps) {
  const style = PILLAR_STYLES[pillar];
  const annual = monthly * 12;

  return (
    <div
      data-highlighted={highlighted || undefined}
      className={cn(
        "relative flex flex-col overflow-hidden rounded-2xl border bg-tx3-charcoal p-6 transition-all duration-300",
        highlighted ? `scale-[1.02] ${style.border} ${style.glow}` : "border-tx3-border",
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", style.bar)} />

      {/* Eyebrow + brand logo */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <span
          className={cn(
            "font-mono text-[11px] tracking-widest uppercase",
            style.eyebrow,
          )}
        >
          {eyebrow}
        </span>
        <BrandLogo
          brand={brand === "memo" ? "memo" : brand === "markets" ? "markets" : "funding"}
          variant="color"
          orientation="horizontal"
          width={brand === "memo" ? 110 : 90}
        />
      </div>

      {tabs}

      {/* Label */}
      <div className="mb-2 text-sm text-tx3-off-white/75">{label}</div>

      {/* Big monthly number */}
      <div className="font-display text-4xl leading-none font-extrabold tracking-tight tabular-nums text-tx3-white md:text-5xl">
        {formatMoney(monthly)}
        <span className="ml-1 font-display text-base font-medium text-tx3-muted">
          /month
        </span>
      </div>

      {/* Math sub-line */}
      <div className="mt-4 text-xs leading-relaxed text-tx3-off-white/65">
        {subline}
      </div>

      {/* Annual */}
      <div className="mt-auto border-t border-tx3-border pt-4">
        <div className="mb-1 t-eyebrow">
          Annual
        </div>
        <div className="font-display text-2xl font-bold tabular-nums text-tx3-off-white/90">
          {formatMoney(annual)}
          <span className="ml-1 text-sm font-medium text-tx3-muted">/year</span>
        </div>
      </div>
    </div>
  );
}

// --- Main component ---

export function EarningsCalculator({ defaultProgram = "memo" }: Props) {
  const [audience, setAudience] = useState(10000);
  const [memoRate, setMemoRate] = useState(2.0);
  const [marketsRate, setMarketsRate] = useState(1.5);
  const [fundingRate, setFundingRate] = useState(1.5);
  const [fundingTab, setFundingTab] = useState<"fx" | "futures">(
    defaultProgram === "funding-futures" ? "futures" : "fx",
  );

  const memoSubs = audience * (memoRate / 100);
  const memoMonthly = memoSubs * MEMO_PRICE * MEMO_COMMISSION;

  const marketsFunded = audience * (marketsRate / 100);
  const marketsMonthly = marketsFunded * AVG_LOTS_PER_TRADER * MARKETS_PER_LOT;

  const fundingChallenges = audience * (fundingRate / 100);
  const fundingMonthly =
    fundingTab === "fx"
      ? fundingChallenges * FX_CHALLENGE_PRICE * FX_COMMISSION
      : fundingChallenges * FUTURES_CHALLENGE_PRICE * FUTURES_COMMISSION;

  const totalMonthly = memoMonthly + marketsMonthly + fundingMonthly;
  const totalAnnual = totalMonthly * 12;

  // Round subscriber/funded counts for display in math sub-lines.
  const showMemoSubs = Math.round(memoSubs).toLocaleString();
  const showMarketsFunded = Math.round(marketsFunded).toLocaleString();
  const showFundingChallenges = Math.round(fundingChallenges).toLocaleString();

  return (
    <section
      id="calculator"
      className="relative bg-tx3-near-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <div className="mb-3 t-eyebrow">
            Earnings Calculator
          </div>
          <h2 className="h-section">
            See your{" "}
            <span className="text-stack-gradient">
              TX3 Group earnings
            </span>
          </h2>
          <p className="mt-4 text-tx3-off-white/75 md:text-lg">
            Move the slider. Watch the math. This is what one audience pays you
            across three brands.
          </p>
        </div>

        {/* Calculator container with prismatic gradient border */}
        <div className="rounded-2xl bg-stack-gradient p-px">
          <div className="rounded-[15px] bg-tx3-black p-6 md:p-10">
            {/* === INPUTS === */}
            <div className="mb-10">
              {/* Audience slider — primary input */}
              <Slider
                label="Audience size"
                value={audience}
                min={1000}
                max={100000}
                step={500}
                onChange={setAudience}
                displayValue={
                  <>
                    {audience.toLocaleString()}{" "}
                    <span className="font-body text-sm font-normal text-tx3-muted">
                      followers / subscribers
                    </span>
                  </>
                }
              />

              {/* Three conversion rate sliders */}
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <Slider
                  label="% who subscribe to Memo"
                  value={memoRate}
                  min={0.5}
                  max={10}
                  step={0.1}
                  onChange={setMemoRate}
                  displayValue={`${memoRate.toFixed(1)}%`}
                  fill="#1FB6C1"
                />
                <Slider
                  label="% who fund a brokerage"
                  value={marketsRate}
                  min={0.5}
                  max={8}
                  step={0.1}
                  onChange={setMarketsRate}
                  displayValue={`${marketsRate.toFixed(1)}%`}
                  fill="#FFB81F"
                />
                <Slider
                  label="% who take a Funding challenge"
                  value={fundingRate}
                  min={0.5}
                  max={8}
                  step={0.1}
                  onChange={setFundingRate}
                  displayValue={`${fundingRate.toFixed(1)}%`}
                  fill="#3FE26B"
                />
              </div>
            </div>

            {/* === OUTPUTS === */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <OutputCard
                pillar="edge"
                brand="memo"
                eyebrow="EDGE"
                label="Recurring monthly from Memo subs"
                monthly={memoMonthly}
                highlighted={defaultProgram === "memo"}
                subline={
                  <>
                    <span className="tabular-nums text-tx3-off-white/85">
                      {showMemoSubs}
                    </span>{" "}
                    subscribers × <P>[MEMO PRICE: $TBD]</P> × 15%
                  </>
                }
              />

              <OutputCard
                pillar="execution"
                brand="markets"
                eyebrow="EXECUTION"
                label="Monthly from brokerage volume"
                monthly={marketsMonthly}
                highlighted={defaultProgram === "markets"}
                subline={
                  <>
                    <span className="tabular-nums text-tx3-off-white/85">
                      {showMarketsFunded}
                    </span>{" "}
                    funded × <P>[AVG LOTS: TBD]</P> lots × $12
                  </>
                }
              />

              <OutputCard
                pillar="earn"
                brand="funding"
                eyebrow="EARN"
                label="Monthly from challenge sales"
                monthly={fundingMonthly}
                highlighted={
                  defaultProgram === "funding-fx" ||
                  defaultProgram === "funding-futures"
                }
                tabs={
                  <div
                    role="tablist"
                    aria-label="Funding program type"
                    className="mb-4 inline-flex gap-1 rounded-lg border border-tx3-border bg-tx3-near-black p-1"
                  >
                    {(["fx", "futures"] as const).map((id) => (
                      <button
                        key={id}
                        type="button"
                        role="tab"
                        aria-selected={fundingTab === id}
                        onClick={() => setFundingTab(id)}
                        className={cn(
                          "rounded-md px-3 py-1 font-mono text-[10px] tracking-widest uppercase transition-colors",
                          fundingTab === id
                            ? "bg-earn-green text-tx3-black"
                            : "text-tx3-muted hover:text-tx3-off-white",
                        )}
                      >
                        {id === "fx" ? "FX" : "Futures"}
                      </button>
                    ))}
                  </div>
                }
                subline={
                  fundingTab === "fx" ? (
                    <>
                      <span className="tabular-nums text-tx3-off-white/85">
                        {showFundingChallenges}
                      </span>{" "}
                      challenges × <P>[FX CHALLENGE: $TBD]</P> ×{" "}
                      <P>[FX COMMISSION %: TBD]</P>
                    </>
                  ) : (
                    <>
                      <span className="tabular-nums text-tx3-off-white/85">
                        {showFundingChallenges}
                      </span>{" "}
                      challenges × <P>[FUTURES CHALLENGE: $TBD]</P> ×{" "}
                      <P>[FUTURES COMMISSION %: TBD]</P>
                    </>
                  )
                }
              />
            </div>

            {/* === TOTAL BAR === */}
            <div className="mt-6 rounded-2xl bg-stack-gradient p-px">
              <div className="rounded-[15px] bg-tx3-black px-6 py-6 md:px-10 md:py-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="t-eyebrow text-tx3-gold">
                      Total TX3 Group Earnings
                    </div>
                    <p className="mt-1 max-w-md text-sm text-tx3-off-white/70">
                      From one audience. Three brands. Compounding revenue.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1 text-left md:items-end md:text-right">
                    <div className="font-display text-3xl leading-none font-extrabold tracking-tight tabular-nums md:text-4xl">
                      <span className="text-stack-gradient">
                        {formatMoney(totalMonthly)}
                      </span>
                      <span className="ml-1 text-base font-medium text-tx3-muted">
                        /month
                      </span>
                    </div>
                    <div className="font-display text-xl font-bold tabular-nums md:text-2xl">
                      <span className="text-stack-gradient">
                        {formatMoney(totalAnnual)}
                      </span>
                      <span className="ml-1 text-sm font-medium text-tx3-muted">
                        /year
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footnote about TBD constants */}
            <p className="mt-6 text-center t-eyebrow">
              Math runs on temporary constants · placeholders swap to real
              numbers at launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
