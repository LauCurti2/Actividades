import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'actividades',
    loadComponent: () => import('./actividades/actividades.page').then( m => m.ActividadesPage)
  },
  {
    path: 'mis-actividades',
    loadComponent: () => import('./mis-actividades/mis-actividades.page').then( m => m.MisActividadesPage)
  },
  {
    path: 'set-up',
    loadComponent: () => import('./set-up/set-up.page').then( m => m.SetUpPage)
  },
  {
    path: 'activities-detail',
    loadComponent: () => import('./activities-detail/activities-detail.page').then( m => m.ActivitiesDetailPage)
  },
  {
    path: 'user-detail',
    loadComponent: () => import('./user-detail/user-detail.page').then( m => m.UserDetailPage)
  },
];
