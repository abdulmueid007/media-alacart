import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  inject
} from '@angular/core';
import { GsapService } from '../services/gsap.service';


type Direction = 'left' | 'right' | 'up' | 'down';

@Directive({
  selector: '[appSlideReveal]',
  standalone: true
})
export class SlideRevealDirective implements AfterViewInit {
  private el = inject(ElementRef<HTMLElement>);
  private gsapService = inject(GsapService);

  @Input('appSlideReveal') direction: Direction = 'left';
  @Input() once = false;
  @Input() delay = 1;

  async ngAfterViewInit() {
    const loaded = await this.gsapService.loadGsap();
    if (!loaded) return;

    const { gsap } = loaded;

    let x = 0;
    let y = 0;

    switch (this.direction) {
      case 'left':
        x = -150;
        break;
      case 'right':
        x = 150;
        break;
      case 'up':
        y = 150;
        break;
      case 'down':
        y = -150;
        break;
    }

    gsap.from(this.el.nativeElement, {
      x,
      y,
      opacity: 0,
      duration: this.delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.el.nativeElement,
        once: this.once,
        start: 'top 85%',
        toggleActions: this.once
          ? 'play none none none'
          : 'play none none reset'
      }
    });
  }
}