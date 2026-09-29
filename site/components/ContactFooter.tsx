import { Mail, Phone, Download, ArrowDown } from "lucide-react";
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
      <footer className="border-2 border-ink bg-ink text-paper">
        <div className="p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">
            <span className="inline-block h-2 w-2 bg-accent live-dot" aria-hidden />
            07 / Contact — Pit wall open
            <span className="ml-auto hidden md:inline">BW.2030 // Houghton, MI</span>
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold uppercase leading-[0.95] tracking-tight">
            Let&apos;s build<br />something <span className="text-accent">fast.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-paper/75">
            Seeking a motorsports engineering internship for <strong className="text-paper">Summer 2027</strong> —
            F1, high-performance powertrain, vehicle development, strategy. Engineering is a team sport.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/Brooke-Winkler-Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-white hover:bg-accent-deep transition-colors focus-visible:outline-2 focus-visible:outline-white"
            >
              <Download className="h-4 w-4" aria-hidden /> Download resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 border border-paper/40 px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.15em] hover:bg-paper hover:text-ink transition-colors"
            >
              <Mail className="h-4 w-4" aria-hidden /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-paper/40 px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.15em] hover:bg-paper hover:text-ink transition-colors"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 border border-paper/40 px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.15em] hover:bg-paper hover:text-ink transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden /> {profile.phone}
            </a>
          </div>
        </div>
        <div className="border-t border-paper/20 px-6 md:px-10 py-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.15em] uppercase text-paper/55">
          <span>© 2026 Brooke Winkler</span>
          <span>Usually found near a robot, race car, or questionable CAD decision.</span>
          <a href="#top" className="ml-auto inline-flex items-center gap-1.5 hover:text-paper">
            Back to grid <ArrowDown className="h-3.5 w-3.5 rotate-180" aria-hidden />
          </a>
        </div>
      </footer>
    </Reveal>
  );
}
