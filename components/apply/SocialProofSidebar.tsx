import {
  CalendarCheck,
  ClipboardCheck,
  PhoneCall,
  Rocket,
  Sparkles,
} from "lucide-react";
import { PartnerSeal } from "@/components/shared/PartnerSeal";
import { P } from "@/components/shared/Placeholder";
import { cn } from "@/lib/utils";

const TIMELINE = [
  {
    icon: ClipboardCheck,
    title: "Submit application",
    body: "Today.",
  },
  {
    icon: CalendarCheck,
    title: "We review",
    body: (
      <>
        Within <P>[REVIEW TIMEFRAME: TBD]</P> business days.
      </>
    ),
  },
  {
    icon: PhoneCall,
    title: "Discovery call",
    body: "With the partnerships team.",
  },
  {
    icon: Sparkles,
    title: "Onboarding",
    body: "Partner dashboard access + creative pack.",
  },
  {
    icon: Rocket,
    title: "Start earning",
    body: "Across the entire stack.",
  },
];

/**
 * Social-proof sidebar — desktop-only, sticky alongside the form.
 * Partner seal hero, stats card, testimonial, "what's next" timeline,
 * and a small trust-badges row.
 */
export function SocialProofSidebar() {
  return (
    <aside className="sticky top-8 flex flex-col gap-6">
      {/* Partner seal hero */}
      <div className="rounded-2xl border border-tx3-gold/25 bg-tx3-charcoal p-6 text-center shadow-[0_0_40px_rgba(255,184,31,0.06)]">
        <div className="flex justify-center">
          <PartnerSeal variant="gold" size="lg" glow />
        </div>
        <p className="mt-4 font-display text-base text-tx3-off-white/85 italic md:text-lg">
          The visible proof of your stack.
        </p>
      </div>

      {/* Stats card */}
      <div className="rounded-2xl border border-tx3-gold/25 bg-tx3-charcoal p-6">
        <div className="mb-4 t-eyebrow text-tx3-gold">
          By the Numbers
        </div>
        <ul className="space-y-4">
          <li className="flex items-baseline justify-between gap-4 border-b border-tx3-border pb-3">
            <span className="text-sm text-tx3-off-white/85">
              Active partners
            </span>
            <span className="font-display text-lg font-bold tabular-nums">
              <P>[PLACEHOLDER: X]+</P>
            </span>
          </li>
          <li className="flex items-baseline justify-between gap-4 border-b border-tx3-border pb-3">
            <span className="text-sm text-tx3-off-white/85">
              Paid out to partners
            </span>
            <span className="font-display text-lg font-bold tabular-nums">
              <P>[PLACEHOLDER: $X]M+</P>
            </span>
          </li>
          <li className="flex items-baseline justify-between gap-4">
            <span className="text-sm text-tx3-off-white/85">
              Trader audience reached
            </span>
            <span className="font-display text-lg font-bold tabular-nums">
              <P>[PLACEHOLDER: X]M+</P>
            </span>
          </li>
        </ul>
      </div>

      {/* Testimonial */}
      <div className="rounded-2xl border border-tx3-border bg-tx3-charcoal p-6">
        <div className="mb-3 t-eyebrow">
          From The Stack
        </div>
        <blockquote className="font-display text-base leading-relaxed text-tx3-off-white/90 italic">
          <P>"[PLACEHOLDER: Partner Quote TBD]"</P>
        </blockquote>
        <div className="mt-4 flex items-center gap-3 border-t border-tx3-border pt-4">
          <div className="flex size-10 items-center justify-center rounded-full bg-stack-gradient font-display text-sm font-bold text-tx3-black">
            ?
          </div>
          <div>
            <div className="font-display text-sm font-semibold text-tx3-white">
              <P>[PLACEHOLDER: Partner Name TBD]</P>
            </div>
            <div className="t-eyebrow">
              <P>[PLACEHOLDER: Audience]</P> ·{" "}
              <P>[PLACEHOLDER: Platform]</P>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-2xl border border-tx3-border bg-tx3-charcoal p-6">
        <div className="mb-5 t-eyebrow">
          What Happens Next
        </div>
        <ol className="space-y-4">
          {TIMELINE.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="flex items-start gap-3">
              <div className="relative flex shrink-0 flex-col items-center">
                <span
                  className={cn(
                    "flex size-8 items-center justify-center rounded-full border ring-1 ring-inset",
                    i === 0
                      ? "border-tx3-gold/50 bg-tx3-gold/10 text-tx3-gold ring-tx3-gold/20"
                      : "border-tx3-border bg-tx3-near-black text-tx3-muted ring-tx3-border",
                  )}
                >
                  <Icon className="size-3.5" strokeWidth={2} />
                </span>
                {i < TIMELINE.length - 1 && (
                  <span className="mt-1 h-6 w-px bg-tx3-border" />
                )}
              </div>
              <div className="pt-1">
                <div className="font-display text-sm font-semibold text-tx3-white">
                  {title}
                </div>
                <div className="text-xs text-tx3-off-white/70">{body}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Trust badges row */}
      <div className="rounded-2xl border border-tx3-border bg-tx3-charcoal p-5">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full border border-tx3-border bg-tx3-near-black px-2.5 py-1 font-mono text-[10px] tracking-widest text-tx3-off-white/85 uppercase">
            Formerly Top Tier Trader
          </span>
          <span className="rounded-full border border-tx3-border bg-tx3-near-black px-2.5 py-1 font-mono text-[10px] tracking-widest text-tx3-off-white/85 uppercase">
            TX3 Group
          </span>
        </div>
        <p className="text-[10px] leading-snug text-tx3-muted">
          Trading involves substantial risk. The TX3 Group affiliate program
          advertises trading-related products; nothing on this page constitutes
          investment advice.
        </p>
      </div>
    </aside>
  );
}
