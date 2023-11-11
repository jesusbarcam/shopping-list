import { Routes } from '@angular/router';

import { PageNotFound } from './components/page-not-found/page-not-found.component';
import { HomeView } from './components/home-view/home-view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeView },
  { path: '**', component: PageNotFound },
];
