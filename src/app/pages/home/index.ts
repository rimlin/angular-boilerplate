import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from './components';

import { DashboardEffects } from './effects/dashboard';

import { HomeRoutingModule } from './home-routing.module';

import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,

    StoreModule.forFeature('home', reducers),

    EffectsModule.forFeature([DashboardEffects]),
  ],
  declarations: [
  ],
  providers: [],
})
export class HomeModule {}
