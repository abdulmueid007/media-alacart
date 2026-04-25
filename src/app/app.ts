import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './core/layout/header/header';
import { Footer } from './core/layout/footer/footer';
import { Loader } from './shared/ui/loader/loader';
import { LoaderService } from './core/services/loader.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Loader],
  template: `
  <app-header />
<router-outlet />
@if (!loader.isLoading()) {<app-footer />}
   @if (loader.isLoading()) {
  <app-loader />
}
  `,
})
export class App {
  loader = inject(LoaderService);
}
