import { Component, Input } from '@angular/core';
import { faAngleRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { IconComponent } from '../../ui/icon-component/icon-component';
import { ButtonDirective } from '../../ui/button/button.directive';
import { MediaInfo } from '../../../core/model/home';
import { SlideRevealDirective } from '../../../core/directives/slide-reveal.directive';

@Component({
  selector: 'app-media',
  imports: [IconComponent, ButtonDirective, SlideRevealDirective],
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class Media {
 faAngleRight = faAngleRight;
 faCheckCircle = faCheckCircle;
 @Input({ required: true }) mediaInfo!:MediaInfo;

}
