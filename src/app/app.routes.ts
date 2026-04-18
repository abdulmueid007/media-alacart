import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then(m => m.Home),
  },
  // future routes go here — each feature lazy-loaded
  // { path: 'features', loadComponent: () => import('./features/features/features').then(m => m.Features) },
];
