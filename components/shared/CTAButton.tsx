import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaButtonVariants = cva(
  // Base — display font, sharp edges that read as "trader-tech"
  "inline-flex items-center justify-center gap-2 rounded-xl font-display font-semibold tracking-tight whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-tx3-gold focus-visible:ring-offset-2 focus-visible:ring-offset-tx3-black disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Primary — tight gold→amber gradient (premium, money/status semantic)
        // tied to the partner seal. Full prismatic gradient is reserved for
        // the PrismaticRibbon and large dividers so it stays meaningful.
        primary:
          "relative bg-gold-gradient text-tx3-black shadow-[0_0_0_rgba(255,184,31,0)] hover:shadow-[0_0_32px_rgba(255,184,31,0.45)] hover:-translate-y-0.5 active:translate-y-0",
        // Secondary — subtle outline, white text. For "See the numbers ↓"
        // style anchor links and tertiary CTAs.
        secondary:
          "border border-tx3-border bg-tx3-charcoal/60 text-tx3-white hover:bg-tx3-charcoal hover:border-tx3-muted/40 backdrop-blur-sm",
        // Ghost — minimal, used inline (e.g. "See the full program →").
        ghost:
          "text-tx3-white/80 hover:text-tx3-white underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        xl: "h-16 px-10 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

type CTAButtonOwnProps = VariantProps<typeof ctaButtonVariants> & {
  className?: string;
  children: React.ReactNode;
};

type CTAButtonAsLink = CTAButtonOwnProps &
  Omit<React.ComponentProps<typeof Link>, "className"> & { href: string };

type CTAButtonAsButton = CTAButtonOwnProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

export type CTAButtonProps = CTAButtonAsLink | CTAButtonAsButton;

/**
 * Primary site CTA. When given an `href` it renders as a Next.js `<Link>`,
 * otherwise as a `<button>`. Use the `primary` variant (default) for the
 * conversion CTAs and `secondary` for low-emphasis anchors.
 */
export function CTAButton({
  variant,
  size,
  className,
  children,
  ...rest
}: CTAButtonProps) {
  const classes = cn(ctaButtonVariants({ variant, size }), className);

  if ("href" in rest && rest.href !== undefined) {
    return (
      <Link className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { href: _omit, ...buttonProps } =
    rest as React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

export { ctaButtonVariants };
