export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export type ProjectMotif =
  | 'enterprise'
  | 'marketplace'
  | 'compliance'
  | 'ai-remediation'
  | 'quality-report'
  | 'portfolio';

export interface ProjectCaseStudy {
  slug: string;
  name: string;
  shortName: string;
  period?: string;
  tagline: string;
  /** Recruiter-facing category label (not a metric). */
  category: string;
  motif: ProjectMotif;
  stack: string[];
  overview: string;
  problem: string;
  contribution: string[];
  approach: string[];
  challenges: string[];
  outcomes: string[];
  links: ProjectLink[];
  featured: boolean;
}

export interface NavItem {
  label: string;
  fragment: string;
}
