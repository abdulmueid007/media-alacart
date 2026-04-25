import { Component, DOCUMENT, inject, Renderer2, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, catchError, of, tap, switchMap } from 'rxjs';

import { CrossBanner } from '../../shared/sections/comming-soon-banner/cross-banner';
import { Hero } from '../../shared/sections/hero/hero';
import { OurServices } from '../../shared/sections/our-services/our-services';
import { HomeService } from '../../core/services/home.service';
import { HomeResponse } from '../../core/model/home.model';
import { CommonModule } from '@angular/common';
import { Solutions } from '../../shared/sections/solutions/solutions';
import { Stats } from '../../shared/sections/app-stats/stats';
import { Media } from '../../shared/sections/media/media';
import { LoaderService } from '../../core/services/loader.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, CrossBanner, OurServices, CommonModule, Solutions, Stats, Media],
  templateUrl: './home.html',
})
export class Home {
  error = signal(false);
  private loader = inject(LoaderService);

  private homeService = inject(HomeService);

  retryCount = signal(0);
  maxRetries = 3;

  private reloadTrigger = signal(0);

  private renderer = inject(Renderer2);
  private doc = inject(DOCUMENT);

  homeData = toSignal<HomeResponse | null>(
    toObservable(this.reloadTrigger).pipe(
      switchMap(() => {
        this.loader.show();

        return this.homeService.getHomeData().pipe(
          map((res) => res?.[0] ?? null),

          tap(() => {
            this.loader.hide();
            this.error.set(false);
            this.removeFullHeight();
          }),

          catchError(() => {
            this.error.set(true);
            this.loader.hide();
            return of(null);
          }),
        );
      }),
    ),
    { initialValue: null },
  );

  retry() {
    if (this.retryCount() >= this.maxRetries) return;
    this.loader.show();

    this.retryCount.update((c) => c + 1);
    this.reloadTrigger.update((v) => v + 1);
  }

  removeFullHeight() {
    this.renderer.removeClass(this.doc.body.querySelector('app-root'), 'full-height');
  }
}
