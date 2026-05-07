# TX3 GROUP — AFFILIATE HUB PROJECT BRIEF

> **Master spec for Claude Code.** This document is the source of truth for the TX3 Group affiliate hub website. Paste this into Claude Code on day one as your project context.

**Repo:** `tx3-stack`
**Owner:** AgentHollingsworth
**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion
**Deployment:** Vercel (same workflow as PMax Precision)
**Primary domain placeholder:** `tx3stack.com` (TBD)

---

## 1. PROJECT MISSION

Build a Hormozi-grade affiliate recruitment hub that consolidates **three brands and four affiliate programs** under a single, conversion-driven destination.

**The Big Idea:** TX3 Group is the only affiliate program in trading that pays you across the **complete trader journey** — Edge, Execution, and Earn — from one audience.

**Primary KPI:** Approved affiliate applications.
**Secondary KPI:** Tier-up commitments (affiliates who explicitly want the Triple Stack track).

---

## 2. THE BRAND FRAMEWORK

### Edge. Execution. Earn.

The unifying narrative that maps every product to a stage of the trader journey.

| Pillar | Brand | What It Solves | Affiliate Program |
|--------|-------|----------------|-------------------|
| **EDGE** | Market Memo | The trader's analytical edge — journal, review, pattern recognition | 15% lifetime recurring SaaS commission |
| **EXECUTION** | TX3 Markets | Live brokerage execution | Up to $12/lot direct + $3/lot indirect (2-tier IB structure) |
| **EARN — FX** | TX3 Funding (Forex) | Funded capital for forex traders | 10%–20% commission, 5 tiers, free challenge accounts |
| **EARN — Futures** | TX3 Funding (Futures) | Funded capital for futures traders | 10%–15% commission, 3 tiers, custom coupons |

---

## 3. SITE ARCHITECTURE

```
tx3stack.com/
├── /                      → Hub page (long-scroll Hormozi sales page)
├── /markets               → TX3 Markets affiliate deep-dive
├── /funding-fx            → TX3 Funding FX affiliate deep-dive
├── /funding-futures       → TX3 Funding Futures affiliate deep-dive
├── /memo                  → Market Memo affiliate deep-dive
├── /apply                 → Single application form (multi-program select)
├── /partner-portal        → (Future) Approved affiliate dashboard link
└── /resources             → (Future) Swipe files, banners, creative assets
```

**Phase 1 build (this brief covers):** Hub + 4 deep-dive pages + apply page.
**Phase 2 (later):** Resources, leaderboard, partner portal integration.

---

## 4. DESIGN SYSTEM

### 4.1 Color Architecture

```css
/* TX3 GROUP — PARENT BRAND */
--tx3-black:        #000000;   /* Primary background */
--tx3-near-black:   #0A0A0A;   /* Section backgrounds */
--tx3-charcoal:     #141414;   /* Card backgrounds */
--tx3-border:       #1F1F1F;   /* Subtle borders */
--tx3-white:        #FFFFFF;   /* Primary text */
--tx3-off-white:    #F5F5F5;   /* Secondary text */
--tx3-muted:        #8A8A8A;   /* Tertiary/caption text */
--tx3-gold:         #FFB81F;   /* Status accent / partner seal */

/* EDGE — Market Memo */
--edge-teal:        #1FB6C1;   /* Gradient start */
--edge-blue-mid:    #1E90FF;   /* Gradient middle */
--edge-blue-deep:   #1565F0;   /* Gradient end */
--edge-glow:        rgba(31, 182, 193, 0.4);

/* EXECUTION — TX3 Markets */
--exec-gold:        #FFB81F;   /* Primary accent */
--exec-amber:       #F59E0B;   /* Hover/active state */
--exec-glow:        rgba(255, 184, 31, 0.4);

/* EARN — TX3 Funding (both FX + Futures) */
--earn-green:       #3FE26B;   /* Gradient start */
--earn-teal:        #14B8A6;   /* Gradient middle */
--earn-blue:        #1565F0;   /* Gradient end */
--earn-glow:        rgba(63, 226, 107, 0.4);

/* TX3 GROUP SIGNATURE PRISMATIC GRADIENT */
--stack-gradient: linear-gradient(
  90deg,
  #FFB81F 0%,      /* Markets gold */
  #3FE26B 33%,     /* Funding green */
  #14B8A6 50%,     /* Funding teal */
  #1565F0 75%,     /* Funding/Memo blue */
  #1FB6C1 100%     /* Memo teal */
);
```

