import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UseMainSearch {
  #keyword: WritableSignal<string | null> = signal(null);

  updateKeyword(nextKeyword: string | null) {
    this.#keyword.set(nextKeyword);
  }

  startSearch() {
    console.log(
      'Iniciamos un nuevo proceso de busqueda con la palabra => ',
      this.keyword
    );
  }

  get keyword() {
    return this.#keyword();
  }
}
