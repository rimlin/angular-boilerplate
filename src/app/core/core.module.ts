import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppContainer } from './components/app';


export const CONTAINERS = [
  AppContainer,
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: CONTAINERS,
  exports: CONTAINERS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
