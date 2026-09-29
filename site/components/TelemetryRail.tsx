"use client";
import { useEffect, useState } from "react";
import { railSections } from "@/lib/resume-data";

export default function TelemetryRail() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("top");

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setProgress(max > 0 ? h.scrollTop / max : 0);
        // active section
        let current = "top";
        for (const s of railSections) {
          const el = document.getElementById(s.id);
          if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) current = s.id;
        }
        setActive(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav
      aria-label="Page telemetry"
      className="fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-1 select-none"
    >
      <div className="relative flex flex-col items-center">
        {/* track */}
        <div className="absolute top-2 bottom-2 w-px bg-ink/20" aria-hidden />
        <div
          className="absolute top-2 w-[2px] bg-accent transition-[height] duration-150"
          style={{ height: `calc((100% - 16px) * ${progress})` }}
          aria-hidden
        />
        <ol className="flex flex-col gap-3.5">
          {railSections.map((s) => {
            const isActive = s.id === active;
            return (
              <li key={s.id}>
                <a
                  href={s.id === "top" ? "#top" : `#${s.id}`}
                  className="group flex items-center gap-2 flex-row-reverse"
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className={`h-2 w-2 rotate-45 border transition-all ${
                      isActive ? "bg-accent border-accent scale-125" : "bg-paper border-ink/40 group-hover:border-ink"
                    }`}
                    aria-hidden
                  />
                  <span
                    className={`font-mono text-[9.5px] tracking-[0.15em] transition-all ${
                      isActive ? "text-accent-deep font-semibold opacity-100" : "text-muted opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                    }`}
                  >
                    {s.num}/{s.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
      <p className="mt-3 font-mono text-[9.5px] tracking-[0.15em] text-muted tabular-nums">
        {String(Math.round(progress * 100)).padStart(3, "0")}%
      </p>
    </nav>
  );
}
