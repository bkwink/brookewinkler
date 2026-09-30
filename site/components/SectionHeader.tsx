import Reveal from "./Reveal";

export default function SectionHeader({
  num,
  eyebrow,
  title,
  blurb,
}: {
  num: string;
  eyebrow: string;
  title: string;
  blurb?: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-12">
      <p className="font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-muted">
        <span className="font-semibold text-accent">{num}</span>
        <span aria-hidden className="mx-2 text-ink/25">
          /
        </span>
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-4xl md:text-[44px] font-semibold uppercase leading-[0.95] tracking-tight text-ink">
        {title}
      </h2>
      <div className="relative mt-5 h-[3px] bg-ink/10" aria-hidden>
        <span className="absolute left-0 top-0 h-full w-16 bg-accent" />
      </div>
      {blurb && (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{blurb}</p>
      )}
    </Reveal>
  );
}
