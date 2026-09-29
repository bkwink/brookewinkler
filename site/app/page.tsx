import {
  Download,
  Link2,
  Mail,
  MapPin,
  GraduationCap,
  Wrench,
  Flag,
  Trophy,
  ArrowDown,
  Cog,
  Timer,
  Users,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ExperienceEntry, { ImpactMetric } from "@/components/ExperienceEntry";
import ProjectCard from "@/components/ProjectCard";
import SkillGroup from "@/components/SkillGroup";
import Timeline from "@/components/Timeline";
import ContactFooter from "@/components/ContactFooter";
import TelemetryRail from "@/components/TelemetryRail";
import Reveal from "@/components/Reveal";
import { profile, experiences, projects, leadership, education, skills, honors } from "@/lib/resume-data";

function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 md:px-8 flex items-center gap-3 h-14">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Brooke Winkler home">
          <span className="flex h-7 w-7 items-center justify-center bg-ink font-display text-[13px] font-bold text-paper">
            BW
          </span>
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase hidden xs:inline sm:inline">
            Winkler<span className="text-accent">.</span>2030
          </span>
        </a>
        <nav aria-label="Sections" className="ml-auto hidden lg:flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
          {[
            ["About", "#about"],
            ["Experience", "#experience"],
            ["Engineering", "#projects"],
            ["Leadership", "#leadership"],
            ["Education", "#education"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="hover:text-accent transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="/Brooke-Winkler-Resume.pdf"
          download
          className="ml-auto lg:ml-4 inline-flex items-center gap-2 bg-ink px-3.5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-paper hover:bg-accent transition-colors"
        >
          <Download className="h-3.5 w-3.5" aria-hidden />
          <span className="hidden sm:inline">Download resume</span>
          <span className="sm:hidden">Resume</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden border-b-2 border-ink">
      <div className="blueprint-grid absolute inset-0" aria-hidden />
      {/* telemetry trace motif */}
      <svg
        className="absolute inset-x-0 top-16 md:top-20 h-28 w-full opacity-70"
        viewBox="0 0 1200 110"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,80 L140,80 L160,45 L185,45 L205,95 L230,95 L250,60 L420,60 L440,25 L460,25 L480,85 L505,85 L525,55 L760,55 L780,30 L810,30 L830,75 L860,75 L880,50 L1200,50"
          fill="none"
          stroke="#1a1e1e"
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />
        <path
          d="M0,88 L300,88 L320,68 L340,68 L360,100 L385,100 L405,78 L1200,78"
          fill="none"
          stroke="#e10600"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
        {[140, 420, 760, 1050].map((x) => (
          <g key={x}>
            <line x1={x} y1={8} x2={x} y2={102} stroke="#1a1e1e" strokeOpacity="0.15" strokeDasharray="3 4" />
            <circle cx={x} cy={50} r="3" fill="#e10600" />
          </g>
        ))}
      </svg>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8 pt-24 md:pt-32 pb-10 md:pb-14">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
          <span className="inline-flex items-center gap-1.5 border border-ink/25 bg-card px-2.5 py-1">
            <span className="h-1.5 w-1.5 bg-accent live-dot" aria-hidden />
            Doc. BW-2030 · Rev C
          </span>
          <span className="hidden md:inline text-muted">Scale 1:1 · Sheet 01/01 · Houghton, MI 47.12°N</span>
          <span className="ml-auto hidden md:inline text-muted">Fig. 01 — The human, annotated</span>
        </div>

        <p className="mt-8 font-mono text-[12px] tracking-[0.3em] uppercase text-accent-deep font-semibold">
          Mechanical + Aerospace — Michigan Tech
        </p>
        <h1 className="mt-3 font-display font-bold uppercase leading-[0.88] tracking-tight text-[14vw] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          Brooke<br />
          <span className="text-transparent" style={{ WebkitTextStroke: "2px #1a1e1e" }}>
            Winkler
          </span>
          <span className="text-accent">.</span>
        </h1>

        <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="max-w-xl text-lg md:text-xl font-medium leading-snug">
              I build things that move — <em className="not-italic underline decoration-accent decoration-[3px] underline-offset-4">robots, race cars, teams,</em> and occasionally entire organizations.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/Brooke-Winkler-Resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-white hover:bg-accent-deep transition-colors"
              >
                <Download className="h-4 w-4" aria-hidden /> Download resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border-2 border-ink px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.15em] hover:bg-ink hover:text-paper transition-colors"
              >
                See the builds <ArrowDown className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          {/* title block */}
          <dl className="border-2 border-ink bg-card text-[13px]">
            <div className="grid grid-cols-2 border-b border-ink/15">
              <div className="px-4 py-2.5 border-r border-ink/15">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Base</dt>
                <dd className="font-semibold flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-accent" aria-hidden />Houghton, MI</dd>
              </div>
              <div className="px-4 py-2.5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Program</dt>
                <dd className="font-semibold">ME + AE</dd>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2.5 border-r border-ink/15">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Class</dt>
                <dd className="font-semibold flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5 text-accent" aria-hidden />2030</dd>
              </div>
              <div className="px-4 py-2.5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Field</dt>
                <dd className="font-semibold">Motorsport / Robotics</dd>
              </div>
            </div>
            <div className="border-t border-ink/15 px-4 py-2.5 flex items-center gap-2 font-mono text-[11px] text-muted">
              <span className="h-1.5 w-1.5 bg-accent live-dot" aria-hidden />
              Status: open to Summer 2027 motorsports internships
            </div>
          </dl>
        </div>

        {/* CAD annotation callouts */}
        <div className="mt-8 hidden md:flex gap-6 font-mono text-[10.5px] uppercase tracking-[0.15em] text-muted" aria-hidden>
          <span>⌖ Datum A — work ethic</span>
          <span>⌀ 2030 — tolerance: ambitious</span>
          <span>↯ Torque: team-first</span>
          <span className="ml-auto">DWG NO. BW-F1-001</span>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const [frc, avexel] = [experiences[0], experiences[1]];
  const rest = experiences.slice(2);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-ink focus:text-paper focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <TopBar />
      <TelemetryRail />
      <main id="main" className="mx-auto w-full min-w-0 max-w-6xl px-4 md:px-8">
        <Hero />

        {/* 01 ABOUT */}
        <section id="about" aria-label="About" className="py-14 md:py-20 scroll-mt-16">
          <SectionHeader num="01" title="About" meta="Driver file" blurb="Engineering student, team builder, pit-lane pragmatist." />
          <div className="grid gap-5 md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <div className="border border-ink/15 bg-card p-6 md:p-8 h-full">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent font-semibold">README — brooke.txt</p>
                <p className="mt-3 text-[16.5px] leading-relaxed text-ink">
                  I&apos;m a dual-degree <strong>Mechanical + Aerospace Engineering</strong> student at{" "}
                  <strong>Michigan Tech</strong> who learned engineering the loud way: leading an FRC team as
                  captain, designing and wiring robots that had to work in front of a crowd, and selling enough web
                  work to <strong>fund a competition robot</strong>. Long-term, I want to work in{" "}
                  <strong>Formula 1 and high-performance motorsports</strong> — powertrain, vehicle development, strategy.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  I also stage-manage theatre (the other pit crew), captained varsity golf, mentor young robotics teams,
                  and research the 2026 F1 power unit regs for fun. Engineering is a team sport — I like being the person
                  who keeps the garage calm at 2 AM and gets the car working.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-4 border-t border-ink/15 pt-5">
                  <ImpactMetric value="4 yrs" label="FRC captain + lead" />
                  <ImpactMetric value="2 robots" label="FTC teams mentored" />
                  <ImpactMetric value="1 robot" label="Funded via sales" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <aside className="border-2 border-ink bg-paper-deep p-6 h-full" aria-label="Currently">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted flex items-center gap-2">
                  <Timer className="h-4 w-4 text-accent" aria-hidden /> Currently
                </p>
                <ul className="mt-4 space-y-3.5 text-[14px] leading-snug">
                  <li className="flex gap-2.5"><Cog className="h-4 w-4 mt-0.5 shrink-0 text-accent" aria-hidden /><span><strong>Researching</strong> F1 2026 power unit regs &amp; hybrid deployment</span></li>
                  <li className="flex gap-2.5"><Wrench className="h-4 w-4 mt-0.5 shrink-0 text-accent" aria-hidden /><span><strong>Sharpening</strong> SolidWorks → fab workflow for Formula SAE</span></li>
                  <li className="flex gap-2.5"><Flag className="h-4 w-4 mt-0.5 shrink-0 text-accent" aria-hidden /><span><strong>Targeting</strong> Summer 2027 motorsports internship</span></li>
                  <li className="flex gap-2.5"><Users className="h-4 w-4 mt-0.5 shrink-0 text-accent" aria-hidden /><span><strong>Usually found</strong> near a robot, race car, or questionable CAD decision</span></li>
                </ul>
                <div className="mt-5 border-t border-ink/15 pt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  Golf · Stage crew · Snow · Backpacking
                </div>
              </aside>
            </Reveal>
          </div>
        </section>

        {/* 02 EXPERIENCE */}
        <section id="experience" aria-label="Experience" className="py-14 md:py-20 scroll-mt-16 border-t border-ink/15">
          <SectionHeader
            num="02"
            title="Experience"
            meta="Race log"
            blurb="Accomplishments first, job descriptions second. Scrub the timeline to inspect each stint."
          />
          <Reveal>
            <Timeline />
          </Reveal>
          <div className="mt-8 space-y-6">
            <ExperienceEntry exp={frc} featured />
            <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
              <ExperienceEntry exp={avexel} featured />
              <Reveal className="h-full">
                <aside className="border-2 border-accent bg-accent/[0.05] p-5 lg:sticky lg:top-20">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-deep flex items-center gap-2">
                    <Trophy className="h-4 w-4" aria-hidden /> Impact file — 7598
                  </p>
                  <ul className="mt-3 space-y-2.5 text-[14px] font-medium leading-snug">
                    {["FIRST Impact Award", "World Championship qualification", "Regional + state competition runs", "Led a largely rookie roster", "Extensive outreach & mentorship"].map((h) => (
                      <li key={h} className="flex gap-2">
                        <span aria-hidden className="text-accent font-bold">▸</span>{h}
                      </li>
                    ))}
                  </ul>
                </aside>
              </Reveal>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {rest.map((e) => (
                <ExperienceEntry key={e.id} exp={e} />
              ))}
            </div>
          </div>
        </section>

        {/* 03 PROJECTS */}
        <section id="projects" aria-label="Engineering and projects" className="py-14 md:py-20 scroll-mt-16 border-t border-ink/15">
          <SectionHeader
            num="03"
            title="Engineering + Projects"
            meta="Build dossiers"
            blurb="Each dossier opens to problem / solution / result. Built to expand — Formula SAE entries go here next."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} defaultOpen={i === 0} />
            ))}
          </div>
          <Reveal>
            <p className="mt-6 border border-dashed border-ink/30 bg-card/60 px-5 py-4 font-mono text-[12px] tracking-wide text-muted">
              <span className="text-accent font-semibold">＋ NEXT SLOT RESERVED</span> — MTU Formula SAE subsystems (suspension / aero / powertrain). Drawings in progress.
            </p>
          </Reveal>
        </section>

        {/* 04 LEADERSHIP */}
        <section id="leadership" aria-label="Leadership" className="py-14 md:py-20 scroll-mt-16 border-t border-ink/15">
          <SectionHeader num="04" title="Leadership" meta="Crew chief notes" blurb="The through-line: I make teams work under pressure." />
          <div className="grid gap-5 md:grid-cols-3">
            {leadership.map((l, i) => (
              <Reveal key={l.title} tag="article" delay={i * 80}>
                <div className="border border-ink/15 bg-card p-6 h-full hover:border-ink transition-colors">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-accent font-semibold">L.0{i + 1} — {l.dates}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold uppercase leading-tight">{l.title}</h3>
                  <p className="text-sm text-muted">{l.org}</p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{l.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 05 EDUCATION */}
        <section id="education" aria-label="Education" className="py-14 md:py-20 scroll-mt-16 border-t border-ink/15">
          <SectionHeader num="05" title="Education" meta="Homologation" />
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5">
              {education.map((e) => (
                <Reveal key={e.school} tag="article">
                  <div className={`border bg-card p-6 ${e.highlight ? "border-2 border-ink" : "border-ink/15"}`}>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <p className="font-mono text-[11px] tracking-[0.18em] text-accent font-semibold">{e.dates}</p>
                      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">{e.place}</p>
                    </div>
                    <h3 className="mt-1.5 font-display text-2xl font-semibold uppercase leading-tight">{e.school}</h3>
                    <p className="mt-1 font-medium text-[15px]">{e.degree}</p>
                    <p className="mt-2 text-[14.5px] text-ink-soft leading-relaxed">{e.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={100}>
              <aside className="border border-ink/15 bg-card p-6 h-full" aria-label="Honors">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-accent" aria-hidden /> Honors &amp; awards
                </p>
                <ul className="mt-4 space-y-0 divide-y divide-ink/10">
                  {honors.map((h, i) => (
                    <li key={h} className="flex items-baseline gap-3 py-2.5 text-[14px] font-medium">
                      <span className="font-mono text-[11px] text-accent tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </section>

        {/* 06 SKILLS */}
        <section id="skills" aria-label="Skills" className="py-14 md:py-20 scroll-mt-16 border-t border-ink/15">
          <SectionHeader num="06" title="Skills" meta="Garage inventory" blurb="The toolbox, honestly labeled. No 5-star ratings — just what I've shipped with." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s, i) => (
              <SkillGroup key={s.group} group={s.group} icon={s.icon} items={s.items} index={`S.0${i + 1}`} />
            ))}
          </div>
        </section>

        {/* 07 CONTACT */}
        <section id="contact" aria-label="Contact" className="py-14 md:py-20 scroll-mt-16 border-t border-ink/15">
          <SectionHeader num="07" title="Contact" meta="Pit wall" blurb="Fastest response: email. Most fun: talking race strategy, robot architecture, or your team's hardest problem." />
          <div className="grid gap-5 md:grid-cols-3 mb-8">
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: Link2, label: "LinkedIn", value: "brooke-winkler", href: profile.linkedin },
              { icon: MapPin, label: "Base", value: "Houghton, MI · MTU '30", href: "mailto:" + profile.email },
            ].map((c) => (
              <Reveal key={c.label} className="block" >
                <a href={c.href} target={c.label === "LinkedIn" ? "_blank" : undefined} rel="noreferrer"
                  className="flex items-center gap-4 border border-ink/15 bg-card p-5 hover:border-ink hover:-translate-y-0.5 transition-all group">
                  <span className="flex h-10 w-10 items-center justify-center border border-ink/20 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-colors">
                    <c.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">{c.label}</span>
                    <span className="block font-semibold text-[15px]">{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <div id="contact-footer"><ContactFooter /></div>
          <p className="mt-6 text-center font-mono text-[11px] tracking-[0.15em] uppercase text-muted">
            Built with an unreasonable appreciation for things that move · © 2026 {profile.name}
          </p>
        </section>
      </main>
    </>
  );
}
