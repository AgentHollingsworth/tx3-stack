import Image from "next/image";
import { cn } from "@/lib/utils";

type SealVariant = "gold" | "dark";
type SealSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizePx: Record<SealSize, number> = {
  xs: 40,
  sm: 64,
  md: 96,
  lg: 160,
  xl: 240,
};

const variantSrc: Record<SealVariant, string> = {
  gold: "/logos/partner-seal-gold.png",
  dark: "/logos/partner-seal-dark.png",
};

type PartnerSealProps = {
  variant?: SealVariant;
  size?: SealSize;
  className?: string;
  /** Optional accessible label override. */
  label?: string;
  /** Show a soft gold glow behind the seal. Useful for hero contexts. */
  glow?: boolean;
  priority?: boolean;
};

/**
 * The "OFFICIAL TX3 PARTNER" gold seal — the recurring trust/aspiration mark.
 */
export function PartnerSeal({
  variant = "gold",
  size = "md",
  className,
  label = "Official TX3 Partner Seal",
  glow = false,
  priority = false,
}: PartnerSealProps) {
  const px = sizePx[size];

  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        glow && "drop-shadow-[0_0_24px_rgba(255,184,31,0.45)]",
        className,
      )}
      style={{ width: px, height: px }}
    >
      <Image
        src={variantSrc[variant]}
        alt={label}
        width={px}
        height={px}
        priority={priority}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
