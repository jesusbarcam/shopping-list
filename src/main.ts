import { bootstrapApplication } from '@angular/platform-browser';

import { shoppingListAppConfig } from './app/shopping-list-app.config';
import { ShoppingListApp } from './app/shopping-list-app.component';

bootstrapApplication(ShoppingListApp, shoppingListAppConfig).catch((err) =>
  console.error(err)
);
