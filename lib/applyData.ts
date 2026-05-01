/**
 * Static data for the /apply application form.
 * Country list, phone codes, platform / audience-size / hear-about options,
 * and the program-card definitions.
 */

export const COUNTRIES: string[] = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "New Zealand",
  "Ireland",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Portugal",
  "Netherlands",
  "Belgium",
  "Luxembourg",
  "Switzerland",
  "Austria",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Iceland",
  "Poland",
  "Czech Republic",
  "Slovakia",
  "Hungary",
  "Romania",
  "Bulgaria",
  "Greece",
  "Cyprus",
  "Malta",
  "Slovenia",
  "Croatia",
  "Serbia",
  "Bosnia and Herzegovina",
  "Albania",
  "North Macedonia",
  "Estonia",
  "Latvia",
  "Lithuania",
  "Ukraine",
  "Moldova",
  "Russia",
  "Belarus",
  "Turkey",
  "Israel",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Jordan",
  "Lebanon",
  "Egypt",
  "Morocco",
  "Tunisia",
  "Algeria",
  "South Africa",
  "Nigeria",
  "Kenya",
  "Ghana",
  "Tanzania",
  "Uganda",
  "Ethiopia",
  "Senegal",
  "Côte d'Ivoire",
  "Mauritius",
  "India",
  "Pakistan",
  "Bangladesh",
  "Sri Lanka",
  "Nepal",
  "China",
  "Japan",
  "South Korea",
  "Taiwan",
  "Hong Kong",
  "Singapore",
  "Malaysia",
  "Indonesia",
  "Thailand",
  "Vietnam",
  "Philippines",
  "Cambodia",
  "Laos",
  "Myanmar",
  "Mexico",
  "Brazil",
  "Argentina",
  "Chile",
  "Colombia",
  "Peru",
  "Venezuela",
  "Ecuador",
  "Uruguay",
  "Paraguay",
  "Bolivia",
  "Costa Rica",
  "Panama",
  "Dominican Republic",
  "Jamaica",
  "Trinidad and Tobago",
  "Bahamas",
  "Barbados",
  "Cayman Islands",
  "Bermuda",
  "Other",
];

/**
 * Common dial codes for the phone country-code dropdown. Curated
 * list — covers ~99% of partner traffic. Extend at launch.
 */
export const PHONE_CODES: { code: string; label: string }[] = [
  { code: "+1", label: "+1 (US/CA)" },
  { code: "+44", label: "+44 (UK)" },
  { code: "+61", label: "+61 (AU)" },
  { code: "+64", label: "+64 (NZ)" },
  { code: "+353", label: "+353 (IE)" },
  { code: "+49", label: "+49 (DE)" },
  { code: "+33", label: "+33 (FR)" },
  { code: "+34", label: "+34 (ES)" },
  { code: "+39", label: "+39 (IT)" },
  { code: "+351", label: "+351 (PT)" },
  { code: "+31", label: "+31 (NL)" },
  { code: "+32", label: "+32 (BE)" },
  { code: "+41", label: "+41 (CH)" },
  { code: "+43", label: "+43 (AT)" },
  { code: "+46", label: "+46 (SE)" },
  { code: "+47", label: "+47 (NO)" },
  { code: "+45", label: "+45 (DK)" },
  { code: "+358", label: "+358 (FI)" },
  { code: "+48", label: "+48 (PL)" },
  { code: "+420", label: "+420 (CZ)" },
  { code: "+30", label: "+30 (GR)" },
  { code: "+90", label: "+90 (TR)" },
  { code: "+972", label: "+972 (IL)" },
  { code: "+971", label: "+971 (AE)" },
  { code: "+966", label: "+966 (SA)" },
  { code: "+91", label: "+91 (IN)" },
  { code: "+86", label: "+86 (CN)" },
  { code: "+81", label: "+81 (JP)" },
  { code: "+82", label: "+82 (KR)" },
  { code: "+886", label: "+886 (TW)" },
  { code: "+852", label: "+852 (HK)" },
  { code: "+65", label: "+65 (SG)" },
  { code: "+60", label: "+60 (MY)" },
  { code: "+62", label: "+62 (ID)" },
  { code: "+66", label: "+66 (TH)" },
  { code: "+84", label: "+84 (VN)" },
  { code: "+63", label: "+63 (PH)" },
  { code: "+27", label: "+27 (ZA)" },
  { code: "+234", label: "+234 (NG)" },
  { code: "+254", label: "+254 (KE)" },
  { code: "+20", label: "+20 (EG)" },
  { code: "+212", label: "+212 (MA)" },
  { code: "+52", label: "+52 (MX)" },
  { code: "+55", label: "+55 (BR)" },
  { code: "+54", label: "+54 (AR)" },
  { code: "+56", label: "+56 (CL)" },
  { code: "+57", label: "+57 (CO)" },
  { code: "+51", label: "+51 (PE)" },
  { code: "+other", label: "Other" },
];

