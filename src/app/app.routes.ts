import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    redirectTo: '/',
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./orders/orders.component').then((m) => m.OrdersComponent),
  },
  {
    path: 'servers',
    loadComponent: () =>
      import('./servers/servers.component').then((m) => m.ServersComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
