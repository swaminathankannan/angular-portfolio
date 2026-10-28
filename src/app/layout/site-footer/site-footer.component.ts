import { Component } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  protected readonly site = siteConfig;
  protected readonly year = new Date().getFullYear();
}
