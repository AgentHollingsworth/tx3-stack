import { BrandLogo, type Brand } from "@/components/shared/BrandLogo";
import { CTAButton } from "@/components/shared/CTAButton";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import { cn } from "@/lib/utils";

export type DeepDivePillar = "edge" | "execution" | "earn";

const PILLAR_STYLES: Record<
  DeepDivePillar,
  { eyebrow: string; blob: string; gradient: string }
> = {
  edge: {
    eyebrow: "text-edge-teal",
    blob: "bg-edge-teal/12",
    gradient: "bg-edge-gradient",
  },
  execution: {
    eyebrow: "text-exec-gold",
    blob: "bg-exec-gold/12",
    gradient: "bg-gold-gradient",
  },
  earn: {
    eyebrow: "text-earn-green",
    blob: "bg-earn-green/12",
    gradient: "bg-earn-gradient",
  },
};

type Props = {
  pillar: DeepDivePillar;
  /** "TX3 GROUP · EXECUTION" or "TX3 GROUP · EARN · FX" etc. */
  eyebrow: string;
  brand: Brand;
  brandOrientation?: "horizontal" | "vertical";
  brandWidth?: number;
  headline: React.ReactNode;
  subhead: React.ReactNode;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function DeepDiveHero({
  pillar,
  eyebrow,
  brand,
  brandOrientation = "horizontal",
  brandWidth = 220,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
}: Props) {
  const style = PILLAR_STYLES[pillar];
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-tx3-black"
    >
      <PrismaticRibbon
        thickness="medium"
        className="absolute inset-x-0 top-0 z-10"
      />

      {/* Pillar-color ambient glow blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className={cn(
            "absolute -left-32 top-32 h-[480px] w-[480px] rounded-full blur-[140px]",
            style.blob,
          )}
        />
        <div
          className={cn(
            "absolute right-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full blur-[160px]",
            style.blob,
          )}
        />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center md:px-10 md:py-36">
        {/* Brand logo */}
        <div className="mb-8 flex h-16 items-center">
          <BrandLogo
            brand={brand}
            variant="color"
            orientation={brandOrientation}
            width={brandWidth}
          />
        </div>

        {/* Eyebrow */}
        <div
          className={cn(
            "mb-6 inline-flex items-center gap-2 rounded-full border border-tx3-border bg-tx3-charcoal/70 px-4 py-1.5 backdrop-blur-sm",
          )}
        >
          <span
            className={cn(
              "size-1.5 rounded-full",
              style.gradient,
              "shadow-[0_0_10px_rgba(255,184,31,0.6)]",
            )}
          />
          <span
            className={cn(
              "font-mono text-[11px] tracking-widest uppercase",
              style.eyebrow,
            )}
          >
            {eyebrow}
          </span>
        </div>

        {/* H1 */}
        <h1 className="h-hero">
          {headline}
        </h1>

        {/* Subhead */}
        <p className="mt-6 max-w-3xl text-lg text-tx3-off-white/80 md:text-xl">
          {subhead}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <CTAButton variant="primary" size="lg" href={primaryCta.href}>
            {primaryCta.label}
          </CTAButton>
          {secondaryCta && (
            <CTAButton variant="secondary" size="lg" href={secondaryCta.href}>
              {secondaryCta.label}
            </CTAButton>
          )}
        </div>
      </div>
    </section>
  );
}
