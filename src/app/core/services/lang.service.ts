import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Lang, TRANSLATIONS } from '../i18n/translations';

export type { Lang };

@Injectable({ providedIn: 'root' })
export class LangService {
  private doc = inject(DOCUMENT);
  private readonly _refreshAnimations = signal(0);

  private readonly _lang = signal<Lang>(this.getInitialLang());

  readonly lang = this._lang.asReadonly();
  readonly isRtl = computed(() => this._lang() === 'ar');

  constructor() {
    this.applyLang(this._lang());
  }

  toggle(): void {
    this.set(this._lang() === 'en' ? 'ar' : 'en');
    this.doc.defaultView?.scrollTo({
      top: 0,
      left: 0,
    });
  }

  set(lang: Lang): void {
    this._lang.set(lang);
    this.applyLang(lang);
  }

  translate(key: string): string {
    return TRANSLATIONS[this._lang()]?.[key] ?? TRANSLATIONS['en']?.[key] ?? key;
  }

  private applyLang(lang: Lang): void {
    const html = this.doc.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    try {
      this.doc.defaultView?.localStorage.setItem('lang', lang);
    } catch {
      this.doc.defaultView?.localStorage.setItem('lang', 'en');
    }
  }

  private getInitialLang(): Lang {
    try {
      const win = this.doc.defaultView;
      const stored = win?.localStorage.getItem('lang') as Lang | null;
      if (stored === 'en' || stored === 'ar') return stored;
      return win?.navigator.language?.startsWith('ar') ? 'ar' : 'en';
    } catch {
      return 'en';
    }
  }
}
