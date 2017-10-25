import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { enableProdMode } from '@angular/core';
import * as favicon from 'serve-favicon';

import { AppConfig } from './config';

enableProdMode();

export function bootstrap(ServerAppModule: any) {
  const app = express();
  const host = AppConfig.host;
  const port = AppConfig.server_port;
  const baseUrl = `http://${host}:${port}`;

  app.use(cookieParser());
  app.use(bodyParser.json());

  app.engine('html', ngExpressEngine({
    bootstrap: ServerAppModule
  }));

  app.set('view engine', 'html');
  app.set('views', 'src');

  app.use('/', express.static(AppConfig.work_dir, { index: false }));

  app.get('/*', (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render(`../${AppConfig.work_dir}/index`, {
      req: req,
      res: res
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
  });

  app.listen(port, () => {
    console.log(`Listening at ${baseUrl} in ${AppConfig.environment} mode`);
  });
};
