import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cross-banner',
  templateUrl: './cross-banner.html',
  styleUrls: ['./cross-banner.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})

export class CrossBanner implements AfterViewInit {
  @Input({ required: true }) primaryText!: string;
  @Input({ required: true }) secondaryText!: string;
  @Input() speed: string = '20s';
 
  @ViewChild('scrollTrack') scrollTrack!: ElementRef;

  ngAfterViewInit(): void {
    if (this.scrollTrack) {
      this.scrollTrack.nativeElement.style.setProperty('--speed', this.speed);
    }
  }
 
}