import { NgModule } from '@angular/core';

import { APP_SERVICES } from './services';

@NgModule({
    imports: [
    ],
    exports: [
    ],
    declarations: [],
    providers: [
      ...APP_SERVICES,
    ],
})
export class CoreModule { }
