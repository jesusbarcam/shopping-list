import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { UseMainSearch } from '../../hooks/use-main-search/use-main-search.service';

@Component({
  selector: 'main-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <input type="text" [formControl]="keywordForm" />
    <button (click)="startSearch()">Buscar</button>`,

  styles: [],
})
export class MainSearch implements OnInit {
  #useSearch = inject(UseMainSearch);

  #keywordForm = new FormControl(null);

  ngOnInit(): void {
    this.#startKeywordChangesSubscription();
  }

  #startKeywordChangesSubscription() {
    this.#keywordForm.valueChanges
      .pipe()
      .subscribe((value) => this.#useSearch.updateKeyword(value));
  }

  startSearch() {
    this.#useSearch.startSearch();
  }

  get keywordForm() {
    return this.#keywordForm;
  }

  get currentKeyword() {
    return this.#useSearch.keyword;
  }
}
