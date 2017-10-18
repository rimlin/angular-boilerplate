import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesEnum, PagesEnum } from '../../shared/enums';

import { LandingComponent } from './landing.component';
import { MainContainer } from './containers';

export const landingRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        component: MainContainer,
        data: {
          title: 'Main',
          module: ModulesEnum.LANDING,
          page: PagesEnum.LANDING_MAIN
        },
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(landingRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [
  ],
})
export class LandingRoutingModule { }
