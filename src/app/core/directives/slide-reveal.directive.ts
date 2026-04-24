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

  async ngAfterViewInit() {
    const loaded = await this.gsapService.loadGsap();
    if (!loaded) return;

    const { gsap } = loaded;

    let x = 0;
    let y = 0;

    switch (this.direction) {
      case 'left':
        x = -120;
        break;
      case 'right':
        x = 120;
        break;
      case 'up':
        y = 80;
        break;
      case 'down':
        y = -80;
        break;
    }

    gsap.from(this.el.nativeElement, {
      x,
      y,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none reset'
      }
    });
  }
}