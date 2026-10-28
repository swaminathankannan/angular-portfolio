import { AfterViewInit, Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { getFeaturedProjects } from '../../core/data/projects.data';
import { skillGroups } from '../../core/data/skills.data';
import {
  educationEntries,
  engineeringApproach,
  experienceEntries,
  professionalSummary,
} from '../../core/data/experience.data';
import { NavItem } from '../../core/models/content.models';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';
import { SiteHeaderComponent } from '../../layout/site-header/site-header.component';
import { SiteFooterComponent } from '../../layout/site-footer/site-footer.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

@Component({
  selector: 'app-home',
  imports: [
    SiteHeaderComponent,
    SiteFooterComponent,
    SectionHeadingComponent,
    ProjectCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  protected readonly site = siteConfig;
  protected readonly featuredProjects = getFeaturedProjects();
  protected readonly skillGroups = skillGroups;
  protected readonly experience = experienceEntries;
  protected readonly education = educationEntries;
  protected readonly summary = professionalSummary;
  protected readonly approach = engineeringApproach;

  protected readonly navItems: NavItem[] = [
    { label: 'About', fragment: 'about' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Projects', fragment: 'projects' },
    { label: 'Skills', fragment: 'skills' },
    { label: 'Contact', fragment: 'contact' },
  ];

  private readonly scrollSpy = inject(ScrollSpyService);

  ngAfterViewInit(): void {
    this.scrollSpy.observe(this.navItems.map((n) => n.fragment).concat(['hero']));
  }

  protected scrollTo(fragment: string): void {
    this.scrollSpy.scrollTo(fragment);
  }
}
