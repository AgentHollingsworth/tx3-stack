import { cn } from "@/lib/utils";

type Thickness = "hairline" | "thin" | "medium" | "thick";

const thicknessClass: Record<Thickness, string> = {
  hairline: "h-px",
  thin: "h-0.5",
  medium: "h-1",
  thick: "h-2",
};

type PrismaticRibbonProps = {
  thickness?: Thickness;
  className?: string;
  /** Soften the gradient with reduced opacity. */
  subtle?: boolean;
};

/**
 * The TX3 Group visual signature — a thin prismatic gradient line.
 * Use as section divider, hero accent, or CTA underline.
 */
export function PrismaticRibbon({
  thickness = "medium",
  className,
  subtle = false,
}: PrismaticRibbonProps) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn(
        "w-full bg-stack-gradient",
        thicknessClass[thickness],
        subtle && "opacity-60",
        className,
      )}
    />
  );
}
