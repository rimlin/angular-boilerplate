import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesEnum, PagesEnum } from '../../shared/enums';

import { DashboardContainer } from './containers';
import { DashboardResolver } from './resolvers';

export const homeRoutes: Routes = [
  {
    path: '',
    component: DashboardContainer,
    resolve: {
        resolver: DashboardResolver,
    },
    data: {
      title: 'Dashboard',
      module: ModulesEnum.HOME,
      page: PagesEnum.HOME_DASHBOARD
    },
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [
    DashboardResolver
  ],
})
export class HomeRoutingModule { }
