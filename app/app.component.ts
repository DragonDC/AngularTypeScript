import { Component } from '@angular/core';
import { Book } from './book';
import { BookDetailComponent } from './book-detail.component';

@Component({
  selector: 'my-app',
  template: `
			<h1>{{title}}</h1>
			<h2>My Books</h2>
			<ul class="bookes">
			  <li *ngFor="let book of bookes" [class.selected]="book === selectedbook"
			  (click)="onSelect(book)">
				<span class="badge">{{book.id}}</span> {{book.name}}
			  </li>
			</ul>
			<my-book-detail [book]="selectedbook">
			</my-book-detail>`,
	styles:[`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .bookes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .bookes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .bookes li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .bookes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .bookes .text {
        position: relative;
        top: -3px;
      }
      .bookes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `],
	directives: [BookDetailComponent]	
})
export class AppComponent { 
	title = 'Tour of bookes';
	public bookes = BOOKS;
	selectedbook: Book;
	onSelect(book: Book) { 
		this.selectedbook = book; 
	}
}

var BOOKS: Book[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];