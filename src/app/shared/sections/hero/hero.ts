import { ChangeDetectionStrategy, Component, Input, QueryList, ViewChildren } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import { IconComponent } from '../../ui/icon-component/icon-component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ButtonDirective } from '../../ui/button/button.directive';
import { SlideRevealDirective } from '../../../core/directives/slide-reveal.directive';
import { HeroBanner } from '../../../core/model/hero-banner.model';
import { TranslatePipe } from '../../../core/pipes/translate.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    IconComponent,
    NgxSkeletonLoaderModule,
    ButtonDirective,
    SlideRevealDirective,
    TranslatePipe,
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  faPlayCircle = faPlayCircle;
  imageLoaded = false;
  @Input({ required: true }) heroBanner!: HeroBanner;
  @ViewChildren(SlideRevealDirective)
  slideDirectives!: QueryList<SlideRevealDirective>;

  onImageLoad() {
    this.imageLoaded = true;
    requestAnimationFrame(() => {
      this.slideDirectives?.forEach((dir) => dir.reobserve());
    });
  }
}
