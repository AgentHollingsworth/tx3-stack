import { Eye, MessagesSquare, Trophy } from "lucide-react";
import { PartnerSeal } from "@/components/shared/PartnerSeal";
import { PrismaticRibbon } from "@/components/shared/PrismaticRibbon";
import { P } from "@/components/shared/Placeholder";

type SmallTile = {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
};

const TILES: SmallTile[] = [
  {
    icon: <MessagesSquare className="size-5" strokeWidth={1.75} />,
    title: "Private Partner Community",
    body: (
      <>
        Direct access to founders Quillan, Anthony, and the operations team.{" "}
        <P>[PLATFORM: TBD — Slack | Discord]</P>
      </>
    ),
  },
  {
    icon: <Trophy className="size-5" strokeWidth={1.75} />,
    title: "Leaderboard & Recognition",
    body: (
      <>
        Quarterly leaderboards. Featured partner spotlights. Monthly winner
        announcements.
      </>
    ),
  },
  {
    icon: <Eye className="size-5" strokeWidth={1.75} />,
    title: "First Look Access",
    body: (
      <>
        Early access to product launches, new challenges, and creative assets
        before they go public.
      </>
    ),
  },
];

/**
 * Hub page — Exclusivity & Status (Section 7.8).
 * The seal is the hero of this section. Three smaller tiles underneath cover
 * the community, leaderboard, and first-look perks.
 */
export function ExclusivitySection() {
  return (
    <section
      id="exclusivity"
      className="relative bg-tx3-near-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="mb-3 t-eyebrow">
            Status & Exclusivity
          </div>
          <h2 className="h-section">
            This isn't a generic{" "}
            <span className="text-gold-gradient">
              affiliate program.
            </span>
          </h2>
          <PrismaticRibbon thickness="thin" className="mt-6 max-w-32" />
        </div>

        {/* Featured: Official Partner Seal */}
        <div className="relative overflow-hidden rounded-2xl border border-tx3-gold/25 bg-tx3-charcoal p-8 shadow-[0_0_60px_rgba(255,184,31,0.10)] md:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,184,31,0.10),transparent_60%)]"
          />
          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
            <div className="flex justify-center">
              <PartnerSeal variant="gold" size="xl" glow />
            </div>
            <div>
              <div className="mb-2 t-eyebrow text-tx3-gold">
                The Official Partner Seal
              </div>
              <h3 className="h-card mb-4">
                Wear the proof.
              </h3>
              <p className="t-lead">
                Display the gold TX3 Partner Seal on your site, your social
                bios, your YouTube channel. Approved partners only — issued
                once you're inside the stack.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-tx3-border bg-tx3-near-black px-3 py-1">
                <span className="size-1.5 rounded-full bg-tx3-gold shadow-[0_0_10px_rgba(255,184,31,0.8)]" />
                <span className="t-eyebrow text-tx3-off-white/80">
                  Approved partners only
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Three smaller tiles */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TILES.map((tile) => (
            <div
              key={tile.title}
              className="flex flex-col rounded-2xl border border-tx3-border bg-tx3-charcoal p-6 transition-colors hover:border-tx3-muted/40"
            >
              <span className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-tx3-near-black ring-1 ring-inset ring-tx3-border text-tx3-gold">
                {tile.icon}
              </span>
              <h4 className="mb-2 font-display text-lg font-bold text-tx3-white">
                {tile.title}
              </h4>
              <p className="t-small">{tile.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
