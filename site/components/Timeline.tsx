"use client";
import { useState } from "react";
import { experiences } from "@/lib/resume-data";

const SHORT: Record<string, string> = {
  frc: "FRC 7598",
  avexel: "Avexel",
  redbull: "Red Bull",
  enzu: "Enzu",
  theatre: "Theatre",
  golf: "Golf",
};

/** Role browser — pick a role to preview it, full entries follow below. */
export default function Timeline() {
  const [active, setActive] = useState(experiences[0].id);
  const current = experiences.find((e) => e.id === active) ?? experiences[0];

  return (
    <div className="border border-ink/12 bg-card p-6 md:p-7">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
        Browse roles
      </p>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Roles">
        {experiences.map((e) => {
          const isActive = e.id === active;
          return (
            <button
              key={e.id}
              onClick={() => setActive(e.id)}
              aria-pressed={isActive}
              className={`border px-4 py-2 font-mono text-[12px] font-medium uppercase tracking-[0.1em] transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 bg-transparent text-ink-soft hover:border-ink/50 hover:text-ink"
              }`}
            >
              {SHORT[e.id] ?? e.org}
            </button>
          );
        })}
      </div>

      <div className="mt-6 border-t border-ink/10 pt-5" aria-live="polite">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {current.index} · {current.dates}
        </p>
        <p className="mt-1.5 font-display text-[22px] font-semibold uppercase leading-tight tracking-tight text-ink">
          {current.role}
        </p>
        <p className="mt-1 text-sm font-medium text-ink-soft">
          {current.org} · {current.location}
        </p>
        <p className="mt-2 max-w-3xl text-[14.5px] leading-relaxed text-ink-soft">
          {current.summary}
        </p>
        <a
          href="#experience-list"
          className="mt-3 inline-block font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-deep"
        >
          Read the full entry
        </a>
      </div>
    </div>
  );
}
