import { Download, ArrowUp } from "lucide-react";
import { profile } from "@/lib/resume-data";
import Reveal from "./Reveal";

function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  );
}

export default function ContactFooter() {
  return (
    <Reveal>
      <footer className="bg-ink text-paper">
        <div className="p-8 md:p-12">
          <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-paper/50">
            <span className="font-semibold text-accent">07</span>
            <span aria-hidden className="mx-2 text-paper/25">
              /
            </span>
            Contact
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl md:text-7xl font-semibold uppercase leading-[0.95] tracking-tight">
            Let&apos;s build something <span className="text-accent">fast.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-paper/70">
            I&apos;m looking for a motorsports engineering internship for{" "}
            <strong className="font-semibold text-paper">Summer 2027</strong> — high-performance
            powertrains, vehicle development, and strategy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/Brooke-Winkler-Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-[12.5px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-white"
            >
              <Download className="h-4 w-4" aria-hidden /> Download resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 border border-paper/30 px-6 py-3 font-mono text-[12.5px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-paper/30 px-6 py-3 font-mono text-[12.5px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-paper/15 px-8 md:px-12 py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50">
          <span>© 2026 Brooke Winkler</span>
          <span>Houghton, Michigan</span>
          <a href="#top" className="ml-auto inline-flex items-center gap-1.5 hover:text-paper">
            Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </footer>
    </Reveal>
  );
}
