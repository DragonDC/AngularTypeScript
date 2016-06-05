import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	books: Book[] = [];
	
	constructor(
		private router: Router,
		private bookService: BookService) {
	}
	ngOnInit() {
		this.bookService.getBooks()
		.then(books => this.books = books.slice(1,5));
	}
	gotoDetail(book: Book) {
		let link = ['BookDetail', { id: book.id }];
		this.router.navigate(link);
	}
}