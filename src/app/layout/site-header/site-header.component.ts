import { Component, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { siteConfig } from '../../core/config/site.config';
import { NavItem } from '../../core/models/content.models';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {
  readonly mode = input<'home' | 'inner'>('home');
  readonly navItems = input<NavItem[]>([]);

  protected readonly site = siteConfig;
  protected readonly scrollSpy = inject(ScrollSpyService);
  protected menuOpen = false;

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }

  protected onNavClick(fragment: string, event: Event): void {
    if (this.mode() === 'home') {
      event.preventDefault();
      this.scrollSpy.scrollTo(fragment);
      this.closeMenu();
    }
  }
}
