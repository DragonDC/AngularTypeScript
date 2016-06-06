import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from './book.service';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-books',
  templateUrl: 'app/books.component.html',
  styleUrls:  ['app/books.component.css'],
  directives: [BookDetailComponent]
})
export class BooksComponent implements OnInit { 
	books: Book[];
	selectedBook: Book;
	addingBook = false;
	error: any;
  
	constructor(
		private router: Router,
		private bookService: BookService) { }
	
	getBooks() {
		this.bookService
			.getBooks()
			.then(books => this.books = books)
			.catch(error => this.error = error); // TODO: Display error message
	}
	
	ngOnInit() {
		this.getBooks();
	}
	
	onSelect(book: Book) {
		this.selectedBook = book;
		this.addingBook = false;
	}
	
	gotoDetail() {
		this.router.navigate(['BookDetail', { id: this.selectedBook.id }]);
	}
	
	addBook() {
		this.addingBook = true;
		this.selectedBook = null;
	}

	close(savedBook: Book) {
		this.addingBook = false;
		if (savedBook) { this.getBooks(); }
	}
	
	delete(book: Book, event: any) {
		event.stopPropagation();
		this.bookService
		.delete(book)
		.then(res => {
			this.books = this.books.filter(b => b !== book);
			if (this.selectedBook === book) { this.selectedBook = null; }
		})
		.catch(error => this.error = error); // TODO: Display error message
	}

}
