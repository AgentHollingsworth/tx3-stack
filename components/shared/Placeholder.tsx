import { cn } from "@/lib/utils";

/**
 * Shared placeholder span for [BRACKETED] dev-only TBD tokens.
 *
 * Renders the design-system `.t-placeholder` treatment (mono font + gold
 * `--fg-placeholder` color). The value placeholders kept visible in markup
 * across the site for find-and-replace at launch all flow through this
 * component — single source of truth for how a `[TBD]` token looks.
 *
 * Two named exports:
 *   - `Placeholder` (canonical)
 *   - `P` (short alias — matches the prior per-file convention so call
 *     sites read the same: `<P>[VALUE: TBD]</P>`)
 *
 * The `data-placeholder` attribute makes it trivial to grep / scan for
 * unfinished copy at launch (`grep -r data-placeholder app components`).
 */
export function Placeholder({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      data-placeholder
      className={cn("t-placeholder", className)}
    >
      {children}
    </span>
  );
}

export { Placeholder as P };
