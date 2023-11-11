import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './shopping-list-app.routes';

export const shoppingListAppConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
