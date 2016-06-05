import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { RouteParams } from '@angular/router-deprecated';
import { BookService } from './book.service';

@Component({
  selector: 'my-book-detail',
  templateUrl: 'app/book-detail.component.html',
  styleUrls: ['app/book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
	book: Book;

	constructor(
		private bookService: BookService,
		private routeParams: RouteParams) {
	}
	ngOnInit() {
		let id = +this.routeParams.get('id');
		this.bookService.getBook(id)
		.then(book => this.book = book);
	}
	goBack() {
		window.history.back();
	}
}