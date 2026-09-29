"use client";
import { useState } from "react";
import { experiences } from "@/lib/resume-data";

/** Interactive experience timeline — click a node to preview, hover shows telemetry tick */
export default function Timeline() {
  const [active, setActive] = useState(experiences[0].id);
  const current = experiences.find((e) => e.id === active) ?? experiences[0];

  return (
    <div className="border border-ink/15 bg-card">
      <div className="flex items-center justify-between border-b border-ink/15 px-5 py-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          Career telemetry — select node to inspect
        </p>
        <p className="font-mono text-[11px] text-muted hidden sm:block">2022 ━━━ 2026 ━━━ 2030</p>
      </div>

      {/* track */}
      <div className="px-5 md:px-8 pt-6 pb-2 overflow-x-auto">
        <div className="relative min-w-[560px]">
          <div className="absolute left-0 right-0 top-[7px] h-[2px] bg-ink/15" aria-hidden />
          <div
            className="absolute left-0 top-[7px] h-[2px] bg-accent transition-all duration-500"
            style={{
              width: `${((experiences.findIndex((e) => e.id === active) + 1) / experiences.length) * 100}%`,
            }}
            aria-hidden
          />
          <ol className="relative flex justify-between gap-2">
            {experiences.map((e, i) => {
              const isActive = e.id === active;
              return (
                <li key={e.id} className="flex flex-col items-start gap-2 flex-1">
                  <button
                    onClick={() => setActive(e.id)}
                    aria-pressed={isActive}
                    aria-label={`Show ${e.org}`}
                    className="group flex flex-col items-start gap-2 focus-visible:outline-2 focus-visible:outline-accent rounded-sm"
                  >
                    <span
                      className={`h-[16px] w-[16px] rotate-45 border-2 transition-all ${
                        isActive
                          ? "bg-accent border-accent scale-110"
                          : "bg-paper border-ink group-hover:bg-ink"
                      }`}
                    />
                    <span className={`font-mono text-[10.5px] tracking-[0.12em] ${isActive ? "text-accent-deep font-semibold" : "text-muted"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-left text-[12.5px] leading-tight max-w-[110px] ${isActive ? "font-semibold text-ink" : "text-muted"}`}>
                      {e.org.split("—")[0].trim()}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {/* readout */}
      <div className="m-4 md:m-5 border border-ink/15 bg-paper px-5 py-4" aria-live="polite">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="font-mono text-[11px] tracking-[0.18em] text-accent font-semibold">{current.index}</p>
          <p className="font-mono text-[11px] text-muted uppercase tracking-[0.12em]">{current.dates}</p>
        </div>
        <p className="mt-1 font-display text-xl font-semibold uppercase leading-tight">{current.role}</p>
        <p className="text-sm font-medium text-ink-soft">{current.org} · {current.location}</p>
        <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{current.summary}</p>
        <a href="#experience" className="mt-3 inline-block font-mono text-[11.5px] uppercase tracking-[0.18em] font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-deep">
          Full entry ↓ E.{current.index.slice(2)}
        </a>
      </div>
    </div>
  );
}
