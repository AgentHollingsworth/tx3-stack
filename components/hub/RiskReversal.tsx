import {
  CalendarClock,
  Eye,
  Link2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";

type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const PILLARS: Pillar[] = [
  {
    icon: CalendarClock,
    title: "On-time payouts",
    body: "Monthly minimum, weekly at top tiers. No exceptions.",
  },
  {
    icon: Eye,
    title: "Transparent reporting",
    body: "Real-time dashboard. See every click, every conversion, every dollar.",
  },
  {
    icon: Link2,
    title: "No link suppression",
    body: "We don't shadow-ban affiliate traffic. Your links work.",
  },
  {
    icon: ShieldCheck,
    title: "Approval guarantee",
    body: "Apply with a real audience and a real plan, and you're approved within 1–3 business days.",
  },
];

/**
 * Hub page — Risk Reversal (Section 7.10).
 * Four trust pillars in a row addressing the silent objections affiliates
 * have built up from being burned by other programs.
 */
export function RiskReversal() {
  return (
    <section
      id="risk-reversal"
      className="relative bg-tx3-near-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="mb-3 t-eyebrow">
            Risk Reversal
          </div>
          <h2 className="h-section">
            Why TX3 Group pays out{" "}
            <span className="text-gold-gradient">
              when others don't.
            </span>
          </h2>
          <PrismaticRibbon thickness="thin" className="mt-6 max-w-32" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-tx3-border bg-tx3-charcoal p-6 transition-colors hover:border-tx3-gold/30"
            >
              <span className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-tx3-near-black ring-1 ring-inset ring-tx3-border text-tx3-gold">
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mb-2 font-display text-lg font-bold text-tx3-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-tx3-off-white/80">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
