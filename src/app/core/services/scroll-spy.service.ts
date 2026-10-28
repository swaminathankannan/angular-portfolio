import { Injectable, signal, DestroyRef, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  readonly activeSection = signal('hero');

  observe(sectionIds: readonly string[]): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          this.activeSection.set(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));

    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  scrollTo(fragment: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const el = document.getElementById(fragment);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${fragment}`);
    this.activeSection.set(fragment);
  }
}
