import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHotToastConfig} from "@ngxpert/hot-toast";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(),
    provideHotToastConfig(
      {
        duration: 5000,
        position: 'bottom-center',
        style: {
          backgroundColor: 'oklch(var(--b3))',
          color: 'oklch(var(--bc))',
        }
      }
    ),]
};
