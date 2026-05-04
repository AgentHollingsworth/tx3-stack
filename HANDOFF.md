# TX3 Stack — Session Handoff

> **Read this first.** This document captures the full state of the in-flight design pass so a fresh session can continue without losing context or re-litigating decisions. **Production is untouched.** All work lives on the `design-pass-full` branch.

---

## 1. Project state

| Field | Value |
|---|---|
| **Repo** | `github.com/AgentHollingsworth/tx3-stack` |
| **Active branch** | `design-pass-full` |
| **Branch HEAD commit** | `f2bc859c16ceee58961cf11564832f9f841dfc20` |
| **Branch HEAD message** | `design-pass-full: Path C — keep all 13 sections, restyle to V1 mockup` |
| **Branched from** | `d297cc7` (which is `Wave 5: Adopt .t-figure across stat rows, tier tables, and calculator` — the last commit shipped to live before this design pass began) |
| **Push state** | `design-pass-full` is **fully pushed** to `origin/design-pass-full`. Local HEAD = remote HEAD. Working tree clean. |
| **`main` HEAD** | `d297cc7` — **untouched**. Live site still serves this. |
| **Vercel preview URL (branch)** | https://tx3-stack-git-design-pass-full-jamal-hollingsworths-projects.vercel.app |
| **Vercel deployment-specific URL** | https://tx3-stack-8m0mbdni5-jamal-hollingsworths-projects.vercel.app (immutable; this specific build) |
| **Production URL** | https://tx3-stack.vercel.app — points at `main` (still old design) |

### Worktree layout (important)

This repo uses git worktrees. `design-pass-full` is checked out at:

```
/Users/agentholli/Documents/tx3-stack/.claude/worktrees/jovial-dewdney-bc8314/
```

`main` is checked out at:

```
/Users/agentholli/Documents/tx3-stack/
```

When operating on the design-pass-full branch use the worktree path. When merging/pushing main, use the main worktree path. **Never `cd` into the wrong one** — git operations use the cwd's branch.

This handoff document was committed on the `design-pass-full` branch. To read it from the main worktree before merging:
```bash
cat /Users/agentholli/Documents/tx3-stack/.claude/worktrees/jovial-dewdney-bc8314/HANDOFF.md
# or
git -C /Users/agentholli/Documents/tx3-stack show design-pass-full:HANDOFF.md
```

---

## 2. Work completed this session

### Path C — keep all 13 hub sections, restyle to V1 mockup aesthetic

Single commit (`f2bc859`) that:

#### NEW component
- **`components/layout/StickyHeader.tsx`** — fixed-position sticky nav modeled exactly on the V1 mockup at `tx3-stack-design/ui_kits/marketing/Header.jsx`:
  - Transparent at scroll-top, `rgba(0,0,0,0.72) + backdrop-blur-md + saturate-150` after `scrollY > 12px`
  - Left: TX3 Stack gradient logo (88px wide) → `/`
  - Center (desktop): 5 uppercase mono links — **THE PROBLEM · THE STACK · THE OFFER · TIERS · FAQ** — each `<Link>`-wrapped with cross-page hash hrefs (`/#problem`, `/#solution`, `/#offer`, `/#tiers`, `/#faq`) so they work from `/apply` and any deep-dive page
  - Right: gold `Apply →` `<CTAButton variant="primary" size="sm">`
  - Mobile: Apply button stays + hamburger toggle reveals a vertical drawer with the same 5 links
  - Bottom: prismatic gradient hairline that opacity-shifts on scroll
  - Body scroll locked when mobile drawer is open

#### MODIFIED files
- **`app/layout.tsx`** — mounted `<StickyHeader/>` between `<body>` opening and `{children}` so it appears on every route (hub, deep-dives, apply, future legal pages)
- **`app/globals.css`** — added `scroll-padding-top: 80px` on `html` so anchor jumps clear the fixed header
- **`components/hub/Hero.tsx`** — H1 swapped from `"The Only Affiliate Stack in Trading That Pays You Three Ways From One Audience."` to the design system's 3-line stacked headline:
  - Line 1: `One Audience.` (white)
  - Line 2: `Three Brands.` (in `text-stack-gradient`) `Stacked.` (in `text-gold-gradient`)
  - Also removed Hero's own top-edge `<PrismaticRibbon/>` since `<StickyHeader/>` now provides the gradient hairline globally
