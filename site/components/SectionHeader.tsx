import Reveal from "./Reveal";

export default function SectionHeader({
  num,
  title,
  blurb,
  meta,
}: {
  num: string;
  title: string;
  blurb?: string;
  meta?: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-end gap-4 border-b-2 border-ink pb-4">
        <span
          aria-hidden
          className="font-display text-5xl md:text-7xl font-semibold leading-none text-accent tabular-nums"
        >
          {num}
        </span>
        <div className="pb-1">
          <p className="font-mono text-[11px] tracking-[0.25em] text-muted uppercase">
            / {meta ?? "Section"} — BW.2030
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold uppercase tracking-tight leading-none">
            {title}
          </h2>
        </div>
        <div className="ml-auto hidden md:flex items-center gap-2 font-mono text-[11px] text-muted">
          <span className="inline-block h-2 w-2 bg-accent live-dot" aria-hidden />
          SEC.{num} // NOMINAL
        </div>
      </div>
      {blurb && (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{blurb}</p>
      )}
    </Reveal>
  );
}
