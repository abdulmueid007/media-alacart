import { CommonModule } from '@angular/common';
import { Component, Input, ElementRef, AfterViewInit, inject } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '../../ui/icon-button/icon-button';
import { IconButtonDirective } from '../../ui/icon-button/icon-button-directive';
import { Image } from '../../ui/image/image';
import { SlideRevealDirective } from '../../../core/directives/slide-reveal.directive';
@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.html',
  styleUrls: ['./service-card.css'], 
  imports: [CommonModule, IconButton, IconButtonDirective, Image, SlideRevealDirective]
})
export class ServiceCard implements AfterViewInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() index!: number;

  faArrowRight = faArrowRight;

  private el = inject(ElementRef);

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(this.el.nativeElement);
  }
}