import { Component, Input } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from '../icon-component/icon-component';


@Component({
  selector: 'app-icon-button',
  imports: [IconComponent],
  templateUrl: './icon-button.html',
  styleUrl: './icon-button.css',
})
export class IconButton {
  faArrowRight = faArrowRight;
  @Input() iconColor: string = '#ffffff';
}
