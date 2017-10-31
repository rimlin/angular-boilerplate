import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';
import { EFFECTS } from './effects';
import { SERVICES  } from './services';
import { reducers } from './reducers';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    StoreModule.forFeature('home', reducers),

    EffectsModule.forFeature([ ...EFFECTS ]),
  ],
  declarations: [
    HomeComponent,

    ...CONTAINERS,
    ...COMPONENTS,
  ],
  exports: [
    HomeComponent,

    ...CONTAINERS,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class HomeModule {}
