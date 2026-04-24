import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GsapService {
  private platformId = inject(PLATFORM_ID);

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  async loadGsap() {
    if (!this.isBrowser) return null;

    const gsapModule = await import('gsap');
    const scrollModule = await import('gsap/ScrollTrigger');

    const gsap = gsapModule.default;
    const ScrollTrigger = scrollModule.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    return { gsap, ScrollTrigger };
  }
}