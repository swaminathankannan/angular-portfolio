import { ProjectCaseStudy } from '../models/content.models';

export const projects: ProjectCaseStudy[] = [
  {
    slug: 'crp',
    category: 'Enterprise workflows',
    motif: 'enterprise',
    name: 'C.R.P. — Certified Recycled Plastic',
    shortName: 'C.R.P.',
    period: 'Jan 2023 – Present',
    tagline: 'Enterprise recycling certification and plant operations',
    stack: [
      'Angular',
      'TypeScript',
      'RxJS',
      'DevExtreme',
      'REST APIs',
      'SCSS',
      'Bootstrap',
      'MySQL',
    ],
    featured: true,
    overview:
      'Enterprise Angular platform for recycling certification, production plant management, and operational workflow automation used in day-to-day business processes.',
    problem:
      'Operations teams manage complex plant hierarchies, organization associations, certifications, and document workflows across large datasets. The UI must stay consistent, permission-aware, and performant while multiple REST services evolve in parallel.',
    contribution: [
      'Architected and maintained core Angular modules supporting certification and plant-management workflows.',
      'Built DevExtreme DataGrid interfaces with server-side pagination, filtering, export, and custom search-expression mapping.',
      'Integrated REST APIs via HttpClient and RxJS to model production plant hierarchy and organization structures.',
      'Delivered RBAC-based UI layers, dynamic Reactive Forms with dependent dropdowns, dashboards, secure uploads, and document management.',
      'Partnered with backend engineers on API contracts, payload design, and production issue resolution.',
    ],
    approach: [
      'Shared component and service layers to avoid duplicating grid, form, and permission patterns across modules.',
      'Mapped backend search expressions explicitly so grid filters stay aligned with server capabilities.',
      'Structured feature modules around operational domains (plants, documents, certification) with typed models.',
    ],
    challenges: [
      'Keeping grid behavior consistent when datasets are large and filter semantics differ per entity.',
      'Aligning front-end recipient and sharing flows with backend whitelist and company-association rules across modules.',
      'Evolving forms and RBAC without breaking existing operator workflows during continuous delivery.',
    ],
    outcomes: [
      'Reusable UI foundation adopted across multiple enterprise modules, reducing duplicated grid and form code.',
      'Stable operator workflows for document management and plant hierarchy visualization backed by REST integration.',
    ],
    links: [],
  },
  {
    slug: 'plastic-finder',
    category: 'Marketplace & data UI',
    motif: 'marketplace',
    name: 'Plastic Finder (P.F. 2.0)',
    shortName: 'Plastic Finder',
    period: 'Sep 2022 – 2024; returning 2026',
    tagline: 'Industrial plastics marketplace and knowledge base',
    stack: ['Angular 20', 'TypeScript', 'DevExtreme', 'REST APIs', 'SCSS', 'Bootstrap', 'PWA', 'ngx-translate'],
    featured: true,
    overview:
      'Responsive Angular application for an industrial plastics marketplace—Plastic Finder and Plastic Wiki—with advanced catalog search, filtering, and reporting.',
    problem:
      'Buyers and operators need fast search and filtering across products, catalogs, and organizations, plus dashboards and document workflows, on desktop and mobile.',
    contribution: [
      'Built marketplace and wiki modules with advanced filtering, search, and grid operations.',
      'Developed reusable UI components and REST integrations for product search, KPI dashboards, and documents.',
      'Improved data-loading performance and refactored shared services for stronger responsive layouts.',
    ],
    approach: [
      'Angular 20 standalone architecture with production build tuned for large bundles (increased Node heap for CI builds).',
      'Consistent grid and filter patterns shared with other GridSIG frontends.',
      'PWA and i18n hooks where product requirements demand offline-ready or localized experiences.',
    ],
    challenges: [
      'Balancing rich grid features with perceived performance on wide catalog datasets.',
      'Maintaining a shared frontend foundation while product areas (Finder vs Wiki) diverge in UX details.',
    ],
    outcomes: [
      'Established a consistent frontend foundation for search, dashboards, and document workflows in the plastics domain.',
    ],
    links: [],
  },
  {
    slug: 'nest-platform',
    category: 'Compliance & reporting',
    motif: 'compliance',
    name: 'NEST Platform',
    shortName: 'NEST',
    tagline: 'Industry compliance and reporting',
    stack: [
      'Angular 20',
      'TypeScript',
      'RxJS',
      'DevExtreme',
      'Chart.js',
      'ngx-translate',
      'PWA',
      'Playwright',
    ],
    featured: true,
    overview:
      'Enterprise compliance and reporting platform covering product data sheets, company and user administration, shared documents, and production-plant reporting.',
    problem:
      'Regulated industries need traceable product data, role-governed administration, and reporting built on consistent grid and chart patterns—delivered through a hardened CI/CD pipeline.',
    contribution: [
      'Contributed to modules for product data sheets, administration, shared documents, and plant reporting on DevExtreme grids.',
      'Supported reusable data-grid and reporting components with Chart.js visualizations.',
      'Worked within GitLab CI/CD and Docker delivery with SonarQube checks and Playwright E2E coverage.',
    ],
    approach: [
      'Whitelabel-ready configuration patterns (domain and asset config) for multi-stack deployments.',
      'Unit test coverage scripts integrated with SonarQube scanning in the repository pipeline.',
      'End-to-end tests via dedicated Playwright runner packages in the monorepo layout.',
    ],
    challenges: [
      'Reporting and grid components must respect role-based permissions across many entity types.',
      'Keeping E2E and unit coverage meaningful as modules grow in a long-lived enterprise codebase.',
    ],
    outcomes: [
      'Shared reporting and grid building blocks reused across compliance workflows.',
      'Quality gates enforced through SonarQube and automated browser tests in CI.',
    ],
    links: [],
  },
  {
    slug: 'ai-sonar',
    category: 'AI-assisted remediation',
    motif: 'ai-remediation',
    name: 'AI-SONAR',
    shortName: 'AI-SONAR',
    tagline: 'SonarQube AI remediation automation',
    stack: ['Python', 'Bash', 'GitLab CI/CD', 'SonarQube', 'Cursor SDK'],
    featured: true,
    overview:
      'Scheduled SonarQube scan and Cursor-driven auto-fix pipeline for GitLab projects—clone, scan, remediate, validate, and open merge requests when fixes pass hard gates.',
    problem:
      'Manual SonarQube remediation does not scale across many repositories. Teams need automated fix attempts with strict post-fix build validation and MR automation only when changes are verified.',
    contribution: [
      'Contributed to the AI-assisted workflow: scan GitLab projects, apply Cursor SDK fixes, and run post-fix build validation with recovery on failure.',
      'Supported merge-request automation and quality-gate logic that opens fix branches and MRs only after verified post-fix changes.',
    ],
    approach: [
      'Orchestrator script loads per-project env config, clones target repos, runs build and Sonar scan, then batches Cursor fixes capped by SONAR_MAX_ISSUES.',
      'Hard gates: initial build failure stops the job; post-fix build must pass (with limited recovery) before push/MR.',
      'Helper Python modules wrap Sonar and GitLab APIs; analysis rules live in ai_software_design submodule documentation.',
    ],
    challenges: [
      'Isolating failed fix batches without losing valid remediations when post-fix validation fails.',
      'Ensuring MR creation failures surface as pipeline failures even when branches were pushed.',
      'Excluding non-autofix rules such as cognitive complexity from automated MRs.',
    ],
    outcomes: [
      'Repeatable scheduled and manual pipelines that reduce manual Sonar remediation effort across mapped projects.',
      'Archived Sonar snapshots and documented architecture for operators maintaining the automation repo.',
    ],
    links: [],
  },
  {
    slug: 'daily-sonarqube-report',
    category: 'Quality automation',
    motif: 'quality-report',
    name: 'Daily GitLab + SonarQube Reporting',
    shortName: 'Daily AI Quality Report',
    tagline: 'Bilingual portfolio quality PDF automation',
    stack: ['Python', 'ReportLab', 'SonarQube API', 'GitLab API', 'Cursor Automation'],
    featured: true,
    overview:
      'Python reporting pipeline that joins SonarQube quality data with GitLab merge-request history to produce a scheduled bilingual code-quality PDF and evidence manifest.',
    problem:
      'Quality stakeholders need one consolidated daily view of Sonar gates, trends, and AI-fix merge-request cycles across many products—not scattered dashboard checks.',
    contribution: [
      'Contributed to the generator that maps portfolio products to Sonar keys and GitLab paths, classifies quality gates, and tracks AI-fix cycles.',
      'Supported automated publishing workflow to GitLab Wiki via Cursor-scheduled automation.',
    ],
    approach: [
      'ETL-style CLI: extract via Sonar HTTP and prefetched GitLab MR JSON, transform rows and trends, load PDF + manifest under dated output folders.',
      'portfolio.json drives the product map; ReportLab builds the bilingual PDF with embedded branding.',
      'Weekday Cursor Automation on develop branch regenerates and validates artifacts before wiki publish.',
    ],
    challenges: [
      'Joining Sonar measures with MR snapshots when data arrives asynchronously per date folder.',
      'Presenting gate PASS/ATTN/FAIL and AI-cycle status clearly for both Italian and English readers.',
    ],
    outcomes: [
      'Operational evidence PDF suitable for quality reviews, with manifest JSON for traceability.',
      'Documented Makefile and automation JSON for weekday scheduled runs.',
    ],
    links: [],
  },
  {
    slug: 'portfolio-v2',
    category: 'Personal product',
    motif: 'portfolio',
    name: 'Personal Portfolio',
    shortName: 'Portfolio',
    period: '2026',
    tagline: 'Production Angular portfolio site',
    stack: ['Angular 19/20', 'Standalone Components', 'Angular Signals', 'SCSS'],
    featured: false,
    overview:
      'Production-ready portfolio built with Angular standalone components and Signals, focused on performance, accessibility, and a restrained design system.',
    problem:
      'Present engineering work clearly to recruiters and hiring managers without sacrificing Core Web Vitals or accessibility.',
    contribution: [
      'Designed and deployed the site with a custom single-accent theme and responsive layout.',
      'Resolved component-level rendering issues including content projection and sanitization edge cases.',
    ],
    approach: [
      'Geist typeface, CSS design tokens, minimal dependencies, semantic HTML.',
      'Lighthouse-driven iteration on performance and SEO metadata.',
    ],
    challenges: [
      'Balancing rich layout with strict performance budgets on static hosting.',
    ],
    outcomes: [
      'Lighthouse scores reported on resume: 99 Performance, 100 Accessibility, 100 SEO on the deployed instance.',
    ],
    links: [
      {
        label: 'Live site',
        url: 'https://swaminathan-portfolio.vercel.app',
      },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectCaseStudy[] {
  return projects.filter((p) => p.featured);
}
