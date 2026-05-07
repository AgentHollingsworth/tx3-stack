import Image from "next/image";
import { cn } from "@/lib/utils";

export type Brand = "stack" | "markets" | "funding" | "memo";
export type LogoVariant = "light" | "color";
export type LogoOrientation = "vertical" | "horizontal" | "compact";

type AssetEntry = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * Asset manifest — every brand × variant × orientation combination this
 * project ships, with intrinsic dimensions for aspect-ratio-preserving render.
 *
 * Falls back gracefully to the closest available asset when a combination
 * doesn't exist (e.g. Markets has no horizontal-white, Memo is single-color).
 */
const MANIFEST: Record<
  Brand,
  Partial<Record<LogoVariant, Partial<Record<LogoOrientation, AssetEntry>>>>
> = {
  stack: {
    light: {
      vertical: {
        src: "/logos/tx3-stack-white.svg",
        width: 360,
        height: 200,
        alt: "TX3 Group",
      },
    },
    color: {
      vertical: {
        src: "/logos/tx3-stack-gradient.svg",
        width: 360,
        height: 200,
        alt: "TX3 Group",
      },
    },
  },
  markets: {
    light: {
      vertical: {
        src: "/logos/tx3-markets-white.png",
        width: 600,
        height: 600,
        alt: "TX3 Markets",
      },
    },
    color: {
      vertical: {
        src: "/logos/tx3-markets-gold.png",
        width: 600,
        height: 600,
        alt: "TX3 Markets",
      },
      horizontal: {
        src: "/logos/tx3-markets-gold-h.png",
        width: 1200,
        height: 360,
        alt: "TX3 Markets",
      },
    },
  },
  funding: {
    light: {
      vertical: {
        src: "/logos/tx3-funding-white.png",
        width: 600,
        height: 600,
        alt: "TX3 Funding",
      },
      horizontal: {
        src: "/logos/tx3-funding-white-h.png",
        width: 1200,
        height: 360,
        alt: "TX3 Funding",
      },
    },
    color: {
      vertical: {
        src: "/logos/tx3-funding-gradient.png",
        width: 600,
        height: 600,
        alt: "TX3 Funding",
      },
      horizontal: {
        src: "/logos/tx3-funding-gradient-h.png",
        width: 1200,
        height: 360,
        alt: "TX3 Funding",
      },
    },
  },
  memo: {
    color: {
      vertical: {
        src: "/logos/market-memo-mark.png",
        width: 600,
        height: 600,
        alt: "Market Memo",
      },
      horizontal: {
        src: "/logos/market-memo-h.png",
        width: 1200,
        height: 360,
        alt: "Market Memo",
      },
      compact: {
        src: "/logos/market-memo-compact.png",
        width: 600,
        height: 240,
        alt: "Market Memo",
      },
    },
  },
};

function resolveAsset(
  brand: Brand,
  variant: LogoVariant,
  orientation: LogoOrientation,
): AssetEntry {
  const byBrand = MANIFEST[brand];
  const byVariant = byBrand[variant] ?? byBrand.color ?? byBrand.light;
  if (!byVariant) {
    throw new Error(`No logo manifest entry for brand "${brand}".`);
  }
  return (
    byVariant[orientation] ??
    byVariant.horizontal ??
    byVariant.vertical ??
    byVariant.compact!
  );
}

type BrandLogoProps = {
  brand: Brand;
  /** "light" = white-on-dark, "color" = brand color / gradient. Default: "light". */
  variant?: LogoVariant;
  /** Default: "horizontal" for memo, "vertical" for everything else. */
  orientation?: LogoOrientation;
  /** Render width in px. Height auto-scales to preserve aspect ratio. Default 120. */
  width?: number;
  className?: string;
  priority?: boolean;
  alt?: string;
};

/**
 * Renders any TX3 brand logo (Stack, Markets, Funding, Memo) by name and variant.
 * Picks the best matching asset from the manifest and preserves aspect ratio.
 */
export function BrandLogo({
  brand,
  variant = "light",
  orientation,
  width = 120,
  className,
  priority = false,
  alt,
}: BrandLogoProps) {
  const resolvedOrientation: LogoOrientation =
    orientation ?? (brand === "memo" ? "horizontal" : "vertical");

  const asset = resolveAsset(brand, variant, resolvedOrientation);
  const aspect = asset.height / asset.width;
  const renderHeight = Math.round(width * aspect);

  return (
    <Image
      src={asset.src}
      alt={alt ?? asset.alt}
      width={width}
      height={renderHeight}
      priority={priority}
      className={cn("h-auto w-auto select-none", className)}
      style={{ width, height: renderHeight }}
    />
  );
}
