import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import { ServerAppModule } from './app/server-app.module';
import { bootstrap } from './main.server.common';

bootstrap(ServerAppModule);
