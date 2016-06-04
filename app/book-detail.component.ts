import { Component, Input } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'my-book-detail',
  template: `
  <div *ngIf="book">
    <h2>{{book.name}} details!</h2>
    <div><label>id: </label>{{book.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="book.name" placeholder="name"/>
    </div>
  </div>
`
})
export class BookDetailComponent {
	@Input()
	book: Book;
}