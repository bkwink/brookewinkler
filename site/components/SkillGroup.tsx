import Reveal from "./Reveal";

export default function SkillGroup({
  group,
  items,
  index,
}: {
  group: string;
  items: string[];
  index: string;
}) {
  return (
    <Reveal tag="article" delay={Number(index.slice(-1)) * 60}>
      <div className="h-full border border-ink/12 bg-card p-6">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          {index}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-tight text-ink">
          {group}
        </h3>
        <ul className="mt-4">
          {items.map((s) => (
            <li
              key={s}
              className="border-b border-ink/[0.08] py-2 text-[14px] text-ink-soft last:border-0 last:pb-0 first:pt-0"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
