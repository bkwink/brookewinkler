import Reveal from "./Reveal";
import type { Experience } from "@/lib/resume-data";

export default function ExperienceEntry({ exp }: { exp: Experience }) {
  return (
    <Reveal tag="article" className="h-full">
      <div className="h-full border border-ink/12 bg-card p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            {exp.index}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            {exp.dates} · {exp.location}
          </p>
        </div>
        <h3 className="mt-2.5 font-display text-2xl md:text-[27px] font-semibold uppercase leading-[1.02] tracking-tight text-ink">
          {exp.role}
        </h3>
        <p className="mt-1.5 text-[15px] font-medium text-ink-soft">{exp.org}</p>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
          {exp.summary}
        </p>

        <ul className="mt-4 max-w-3xl space-y-2">
          {exp.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-soft">
              <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-accent" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {exp.spotlight && (
          <div
            className={`mt-6 border border-ink/12 px-4 py-3.5 ${
              exp.id === "avexel" ? "border-l-2 border-l-accent bg-accent/[0.05]" : "border-l-2 border-l-ink bg-paper"
            }`}
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-deep">
              {exp.spotlight.label}
            </p>
            <p className="mt-1 max-w-2xl text-[14.5px] font-medium leading-snug text-ink">
              {exp.spotlight.text}
            </p>
          </div>
        )}
      </div>
    </Reveal>
  );
}
