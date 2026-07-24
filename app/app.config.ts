import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { providePrimeNG } from "primeng/config";
import Aura from "@primeuix/themes/aura";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: Aura,
      },
      license: 'eyJpZCI6Ijg2NjQ5MTIwLTNjNzgtNDRkOS04NTZjLTJiM2Y2MzMzNGIwMSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODQ2MDIxMTIsImV4cCI6MTgxNjEzODExMn0.pbp_cBBJT7Cg6bTTQFTuB6gVvirqIGjuSUPkwxPjOc-cpdsR1_gX9LuUW6jcxJ_hrBklwNIy6fJ4FnvTjQ4hAA',
    }),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient()
  ]
};
