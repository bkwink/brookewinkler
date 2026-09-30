import Reveal from "./Reveal";
import type { Project } from "@/lib/resume-data";

export default function ProjectCard({ project }: { project: Project }) {
  const panelId = `project-${project.id}`;

  return (
    <Reveal tag="article" className="h-full">
      <div className="flex h-full flex-col border border-ink/12 bg-card">
        <div className="border-b border-ink/10 px-6 pt-5 pb-5">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em]">
            <span className="font-semibold text-accent">{project.code}</span>
            <span className="flex items-center gap-1.5 text-muted">
              <span className="inline-block h-1.5 w-1.5 bg-accent" aria-hidden />
              {project.status}
            </span>
          </div>
          <h3 className="mt-2.5 font-display text-[26px] font-semibold uppercase leading-[1.02] tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
        </div>

        <dl className="grid grid-cols-2 border-b border-ink/10 divide-x divide-ink/10 sm:grid-cols-4">
          {project.specs.map((s) => (
            <div key={s.label} className="px-4 py-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {s.label}
              </dt>
              <dd className="mt-0.5 text-[13px] font-semibold leading-tight text-ink">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex-1 px-6 py-5" id={panelId}>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            Role — <span className="font-semibold text-ink">{project.role}</span>
          </p>
          <div className="space-y-3 pt-3 text-[14.5px] leading-relaxed text-ink-soft">
            <p>
              <strong className="font-semibold text-ink">Problem. </strong>
              {project.problem}
            </p>
            <p>
              <strong className="font-semibold text-ink">Solution. </strong>
              {project.solution}
            </p>
            <p className="border-l-2 border-accent pl-3 text-ink">
              <strong className="font-semibold">Result. </strong>
              {project.result}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
