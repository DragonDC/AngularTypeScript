import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './book';
import { RouteParams } from '@angular/router-deprecated';
import { BookService } from './book.service';

@Component({
  selector: 'my-book-detail',
  templateUrl: 'app/book-detail.component.html',
  styleUrls: ['app/book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
	@Input() book: Book;
	@Output() close = new EventEmitter();
	error: any;
	navigated = false; // true if navigated here

	constructor(
		private bookService: BookService,
		private routeParams: RouteParams) {
	}
	
	ngOnInit() {
		if (this.routeParams.get('id') !== null) {
			let id = +this.routeParams.get('id');
			this.navigated = true;
			this.bookService.getBook(id)
				.then(book => this.book = book);
		} else {
			this.navigated = false;
			this.book = new Book();
		}
	}
	
	save() {
		this.bookService
			.save(this.book)
			.then(book => {
				this.book = book; // saved book, w/ id if new
				this.goBack(book);
			})
      .catch(error => this.error = error); // TODO: Display error message
	}
	
	goBack(savedBook: Book = null) {
		this.close.emit(savedBook);
		if (this.navigated) { window.history.back(); }
	}
}