/**
 * Analytics shim.
 *
 * For Phase 6 we just console.log every event — the structure is built so
 * a real SDK (Segment, GA4, PostHog, ...) can be swapped in later by
 * replacing the body of `trackEvent` without touching call sites.
 */
export function trackEvent(
  name: string,
  payload?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line no-console
  console.log(`[analytics] ${name}`, payload ?? {});
}
