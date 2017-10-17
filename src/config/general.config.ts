import { InjectionToken } from '@angular/core';

export interface IGeneralConfig {
  ya_metrica_id: number;
  site_screen_desktop_breakpoint: number;
}

export const GeneralConfig: IGeneralConfig = {
  ya_metrica_id: 45802575,
  site_screen_desktop_breakpoint: 960,
};

export let GENERAL_CONFIG = new InjectionToken<IGeneralConfig>('general.config');
