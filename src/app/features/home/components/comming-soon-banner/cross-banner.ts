import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

// interface BannerItem {
//   text: string;
//   angle: number;
// }

@Component({
  selector: 'app-cross-banner',
  templateUrl: './cross-banner.html',
  styleUrls: ['./cross-banner.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})

export class CrossBanner implements AfterViewInit {
  @Input() text: string = 'Infinite Scroll Text Banner • Creative Design • Smooth Animation •';
  @Input() text2: string = 'Premium Experience • Dynamic Visuals • Engaging Content •';
  @Input() speed: string = '20s';
 
  @ViewChild('scrollTrack') scrollTrack!: ElementRef;

  ngAfterViewInit(): void {
    if (this.scrollTrack) {
      this.scrollTrack.nativeElement.style.setProperty('--speed', this.speed);
    }
  }
 

 
}