- **`components/hub/FinalCTA.tsx`** — fully restructured to match screenshot 4:
  - Single full-bleed `<PrismaticRibbon thickness="medium"/>` as section divider at top (was thick + had a duplicate at bottom)
  - Centered `<PartnerSeal variant="gold" size="lg" glow/>` at the top of the content
  - New eyebrow: `One Application · Four Programs`
  - New 2-line H2: `Stop monetizing one moment. / Start monetizing the whole journey.` (last phrase in `text-stack-gradient`)
  - New subhead about approval / payouts / no shadow-banning, ending in bold `The TX3 Stack opens once — get in.`
  - Primary gold `Become a TX3 Stack Partner →` + secondary `Re-read the offer` (anchors to `#offer`)
- **`components/layout/Footer.tsx`** — 3-column nav restructure per screenshot 4:
  - **PROGRAMS**: TX3 Markets, TX3 Funding FX, TX3 Funding Futures, Market Memo (unchanged links)
  - **PARTNERS**: Apply, FAQ (`/#faq`), Tier ladder (`/#tiers`), Partner support — **was only Hub + Apply**
  - **COMPANY**: About, Heritage · Top Tier Trader, Press, Contact — **replaces the old Legal column (Privacy / Terms)**
  - Brand description text now matches the mockup verbatim: *"The elite affiliate program for the trading industry. One audience, three brands, four programs."*
  - Standalone "The Stack" brand-row eyebrow section **removed** — brand logos consolidated inline with the bottom copyright row at 60% opacity
  - Risk disclosure collapsed into a `<details>` drawer (legal still present, doesn't dominate the footer)
  - Copyright now formatted: `© 2026 TX3 Group · All rights reserved` in mono caps
- **`app/page.tsx`** — added `<EarningsCalculator defaultProgram="memo"/>` between `<TierLadder/>` and `<BonusStack/>`. All 13 original hub sections kept intact. The calculator is now ALSO on the hub (was only on the 4 deep-dive pages before).

### Architectural decisions made this session

1. **StickyHeader lives on every route via `app/layout.tsx`** — not added per-page. Anchor links use cross-page hashes (`/#problem`) so they navigate-then-scroll correctly from any non-hub page.
2. **Hero's redundant top-edge prismatic ribbon was removed** — the StickyHeader's bottom hairline provides one consistent gradient line across the whole site instead of two stacked.
3. **Calculator placement: between TierLadder and BonusStack.** Reasoning: the user has just absorbed the tier numbers, so they're primed to do the math. EARN tab visible on the calculator. `defaultProgram="memo"` highlights EDGE first (recurring revenue is the most striking demo).
4. **Footer risk disclosure became a `<details>` drawer** — legal copy is still present but doesn't add ~150px of vertical chrome to the footer; the bottom row now feels like a Linear/Stripe footer.
5. **Footer Heritage link points to `/funding-fx`** — that's where the "formerly Top Tier Trader" story lives in deep-dive copy. About / Press / Contact / Partner support all currently link to `/` or `/apply` since those routes don't exist yet (FLAGGED for user — see Section 3).
6. **Wrote this handoff to the worktree path, not the user-mentioned `/Users/agentholli/Documents/tx3-stack/HANDOFF.md`** — because the file needs to live on the `design-pass-full` branch. Once that branch merges to `main`, the file will be at the requested path automatically.

---

## 3. Work remaining

### Awaiting user review on the preview URL

The user explicitly said "give me the URL to view it before we push to live" and asked 5 review questions at the end of the prior message. Those answers will direct what (if anything) gets tweaked before the merge to main:

1. **Does the hero match what you wanted?** (`One Audience. / Three Brands. Stacked.`)
2. **Does the calculator placement (after Tiers, before Bonuses) feel right or should it move?**
3. **Is the FinalCTA layout (centered seal + "Stop monetizing one moment. / Start monetizing the whole journey.") what you wanted from screenshot 4?**
4. **Footer**: Heritage links to `/funding-fx`. About / Press / Contact / Partner support all currently link to `/` or `/apply` since those routes don't exist yet — flag if the user wants them removed entirely, pointed somewhere specific, or marked as `<a aria-disabled>` placeholders.
5. **Any sections that look off-brand against the screenshots that should be restyled?**

### Port steps NOT yet started

From my original 6-step port plan in the diff doc, these never got executed (and may not need to per Path C — Path C said "keep all sections, restyle"):

- **Deep-dive page restyling** — `components/deep-dive/{DeepDiveHero, ProgramOverview, TraderSideValue, PartnerCompensation, ToolsYouGet, ProgramFAQ, CrossLinkPrograms, DeepDiveFinalCTA}.tsx`. They already have v2 typography from earlier Wave 1–5 polish passes. The StickyHeader is now present on them via layout. They render correctly. **No further changes needed unless the user requests them.**
- **Apply page chrome restyling** — `app/apply/page.tsx` + `components/apply/{ApplyHero, ApplicationForm, SocialProofSidebar, SuccessState}.tsx`. Already have v2 typography. StickyHeader present. Form logic intact. **No changes needed unless the user requests them.**
- **EarningsCalculator wrapper restyling** — `components/shared/EarningsCalculator.tsx`. The internal layout (sliders + 3 output cards + total bar) was built before this design pass and uses fluent v2 typography from Wave 1–5. **No changes needed unless the user requests them.**

### Optional follow-ups the user might ask for

- **Consolidate the unused hub components.** Path C kept all 13 sections active. If the user later decides to drop some (e.g. `BonusStack`, `ExclusivitySection`, `FounderSection`, `RiskReversal`, `UrgencySection`), they're left intact on disk so removal is just deleting the imports from `app/page.tsx`.
- **Real routes for /about, /press, /contact, /partner-support, /privacy, /terms** — Footer links currently point to existing pages as fallbacks. None of these pages exist.
- **Visual side-by-side review.** The user may want full-page screenshot comparisons between live (`tx3-stack.vercel.app`) and preview (`tx3-stack-git-design-pass-full-...vercel.app`). Headless Chrome with full-page capture works but the page is now ~6000+ pixels tall on a normal viewport (calculator added length). Use `window-size 1400x6500` for the screenshot capture and crop into bands.

---

## 4. Key decisions LOCKED — do not re-litigate

These are decisions Jamal made earlier in this session (or sessions). They are final unless Jamal says otherwise.

### The 5 conflict decisions

1. **Keep all 13 hub sections** — Path C from the design diff. Do **not** drop `ProblemSection`, `GrandSlamOffer`, `BonusStack`, `ExclusivitySection`, `FounderSection`, `RiskReversal`, or `UrgencySection`, even though the design system V2 mockup (`ui_kits/marketing/v2/`) does. Restyle, don't remove.
2. **Hormozi-grade voice (V1 mockup), not Apple/Umbrel calm (V2 mockup).** The screenshots Jamal shared are V1 (uppercase mono nav, gold gradient Apply pill, sales-page energy). Do NOT switch to V2's sentence-case Display weight 600 + white-pill primary CTA + huge 144px hero seal aesthetic. The brand voice in `PROJECT-BRIEF.md` and `tx3-stack-design/README.md` is "Hormozi-grade trader-tech." Stick with it.
3. **FX/Futures tabs preserved on hub `ProgramCards.tsx`.** V2's `ProgramsV2` flattens FX + Futures into 2 of 4 separate table rows. We did NOT do that. The `<FundingCard/>` interactive `useState` toggle stays. Do not refactor.
4. **Conservative deep-dive restyling.** Mockups don't include deep-dive page designs. Apply existing design system tokens (already in place from Wave 1–5) but do NOT redesign deep-dive layouts on speculation.
5. **Keep the EarningsCalculator** — and now also expose it on the hub. The mockup folder doesn't include a calculator (zero references to "earnings" or "calculator" anywhere in `tx3-stack-design/`). It's a feature with no design system reference. Path C added it to the hub between TierLadder and BonusStack with `defaultProgram="memo"`.

### Corrected diff findings (don't re-investigate these)

- **The screenshots Jamal shared are V1, not V2.** Confirmed via header comparison: V1 has 5 uppercase mono links + gold pill Apply with arrow. V2 has 3 sentence-case links + white pill Apply.
- **V1 hub mockup has 7 sections + ApplyModal**: `<Header/>`, `<Hero/>`, `<Problem/>`, `<SolutionPillars/>`, `<GrandSlamOffer/>`, `<TierLadder/>`, `<FinalCTA/>`, `<Footer/>`, `<ApplyModal/>`. V1's nav also references `#faq` but V1 has no FAQ section in its index.html — that's a broken anchor in the mockup itself.
- **V2 hub mockup has 7 sections + ApplyModal**: `<HeaderV2/>`, `<HeroV2/>`, `<ThreeBrandsV2/>`, `<ProgramsV2/>`, `<TierLadderV2/>`, `<FAQv2/>`, `<FinalCTAv2/>`, `<FooterV2/>`, `<ApplyModal/>`.
- **No deep-dive page mockups exist anywhere in the design system.** Only mention is V1's `TierLadder.jsx` line 77 referencing them by name. Treat deep-dive design as "extend production using design tokens, no authoritative reference."
- **No earnings calculator in the design system.** Search confirmed: zero matches for "earning" or "calculator" across the entire `tx3-stack-design/` folder.

### Operational decisions locked

- **Vercel auto-deploys on push to `main`.** GitHub→Vercel webhook is wired (configured in Phase 5 era). Pushing main is effectively pushing live.
- **Vercel auto-creates preview deployments for every branch push.** The `design-pass-full` branch has its own preview URL with the `tx3-stack-git-design-pass-full-...` alias.
- **Worktree-based development.** Active work happens in `.claude/worktrees/jovial-dewdney-bc8314/` (currently checked out as `design-pass-full`). The main worktree at `/Users/agentholli/Documents/tx3-stack/` stays on `main` and is used only for the merge-to-main step.
- **All `[BRACKETED]` placeholders are intentional** and rendered in mono gold via `<P/>` (alias of `<Placeholder/>` from `components/shared/Placeholder.tsx`). Any span with `data-placeholder` is greppable for find-and-replace at launch. Do NOT replace these with real values during this design pass — that's a separate launch-prep task.
- **Earnings Calculator math constants are dev temporary.** `MEMO_PRICE = 97`, `AVG_LOTS_PER_TRADER = 8`, `FX_CHALLENGE_PRICE = 199`, `FX_COMMISSION = 0.15`, `FUTURES_CHALLENGE_PRICE = 149`, `FUTURES_COMMISSION = 0.12`. The displayed math uses these so the calculator works visibly today, but the customer-facing sub-lines render the placeholder tokens (`[MEMO PRICE: $TBD]` etc.) so they're swap-ready at launch.
- **Vercel CLI is authed as `hollingsworthagent-6115`.** No re-auth needed in fresh session unless `~/Library/Application Support/com.vercel.cli/auth.json` is empty (check with `wc -c`; if 3 bytes = `{}` only, run `npx vercel@latest login` with browser device-code flow).

---

## 5. Next immediate step

**Wait for Jamal's review of the preview URL.** Specifically:

- Open https://tx3-stack-git-design-pass-full-jamal-hollingsworths-projects.vercel.app
- Compare against the 4 screenshots Jamal shared (Hero / Problem+Solution / GrandSlam+Tiers / FinalCTA+Footer)
- Get answers to the 5 review questions in Section 3

**Two paths from here:**

1. **If Jamal approves the preview as-is** → fast-forward merge to main and push:
   ```bash
   git -C /Users/agentholli/Documents/tx3-stack merge --ff-only design-pass-full
   git -C /Users/agentholli/Documents/tx3-stack push origin main
   ```
   Vercel auto-deploys. Live site flips to the new design within ~30s.

2. **If Jamal wants tweaks** → make them on the `design-pass-full` branch (worktree), commit, push to `origin/design-pass-full`. Vercel updates the preview URL automatically. Repeat until approved.

**Do NOT push to main without Jamal's explicit approval.** The user said: *"Do not push to main. The live site stays untouched until I review the branch and explicitly approve the merge."*

---

## 6. Risks / gotchas

### Files that must NOT be touched casually

- **`components/shared/EarningsCalculator.tsx`** — 505 LOC, fully functional, includes all dev-temporary math constants. Touching this risks breaking the live calculator on the deep-dive pages AND the new hub placement. Wrapper restyling could be done cautiously but the slider math is settled.
- **`components/apply/ApplicationForm.tsx`** — 891 LOC, the 3-step wizard with framer-motion, useSearchParams + Suspense boundary, validation per step. Touch ONLY the visual chrome (input border, button styling) if needed. Do NOT touch the state machine, the URL param parsing (`parseProgramParam` from `lib/applyData.ts`), or the submit handler.
- **`lib/applyData.ts`** — country list (~110 entries), phone codes, platform options, audience-size buckets, hear-about options, PROGRAM_OPTIONS. Settled.
- **`lib/analytics.ts`** — `trackEvent()` shim, console.log placeholder for real SDK swap. Don't change the signature.
- **`components/shared/Placeholder.tsx`** — single source of truth for `<P/>` and `<Placeholder/>` exports. Used everywhere via `import { P } from "@/components/shared/Placeholder"`. Don't fork.

### Functionality that MUST be preserved

- ✅ Apply form 3-step wizard with framer-motion transitions
- ✅ `?program=memo|markets|funding-fx|funding-futures|all` URL pre-select on `/apply`
- ✅ Earnings Calculator live sliders + math + FX/Futures tab on EARN card (works on hub AND on all 4 deep-dive pages)
- ✅ Hub → deep-dive routing (`/markets`, `/funding-fx`, `/funding-futures`, `/memo`)
- ✅ FX/Futures tab on hub `ProgramCards.tsx` `<FundingCard/>`
- ✅ Cross-links between deep-dive pages (`<CrossLinkPrograms/>` on each)
- ✅ Footer Programs section linking to all 4 deep-dives
- ✅ Mobile responsive (StickyHeader has hamburger drawer, all sections use responsive grids)

### Things that might surprise the next session

- **The dev server may not be running.** It was on `localhost:3000` during this session. Restart with `npm run dev` from the worktree if needed. `node_modules` should still be installed; if not, `npm install` first.
- **Two `package-lock.json` files exist** (one in `/Users/agentholli/Documents/tx3-stack/` and one in the worktree). This generates a Next.js dev-mode warning about workspace root inference. Harmless. Don't try to "fix" it — it's a worktree thing.
- **The headless Chrome screenshot trick** I've been using (`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --headless=new --screenshot=...`) struggles with hash-anchor scrolling — the URL is loaded but headless mode doesn't reliably scroll to the anchor before screenshot. Working around this required tall window-size + sectional cropping with `sips`.
- **The `<details>` Risk Disclosure in the new Footer** is collapsed by default. If Jamal wants the disclaimer to stay always-visible for legal compliance reasons, swap `<details>` for a plain `<div>`.
- **The `t-eyebrow` class color is `var(--fg-muted)` (gray) by default.** When you want gold or off-white eyebrows (e.g. on a dark gold-tinted card), append `text-tx3-gold` or `text-tx3-off-white/80` after `t-eyebrow`. Tailwind utilities (in `@layer utilities`) win over `.t-eyebrow` (in `@layer components`). This pattern is used throughout the codebase.
- **`scroll-padding-top: 80px`** was newly added to `html` in `app/globals.css`. If the StickyHeader height ever changes, update this number to match (header height + ~16px breathing room).
- **`design-pass-full` branch ahead of main by 1 commit** (`f2bc859`). Fast-forward merge possible. No conflicts expected.

### Things to know about the design system folder

Location: `/Users/agentholli/Downloads/` (the `TX3 Stack Design System.zip` was extracted there directly — files at top level, not in a parent folder). Key paths:

```
/Users/agentholli/Downloads/SKILL.md
/Users/agentholli/Downloads/README.md
/Users/agentholli/Downloads/colors_and_type.css
/Users/agentholli/Downloads/preview/  (20 component preview HTML files)
/Users/agentholli/Downloads/ui_kits/marketing/         (V1 mockup — what we're matching)
/Users/agentholli/Downloads/ui_kits/marketing/v2/      (V2 mockup — Apple/Umbrel calm restyle, NOT what we picked)
/Users/agentholli/Downloads/assets/logos/              (mirror of /public/logos in the project)
/Users/agentholli/Downloads/screenshots/               (4 logo-asset comparison images — not page mockups)
```

If a fresh session needs to re-read the design system, **read V1 first** (Path C is V1-aligned), specifically:
- `ui_kits/marketing/index.html` — assembled hub
- `ui_kits/marketing/Header.jsx` — what StickyHeader is modeled after
- `ui_kits/marketing/Hero.jsx` — what the new H1 is from
- `ui_kits/marketing/FinalCTA.jsx` — reference for FinalCTA structure (though screenshot 4 is the actual spec)
- `ui_kits/marketing/components.jsx` — primitives reference

---

## Quick-reference command card

```bash
# Where I am
cd /Users/agentholli/Documents/tx3-stack/.claude/worktrees/jovial-dewdney-bc8314

# Current branch + commit
git status && git log --oneline -3

# Run the local preview
npm run dev   # serves on http://localhost:3000

# Smoke-test all routes locally
for r in "/" "/apply" "/markets" "/funding-fx" "/funding-futures" "/memo"; do
  printf "%-22s → " "$r"; curl -sS -o /dev/null -w "HTTP %{http_code}\n" "http://localhost:3000$r"
done

# Test the Vercel preview
curl -sS -o /dev/null -w "%{http_code}\n" https://tx3-stack-git-design-pass-full-jamal-hollingsworths-projects.vercel.app/

# When Jamal approves: merge to main + push (triggers production deploy)
git -C /Users/agentholli/Documents/tx3-stack merge --ff-only design-pass-full
git -C /Users/agentholli/Documents/tx3-stack push origin main

# Vercel deploy status
npx --yes vercel@latest ls --cwd /Users/agentholli/Documents/tx3-stack | head -7
```

---

**End of handoff. The branch is in good shape. Fresh session: read this top to bottom, then ask Jamal where they are in their review.**
