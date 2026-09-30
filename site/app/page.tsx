import {
  Download,
  ArrowDown,
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ExperienceEntry, { ImpactMetric } from "@/components/ExperienceEntry";
import ProjectCard from "@/components/ProjectCard";
import SkillGroup from "@/components/SkillGroup";
import Timeline from "@/components/Timeline";
import ContactFooter from "@/components/ContactFooter";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import { profile, experiences, projects, leadership, education, skills, honors } from "@/lib/resume-data";

function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="relative mx-auto max-w-6xl px-4 md:px-8 flex items-center gap-3 h-16">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Brooke Winkler — home">
          <span className="flex h-8 w-8 items-center justify-center bg-ink font-display text-[15px] font-semibold text-paper">
            BW
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Brooke Winkler</span>
        </a>
        <nav aria-label="Sections" className="ml-auto hidden lg:flex items-center gap-6 font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft">
          {[
            ["About", "#about"],
            ["Experience", "#experience"],
            ["Projects", "#projects"],
            ["Leadership", "#leadership"],
            ["Education", "#education"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-accent">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="/Brooke-Winkler-Resume.pdf"
          download
          className="ml-auto lg:ml-4 inline-flex items-center gap-2 bg-accent px-4 py-2 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-deep"
        >
          <Download className="h-3.5 w-3.5" aria-hidden />
          <span className="hidden sm:inline">Download resume</span>
          <span className="sm:hidden">Resume</span>
        </a>
        <ScrollProgress />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="pt-16 md:pt-24 pb-12 md:pb-16">
      <Reveal>
        <p className="inline-flex items-center gap-2.5 border border-ink/15 bg-card px-3.5 py-1.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.16em] text-ink-soft">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
          Open to Summer 2027 internships
        </p>
        <p className="mt-7 font-mono text-[12.5px] font-medium uppercase tracking-[0.24em] text-accent-deep">
          Mechanical + Aerospace — Michigan Tech
        </p>
        <h1 className="mt-3 font-display text-6xl sm:text-7xl md:text-8xl font-semibold uppercase leading-[0.9] tracking-tight text-ink">
          Brooke<br />
          Winkler<span className="text-accent">.</span>
        </h1>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="/Brooke-Winkler-Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent-deep"
          >
            <Download className="h-4 w-4" aria-hidden /> Download resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border-2 border-ink px-6 py-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            View projects <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-px border border-ink/12 bg-ink/12 sm:grid-cols-4">
          {[
            ["Base", "Houghton, MI"],
            ["Program", "ME + AE"],
            ["Class", "2030"],
            ["Focus", "Motorsport · Robotics"],
          ].map(([term, value]) => (
            <div key={term} className="bg-paper px-4 py-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{term}</dt>
              <dd className="mt-0.5 text-[13.5px] font-semibold text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
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
      <main id="main" className="mx-auto w-full min-w-0 max-w-6xl px-4 md:px-8">

        <Hero />

        {/* ABOUT */}
        <section id="about" aria-label="About" className="py-14 md:py-20 scroll-mt-20 border-t border-ink/10">
          <SectionHeader
            num="01"
            eyebrow="Profile"
            title="About"
            blurb="A first-year engineer who likes teams, deadlines, and hardware that has to work."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <div className="h-full border border-ink/12 bg-card p-6 md:p-9">
                <p className="text-[16.5px] leading-relaxed text-ink">
                  I&apos;m a first-year dual-degree <strong>Mechanical + Aerospace Engineering</strong> student
                  at <strong>Michigan Tech</strong>. In high school I captained an FRC robotics team —
                  designing and wiring robots that had to work in front of a crowd — and did sales for
                  a student web company that ended up <strong>funding a competition robot</strong>.
                  Long-term, I&apos;d love to work in <strong>Formula 1 and high-performance motorsports</strong> —
                  powertrains, vehicle development, strategy.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  I also do theatre tech, play golf, mentor young robotics teams, and read F1 technical
                  regulations for fun. I do my best work on teams with a deadline.
                </p>
                <div className="mt-7 grid grid-cols-3 gap-6 border-t border-ink/10 pt-6">
                  <ImpactMetric value="4 yrs" label="FRC design & leadership" />
                  <ImpactMetric value="2 teams" label="FTC teams mentored" />
                  <ImpactMetric value="1 robot" label="Funded through sales" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <aside className="h-full bg-ink p-6 md:p-7 text-paper" aria-label="Currently">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-paper/50">
                  Currently
                </p>
                <ul className="mt-4 divide-y divide-paper/15 text-[14px] leading-snug">
                  <li className="py-3 first:pt-0">
                    <strong className="font-semibold">Researching</strong>{" "}
                    <span className="text-paper/70">F1 2026 power unit regulations and hybrid deployment</span>
                  </li>
                  <li className="py-3">
                    <strong className="font-semibold">Sharpening</strong>{" "}
                    <span className="text-paper/70">a SolidWorks-to-fabrication workflow for Formula SAE</span>
                  </li>
                  <li className="py-3">
                    <strong className="font-semibold">Targeting</strong>{" "}
                    <span className="text-paper/70">a Summer 2027 motorsports internship</span>
                  </li>
                  <li className="py-3 last:pb-0">
                    <strong className="font-semibold">Outside class</strong>{" "}
                    <span className="text-paper/70">robotics mentoring, golf, theatre tech, and F1 regs</span>
                  </li>
                </ul>
                <p className="mt-4 border-t border-paper/15 pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50">
                  Golf · Stage crew · Snow · Backpacking
                </p>
              </aside>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" aria-label="Experience" className="py-14 md:py-20 scroll-mt-20 border-t border-ink/10">
          <SectionHeader
            num="02"
            eyebrow="Career"
            title="Experience"
            blurb="Accomplishments first, job descriptions second."
          />
          <Reveal>
            <Timeline />
          </Reveal>
          <div id="experience-list" className="mt-6 space-y-6 scroll-mt-24">
            <ExperienceEntry exp={frc} />
            <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
              <ExperienceEntry exp={avexel} />
              <Reveal className="h-full">
                <aside className="border border-ink/12 border-t-2 border-t-accent bg-card p-6 lg:sticky lg:top-24" aria-label="Key outcomes">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-deep">
                    Key outcomes
                  </p>
                  <ul className="mt-3 divide-y divide-ink/10 text-[14px] font-medium leading-snug">
                    {["FIRST Impact Award", "World Championship qualification", "Regional + state competition runs", "Led a largely rookie roster", "Extensive outreach & mentorship"].map((h) => (
                      <li key={h} className="py-2.5 first:pt-1 last:pb-0">{h}</li>
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

        {/* PROJECTS */}
        <section id="projects" aria-label="Engineering and projects" className="py-14 md:py-20 scroll-mt-20 border-t border-ink/10">
          <SectionHeader
            num="03"
            eyebrow="Selected work"
            title="Projects"
            blurb="Things I've designed, built, and raced — each with the problem, the approach, and the result."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} defaultOpen={i === 0} />
            ))}
          </div>
          <Reveal>
            <p className="mt-6 border border-ink/12 bg-card px-6 py-4 text-[14px] text-muted">
              <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">Next — </span>
              Formula SAE work at Michigan Tech begins this fall.
            </p>
          </Reveal>
        </section>

        {/* LEADERSHIP */}
        <section id="leadership" aria-label="Leadership" className="py-14 md:py-20 scroll-mt-20 border-t border-ink/10">
          <SectionHeader
            num="04"
            eyebrow="Teams"
            title="Leadership"
            blurb="Early lessons from leading small teams."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {leadership.map((l, i) => (
              <Reveal key={l.title} tag="article" delay={i * 80}>
                <div className="h-full border border-ink/12 bg-card p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">L.0{i + 1} — {l.dates}</p>
                  <h3 className="mt-2 font-display text-[22px] font-semibold uppercase leading-tight tracking-tight text-ink">{l.title}</h3>
                  <p className="text-sm text-muted">{l.org}</p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{l.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" aria-label="Education" className="py-14 md:py-20 scroll-mt-20 border-t border-ink/10">
          <SectionHeader num="05" eyebrow="Background" title="Education" />
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5">
              {education.map((e) => (
                <Reveal key={e.school} tag="article">
                  <div className={`border bg-card p-6 md:p-7 ${e.highlight ? "border-ink border-l-2 border-l-accent" : "border-ink/12"}`}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                      {e.dates} · {e.place}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-semibold uppercase leading-tight tracking-tight text-ink">{e.school}</h3>
                    <p className="mt-1 text-[15px] font-medium text-ink">{e.degree}</p>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{e.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={100}>
              <aside className="h-full border border-ink/12 bg-card p-6 md:p-7" aria-label="Honors">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Honors &amp; awards
                </p>
                <ul className="mt-3 divide-y divide-ink/10">
                  {honors.map((h) => (
                    <li key={h} className="py-2.5 text-[14px] font-medium text-ink first:pt-1 last:pb-0">
                      {h}
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" aria-label="Skills" className="py-14 md:py-20 scroll-mt-20 border-t border-ink/10">
          <SectionHeader
            num="06"
            eyebrow="Toolkit"
            title="Skills"
            blurb="The tools and habits I actually use — no proficiency bars."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s, i) => (
              <SkillGroup key={s.group} group={s.group} items={s.items} index={`S.0${i + 1}`} />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" aria-label="Contact" className="py-14 md:py-20 scroll-mt-20 border-t border-ink/10">
          <SectionHeader
            num="07"
            eyebrow="Reach out"
            title="Contact"
            blurb="Email is fastest — I reply quickly."
          />
          <div className="grid gap-4 md:grid-cols-3 mb-10">
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: ArrowUpRight, label: "LinkedIn", value: "brooke-winkler", href: profile.linkedin, external: true },
              { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
            ].map((c) => (
              <Reveal key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center gap-4 border border-ink/12 bg-card p-5 transition-colors hover:border-ink"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-ink text-paper transition-colors group-hover:bg-accent">
                    <c.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{c.label}</span>
                    <span className="block truncate text-[15px] font-semibold text-ink">{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <ContactFooter />
          <p className="mt-8 text-center text-[13px] text-muted">
            Built with an unreasonable appreciation for things that move · © 2026 {profile.name}
          </p>
        </section>
      </main>
    </>
  );
}
