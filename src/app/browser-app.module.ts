import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppContainer } from './core/components/app';
import { AppModule } from './app.module';
import { BrowserTransferStateModule } from '../modules/transfer-state/browser-transfer-state.module';
import { LocalStorage } from '../modules/local-storage/local-storage';

@NgModule({
  bootstrap: [ AppContainer ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'wf-app'
    }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    AppModule
  ],
  providers: [
    {
      provide: LocalStorage,
      useValue: window.localStorage
    }
  ]
})
export class BrowserAppModule {}
