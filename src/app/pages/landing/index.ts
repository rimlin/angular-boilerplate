import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';

import { LandingComponent } from './landing.component';

import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
  ],
  declarations: [
    LandingComponent,

    ...CONTAINERS,
    ...COMPONENTS,
  ],
  exports: [
    LandingComponent,

    ...CONTAINERS,
  ],
  providers: [],
})
export class LandingModule {}
