import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardContainer } from './dashboard';

export const CONTAINERS = [
    DashboardContainer,
];

@NgModule({
    declarations: [
        ...CONTAINERS,
    ],
    imports: [ 
        CommonModule 
    ],
    exports: [
        ...CONTAINERS
    ],
    providers: [],
})
export class ComponentsModule {}