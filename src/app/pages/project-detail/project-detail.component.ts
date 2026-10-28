import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { siteConfig } from '../../core/config/site.config';
import { getProjectBySlug } from '../../core/data/projects.data';
import { SiteHeaderComponent } from '../../layout/site-header/site-header.component';
import { SiteFooterComponent } from '../../layout/site-footer/site-footer.component';

@Component({
  selector: 'app-project-detail',
  imports: [SiteHeaderComponent, SiteFooterComponent, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  protected readonly site = siteConfig;
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly project = computed(() => getProjectBySlug(this.slug()));

  constructor() {
    effect(() => {
      const p = this.project();
      this.title.setTitle(
        p ? `${p.name} — Swaminathan Kannan` : 'Project — Swaminathan Kannan',
      );
    });
  }
}
