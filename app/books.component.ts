import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from './book.service';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-books',
  templateUrl: 'app/books.component.html',
  styleUrls:  ['app/books.component.css']
})
export class BooksComponent implements OnInit { 
	books: Book[];
	selectedBook: Book;
	constructor(
		private router: Router,
		private bookService: BookService) { }
	
	getBooks() {
		this.bookService.getBooks().then(books => this.books = books);
	}
	
	ngOnInit() {
		this.getBooks();
	}
	onSelect(book: Book) { this.selectedBook = book; }
	
	gotoDetail() {
		this.router.navigate(['BookDetail', { id: this.selectedBook.id }]);
	}
}
