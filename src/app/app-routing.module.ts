import { Routes } from '@angular/router';
//import { AuthGuard } from './auth/services/auth-guard.service';
//import { NotFoundPageComponent } from './core/containers/not-found-page';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/landing/index#LandingModule',
  },
  {
    path: 'home',
    loadChildren: './pages/home/index#HomeModule',
  },
  //{ path: '**', component: NotFoundPageComponent },
];