export const PLATFORMS: { id: string; label: string }[] = [
  { id: "youtube", label: "YouTube" },
  { id: "instagram", label: "Instagram" },
  { id: "tiktok", label: "TikTok" },
  { id: "twitter", label: "Twitter / X" },
  { id: "discord", label: "Discord" },
  { id: "telegram", label: "Telegram" },
  { id: "newsletter", label: "Email Newsletter" },
  { id: "podcast", label: "Podcast" },
  { id: "other", label: "Other" },
];

export const AUDIENCE_SIZES: string[] = [
  "Under 1,000",
  "1,000 – 10,000",
  "10,000 – 50,000",
  "50,000 – 100,000",
  "100,000 – 500,000",
  "500,000+",
];

export const HEAR_ABOUT_OPTIONS: { id: string; label: string }[] = [
  { id: "existing-customer", label: "Existing TX3 customer" },
  { id: "referred", label: "Referred by another partner" },
  { id: "search", label: "Found via search" },
  { id: "social", label: "Social media" },
  { id: "outreach", label: "Email outreach" },
  { id: "other", label: "Other" },
];

export type ProgramKey =
  | "markets"
  | "funding-fx"
  | "funding-futures"
  | "memo";

export type ProgramOption = {
  key: ProgramKey;
  brand: "markets" | "funding" | "memo";
  title: string;
  subtitle: string;
  /** One-line value statement. */
  value: string;
  /** Brand-colored hover/selected ring + glow. */
  ring: string;
  glow: string;
  bar: string;
  /** Brand-colored eyebrow / footer text on selected. */
  accentText: string;
};

export const PROGRAM_OPTIONS: ProgramOption[] = [
  {
    key: "markets",
    brand: "markets",
    title: "TX3 Markets",
    subtitle: "Brokerage IB",
    value: "$12/lot direct + $3/lot indirect",
    ring: "data-[selected=true]:ring-exec-gold/60 data-[selected=true]:border-exec-gold/40",
    glow: "data-[selected=true]:shadow-exec-glow",
    bar: "bg-exec-gold",
    accentText: "text-exec-gold",
  },
  {
    key: "funding-fx",
    brand: "funding",
    title: "TX3 Funding FX",
    subtitle: "Forex Prop",
    value: "Up to 20% commission, 5-tier ladder",
    ring: "data-[selected=true]:ring-earn-green/60 data-[selected=true]:border-earn-green/40",
    glow: "data-[selected=true]:shadow-earn-glow",
    bar: "bg-earn-gradient",
    accentText: "text-earn-green",
  },
  {
    key: "funding-futures",
    brand: "funding",
    title: "TX3 Funding Futures",
    subtitle: "Futures Prop · Topstep-powered",
    value: "10–15% commission per challenge",
    ring: "data-[selected=true]:ring-earn-green/60 data-[selected=true]:border-earn-green/40",
    glow: "data-[selected=true]:shadow-earn-glow",
    bar: "bg-earn-gradient",
    accentText: "text-earn-green",
  },
  {
    key: "memo",
    brand: "memo",
    title: "Market Memo",
    subtitle: "Trading Journal SaaS",
    value: "15% recurring. For life.",
    ring: "data-[selected=true]:ring-edge-teal/60 data-[selected=true]:border-edge-teal/40",
    glow: "data-[selected=true]:shadow-edge-glow",
    bar: "bg-edge-gradient",
    accentText: "text-edge-teal",
  },
];

/**
 * Map a `?program=` URL parameter to one or more selected program keys.
 * "all" pre-selects the full stack.
 */
export function parseProgramParam(
  raw: string | null | undefined,
): ProgramKey[] {
  if (!raw) return [];
  if (raw === "all") return PROGRAM_OPTIONS.map((p) => p.key);
  const valid = PROGRAM_OPTIONS.find((p) => p.key === raw);
  return valid ? [valid.key] : [];
}
