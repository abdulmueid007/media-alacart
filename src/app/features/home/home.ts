import { Component, effect, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, catchError, of, tap, switchMap } from 'rxjs';



import { CrossBanner } from '../../shared/sections/comming-soon-banner/cross-banner';
import { Hero } from '../../shared/sections/hero/hero';
import { OurServices } from '../../shared/sections/our-services/our-services';
import { HomeService } from '../../core/services/home';
import { HomeResponse } from '../../core/model/home';
import { CommonModule } from '@angular/common';
import { Loader } from '../../shared/ui/loader/loader';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, CrossBanner, OurServices, CommonModule, Loader],  
  templateUrl: './home.html',
})
export class Home {

  loading = signal(true);
  error = signal(false);

  private homeService = inject(HomeService);

  retryCount = signal(0);
  maxRetries = 3;

  private reloadTrigger = signal(0);

  homeData = toSignal<HomeResponse | null>(
    toObservable(this.reloadTrigger).pipe(
      switchMap(() => {
        this.loading.set(true);

        return this.homeService.getHomeData().pipe(
          map(res => res?.[0] ?? null),

          tap(() => {
            this.loading.set(false);
            this.error.set(false);
          }),

          catchError(err => {
            this.error.set(true);
            this.loading.set(false);
            return of(null);
          })
        );
      })
    ),
    { initialValue: null }
  );

  retry() {
    if (this.retryCount() >= this.maxRetries) return;

    this.retryCount.update(c => c + 1);
    this.reloadTrigger.update(v => v + 1);
  }
  
}