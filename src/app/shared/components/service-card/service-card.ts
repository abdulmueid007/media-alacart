import { CommonModule } from '@angular/common';
import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from '../../ui/icon-component/icon-component';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.html',
  styleUrls: ['./service-card.css'], 
  imports: [CommonModule, IconComponent]
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