import { InjectionToken } from '@angular/core';

type ENV = 'development' | 'production';

export interface IAppConfig {
  host: string;
  server_port: number;
  env?: ENV;
  work_dir: string;
}

export const ProductionAppConfig: IAppConfig = {
  host: process.env.HOST || 'localhost',
  server_port: process.env.PORT || 8000,
  work_dir: 'dist',
};

export const DevelopmentAppConfig: IAppConfig = {
  host: process.env.HOST || 'localhost',
  server_port: process.env.PORT || 8000,
  work_dir: 'build',
};

const env: ENV = process.env.ENV == 'development' ? 'development' : 'production';

let finiteConfig: IAppConfig;

if (env == 'development') {
  finiteConfig = DevelopmentAppConfig;
} else {
  finiteConfig = ProductionAppConfig;
}

export const AppConfig: IAppConfig = Object.assign({}, {
  env
}, finiteConfig);

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');
