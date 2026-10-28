import { ExperienceEntry } from '../models/content.models';

export const experienceEntries: ExperienceEntry[] = [
  {
    company: 'Niiv Software Pvt. Ltd.',
    role: 'Frontend Software Engineer',
    period: 'Jul 2022 – Present',
    summary:
      'Building enterprise-grade Angular applications for data-intensive business workflows, with recent contributions to AI-assisted SonarQube remediation and automated quality reporting.',
    highlights: [
      'Enterprise modules for recycling certification, plastics marketplace, and compliance reporting platforms.',
      'Reusable component architecture with RBAC-aware UI and dynamic Reactive Forms.',
      'GitLab CI/CD, Docker, SonarQube, and Playwright within delivery pipelines.',
    ],
  },
  {
    company: 'IBM Online Internship — Ceasura Technologies',
    role: 'Intern',
    period: '2021 – 2022',
    summary: 'Contributed to process and workflow improvements that reduced raised-ticket volume.',
    highlights: [],
  },
];

export const educationEntries = [
  {
    degree: 'M.Sc. Computer Science',
    institution: 'Pioneer College of Arts and Science, Coimbatore',
    detail: 'GPA 7.50/10 · 2024–2025',
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'N.C.T College (Autonomous), Trichy',
    detail: 'GPA 7.20/10 · 2019–2022',
  },
];

export const professionalSummary = `Frontend Software Engineer with 3.5+ years of experience building enterprise-grade Angular applications for data-intensive, real-world business workflows. Skilled in TypeScript, RxJS, DevExtreme data grids, and reusable component architecture, with hands-on experience delivering role-based access control (RBAC), dynamic Reactive Forms, dashboards and reporting, and document-management modules. Comfortable operating within CI/CD and code-quality pipelines (GitLab, Docker, SonarQube), and has recently contributed to engineering automation initiatives that apply Python and Cursor-based AI-assisted tooling to SonarQube remediation and code-quality reporting.`;

export const engineeringApproach = [
  'Favor clear module boundaries, typed contracts with backend APIs, and shared services that reduce duplication across features.',
  'Design grids and forms for operators who work with large datasets—server-side pagination, validation, and predictable loading states.',
  'Treat accessibility, responsive layout, and SonarQube-maintainable code as part of the feature, not a late pass.',
  'Collaborate on API payload design and production issue resolution rather than treating integration as a handoff.',
];
