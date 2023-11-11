import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `<div><p>Ups! ... Esta Pagina no existe</p></div>`,
  styles: [],
})
export class PageNotFound {}
