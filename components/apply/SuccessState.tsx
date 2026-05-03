"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import { P } from "@/components/shared/Placeholder";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";

const NEXT_STEPS = [
  {
    n: "01",
    title: "We review",
    body: (
      <>
        Within <P>[REVIEW TIMEFRAME: TBD]</P> business days.
      </>
    ),
  },
  {
    n: "02",
    title: "Discovery call",
    body: "Quick intro with the partnerships team.",
  },
  {
    n: "03",
    title: "Onboarding + start earning",
    body: "Dashboard access, creative pack, your first dollar.",
  },
];

export function SuccessState() {
  return (
    <div className="rounded-2xl border border-tx3-gold/25 bg-tx3-charcoal p-8 text-center md:p-12">
      <PrismaticRibbon thickness="thin" className="mx-auto mb-8 max-w-32" />

      {/* Animated gold checkmark with glow pulse */}
      <div className="relative mx-auto mb-6 flex size-24 items-center justify-center">
        <motion.span
          className="absolute inset-0 rounded-full bg-tx3-gold/20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="relative flex size-24 items-center justify-center rounded-full border-2 border-tx3-gold/60 bg-tx3-gold/10 shadow-[0_0_40px_rgba(255,184,31,0.4)]"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 16 }}
        >
          <Check className="size-12 text-tx3-gold" strokeWidth={3} />
        </motion.div>
      </div>

      <h2 className="font-display text-3xl font-extrabold tracking-tight text-tx3-white md:text-4xl">
        Application{" "}
        <span className="text-gold-gradient">
          received.
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-tx3-off-white/85 md:text-lg">
        We've got it. The TX3 Stack partnerships team will review your
        application and reach out within{" "}
        <P>[REVIEW TIMEFRAME: TBD]</P> business days.
      </p>

      {/* Simplified next-steps timeline */}
      <ol className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
        {NEXT_STEPS.map((step) => (
          <li
            key={step.n}
            className="rounded-xl border border-tx3-border bg-tx3-near-black p-4"
          >
            <div className="mb-2 t-eyebrow text-tx3-gold">
              {step.n}
            </div>
            <div className="font-display text-sm font-semibold text-tx3-white">
              {step.title}
            </div>
            <div className="mt-1 text-xs text-tx3-off-white/70">
              {step.body}
            </div>
          </li>
        ))}
      </ol>

      {/* CTA + email contact */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <CTAButton variant="primary" size="lg" href="/">
          Back to TX3 Stack Home →
        </CTAButton>
        <p className="t-eyebrow">
          Have questions? Email <P>[PARTNER EMAIL: TBD]</P>
        </p>
      </div>
    </div>
  );
}