### 4.2 Typography

- **Display / Headlines:** Geist Sans (Bold/ExtraBold) or Inter Tight — geometric, modern, trader-tech feel
- **Body:** Inter (Regular/Medium)
- **Numerics / Stats:** JetBrains Mono or Geist Mono — tabular figures for commission tables
- **Type scale:** 12 / 14 / 16 / 18 / 20 / 24 / 32 / 48 / 64 / 80 / 96 / 128 (responsive clamp)

### 4.3 Layout Principles

- **Dark-first.** Pure black or near-black backgrounds throughout. No white pages — keeps the premium/serious trader aesthetic from TX3 Markets.
- **Maximum content width:** 1280px (`max-w-7xl`)
- **Section padding:** `py-24 md:py-32` for breathing room
- **Card style:** `bg-tx3-charcoal border border-tx3-border rounded-2xl p-8` (default), with pillar-specific glow on hover
- **No generic AI SaaS aesthetic.** Avoid: glassmorphism overload, purple/indigo gradients, floating 3D blobs, generic Tailwind hero patterns.

### 4.4 Signature Visual Elements

- **The Prismatic Ribbon** — a thin (`h-1` to `h-2`) gradient line using `--stack-gradient`, used as section divider, hero accent, and CTA underline. **This is the TX3 Group visual signature.**
- **Pillar glow cards** — pillar sections (Edge/Execution/Earn) use a subtle radial glow in their accent color, creating visual identity per pillar without overwhelming the page.
- **The Partner Seal** — the gold "OFFICIAL TX3 PARTNER" badge appears as a recurring trust/aspiration symbol throughout the page. It's the visible status reward.

---

## 5. TX3 GROUP PARENT IDENTITY

Since you don't have a TX3 Group logo yet, here's the construction guide:

### Recommended Approach: "TX3" wordmark + "STACK" lockup

Use the existing **angular slashed TX3 wordmark** (same shape that appears in TX3 Markets gold and TX3 Funding gradient) as the master mark. Pair with "STACK" beneath — same way TX3 Funding pairs with "FUNDING" and TX3 Markets pairs with "MARKETS."

**Visual treatment for the parent brand:**
- **Master logo:** TX3 wordmark + "STACK" in white on black
- **Hero/feature use:** TX3 wordmark filled with the prismatic gradient (`--stack-gradient`) + "STACK" in white
- **Footer/utility:** All-white version

**Construction steps for Claude Code:**
1. Take the existing TX3 wordmark shape (same letterforms across all brand assets)
2. Build SVG with two states: solid white, and gradient-filled (using `--stack-gradient`)
3. Compose with "STACK" wordmark in matching font weight beneath
4. Export as `/public/logos/tx3-stack-white.svg` and `/public/logos/tx3-stack-gradient.svg`

**Tagline (always paired in footer + meta):** *Edge. Execution. Earn.*

---

## 6. ASSET MAP

```
public/
└── logos/
    ├── tx3-stack-white.svg          ← To be constructed (see Section 5)
    ├── tx3-stack-gradient.svg       ← To be constructed
    ├── tx3-markets-gold.png         ← Existing (Group_1000006608.png)
    ├── tx3-markets-gold-h.png       ← Existing horizontal (Group_1000006607.png)
    ├── tx3-markets-white.png        ← Existing white variant
    ├── tx3-funding-gradient.png     ← Existing vertical (TX3_Color_Vertical.png)
    ├── tx3-funding-gradient-h.png   ← Existing horizontal (TX3_Color_Horizontal.png)
    ├── tx3-funding-white.png        ← Existing (TX3_Light_Vertical.png)
    ├── market-memo-mark.png         ← Existing (MarketMemo_Mark_Main.png)
    ├── market-memo-h.png            ← Existing (MarketMemo_Horizontal_Main.png)
    ├── market-memo-compact.png      ← Existing (MarketMemo_Compact_Main.png)
    ├── partner-seal-gold.png        ← Existing (Layer_1.png)
    └── partner-seal-dark.png        ← Existing (Group_1000006610.png)
```

