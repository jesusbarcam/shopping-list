import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainSearch } from '../main-search/main-search.component';

@Component({
  selector: 'home-view',
  standalone: true,
  imports: [CommonModule, MainSearch],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<main-search />`,
  styles: [],
})
export class HomeView {}
