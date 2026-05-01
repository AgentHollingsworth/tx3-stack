"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Loader2 } from "lucide-react";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { CTAButton } from "@/components/shared/CTAButton";
import { SuccessState } from "@/components/apply/SuccessState";
import {
  AUDIENCE_SIZES,
  COUNTRIES,
  HEAR_ABOUT_OPTIONS,
  PHONE_CODES,
  PLATFORMS,
  PROGRAM_OPTIONS,
  parseProgramParam,
  type ProgramKey,
} from "@/lib/applyData";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

// ---- Form data ---------------------------------------------------------

type FormData = {
  // Step 1
  fullName: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  country: string;
  role: string;
  platform: string;
  platformOther: string;
  audienceSize: string;
  // Step 2
  programs: ProgramKey[];
  whyTx3: string;
  // Step 3
  primaryUrl: string;
  secondaryUrl: string;
  tertiaryUrl: string;
  existingPrograms: string;
  hearAbout: string;
  hearAboutReferrer: string;
  agreeAccurate: boolean;
  agreeTerms: boolean;
  agreeApproval: boolean;
  agreeContact: boolean;
};

const EMPTY: FormData = {
  fullName: "",
  email: "",
  phoneCode: "+1",
  phoneNumber: "",
  country: "",
  role: "",
  platform: "",
  platformOther: "",
  audienceSize: "",
  programs: [],
  whyTx3: "",
  primaryUrl: "",
  secondaryUrl: "",
  tertiaryUrl: "",
  existingPrograms: "",
  hearAbout: "",
  hearAboutReferrer: "",
  agreeAccurate: false,
  agreeTerms: false,
  agreeApproval: false,
  agreeContact: false,
};

// ---- Helpers -----------------------------------------------------------

function P({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-tx3-gold/95">{children}</span>;
}

const isValidEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

// ---- Styled inputs (custom; not shadcn — those use light theme tokens) -

const inputCls =
  "w-full rounded-lg border border-tx3-border bg-tx3-near-black px-4 py-2.5 text-sm text-tx3-white transition-colors placeholder:text-tx3-muted/70 focus:border-tx3-gold/50 focus:outline-none focus:ring-2 focus:ring-tx3-gold/30 disabled:opacity-50";

function Field({
  label,
  required,
  hint,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: React.ReactNode;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-tx3-muted uppercase"
      >
        {label}
        {required && <span className="text-tx3-gold">*</span>}
      </label>
      {children}
      {hint && <div className="mt-1.5 text-xs text-tx3-muted">{hint}</div>}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props;
  return <input className={cn(inputCls, className)} {...rest} />;
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const { className, children, ...rest } = props;
  return (
    <div className="relative">
      <select
        className={cn(inputCls, "appearance-none pr-10 cursor-pointer", className)}
        {...rest}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-tx3-muted"
      />
    </div>
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { className, ...rest } = props;
  return (
    <textarea
      className={cn(inputCls, "resize-y leading-relaxed", className)}
      {...rest}
    />
  );
}

function CheckboxRow({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-tx3-border bg-tx3-near-black/60 p-3 transition-colors hover:border-tx3-muted/40">
      <span
        className={cn(
          "relative mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors",
          checked
            ? "border-tx3-gold bg-tx3-gold"
            : "border-tx3-border bg-tx3-near-black",
        )}
      >
        {checked && (
          <Check className="size-3 text-tx3-black" strokeWidth={3} />
        )}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="flex-1 text-sm text-tx3-off-white/85">{children}</span>
    </label>
  );
}

// ---- Progress indicator ------------------------------------------------

function Progress({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-2" aria-label={`Step ${step} of 3`}>
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={cn(
            "size-2 rounded-full transition-colors",
            n <= step ? "bg-tx3-gold" : "bg-tx3-border",
          )}
        />
      ))}
    </div>
  );
}

