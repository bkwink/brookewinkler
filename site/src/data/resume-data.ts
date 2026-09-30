export type Experience = {
  id: string;
  index: string;
  role: string;
  org: string;
  location: string;
  dates: string;
  summary: string;
  bullets: string[];
  spotlight?: { label: string; text: string };
  link?: string;
};

export type Project = {
  id: string;
  title: string;
  role: string;
  problem: string;
  solution: string;
  result: string;
};

export const profile = {
  name: "Brooke Winkler",
  firstName: "Brooke",
  lastName: "Winkler",
  degree: "Mechanical Engineering + Aerospace Engineering",
  school: "Michigan Technological University",
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
    summary:
      "A senior-year lead contributor for mechanical + electrical work on a student-run FIRST Robotics Competition team.",
    bullets: [
      "Took robot subsystems from CAD through fabrication, assembly, wiring, and competition use with 3D printing, CNC, and laser cutting",
      "Helped with controls in Java / WPILib and tuned robot parameters and operational values at events",
      "Helped lead and mentor newer teammates in design, fabrication, electrical, strategy, and pit operations",
      "Contributed to match strategy, scouting, troubleshooting, and competition-day decisions",
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
    summary:
      "Handled business development and client outreach for a student-run web development company.",
    bullets: [
      "Identified and contacted prospective clients through cold calling, email, and market research",
      "Put together the company's sales materials and sales process",
      "Turned client needs into clear requirements for developers; helped with development when needed",
      "Built a small pipeline by learning what local businesses actually needed",
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
    summary: "Supported media operations for a professional motorsports showrun.",
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
    summary: "Server assembly and hardware preparation at a technology company.",
    bullets: ["Assisted with physical server assembly and hardware preparation"],
  },
  {
    id: "theatre",
    index: "E.05",
    role: "Technical Director & Stage Manager",
    org: "St. Catherine of Siena Academy Drama",
    location: "Wixom, MI",
    dates: "2023 — 2026",
    summary: "Ran backstage technical operations across multiple high school productions.",
    bullets: [
      "Managed technical crews, scene changes, props, and backstage logistics through rehearsals and live shows",
      "Solved production and time-management problems during live shows · 2× Superior Award — Stage Management",
    ],
  },
  {
    id: "golf",
    index: "E.06",
    role: "Varsity Golf Captain",
    org: "St. Catherine of Siena Academy",
    location: "Wixom, MI",
    dates: "2022 — 2025",
    summary: "Three years on varsity, senior-year captain.",
    bullets: ["Earned All-Catholic, All-League, and All-Academic honors"],
  },
];

export const projects: Project[] = [
  {
    id: "frc-robot",
    title: "FRC Competition Robots",
    role: "Captain · Design / Build / Electrical / Strategy",
    problem:
      "Design, build, and compete a 125-lb robot on a ~6-week season with a young team and limited hands — every subsystem has to work on day one of quals.",
    solution:
      "I worked on mechanical and electrical design: rapid-prototyped intakes, helped tune the drivetrain, laid out wiring, and tested and iterated between matches.",
    result:
      "Impact Award · World Championship qualification · regional/state runs — and newer teammates who could run the pit by season's end.",
  },
  {
    id: "f1-pu",
    title: "F1 2026 Power Unit Research",
    role: "Independent researcher",
    problem:
      "The 2026 rules change a lot about F1 power units — a bigger electric split, sustainable fuels, active aero. I'm studying them to understand what changes about the racing.",
    solution:
      "Reading the technical regulations section by section and taking notes on how each rule could affect powertrain design, deployment, and overtaking.",
    result:
      "Living research notes — informing future Formula SAE powertrain thinking and my summer-2027 motorsports internship direction.",
  },
  {
    id: "cad",
    title: "CAD + Rapid Prototyping Practice",
    role: "Designer / fabricator",
    problem: "I wanted to get faster at going from a sketch to a physical part.",
    solution:
      "Regular practice: parametric modeling, designing for fabrication, then print, break, fix, and reprint.",
    result: "A small library of parts — and a growing sense of tolerances, fasteners, and what to simplify.",
  },
  {
    id: "fsae",
    title: "Formula SAE — Next Up at Michigan Tech",
    role: "Incoming contributor (ME+AE '30)",
    problem: "FRC taught me to finish and ship a robot. Next I want to learn cars — suspension, aero, powertrain, testing.",
    solution:
      "Joining Michigan Tech's Formula SAE effort: start where the team needs hands, earn design responsibility, bring FRC habits for CAD discipline, wiring quality, and pit operations.",
    result: "To be built — starting fall 2026. I'm hoping to talk motorsports internships for summer 2027.",
  },
];

export const leadership = [
  {
    title: "FIRST Robotics Mentor & Volunteer",
    org: "Southeast Michigan",
    dates: "2022 — 2026",
    text: "Mentored two FTC teams — helped start a rookie team and supported another to the Michigan State Championship. Also volunteered at FRC events.",
  },
  {
    title: "Sales work that funded a robot",
    org: "Avexel → FRC 7598",
    dates: "2025 — 2026",
    text: "Cold calls and emails for a student web company brought in enough revenue to pay for an entire FRC robot. Unglamorous work that made the fun work possible.",
  },
  {
    title: "Small teams, live pressure",
    org: "Stage · Golf · Pit",
    dates: "Ongoing",
    text: "Stage manager, golf captain, pit crew — I'm still early, but I've learned I like being responsible when the clock is running.",
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
    items: ["Team leadership", "Project management", "Technical communication", "Public speaking", "Strategy & scouting"],
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
