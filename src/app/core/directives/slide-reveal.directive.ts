import { Directive, ElementRef, Input, OnInit, OnDestroy, inject } from '@angular/core';

const DEFAULT_DURATION_MS = 500;
const DEFAULT_DELAY_MS = 200;
const DEFAULT_IO_THRESHOLD = 0.2;

@Directive({
  selector: '[appSlideReveal]',
})
export class SlideRevealDirective implements OnInit, OnDestroy {
  @Input() animation: 'fade' | 'slide-up' | 'slide-down' | 'slide-right' | 'slide-left' | 'zoom' =
    'fade';
  @Input() duration?: number;
  @Input() delay?: number;
  @Input() threshold?: number;
  @Input() once = true;

  private observer!: IntersectionObserver;

  private el = inject(ElementRef);

  ngOnInit() {
    const nativeEl = this.el.nativeElement;
    const duration = this.duration ?? DEFAULT_DURATION_MS;
    const delay = this.delay ?? DEFAULT_DELAY_MS;
    const threshold = this.threshold ?? DEFAULT_IO_THRESHOLD;

    nativeEl.style.transitionProperty = 'opacity, transform';
    nativeEl.style.transitionDuration = `${duration}ms`;
    nativeEl.style.transitionTimingFunction = 'ease';
    nativeEl.style.transitionDelay = `${delay}ms`;
    nativeEl.classList.add('aos-init', this.animation);
    nativeEl.classList.remove('aos-animate');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          nativeEl.classList.add('aos-animate');

          if (this.once) {
            this.observer.unobserve(nativeEl);
          }
        } else if (!this.once) {
          nativeEl.classList.remove('aos-animate');
        }
      },
      { threshold },
    );

    requestAnimationFrame(() => {
      this.observer.observe(nativeEl);
    });
  }

  public reobserve() {
    const nativeEl = this.el.nativeElement;

    if (!this.observer) return;

    this.observer.disconnect();

    requestAnimationFrame(() => {
      this.observer.observe(nativeEl);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
