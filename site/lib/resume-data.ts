export type Experience = {
  id: string;
  index: string;
  role: string;
  org: string;
  location: string;
  dates: string;
  tags: string[];
  summary: string;
  bullets: string[];
  spotlight?: { label: string; text: string };
  link?: string;
};

export type Project = {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  role: string;
  tools: string[];
  status: "Active" | "Competition" | "Research" | "Upcoming";
  problem: string;
  solution: string;
  result: string;
  specs: { label: string; value: string }[];
};

export const profile = {
  name: "Brooke Winkler",
  firstName: "Brooke",
  lastName: "Winkler",
  degree: "Mechanical Engineering + Aerospace Engineering",
  school: "Michigan Technological University",
  tagline: "I build things that move — robots, race cars, teams, and occasionally entire organizations.",
  location: "Houghton, MI",
  classOf: "Class of 2030",
  email: "bkwinkle@mtu.edu",
  phone: "(248) 444-1218",
  linkedin: "https://linkedin.com/in/brooke-winkler-8a442a366",
  github: "https://github.com",
  meta: ["Houghton, MI", "ME + AE", "Class of 2030", "Motorsports / Robotics / Design"],
};

export const experiences: Experience[] = [
  {
    id: "frc",
    index: "E.01",
    role: "Captain / Design, Strategy, Build & Electrical Lead",
    org: "FRC Team 7598 — SCA Constellations",
    location: "Wixom, MI",
    dates: "Aug 2022 — May 2026",
    tags: ["SolidWorks", "Fabrication", "Electrical", "Strategy"],
    summary:
      "Senior-year primary contributor for mechanical + electrical development on a student-run FIRST Robotics Competition team — CAD to competition floor.",
    bullets: [
      "Took robot subsystems from CAD through fabrication, assembly, wiring, and competition use with 3D printing, CNC, and laser cutting",
      "Supported controls in Java / WPILib; independently tuned robot parameters and operational values at events",
      "Led and mentored a largely inexperienced roster in design, fabrication, electrical, strategy, and pit operations",
      "Drove match strategy, scouting, troubleshooting, and high-pressure competition decision-making",
    ],
    spotlight: {
      label: "Impact highlights",
      text: "FIRST Impact Award · World Championship qualification · Regional + state competition runs · extensive outreach & mentorship",
    },
  },
  {
    id: "avexel",
    index: "E.02",
    role: "Communications / Business Development",
    org: "Avexel Web Design",
    location: "Harbor Springs, MI",
    dates: "Dec 2025 — Present",
    tags: ["Sales", "Client requirements", "Web dev assist"],
    summary:
      "Led business development and client acquisition for a student-run web development company — from cold outreach to developer handoff.",
    bullets: [
      "Independently identified and pursued prospective clients through cold calling, email, and market research",
      "Created the company's sales materials and sales process from scratch",
      "Translated client needs into clear requirements for developers; assisted with development when necessary",
      "Led outreach that evaluated local business needs and built a real pipeline",
    ],
    spotlight: {
      label: "Funded a robot",
      text: "Helped generate enough company revenue to fund an entire FRC competition robot.",
    },
  },
  {
    id: "redbull",
    index: "E.03",
    role: "Media Team — Photographer & Journalist",
    org: "Red Bull Racing Detroit Showrun",
    location: "Detroit, MI",
    dates: "Jul 2026",
    tags: ["Motorsports media", "Event ops"],
    summary: "Supported media operations for a professional motorsports showrun — firsthand exposure to top-tier event execution.",
    bullets: [
      "Served as photographer and journalist, sharing the experience with local news outlets",
      "Supported media + event operations in a fast, public-facing professional environment",
    ],
  },
  {
    id: "enzu",
    index: "E.04",
    role: "Server Assembly Intern",
    org: "Enzu",
    location: "Wixom, MI",
    dates: "Aug 2026",
    tags: ["Hardware", "Assembly"],
    summary: "Hands-on hardware work in a professional technology environment.",
    bullets: ["Assisted with physical server assembly and hardware preparation"],
  },
  {
    id: "theatre",
    index: "E.05",
    role: "Technical Director & Stage Manager",
    org: "St. Catherine of Siena Academy Drama",
    location: "Wixom, MI",
    dates: "2023 — 2026",
    tags: ["Tech crew", "Live ops"],
    summary: "Ran backstage technical operations across multiple productions — the other kind of high-pressure pit crew.",
    bullets: [
      "Managed technical crews, scene changes, props, and backstage logistics through rehearsals and live shows",
      "Solved production and time-management problems under show-must-go-on pressure · 2× Superior Award — Stage Management",
    ],
  },
  {
    id: "golf",
    index: "E.06",
    role: "Varsity Golf Captain",
    org: "St. Catherine of Siena Academy",
    location: "Wixom, MI",
    dates: "2022 — 2025",
    tags: ["Captain Sr. year", "All-Catholic / League / Academic"],
    summary: "Three years varsity, senior-year captain. Precision, patience, and reading the wind — useful in engineering too.",
    bullets: ["Earned All-Catholic, All-League, and All-Academic honors"],
  },
];

