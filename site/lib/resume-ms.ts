import data from "@/content/ms-resume.json";

/**
 * Typed view over content/ms-resume.json.
 *
 * The JSON is the single source of truth because scripts/generate-resume-pdf.mjs
 * is plain Node and cannot import TypeScript. Do not duplicate content here or
 * in the generator — edit content/ms-resume.json.
 */

export type Role = {
  role: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
  result?: string;
};

export type Group = { label: string; items: string[] };

export type Education = {
  school: string;
  place: string;
  degree: string;
  detail: string;
};

export const msProfile = data.profile;
export const msExperience: Role[] = data.experience;
export const msAnalysis: Role[] = data.analysis;
export const msLeadership: Role[] = data.leadership;
export const msEducation: Education[] = data.education;
export const msToolkit: Group[] = data.toolkit;
export const msHonors: string[] = data.honors;
export const msGoal = data.goal;
