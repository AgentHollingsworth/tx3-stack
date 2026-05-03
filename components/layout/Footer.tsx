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
      { label: "Hub", href: "/" },
      { label: "Apply", href: "/apply" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
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
            <Link href="/" aria-label="TX3 Stack home" className="inline-block">
              <BrandLogo brand="stack" variant="light" width={160} />
            </Link>
            <p className="mt-4 font-display text-base text-tx3-off-white/85 italic">
              Edge. Execution. Earn.
            </p>
            <p className="mt-3 max-w-sm text-sm text-tx3-muted">
              The only affiliate stack in trading that pays you three ways from
              one audience.
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

        {/* Brand row — Memo · Markets · Funding (white variants) */}
        <div className="mt-16 border-t border-tx3-border pt-10">
          <div className="mb-6 t-eyebrow">
            The Stack
          </div>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 opacity-70">
            <BrandLogo brand="memo" variant="color" orientation="horizontal" width={140} />
            <BrandLogo brand="markets" variant="light" width={70} />
            <BrandLogo
              brand="funding"
              variant="light"
              orientation="horizontal"
              width={140}
            />
          </div>
        </div>

        {/* Risk disclaimer + copyright */}
        <div className="mt-12 border-t border-tx3-border pt-8">
          <div className="mb-2 t-eyebrow">
            Risk Disclosure
          </div>
          <p className="max-w-4xl text-xs leading-relaxed text-tx3-muted">
            Trading foreign exchange, futures, and other leveraged products
            involves substantial risk of loss and is not suitable for every
            investor. The valuation of any instrument may fluctuate, and as a
            result, you may lose more than your original investment. Past
            performance is not indicative of future results. You should
            carefully consider your investment objectives, level of experience,
            and risk appetite before participating. The TX3 Stack affiliate
            program advertises trading-related products and services; nothing
            on this site constitutes investment advice.
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-2 text-xs text-tx3-muted sm:flex-row sm:items-center">
            <div>
              © {new Date().getFullYear()} TX3 Stack. All rights reserved.
            </div>
            <div className="font-mono text-[10px] tracking-widest uppercase">
              Edge. Execution. Earn.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
