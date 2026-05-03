import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import type { DeepDivePillar } from "./DeepDiveHero";
import { cn } from "@/lib/utils";

const PILLAR_ACCENT: Record<DeepDivePillar, string> = {
  edge: "text-edge-teal",
  execution: "text-exec-gold",
  earn: "text-earn-green",
};

export type ProgramQA = {
  q: string;
  a: React.ReactNode;
};

type Props = {
  pillar: DeepDivePillar;
  headline?: string;
  questions: ProgramQA[];
};

export function ProgramFAQ({
  pillar,
  headline = "Program-specific questions",
  questions,
}: Props) {
  const accent = PILLAR_ACCENT[pillar];
  return (
    <section id="program-faq" className="relative bg-tx3-near-black py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="mb-10 max-w-3xl">
          <div
            className={cn(
              "mb-3 font-mono text-xs tracking-widest uppercase",
              accent,
            )}
          >
            Frequently Asked
          </div>
          <h2 className="h-section">
            {headline}
          </h2>
          <PrismaticRibbon thickness="thin" className="mt-6 max-w-32" />
        </div>

        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-tx3-border bg-tx3-charcoal px-2 md:px-4"
        >
          {questions.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`pf-${i}`}
              className="not-last:border-b not-last:border-tx3-border"
            >
              <AccordionTrigger className="px-4 py-5 font-display text-base font-semibold text-tx3-white hover:no-underline md:text-lg [&_svg]:!text-tx3-muted">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-5 text-sm leading-relaxed text-tx3-off-white/80 md:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
