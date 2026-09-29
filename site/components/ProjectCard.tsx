"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";
import type { Project } from "@/lib/resume-data";

export default function ProjectCard({ project, defaultOpen = false }: { project: Project; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `project-${project.id}`;

  return (
    <Reveal tag="article" className="h-full">
      <div className="flex h-full flex-col border border-ink/15 bg-card hover:border-ink transition-colors">
        {/* title block */}
        <div className="border-b border-ink/15 px-5 pt-4 pb-4">
          <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.18em] uppercase">
            <span className="text-accent font-semibold">{project.code}</span>
            <span className="flex items-center gap-1.5 text-muted">
              <span className="inline-block h-1.5 w-1.5 bg-accent" aria-hidden />
              {project.status}
            </span>
          </div>
          <h3 className="mt-2 font-display text-2xl font-semibold uppercase leading-tight">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tools.map((t) => (
              <span key={t} className="font-mono text-[10.5px] uppercase tracking-wide bg-paper-deep border border-ink/10 px-2 py-1 text-ink-soft">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* spec strip */}
        <dl className="grid grid-cols-2 sm:grid-cols-4 border-b border-ink/15 divide-x divide-ink/15">
          {project.specs.map((s) => (
            <div key={s.label} className="px-4 py-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">{s.label}</dt>
              <dd className="mt-0.5 text-[13px] font-semibold leading-tight">{s.value}</dd>
            </div>
          ))}
        </dl>

        {/* expandable detail */}
        <div className="px-5 py-4 flex-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Role — <span className="text-ink font-semibold">{project.role}</span>
          </p>
          <div
            id={panelId}
            className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden">
              <div className="space-y-3 text-[14.5px] leading-relaxed text-ink-soft">
                <p><strong className="text-ink font-semibold">Problem. </strong>{project.problem}</p>
                <p><strong className="text-ink font-semibold">Solution. </strong>{project.solution}</p>
                <p className="border-l-2 border-accent pl-3 text-ink"><strong className="font-semibold">Result. </strong>{project.result}</p>
              </div>
            </div>
          </div>
          {!open && (
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft line-clamp-2">{project.problem}</p>
          )}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex items-center justify-between border-t-2 border-ink px-5 py-3 font-mono text-[12px] uppercase tracking-[0.18em] font-semibold hover:bg-ink hover:text-paper transition-colors focus-visible:outline-2 focus-visible:outline-accent"
        >
          <span>{open ? "Close dossier" : "Open dossier — problem / solution / result"}</span>
          {open ? <Minus className="h-4 w-4" aria-hidden /> : <Plus className="h-4 w-4" aria-hidden />}
        </button>
      </div>
    </Reveal>
  );
}
