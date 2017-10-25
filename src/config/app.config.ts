import { InjectionToken } from '@angular/core';

type ENV = 'development' | 'production' | 'stage';

export interface IAppConfig {
  host: string;
  server_port: number;
  env?: ENV;
  work_dir: string;
}

// Setup config for available environments
export const ProductionAppConfig: IAppConfig = {
  host: process.env.HOST || 'localhost',
  server_port: process.env.PORT || 8000,
  work_dir: 'dist',
};

export const StageAppConfig: IAppConfig = {
  host: process.env.HOST || 'localhost',
  server_port: process.env.PORT || 8000,
  work_dir: 'dist',
};

export const DevelopmentAppConfig: IAppConfig = {
  host: process.env.HOST || 'localhost',
  server_port: process.env.PORT || 8000,
  work_dir: 'build',
};


// Determine environment
export let environment: ENV;

if (process.env.ENV == 'development') {
  environment = 'development';
} else if (process.env.ENV == 'stage') {
  environment = 'stage';
} else {
  environment = 'production';
}

export let finiteConfig: IAppConfig;

if (environment == 'development') {
  finiteConfig = DevelopmentAppConfig;
} else if (environment == 'stage') {
  finiteConfig = StageAppConfig;
} else {
  finiteConfig = ProductionAppConfig;
}

export const AppConfig: IAppConfig = Object.assign({}, {
  environment
}, finiteConfig);

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');