export const projects: Project[] = [
  {
    id: "frc-robot",
    code: "PRJ—01",
    title: "FRC Competition Robots",
    subtitle: "Team 7598 · full-season design → build → compete",
    role: "Captain · Design / Build / Electrical / Strategy",
    tools: ["SolidWorks", "Onshape", "Java + WPILib", "3D print / CNC / Laser", "Electrical + pneumatics"],
    status: "Competition",
    problem:
      "Design, build, and compete a 125-lb robot on a ~6-week season with a young team and limited hands — every subsystem has to work on day one of quals.",
    solution:
      "Owned mechanical + electrical architecture. Rapid-prototyped intakes, drivetrain tuning, and wiring layouts; ran structured testing and pit-side iteration loops between matches.",
    result:
      "Impact Award · World Championship qualification · regional/state runs — and a team of rookies who could run the pit without me by season's end.",
    specs: [
      { label: "Weight class", value: "125 lb" },
      { label: "Season cadence", value: "~6 weeks" },
      { label: "Systems", value: "Mech / Elec / Controls" },
      { label: "Outcome", value: "Worlds qualified" },
    ],
  },
  {
    id: "f1-pu",
    code: "PRJ—02",
    title: "F1 2026 Power Unit Research",
    subtitle: "Regulations deep-dive · hybridization & race dynamics",
    role: "Independent researcher",
    tools: ["Regs analysis", "Powertrain theory", "Data reasoning"],
    status: "Research",
    problem:
      "The 2026 regs rewrite the power unit formula — ~50/50 ICE-to-electric split, sustainable fuels, active aero. What actually changes about racing?",
    solution:
      "Working through the technical regulations clause-by-clause and mapping them to powertrain architecture, deployment strategy, and overtaking dynamics.",
    result:
      "Living research dossier — informing future Formula SAE powertrain thinking and my summer-2027 motorsports internship direction.",
    specs: [
      { label: "Focus", value: "PU + hybrid deploy" },
      { label: "Lens", value: "Regs → on-track effect" },
      { label: "Output", value: "Briefing notes" },
      { label: "Status", value: "Ongoing" },
    ],
  },
  {
    id: "cad",
    code: "PRJ—03",
    title: "CAD + Rapid Prototyping Practice",
    subtitle: "SolidWorks · Fusion 360 · Onshape · AutoCAD",
    role: "Designer / fabricator",
    tools: ["SolidWorks", "Fusion 360", "AutoCAD", "MATLAB"],
    status: "Active",
    problem: "Good ideas die in vague sketches. I wanted a personal workflow from napkin sketch to physical part in days, not weeks.",
    solution:
      "Standing practice of parametric modeling, DFM-minded detailing, and fast iteration — print it, break it, fix the CAD, reprint. Documenting what survives contact with reality.",
    result: "A growing library of parts and assemblies — and judgment about tolerances, fasteners, and what to simplify before competition.",
    specs: [
      { label: "Stack", value: "SW / Fusion / Onshape" },
      { label: "Methods", value: "Print · CNC · Laser" },
      { label: "Habit", value: "Design → test → revise" },
      { label: "Goal", value: "FSAE-ready" },
    ],
  },
  {
    id: "fsae",
    code: "PRJ—04",
    title: "Formula SAE — Next Up at Michigan Tech",
    subtitle: "Target: join the build team, year one",
    role: "Incoming contributor (ME+AE '30)",
    tools: ["Vehicle dynamics", "Composites", "Testing"],
    status: "Upcoming",
    problem: "FRC taught me to ship robots. Now I want to learn cars — suspension, aero, powertrain, and testing like a race team.",
    solution:
      "Joining Michigan Tech's Formula SAE effort: start where the team needs hands, earn design responsibility, bring FRC habits for CAD discipline, wiring quality, and pit operations.",
    result: "To be built. If you're a recruiter reading this — I'd love to talk about summer 2027 in motorsports.",
    specs: [
      { label: "Team", value: "MTU Formula SAE" },
      { label: "Interests", value: "Chassis / Aero / PU" },
      { label: "Brings", value: "CAD · Elec · Strategy" },
      { label: "Timeline", value: "Fall 2026 →" },
    ],
  },
];