function StepHeader({ step, title }: { step: 1 | 2 | 3; title: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div>
        <div className="mb-1 font-mono text-[10px] tracking-widest text-tx3-gold uppercase">
          Step {step} of 3
        </div>
        <h2 className="font-display text-2xl font-bold text-tx3-white md:text-3xl">
          {title}
        </h2>
      </div>
      <Progress step={step} />
    </div>
  );
}

// ---- Step 1 ------------------------------------------------------------

function Step1({
  data,
  update,
  onContinue,
}: {
  data: FormData;
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
  onContinue: () => void;
}) {
  const valid = useMemo(() => {
    const platformOK =
      data.platform.length > 0 &&
      (data.platform !== "other" || data.platformOther.trim().length > 0);
    return (
      data.fullName.trim().length > 0 &&
      isValidEmail(data.email) &&
      data.phoneCode.length > 0 &&
      data.phoneNumber.trim().length >= 4 &&
      data.country.length > 0 &&
      data.role.trim().length > 0 &&
      platformOK &&
      data.audienceSize.length > 0
    );
  }, [data]);

  return (
    <div>
      <StepHeader step={1} title="About You" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <Field label="Full Name" required htmlFor="fullName">
            <Input
              id="fullName"
              type="text"
              value={data.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              placeholder="Your full name"
              autoComplete="name"
            />
          </Field>
        </div>

        <Field label="Email Address" required htmlFor="email">
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@domain.com"
            autoComplete="email"
          />
        </Field>

        <Field label="Phone" required htmlFor="phone">
          <div className="flex gap-2">
            <Select
              value={data.phoneCode}
              onChange={(e) => update("phoneCode", e.target.value)}
              className="w-32 shrink-0"
              aria-label="Country code"
            >
              {PHONE_CODES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </Select>
            <Input
              id="phone"
              type="tel"
              value={data.phoneNumber}
              onChange={(e) => update("phoneNumber", e.target.value)}
              placeholder="555 123 4567"
              autoComplete="tel"
            />
          </div>
        </Field>

        <Field label="Country of Residence" required htmlFor="country">
          <Select
            id="country"
            value={data.country}
            onChange={(e) => update("country", e.target.value)}
          >
            <option value="" disabled>
              Select your country
            </option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Your Role / Title" required htmlFor="role">
          <Input
            id="role"
            type="text"
            value={data.role}
            onChange={(e) => update("role", e.target.value)}
            placeholder="e.g. YouTuber, Trader, Educator, Community Leader"
          />
        </Field>

        <Field label="Primary Audience Platform" required htmlFor="platform">
          <Select
            id="platform"
            value={data.platform}
            onChange={(e) => update("platform", e.target.value)}
          >
            <option value="" disabled>
              Where does your audience live?
            </option>
            {PLATFORMS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </Select>
        </Field>

        {data.platform === "other" && (
          <div className="md:col-span-2">
            <Field label="Tell us which platform" required htmlFor="platformOther">
              <Input
                id="platformOther"
                type="text"
                value={data.platformOther}
                onChange={(e) => update("platformOther", e.target.value)}
                placeholder="e.g. Substack, Reddit community, in-person events…"
              />
            </Field>
          </div>
        )}

        <Field
          label="Approximate Audience Size"
          required
          htmlFor="audienceSize"
        >
          <Select
            id="audienceSize"
            value={data.audienceSize}
            onChange={(e) => update("audienceSize", e.target.value)}
          >
            <option value="" disabled>
              Select audience range
            </option>
            {AUDIENCE_SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="mt-8 flex justify-end">
        <CTAButton
          variant="primary"
          size="lg"
          type="button"
          onClick={onContinue}
          disabled={!valid}
        >
          Continue to Step 2 →
        </CTAButton>
      </div>
    </div>
  );
}

// ---- Step 2 ------------------------------------------------------------

function ProgramCard({
  program,
  selected,
  onToggle,
}: {
  program: (typeof PROGRAM_OPTIONS)[number];
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      data-selected={selected}
      aria-pressed={selected}
      className={cn(
        "group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-tx3-border bg-tx3-charcoal p-5 text-left transition-all",
        program.ring,
        program.glow,
        "data-[selected=true]:ring-2",
        "hover:border-tx3-muted/40",
      )}
    >
      <div
        aria-hidden="true"
        className={cn("absolute inset-x-0 top-0 h-1", program.bar)}
      />

      {/* Selection check in top-right */}
      <span
        className={cn(
          "absolute right-4 top-4 flex size-6 items-center justify-center rounded-md border transition-all",
          selected
            ? "border-tx3-gold bg-tx3-gold"
            : "border-tx3-border bg-tx3-near-black",
        )}
        aria-hidden="true"
      >
        {selected && <Check className="size-3.5 text-tx3-black" strokeWidth={3} />}
      </span>

      <div className="mb-4 flex h-9 items-center pr-10">
        <BrandLogo
          brand={program.brand}
          variant="color"
          orientation="horizontal"
          width={program.brand === "memo" ? 130 : 110}
        />
      </div>

      <div
        className={cn(
          "mb-1 font-mono text-[10px] tracking-widest uppercase",
          program.accentText,
        )}
      >
        {program.subtitle}
      </div>
      <div className="font-display text-base font-bold text-tx3-white">
        {program.title}
      </div>
      <p className="mt-1 text-sm text-tx3-off-white/80">{program.value}</p>
    </button>
  );
}

function Step2({
  data,
  update,
  onBack,
  onContinue,
}: {
  data: FormData;
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  const allSelected = data.programs.length === PROGRAM_OPTIONS.length;
  const valid = data.programs.length > 0 && data.whyTx3.trim().length >= 50;

  const toggle = (key: ProgramKey) => {
    const next = data.programs.includes(key)
      ? data.programs.filter((k) => k !== key)
      : [...data.programs, key];
    update("programs", next);
  };

  return (
    <div>
      <StepHeader step={2} title="Programs You're Interested In" />

      <p className="mb-6 text-sm text-tx3-off-white/80">
        Select one or more.{" "}
        <strong className="font-semibold text-tx3-white">
          Most successful partners stack multiple programs.
        </strong>
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PROGRAM_OPTIONS.map((p) => (
          <ProgramCard
            key={p.key}
            program={p}
            selected={data.programs.includes(p.key)}
            onToggle={() => toggle(p.key)}
          />
        ))}
      </div>

      {/* Stack-all card */}
      <div className="mt-6 rounded-xl bg-stack-gradient p-px">
        <div className="rounded-[11px] bg-tx3-charcoal px-5 py-4">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <div className="font-mono text-[10px] tracking-widest text-tx3-gold uppercase">
                Smart move
              </div>
              <p className="mt-1 text-sm text-tx3-off-white/90 md:text-base">
                Stack all four to unlock{" "}
                <strong className="font-semibold text-tx3-white">
                  The Triple Stack Multiplier
                </strong>{" "}
                bonus.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                update(
                  "programs",
                  allSelected ? [] : PROGRAM_OPTIONS.map((p) => p.key),
                )
              }
              className="inline-flex shrink-0 items-center gap-2 rounded-md border border-tx3-gold/40 bg-tx3-gold/10 px-4 py-2 font-mono text-[11px] tracking-widest text-tx3-gold uppercase transition-colors hover:bg-tx3-gold/20"
            >
              {allSelected ? "Clear all" : "Select all programs"}
            </button>
          </div>
        </div>
      </div>

      {/* Why TX3 textarea */}
      <div className="mt-8">
        <Field
          label="Why TX3 Stack?"
          required
          htmlFor="whyTx3"
          hint={
            <>
              {data.whyTx3.trim().length}/50 minimum characters
              {data.whyTx3.trim().length >= 50 ? " ✓" : ""}
            </>
          }
        >
          <Textarea
            id="whyTx3"
            rows={5}
            value={data.whyTx3}
            onChange={(e) => update("whyTx3", e.target.value)}
            placeholder="Tell us about your audience and why TX3 Stack is the right fit. The more specific, the better."
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center">
        <CTAButton variant="ghost" size="md" type="button" onClick={onBack}>
          ← Back to Step 1
        </CTAButton>
        <CTAButton
          variant="primary"
          size="lg"
          type="button"
          onClick={onContinue}
          disabled={!valid}
        >
          Continue to Step 3 →
        </CTAButton>
      </div>
    </div>
  );
}

// ---- Step 3 ------------------------------------------------------------

function Step3({
  data,
  update,
  onBack,
  onSubmit,
  submitting,
  error,
}: {
  data: FormData;
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
  onBack: () => void;
  onSubmit: () => void;
  submitting: boolean;
  error: string | null;
}) {
  const valid = useMemo(() => {
    const hearOK =
      data.hearAbout.length > 0 &&
      (data.hearAbout !== "referred" ||
        data.hearAboutReferrer.trim().length > 0);
    return (
      data.primaryUrl.trim().length > 0 &&
      hearOK &&
      data.agreeAccurate &&
      data.agreeTerms &&
      data.agreeApproval &&
      data.agreeContact
    );
  }, [data]);

  return (
    <div>
      <StepHeader step={3} title="Verification & Agreement" />

      <div className="grid grid-cols-1 gap-5">
        <Field label="Primary Audience URL / Handle" required htmlFor="primaryUrl">
          <Input
            id="primaryUrl"
            type="text"
            value={data.primaryUrl}
            onChange={(e) => update("primaryUrl", e.target.value)}
            placeholder="https://youtube.com/@yourchannel or @yourhandle"
          />
        </Field>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field
            label="Secondary Audience URL / Handle"
            htmlFor="secondaryUrl"
            hint="Optional"
          >
            <Input
              id="secondaryUrl"
              type="text"
              value={data.secondaryUrl}
              onChange={(e) => update("secondaryUrl", e.target.value)}
            />
          </Field>
          <Field
            label="Tertiary Audience URL / Handle"
            htmlFor="tertiaryUrl"
            hint="Optional"
          >
            <Input
              id="tertiaryUrl"
              type="text"
              value={data.tertiaryUrl}
              onChange={(e) => update("tertiaryUrl", e.target.value)}
            />
          </Field>
        </div>

        <Field
          label="Existing Affiliate Programs You Promote"
          htmlFor="existingPrograms"
          hint="Optional"
        >
          <Textarea
            id="existingPrograms"
            rows={3}
            value={data.existingPrograms}
            onChange={(e) => update("existingPrograms", e.target.value)}
            placeholder="List any current trading-related affiliate programs you promote"
          />
        </Field>

        <Field label="How did you hear about TX3 Stack?" required htmlFor="hearAbout">
          <Select
            id="hearAbout"
            value={data.hearAbout}
            onChange={(e) => update("hearAbout", e.target.value)}
          >
            <option value="" disabled>
              Select…
            </option>
            {HEAR_ABOUT_OPTIONS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </Select>
        </Field>

        {data.hearAbout === "referred" && (
          <Field
            label="Who referred you?"
            required
            htmlFor="hearAboutReferrer"
          >
            <Input
              id="hearAboutReferrer"
              type="text"
              value={data.hearAboutReferrer}
              onChange={(e) => update("hearAboutReferrer", e.target.value)}
              placeholder="Partner name or handle"
            />
          </Field>
        )}
      </div>

      {/* Agreement checkboxes */}
      <div className="mt-8 space-y-3">
        <CheckboxRow
          checked={data.agreeAccurate}
          onChange={(b) => update("agreeAccurate", b)}
        >
          I confirm all information provided is accurate.
        </CheckboxRow>
        <CheckboxRow
          checked={data.agreeTerms}
          onChange={(b) => update("agreeTerms", b)}
        >
          I have read and agree to the{" "}
          <P>[Partner Terms &amp; Conditions: TBD link]</P>.
        </CheckboxRow>
        <CheckboxRow
          checked={data.agreeApproval}
          onChange={(b) => update("agreeApproval", b)}
        >
          I understand that approval is at TX3 Stack's discretion.
        </CheckboxRow>
        <CheckboxRow
          checked={data.agreeContact}
          onChange={(b) => update("agreeContact", b)}
        >
          I consent to TX3 Stack contacting me regarding my application.
        </CheckboxRow>
      </div>

      {error && (
        <div className="mt-6 rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
          {error}
        </div>
      )}

      <div className="mt-8 flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center">
        <CTAButton
          variant="ghost"
          size="md"
          type="button"
          onClick={onBack}
          disabled={submitting}
        >
          ← Back to Step 2
        </CTAButton>
        <button
          type="button"
          onClick={onSubmit}
          disabled={!valid || submitting}
          className={cn(
            "relative inline-flex items-center justify-center gap-2 rounded-xl px-10 py-3.5 font-display text-lg font-semibold tracking-tight transition-all",
            "bg-stack-gradient text-tx3-black hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(255,184,31,0.45)]",
            "disabled:pointer-events-none disabled:opacity-50",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tx3-gold focus-visible:ring-offset-2 focus-visible:ring-offset-tx3-near-black",
          )}
        >
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Submitting…
            </>
          ) : (
            <>Submit Application →</>
          )}
        </button>
      </div>
    </div>
  );
}

// ---- Form root ---------------------------------------------------------

export function ApplicationForm() {
  const searchParams = useSearchParams();
  const programParam = searchParams.get("program");

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<FormData>(() => ({
    ...EMPTY,
    programs: parseProgramParam(programParam),
  }));
  const containerRef = useRef<HTMLDivElement>(null);

  // Page-view event (fires once on mount)
  useEffect(() => {
    trackEvent("apply_page_viewed", { program: programParam ?? null });
  }, [programParam]);

  // Scroll the form into view on step change so the user always sees the
  // top of the new step instead of the bottom of the previous one.
  useEffect(() => {
    if (containerRef.current && step !== 1) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [step]);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
  };

  const goStep1 = () => setStep(1);
  const goStep2 = () => {
    trackEvent("apply_step_1_complete");
    setStep(2);
  };
  const goStep3 = () => {
    trackEvent("apply_step_2_complete", { programs: data.programs });
    setStep(3);
  };

  const onSubmit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      // POST to webhook stub. At launch swap "[WEBHOOK URL: TBD]" for the
      // real Zapier / Make.com / serverless endpoint.
      // eslint-disable-next-line no-console
      console.log("[apply] submit payload:", {
        webhookUrl: "[WEBHOOK URL: TBD]",
        ...data,
      });

      // Simulated network latency until the real webhook is wired.
      await new Promise((resolve) => setTimeout(resolve, 1500));

      trackEvent("apply_submitted", {
        programs: data.programs,
        audienceSize: data.audienceSize,
        platform: data.platform,
      });
      setSubmitted(true);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      setError(
        "Something went wrong submitting your application. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div ref={containerRef}>
        <SuccessState />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="rounded-2xl border border-tx3-border bg-tx3-charcoal p-6 md:p-10"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {step === 1 && (
            <Step1 data={data} update={update} onContinue={goStep2} />
          )}
          {step === 2 && (
            <Step2
              data={data}
              update={update}
              onBack={goStep1}
              onContinue={goStep3}
            />
          )}
          {step === 3 && (
            <Step3
              data={data}
              update={update}
              onBack={() => setStep(2)}
              onSubmit={onSubmit}
              submitting={submitting}
              error={error}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
