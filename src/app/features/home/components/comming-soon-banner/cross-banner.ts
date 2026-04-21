import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

interface BannerItem {
  text: string;
  angle: number;
}

@Component({
  selector: 'app-cross-banner',
  templateUrl: './cross-banner.html',
  styleUrls: ['./cross-banner.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrossBanner {
  private _banners: BannerItem[] = [];

  @Input()
  set banners(value: BannerItem[]) {
    if (!value || value.length !== 2) {
      throw new Error(
        '[CrossBannerComponent] Exactly 2 banners are required.'
      );
    }

    this._banners = value;
  }

  get banners(): BannerItem[] {
    return this._banners;
  }

  @Input() speed = 20;
}