export const leadership = [
  {
    title: "FIRST Robotics Mentor & Volunteer",
    org: "Southeast Michigan",
    dates: "2022 — 2026",
    text: "Mentored two FTC teams — helped stand up a rookie team and coached another to the Michigan State Championship. Volunteered at FRC events supporting teams through competition ops.",
  },
  {
    title: "Built a sales engine that built a robot",
    org: "Avexel → FRC 7598",
    dates: "2025 — 2026",
    text: "Business development wasn't a side quest — the revenue funded an entire competition robot. Engineering is a team sport, and teams need funding.",
  },
  {
    title: "Crews that trust each other under pressure",
    org: "Stage · Golf · Pit",
    dates: "Ongoing",
    text: "Stage manager, golf captain, pit lead — different uniforms, same job: keep calm people coordinated when the clock is running.",
  },
];

export const education = [
  {
    school: "Michigan Technological University",
    place: "Houghton, Michigan",
    degree: "B.S. Mechanical Engineering & Aerospace Engineering · Honors Program",
    dates: "2026 — 2030",
    detail: "Dual-degree ME+AE. Targeting Formula SAE + motorsports engineering internships for Summer 2027.",
    highlight: true,
  },
  {
    school: "St. Catherine of Siena Academy",
    place: "Wixom, Michigan",
    degree: "High School Diploma · GPA 3.8",
    dates: "2022 — 2026",
    detail: "FRC captaincy, varsity golf captain, technical theatre leadership, robotics outreach.",
    highlight: false,
  },
];

export const skills = [
  {
    group: "Engineering & Design",
    icon: "drafting",
    items: ["SolidWorks", "Onshape", "Fusion 360", "AutoCAD", "Mechanical design", "Rapid prototyping", "MATLAB", "Mathematica"],
  },
  {
    group: "Fabrication & Electrical",
    icon: "wrench",
    items: ["3D printing", "CNC", "Laser cutting", "Soldering", "Mechanical fabrication", "Electrical wiring"],
  },
  {
    group: "Programming & Controls",
    icon: "code",
    items: ["Java", "JavaScript", "WPILib", "Git / GitHub"],
  },
  {
    group: "Team & Leadership",
    icon: "flag",
    items: ["Technical leadership", "Project management", "Technical communication", "Public speaking", "Strategy & scouting"],
  },
];

export const honors = [
  "NASA-funded scholarship recipient",
  "Renaissance Woman Award",
  "3× Top Technician — State of Michigan",
  "FIRST Impact Award",
  "FIRST World Championship Qualifier",
  "2× Superior Award — Stage Management",
  "All-Catholic · All-League · All-Academic — Golf",
];

export const railSections = [
  { id: "top", label: "GRID", num: "00" },
  { id: "about", label: "ABOUT", num: "01" },
  { id: "experience", label: "EXPERIENCE", num: "02" },
  { id: "projects", label: "ENGINEERING", num: "03" },
  { id: "leadership", label: "LEADERSHIP", num: "04" },
  { id: "education", label: "EDUCATION", num: "05" },
  { id: "contact", label: "CONTACT", num: "06" },
];
