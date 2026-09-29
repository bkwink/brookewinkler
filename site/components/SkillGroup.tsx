import { DraftingCompass, Wrench, Code2, Flag } from "lucide-react";
import Reveal from "./Reveal";

const icons: Record<string, typeof Wrench> = {
  drafting: DraftingCompass,
  wrench: Wrench,
  code: Code2,
  flag: Flag,
};

export default function SkillGroup({
  group,
  icon,
  items,
  index,
}: {
  group: string;
  icon: string;
  items: string[];
  index: string;
}) {
  const Icon = icons[icon] ?? Wrench;
  return (
    <Reveal tag="article" delay={Number(index.slice(-1)) * 60}>
      <div className="border border-ink/15 bg-card p-5 h-full hover:border-ink transition-colors">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-[0.2em] text-accent font-semibold">{index}</span>
          <Icon className="h-5 w-5 text-ink" aria-hidden />
        </div>
        <h3 className="mt-2 font-display text-xl font-semibold uppercase">{group}</h3>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {items.map((s) => (
            <li
              key={s}
              className="text-[13px] border border-ink/15 bg-paper px-2.5 py-1 text-ink-soft"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