**Action item:** Rename uploaded logo files using the conventions above when adding to the repo. Use SVG where possible (Market Memo and TX3 Funding likely have SVG sources you can pull from each brand site's `_next/static/media/` paths — check `MarketMemo_Mark_Main.png` could be replaced by the SVG visible at `marketmemo-logo-color.svg`).

---

## 7. HUB PAGE — FULL STRUCTURE & COPY

The hub page is the long-scroll Hormozi sales page. Here is every section in order.

### 7.1 Hero Section

**Background:** Pure black, subtle prismatic gradient ribbon at top edge, ambient glow blobs in pillar colors at very low opacity.

**Headline (H1):**
> The Only Affiliate Stack in Trading That Pays You **Three Ways** From **One Audience.**

**Subheadline:**
> Edge. Execution. Earn. Promote the complete trader journey across **three brands** and **four programs** — and earn on every stage your audience walks through.

**Primary CTA:** `Become a TX3 Group Partner →` (links to `/apply`)
**Secondary CTA:** `See the numbers ↓` (anchors to Grand Slam Offer section)

**Trust strip beneath CTAs:**
- "Formerly Top Tier Trader" — TX3 Funding heritage badge
- "Trusted by [PLACEHOLDER: X] active traders worldwide"
- Small gold partner seal icon

### 7.2 The Problem Section

**Section heading:** Why most trading affiliate programs leave money on the table.

**Three pain cards (horizontal on desktop, stacked mobile):**

1. **One-and-done payouts.** You convert a trader once. They never come back. Your audience earned you a single check.
2. **Race-to-the-bottom commissions.** Every prop firm has the same offer. You compete on rate alone — and the rate keeps getting cut.
3. **Dead audience after one sale.** You sold them a challenge. Now what? They wash out. Your link goes cold. You start over.

**Closing line for section:**
> *Promoting one program means you monetize one moment. The TX3 Group lets you monetize the whole journey.*

### 7.3 The TX3 Group Solution

**Section heading:** Three brands. One audience. Compounding revenue.

Visual: Three vertical pillars (cards/columns) with their accent colors, each headed by a single word: **EDGE / EXECUTION / EARN**.

For each pillar, show:
- Pillar word (huge, in pillar accent color)
- Brand logo
- One-line "what it solves for the trader"
- One-line "what it earns for you"

**EDGE — Market Memo**
> Sharpens their analysis. Pays you **15% recurring**, every month, for life.

**EXECUTION — TX3 Markets**
> Where they trade live. Pays you **up to $12 per lot** — plus indirect commissions on every sub-affiliate's volume.

**EARN — TX3 Funding**
> Where they get funded. Pays you **up to 20% commission**, weekly payouts, free challenge accounts, and an invite-only inner circle.

**Closing line:**
> *Your audience doesn't have to choose. They convert across the stack.*

### 7.4 The Grand Slam Offer

**Section heading:** What you get as a TX3 Group Partner.

This is the **central conversion section**. Style it as a stacked offer block — Hormozi value-stack format. Each item has a "value" anchor.

**Visual structure:** A single large card with the prismatic ribbon at top. Items listed with checkmarks in pillar colors.

**The Stack Includes:**

| What You Get | Real Value | Pillar |
|---|---|---|
| ✓ Market Memo: 15% lifetime recurring SaaS commission | `[VALUE: $XXX/mo per 10 referrals]` | EDGE |
| ✓ TX3 Markets: Up to $12/lot direct + $3/lot indirect (2-tier IB) | `[VALUE: $XXX per 100 lots traded]` | EXECUTION |
| ✓ TX3 Funding FX: 10%–20% commission across 5 scaling tiers | `[VALUE: Up to $XXX,XXX/year at Elite]` | EARN |
| ✓ TX3 Funding Futures: 10%–15% commission with custom coupons | `[VALUE: $XXX,XXX/year potential]` | EARN |
| ✓ The Edge Bonus | `[BONUS AMOUNT: TBD]` | Bonus |
| ✓ The Execution Accelerator | `[BONUS AMOUNT: TBD]` | Bonus |
| ✓ The Earner's Circle (invite-only) | `[VALUE: Co-marketing + retreats]` | Bonus |
| ✓ The Triple Stack Multiplier | `[BONUS %: TBD]` | Bonus |
| ✓ Official TX3 Partner Seal | Status — wear it on your site, your channel, your bio | Status |
| ✓ Dedicated partner support | `[VALUE: Priority Slack/Discord access]` | Support |
| ✓ Real-time tracking dashboard | Transparency by default | Tools |
| ✓ On-time, reliable payouts (weekly at top tiers) | No shadow-banning. No surprise holds. | Trust |

**Total stated value line (Hormozi staple):**
> Total real-world value if maxed across all four programs: **`[$XXX,XXX+ /year — TBD]`**

**Closing CTA:** `Apply to Become a TX3 Group Partner →`

> ⚠️ **Placeholder note for Jamal:** Every `[BRACKETED]` value above is a placeholder for you to fill in once final bonus economics are decided. Keep the brackets visible in dev so they're impossible to miss before launch.

### 7.5 Program-by-Program Breakdown

**Section heading:** Four programs. Pick one. Run all four.

Three large cards (Markets / Funding / Memo). Each card uses its pillar accent color for the header bar.

#### Card 1 — TX3 Markets (EXECUTION)
- Logo: `tx3-markets-gold.png`
- Headline: **"The only multi-tier IB structure in the stack."**
- Stat row: Up to **$12/lot direct** • Up to **$3/lot indirect** • **4 tiers** • **2-level IB tree**
- Body: TX3 Markets is a brokerage. Affiliates earn on every lot their referrals trade — *plus* a second layer of commission on every sub-affiliate's volume. **Reduced upgrade thresholds for a limited time** — only 10 depositors needed to reach Tier 2 (was 100).
- CTA: `See the full TX3 Markets program →` (links to `/markets`)

#### Card 2 — TX3 Funding (EARN)
*This card has a tab toggle: FX | Futures*

**FX tab:**
- Logo: `tx3-funding-gradient.png`
- Headline: **"From 10% to 20% — and an invite-only inner circle."**
- Stat row: **5 tiers** • Up to **20% commission** • **Weekly payouts** at Gold+ • Free challenge accounts at Silver+
- Body: TX3 Funding FX scales aggressively as you grow. Hit Elite (~500 referrals) and unlock 5 free $100K challenges, private Slack, co-marketing, and partner retreats.
- CTA: `See the full FX program →` (links to `/funding-fx`)

**Futures tab:**
- Logo: `tx3-funding-gradient.png`
- Headline: **"Permanent tier status. Custom coupons. Built for the futures audience."**
- Stat row: **3 tiers** • **10%–15% commission** • **Permanent tier status** • Custom campaign coupons at Tier 3
- Body: Tier up to Tier 3 and unlock the ability to issue your own coupon codes — perfect for trading communities and educators running campaigns.
- CTA: `See the full Futures program →` (links to `/funding-futures`)

#### Card 3 — Market Memo (EDGE)
- Logo: `market-memo-h.png`
- Headline: **"15% recurring. For life. On a tool traders use every day."**
- Stat row: **15% recurring** • **Lifetime revenue share** • **Monthly payouts** • High-retention SaaS
- Body: Market Memo is the trader's journal — automatic trade logging, performance analytics, pattern recognition. Traders who adopt it stay subscribed for years. Refer 10 Pro Plan users ($59/mo) and earn ~$88/mo in recurring revenue that compounds with every new referral.
- CTA: `See the full Memo program →` (links to `/memo`)

### 7.6 The Tier Ladder (Aspiration Engine)

**Section heading:** How far can you climb?

Visual: A vertical or horizontal ladder showing tier progression for the most aspirational program — **TX3 Funding FX** (since it has the most tiers and the most exclusivity).

Tiers: **Base → Silver → Gold → Diamond → Elite**

For each, show:
- Tier name (in pillar color)
- Commission % (large, bold)
- Headline perk
- Approximate threshold

End with a note: *Each program has its own tier structure — see the deep-dive pages for full details.*

### 7.7 The Bonus Stack (Named Bonuses)

**Section heading:** Bonuses that compound your earnings.

Four bonus cards. Each has a custom icon/visual using its pillar color.

#### Bonus 1 — The Edge Bonus
*Pillar: Edge (teal/blue gradient)*
> Refer audiences to Market Memo *first*, then convert them into Markets and Funding traders, and earn an additional `[BONUS %: TBD]` on every conversion.
> **Why:** Market Memo users have higher LTV across the entire stack.

#### Bonus 2 — The Execution Accelerator
*Pillar: Execution (gold)*
> Hit `[VOLUME THRESHOLD: TBD]` lots in any 30-day window and unlock an immediate tier rate bump on TX3 Markets — no depositor requirement.
> **Why:** Reward volume velocity, not just depth.

#### Bonus 3 — The Earner's Circle
*Pillar: Earn (green/blue gradient)*
> The invite-only inner circle. Top affiliates across the entire TX3 Group get co-marketing, retreats, direct line to founders, early access to product launches, and the gold Partner Seal.
> **Eligibility:** Top `[N: TBD]` affiliates per quarter, or auto-qualifying via TX3 Funding FX Elite tier.

#### Bonus 4 — The Triple Stack Multiplier
*Pillar: All three (prismatic gradient)*
> Promote all three brands actively in any 90-day window and earn an additional `[BONUS %: TBD]` across your entire affiliate book.
> **Why:** This is the bonus that turns affiliates into ambassadors.

### 7.8 Exclusivity & Status

**Section heading:** This isn't a generic affiliate program.

Subsections:
- **The Official Partner Seal** — *Display the gold TX3 Partner Seal on your site, your social bios, your YouTube channel. Approved partners only.* (Show the seal asset large and centered.)
- **Private Partner Community** — *Direct access to founders Cue, Anthony, and the operations team. Slack/Discord — `[PLATFORM: TBD]`.*
- **Leaderboard & Recognition** — *Quarterly leaderboards. Featured partner spotlights. Monthly winner announcements.* `[DETAILS: TBD]`
- **First Look Access** — *Early access to product launches, new challenges, and creative assets before they go public.*

### 7.9 Founder & Heritage Section

**Section heading:** Built by traders. Backed by a brokerage. Battle-tested by Top Tier Trader.

Short section establishing credibility:
- TX3 Funding was **formerly Top Tier Trader** — `[STATS PLACEHOLDER: # of funded traders, # of payouts, $X paid out to date]`
- TX3 Markets is the brokerage execution arm
- Market Memo is the analytics layer

Three small headshot/bio cards (or branded silhouettes if no headshots yet):
- **Cue** — Founder
- **Anthony** — Founder
- **Jamal Hollingsworth** — COO

### 7.10 Risk Reversal

**Section heading:** Why TX3 Group pays out when others don't.

Four trust pillars (small icon + headline + one line):
1. **On-time payouts** — Monthly minimum, weekly at top tiers. No exceptions.
2. **Transparent reporting** — Real-time dashboard. See every click, every conversion, every dollar.
3. **No link suppression** — We don't shadow-ban affiliate traffic. Your links work.
4. **Approval guarantee** — Apply with a real audience and a real plan, and you're approved within 1–3 business days.

### 7.11 Urgency / Scarcity

**Section heading:** Founding Partner Cohort

Box/banner visual:
> **Founding TX3 Group Partners get locked-in benefits.**
>
> The first `[N: TBD]` approved partners receive:
> - `[FOUNDING BONUS: TBD]` — locked tier rate that never decreases
> - Priority placement in launch campaigns
> - Founding Partner badge variant of the Official Seal
>
> Application window closes when the cohort fills.

### 7.12 FAQ

**Standard questions to address:**
- How do payouts work across the three brands?
- Do I need to promote all three to qualify?
- What's the cookie window / attribution model? `[TBD]`
- Can I use paid ads?
- What if my referral signs up for Memo first, then Funding later — do I earn on both?
- How long does approval take? *(1–3 business days, per Market Memo's existing process)*
- Are there exclusivity requirements?
- What creative assets do you provide?

### 7.13 Final CTA Section

Full-width section, prismatic ribbon top and bottom.

**Headline:**
> Three brands. One audience. Compounding revenue.

**Subhead:**
> Apply now to become a founding TX3 Group Partner.

**Primary CTA:** `Apply to Become a TX3 Group Partner →`

### 7.14 Footer

- TX3 Group logo (white)
- Tagline: *Edge. Execution. Earn.*
- Brand row: Market Memo logo • TX3 Markets logo • TX3 Funding logo (all white variants)
- Links: Hub, Markets, Funding FX, Funding Futures, Memo, Apply, Privacy, Terms
- Risk disclaimer (trading involves substantial risk — standard disclosure)

---

## 8. DEEP-DIVE PAGE TEMPLATES

Each deep-dive page (`/markets`, `/funding-fx`, `/funding-futures`, `/memo`) follows the same structure for consistency:

### 8.1 Standard Deep-Dive Layout

1. **Hero** — Brand logo (large), pillar word ("EDGE" / "EXECUTION" / "EARN"), headline, primary CTA
2. **At-a-glance stat row** — Commission %, payout cadence, key perk
3. **Full tier breakdown** — Detailed table with every tier, commission, requirements, perks
4. **Why this program** — 3–4 reasons specific to that brand
5. **How it stacks with the rest** — Cross-promotion module: "Affiliates who promote [this brand] also earn from [other brands]"
6. **FAQ** — Program-specific
7. **CTA** — Apply for this program (deep-link to `/apply?program=markets` etc.)

### 8.2 `/markets` — TX3 Markets Specific Content

**Tier table (real data — already locked in):**

| Tier | Direct | Indirect | Min Requirement | Upgrade Threshold |
|------|--------|----------|------------------|---------------------|
| Tier 1 | Up to $6/lot | Up to $1/lot | None — open enrollment | 10 depositors *(was 100)* |
| Tier 2 | Up to $7.50/lot | Up to $2/lot | Completed Tier 1 | 25 depositors *(was 250)* |
| Tier 3 | Up to $10/lot | Up to $2.50/lot | Completed Tier 2 | 50 depositors *(was 500)* |
| Tier 4 | Up to $12/lot | Up to $3/lot | Completed Tier 3 | 100 depositors — team contact |

**Highlight callout:** *Reduced upgrade thresholds for a limited time. Lock in faster tier progression while it lasts.*

### 8.3 `/funding-fx` — TX3 Funding FX Specific Content

**Tier table (real data):**

| Tier | Commission | Perks | Withdrawal | Threshold |
|------|------------|-------|------------|-----------|
| Base | 10% | Simple entry point | Every 30 days | Open enrollment |
| Silver | 12.5% | 1 free $25K challenge | Every 14 days | ~50 referrals or $10K rev |
| Gold | 15% | 1 free $50K challenge | Every 7 days | ~125 referrals or $25K rev |
| Diamond | 17.5% | 1 free $100K challenge | Every 7 days | ~250 referrals or $50K rev |
| Elite | 20% | 5 free $100K challenges, private circle, co-marketing, retreats | Every 7 days | **Invite only** — ~500 referrals |

**Heritage callout:** *Formerly Top Tier Trader. Same trust. New tier ceiling.*

### 8.4 `/funding-futures` — TX3 Funding Futures Specific Content

**Tier table (real data):**

| Tier | Commission | Perks | Threshold |
|------|------------|-------|-----------|
| Tier 1 | 10% | 15% affiliate discount link | Auto-assigned at signup |
| Tier 2 | 12.5% | 15% discount link + permanent tier status | $1,000 in referral earnings |
| Tier 3 | 15% | 15% discount link + custom coupon codes | Eligible for advanced tools |

**Differentiator callout:** *Permanent tier status. Once you climb, you stay.*

### 8.5 `/memo` — Market Memo Specific Content

**Real data:**
- 15% recurring commission
- Lifetime revenue share
- Monthly payouts
- Pro Plan: $59/mo (≈$8.85 per referral, per month, forever they stay subscribed)
- High-retention SaaS positioning

**Calculator module (build this!):** Drag a slider for "# of referrals" and show projected monthly + annual recurring earnings. Same calculator the Market Memo affiliate page already has — replicate it.

---

## 9. APPLY PAGE — `/apply`

Single application form, multi-program select.

**Fields:**
- First name, Last name
- Email
- Country
- Phone (optional)
- Audience platform (multi-select): YouTube, X/Twitter, Instagram, Discord, TikTok, Blog/Website, Email Newsletter, Other
- Audience size: <1k / 1k–10k / 10k–50k / 50k–100k / 100k+
- Trading niche: Forex, Futures, Crypto, Stocks, Multi-asset
- **Which programs are you applying for?** (multi-select): TX3 Markets, TX3 Funding FX, TX3 Funding Futures, Market Memo, **All four (Triple Stack)** ← visually emphasized as the recommended option
- Promotion plan (text area)
- Links: Website, YouTube, X, Instagram, Discord
- Consent checkbox

**On submit:** Display confirmation message — *"Application received. Our team will review and respond within 1–3 business days."*

**Implementation note:** For Phase 1, can ship with a simple form post to a webhook (Zapier/Make.com → Slack/email/CRM). No backend required for launch.

---

## 10. TECH STACK & FILE STRUCTURE

```
tx3-stack/
├── app/
│   ├── layout.tsx                  ← Root layout, fonts, metadata
│   ├── page.tsx                    ← Hub page
│   ├── globals.css                 ← Tailwind imports + CSS variables
│   ├── markets/
│   │   └── page.tsx
│   ├── funding-fx/
│   │   └── page.tsx
│   ├── funding-futures/
│   │   └── page.tsx
│   ├── memo/
│   │   └── page.tsx
│   └── apply/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── hub/
│   │   ├── Hero.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── SolutionPillars.tsx
│   │   ├── GrandSlamOffer.tsx
│   │   ├── ProgramCards.tsx
│   │   ├── TierLadder.tsx
│   │   ├── BonusStack.tsx
│   │   ├── ExclusivitySection.tsx
│   │   ├── FounderSection.tsx
│   │   ├── RiskReversal.tsx
│   │   ├── UrgencySection.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   ├── deep-dive/
│   │   ├── DeepDiveHero.tsx
│   │   ├── TierTable.tsx
│   │   ├── CrossPromote.tsx
│   │   └── EarningsCalculator.tsx   ← Used on /memo
│   ├── shared/
│   │   ├── PrismaticRibbon.tsx
│   │   ├── PartnerSeal.tsx
│   │   ├── PillarCard.tsx
│   │   ├── BonusCard.tsx
│   │   ├── CTAButton.tsx
│   │   └── BrandLogo.tsx
│   └── apply/
│       └── ApplicationForm.tsx
├── lib/
│   ├── constants.ts                ← Tier data, commission rates, copy strings
│   └── utils.ts
├── public/
│   └── logos/                      ← Asset map (Section 6)
├── tailwind.config.ts
├── package.json
└── README.md                       ← This brief
```

---

## 11. TAILWIND CONFIG

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tx3: {
          black: "#000000",
          "near-black": "#0A0A0A",
          charcoal: "#141414",
          border: "#1F1F1F",
          white: "#FFFFFF",
          "off-white": "#F5F5F5",
          muted: "#8A8A8A",
          gold: "#FFB81F",
        },
        edge: {
          teal: "#1FB6C1",
          "blue-mid": "#1E90FF",
          "blue-deep": "#1565F0",
        },
        exec: {
          gold: "#FFB81F",
          amber: "#F59E0B",
        },
        earn: {
          green: "#3FE26B",
          teal: "#14B8A6",
          blue: "#1565F0",
        },
      },
      backgroundImage: {
        "stack-gradient":
          "linear-gradient(90deg, #FFB81F 0%, #3FE26B 33%, #14B8A6 50%, #1565F0 75%, #1FB6C1 100%)",
        "edge-gradient":
          "linear-gradient(135deg, #1FB6C1 0%, #1565F0 100%)",
        "earn-gradient":
          "linear-gradient(135deg, #3FE26B 0%, #1565F0 100%)",
      },
      fontFamily: {
        display: ["var(--font-geist-sans)", "Inter Tight", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "edge-glow": "0 0 40px rgba(31, 182, 193, 0.4)",
        "exec-glow": "0 0 40px rgba(255, 184, 31, 0.4)",
        "earn-glow": "0 0 40px rgba(63, 226, 107, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 12. CLAUDE CODE LAUNCH SEQUENCE

Run this in your terminal, in order:

```bash
# 1. Create the repo on GitHub
gh repo create tx3-stack --public --description "TX3 Group — Affiliate Hub. Edge. Execution. Earn."

# 2. Clone locally
gh repo clone AgentHollingsworth/tx3-stack
cd tx3-stack

# 3. Initialize Next.js with TypeScript and Tailwind
npx create-next-app@latest . --typescript --tailwind --app --src-dir=false --import-alias="@/*"

# 4. Install dependencies
npm install framer-motion lucide-react clsx tailwind-merge
npx shadcn@latest init
npx shadcn@latest add button card tabs accordion form input textarea select checkbox

# 5. Add this brief as the README so Claude Code can read it as context
mv ../TX3-STACK-BRIEF.md ./README.md
# (or keep both: cp ../TX3-STACK-BRIEF.md ./PROJECT-BRIEF.md)

# 6. Drop logos into public/logos/ (rename per Section 6 asset map)

# 7. Commit and push
git add . && git commit -m "Initial scaffold + project brief" && git push

# 8. Open in Claude Code
claude

# 9. First prompt to Claude Code:
# "Read PROJECT-BRIEF.md (or README.md). Start by building the design system:
# tailwind.config.ts (Section 11), globals.css with the CSS variables (Section 4.1),
# and the shared components (PrismaticRibbon, PartnerSeal, BrandLogo, CTAButton).
# Then we'll build the Hub page section by section starting with Hero."

# 10. After first working build, deploy to Vercel
vercel
```

---

## 13. BUILD ORDER (Recommended)

Follow this sequence in Claude Code for fastest, most stable progress:

**Phase 1 — Foundation (Day 1)**
1. Tailwind config + globals.css with all design tokens
2. Layout: Navbar + Footer
3. Shared components: PrismaticRibbon, PartnerSeal, BrandLogo, CTAButton, PillarCard

**Phase 2 — Hub Page Top (Day 1–2)**
4. Hero
5. ProblemSection
6. SolutionPillars (Edge / Execution / Earn three-column)

**Phase 3 — Hub Page Conversion Core (Day 2–3)**
7. GrandSlamOffer (the centerpiece — spend extra time here)
8. ProgramCards (Markets / Funding tabs / Memo)
9. TierLadder

**Phase 4 — Hub Page Bottom (Day 3)**
10. BonusStack (4 named bonuses)
11. ExclusivitySection
12. FounderSection
13. RiskReversal
14. UrgencySection
15. FAQ
16. FinalCTA

**Phase 5 — Deep-Dive Pages (Day 4)**
17. DeepDiveHero, TierTable, CrossPromote shared components
18. /markets, /funding-fx, /funding-futures, /memo (build in parallel, they share structure)
19. EarningsCalculator on /memo

**Phase 6 — Apply Page (Day 5)**
20. ApplicationForm with validation
21. Webhook integration (Zapier/Make.com)
22. Confirmation screen

**Phase 7 — Polish & Deploy (Day 5–6)**
23. SEO metadata per page
24. OG images
25. Mobile QA
26. Vercel deploy + custom domain

---

## 14. PLACEHOLDER REGISTRY (Single source of truth for TBDs)

Every `[BRACKETED]` placeholder in the copy maps to one of these. Update in `lib/constants.ts` once finalized:

```typescript
// lib/constants.ts — TBD VALUES
export const TBD = {
  // Bonus stack amounts
  edgeBonusPercent: "[BONUS %: TBD]",
  executionAcceleratorVolume: "[VOLUME: TBD]",
  executionAcceleratorPerk: "[PERK: TBD]",
  earnersCircleQuarterlyCount: "[N: TBD]",
  tripleStackMultiplierPercent: "[BONUS %: TBD]",

  // Founding cohort
  foundingCohortSize: "[N: TBD]",
  foundingCohortBonus: "[BONUS: TBD]",

  // Stat anchors
  totalActiveTraders: "[X: TBD]",
  totalPaidOut: "[$X: TBD]",
  totalFundedTraders: "[X: TBD]",

  // Operational
  cookieWindow: "[DAYS: TBD]",
  partnerCommunityPlatform: "[Slack | Discord: TBD]",

  // Grand Slam value anchors
  memoMonthlyValue: "[$XXX/mo: TBD]",
  marketsLotsValue: "[$XXX per 100 lots: TBD]",
  fundingFxAnnualValue: "[$XXX,XXX/year: TBD]",
  fundingFuturesAnnualValue: "[$XXX,XXX/year: TBD]",
  totalStackedValue: "[$XXX,XXX/year: TBD]",
};
```

Centralizing all TBDs in one file means when you finalize numbers, you update one location and the whole site reflects it.

---

## 15. NOTES & DECISIONS LOG

- **Naming:** Brand = TX3 Group. Program = TX3 Group Partners. Tagline = Edge. Execution. Earn.
- **Architecture:** Hybrid (hub + deep-dive pages).
- **Audience:** Primary = established trading educators with audiences. Secondary = TTT/TX3 customer-advocates and cold affiliate marketers. Copy must speak to all three without alienating any.
- **Incentive levers:** Triple-stacked — payouts + named bonuses + exclusivity/status. Lead with payouts (rational), escalate to bonuses (emotional), close with exclusivity (identity).
- **Visual signature:** Prismatic ribbon (gold → green → teal → blue → cyan) as the TX3 Group mark.
- **Heritage play:** "Formerly Top Tier Trader" used as trust-transfer device on TX3 Funding sections.
- **Phase 2 ideas (parking lot):** Affiliate leaderboard, swipe file/creative resources page, partner portal, case study page, blog.

---

**End of brief. Ship it.** 🚀

*Edge. Execution. Earn.*
