import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-3 py-1 font-grotesk text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--mute)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-red)]" />
      {children}
    </span>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-[var(--brand-gold)]/20 blur-3xl" />
      <div className="absolute -bottom-20 left-0 h-96 w-96 rounded-full bg-[var(--brand-red)]/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl font-body text-lg text-[var(--mute)] md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
