import Link from "next/link";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";

type LinkGroup = {
  heading: string;
  links: { label: string; href: string }[];
};

const LINK_GROUPS: LinkGroup[] = [
  {
    heading: "Programs",
    links: [
      { label: "TX3 Markets", href: "/markets" },
      { label: "TX3 Funding FX", href: "/funding-fx" },
      { label: "TX3 Funding Futures", href: "/funding-futures" },
      { label: "Market Memo", href: "/memo" },
    ],
  },
  {
    heading: "Partners",
    links: [
      { label: "Apply", href: "/apply" },
      { label: "FAQ", href: "/#faq" },
      { label: "Tier ladder", href: "/#tiers" },
      { label: "Partner support", href: "/apply" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/" },
      { label: "Heritage · Top Tier Trader", href: "/funding-fx" },
      { label: "Press", href: "/" },
      { label: "Contact", href: "/apply" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-tx3-near-black">
      <PrismaticRibbon thickness="thin" subtle />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        {/* Top: parent brand + tagline + link columns */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_2fr]">
          {/* Brand block */}
          <div>
            <Link href="/" aria-label="TX3 Group home" className="inline-block">
              <span className="font-display text-2xl font-extrabold tracking-tight whitespace-nowrap text-tx3-white">
                TX3 Group
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-tx3-muted">
              The elite affiliate program for the trading industry. One
              audience, three brands, four programs.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {LINK_GROUPS.map((group) => (
              <div key={group.heading}>
                <div className="mb-4 t-eyebrow">
                  {group.heading}
                </div>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-tx3-off-white/80 transition-colors hover:text-tx3-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Risk disclaimer (collapsed-summary inline) */}
        <details className="mt-12 border-t border-tx3-border pt-8 text-tx3-muted">
          <summary className="cursor-pointer t-eyebrow text-tx3-muted hover:text-tx3-off-white">
            Risk Disclosure
          </summary>
          <p className="mt-3 max-w-4xl text-xs leading-relaxed text-tx3-muted">
            Trading foreign exchange, futures, and other leveraged products
            involves substantial risk of loss and is not suitable for every
            investor. The valuation of any instrument may fluctuate, and as a
            result, you may lose more than your original investment. Past
            performance is not indicative of future results. You should
            carefully consider your investment objectives, level of experience,
            and risk appetite before participating. The TX3 Group affiliate
            program advertises trading-related products and services; nothing
            on this site constitutes investment advice.
          </p>
        </details>

        {/* Bottom row — brand logos + copyright (matches the design system mockup) */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-tx3-border pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 opacity-60">
            <BrandLogo
              brand="memo"
              variant="color"
              orientation="horizontal"
              width={110}
            />
            <BrandLogo brand="markets" variant="color" width={50} />
            <BrandLogo
              brand="funding"
              variant="color"
              orientation="horizontal"
              width={110}
            />
          </div>
          <div className="t-eyebrow">
            © {new Date().getFullYear()} TX3 Group · All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
