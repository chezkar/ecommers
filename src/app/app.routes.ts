import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'security',
    loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
  },
  {
    path: '',
    // canActivate: [authGuard],
    loadChildren: () => import('./home/home-routing.module').then((m) => m.HomeRoutingModule)
  }
];
