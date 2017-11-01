import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './components';
import { DirectivesModule } from './directives';
import { PipesModule } from './pipes';
import { REFS } from './refs';

const EXTERNAL_MODULES = [

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    ComponentsModule,
    DirectivesModule,
    PipesModule,

    ...EXTERNAL_MODULES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ComponentsModule,

    ...EXTERNAL_MODULES,
  ],
  declarations: [
  ],
  providers: [
    ...REFS,
  ]
})
export class SharedModule { }
