import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideRevealDirective } from '../../../core/directives/slide-reveal.directive';
@Component({
  selector: 'app-cross-banner',
  templateUrl: './cross-banner.html',
  styleUrls: ['./cross-banner.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SlideRevealDirective],
})

export class CrossBanner {
  @Input({ required: true }) primaryText!: string;
  @Input({ required: true }) secondaryText!: string;
  @Input() speed = '20s';
 
}