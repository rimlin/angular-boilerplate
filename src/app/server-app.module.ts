import { NgModule, APP_BOOTSTRAP_LISTENER, ApplicationRef, Inject, Injector } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ServerTransferStateModule } from '../modules/transfer-state/server-transfer-state.module';
import { AppContainer } from './core/components/app';
import { AppModule } from './app.module';
import { TransferState } from '../modules/transfer-state/transfer-state';
import { BrowserModule } from '@angular/platform-browser';
import { LocalStorage } from '../modules/local-storage/local-storage';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { CookieBackendService, CookieService } from 'ngx-cookie';


export function onBootstrap(appRef: ApplicationRef, transferState: TransferState) {
  return () => {
    appRef.isStable
      .filter(stable => stable)
      .first()
      .subscribe(() => {
        transferState.inject();
      });
  };
}

@NgModule({
  bootstrap: [ AppContainer ],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: onBootstrap,
      multi: true,
      deps: [
        ApplicationRef,
        TransferState
      ]
    },
    {
      provide: LocalStorage,
      useValue: { getItem() {} }
    },
    {
      provide: CookieService,
      useClass: CookieBackendService
    }
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'wf-app'
    }),
    ServerModule,
    ServerTransferStateModule,
    AppModule
  ]
})
export class ServerAppModule {
  constructor(
    private injector: Injector,
    private transferState: TransferState,
  ) {
    let req = this.injector.get(REQUEST);
    this.transferState.set('cookies', req.cookies);
  }
}
