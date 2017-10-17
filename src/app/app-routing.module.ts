import { Routes } from '@angular/router';
//import { AuthGuard } from './auth/services/auth-guard.service';
//import { NotFoundPageComponent } from './core/containers/not-found-page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './pages/home/index#HomeModule',
    //canActivate: [AuthGuard],
  },
  //{ path: '**', component: NotFoundPageComponent },
];
