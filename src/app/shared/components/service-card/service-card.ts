import { Component, Input } from '@angular/core';
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
  imports: [IconButton, IconButtonDirective, Image, SlideRevealDirective],
})
export class ServiceCard {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() index!: number;

  faArrowRight = faArrowRight;
}
