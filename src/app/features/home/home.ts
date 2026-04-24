import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, catchError, of, tap, switchMap } from 'rxjs';



import { CrossBanner } from '../../shared/sections/comming-soon-banner/cross-banner';
import { Hero } from '../../shared/sections/hero/hero';
import { OurServices } from '../../shared/sections/our-services/our-services';
import { HomeService } from '../../core/services/home';
import { HomeResponse } from '../../core/model/home';
import { CommonModule } from '@angular/common';
import { Loader } from '../../shared/ui/loader/loader';
import { Solutions } from '../../shared/sections/solutions/solutions';
import { Stats } from '../../shared/sections/app-stats/stats';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, CrossBanner, OurServices, CommonModule, Loader, Solutions, Stats],  
  templateUrl: './home.html',
})
export class Home {
  loading = signal(true);
  error = signal(false);

  TEAM_MEMBERS:any = [
  {
    id: '1',
    name: 'John Smith',
    role: 'Lead Developer',
    borderColor: 'blue',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Emma Wilson',
    role: 'Designer',
    borderColor: 'pink',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Alex Chen',
    role: 'PM',
    borderColor: 'green',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: '4',
    name: 'Sarah Brown',
    role: 'QA',
    borderColor: 'purple',
    image: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: '5',
    name: 'Michael Lee',
    role: 'Backend',
    borderColor: 'white',
    image: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: '6',
    name: 'Lisa Garcia',
    role: 'DevOps',
    borderColor: 'blue',
    image: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: '7',
    name: 'Tom Johnson',
    role: 'Marketing',
    borderColor: 'pink',
    image: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: '8',
    name: 'Nina Patel',
    role: 'Analytics',
    borderColor: 'green',
    image: 'https://i.pravatar.cc/150?img=8',
  },
];

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