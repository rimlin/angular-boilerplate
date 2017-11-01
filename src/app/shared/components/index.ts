import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeatmapComponent } from './heatmap.component';

export const COMPONENTS = [
  HeatmapComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
