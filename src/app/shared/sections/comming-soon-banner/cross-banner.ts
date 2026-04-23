import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgmMotionDirective } from '@scripttype/ng-motion';
@Component({
  selector: 'app-cross-banner',
  templateUrl: './cross-banner.html',
  styleUrls: ['./cross-banner.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgmMotionDirective],
})

export class CrossBanner {
  @Input({ required: true }) primaryText!: string;
  @Input({ required: true }) secondaryText!: string;
  @Input() speed: string = '20s';
 
}