import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import type { Experience } from "@/lib/resume-data";

export function ImpactMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-accent pl-3 py-1">
      <p className="font-display text-2xl md:text-3xl font-semibold leading-none">{value}</p>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mt-1">{label}</p>
    </div>
  );
}

export default function ExperienceEntry({
  exp,
  featured = false,
}: {
  exp: Experience;
  featured?: boolean;
}) {
  return (
    <Reveal tag="article" className="group relative">
      <div
        className={`border border-ink/15 bg-card transition-colors hover:border-ink ${
          featured ? "border-l-4 border-l-accent" : "border-l-2 border-l-ink"
        }`}
      >
        <div className="p-5 md:p-7">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-mono text-[11px] tracking-[0.2em] text-accent font-semibold">
              {exp.index}
            </span>
            <span className="font-mono text-[11px] tracking-[0.15em] text-muted uppercase">
              {exp.dates} · {exp.location}
            </span>
          </div>
          <h3 className="mt-2 font-display text-2xl md:text-[28px] font-semibold uppercase leading-tight">
            {exp.role}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-[15px] font-medium text-ink-soft">
            {exp.org}
            {exp.link && <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden />}
          </p>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-soft">{exp.summary}</p>

          <ul className="mt-4 space-y-2 max-w-3xl">
            {exp.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-soft">
                <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {exp.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] uppercase tracking-[0.12em] border border-ink/20 px-2 py-1 text-ink-soft group-hover:border-ink/40 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          {exp.spotlight && (
            <div
              className={`mt-5 border px-4 py-3.5 flex gap-3 items-start ${
                exp.id === "avexel"
                  ? "border-accent bg-accent/[0.06]"
                  : "border-ink bg-paper-deep"
              }`}
            >
              <span aria-hidden className="mt-1 h-2 w-2 shrink-0 bg-accent" />
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-deep">
                  ★ {exp.spotlight.label}
                </p>
                <p className="mt-1 text-[15px] font-medium leading-snug text-ink">
                  {exp.spotlight.text}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
