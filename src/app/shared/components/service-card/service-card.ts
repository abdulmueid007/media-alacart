import { CommonModule } from '@angular/common';
import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '../../ui/icon-button/icon-button';
import { IconButtonDirective } from '../../../core/directives/icon-button.directive';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.html',
  styleUrls: ['./service-card.css'], 
  imports: [CommonModule, IconButton, IconButtonDirective]
})
export class ServiceCard implements AfterViewInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;

  faArrowRight = faArrowRight;

  constructor(private el: ElementRef) {}

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