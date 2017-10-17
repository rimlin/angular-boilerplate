import { InjectionToken } from '@angular/core';

export interface IApiConfig {
  root_url: string;
}

export const ApiConfig: IApiConfig = {
  root_url: '',
};

export let API_CONFIG = new InjectionToken<IApiConfig>('api.config');
