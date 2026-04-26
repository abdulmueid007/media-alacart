import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { faAngleRight, faAngleLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { IconComponent } from '../../ui/icon-component/icon-component';
import { ButtonDirective } from '../../ui/button/button.directive';
import { SlideRevealDirective } from '../../../core/directives/slide-reveal.directive';
import { MediaInfo } from '../../../core/model/media-info.model';
import { TranslatePipe } from '../../../core/pipes/translate.pipe';
import { LangService } from '../../../core/services/lang.service';

@Component({
  selector: 'app-media',
  imports: [IconComponent, ButtonDirective, SlideRevealDirective, TranslatePipe],
  templateUrl: './media.html',
  styleUrl: './media.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Media {
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faCheckCircle = faCheckCircle;
  lang = inject(LangService);
  @Input({ required: true }) mediaInfo!: MediaInfo;
}
