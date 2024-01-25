import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'security',
    loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
}
];
