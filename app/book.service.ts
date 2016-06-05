import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable()
export class BookService {
	getBooks(){
		return Promise.resolve(BOOKS);
	}
	getBooksSlowly() {
		return new Promise<Book[]>(resolve =>
		setTimeout(()=>resolve(BOOKS), 2000) // 2 seconds
		);
	}
	getBook(id: number) {
		return this.getBooks()
        .then(books => books.filter(book => book.id === id)[0]);
	}
}