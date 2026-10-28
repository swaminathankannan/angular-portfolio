import { SkillGroup } from '../models/content.models';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages & Markup',
    items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS'],
  },
  {
    category: 'Angular Ecosystem',
    items: [
      'Angular (19/20)',
      'Angular CLI',
      'RxJS',
      'Reactive Forms',
      'Standalone Components',
      'Angular Signals',
      'PWA / Service Worker',
      'ngx-translate (i18n)',
    ],
  },
  {
    category: 'UI & Data Presentation',
    items: [
      'DevExtreme (DataGrid & widgets)',
      'Angular Material / CDK',
      'Bootstrap / ng-bootstrap',
      'Chart.js',
      'Responsive UI',
    ],
  },
  {
    category: 'APIs & Data Layer',
    items: [
      'REST API Integration',
      'RBAC',
      'SQL / MySQL',
      'ExcelJS',
      'jsPDF',
    ],
  },
  {
    category: 'Delivery & Quality',
    items: [
      'Git',
      'GitHub',
      'GitLab',
      'GitLab CI/CD',
      'Docker',
      'SonarQube',
      'Jasmine / Karma',
      'Playwright (E2E)',
      'Postman',
    ],
  },
  {
    category: 'Automation & AI-Assisted Engineering',
    items: ['Python', 'Bash', 'Cursor-based remediation', 'Automated quality reporting'],
  },
];
