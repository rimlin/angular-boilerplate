/**
 * This file should be temporary
 * See https://github.com/angular/angular-cli/pull/5194
 */
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import { ServerAppModuleNgFactory } from './ngfactory/app/server-app.module.ngfactory';
import { bootstrap } from './main.server.common';

bootstrap(ServerAppModuleNgFactory);
