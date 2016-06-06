import { Injectable } from '@angular/core';
import { Book } from './book';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';

@Injectable()
export class BookService {

	private booksUrl = 'app/books';  // URL to web api

	constructor(private http: Http) { }

	getBooks(): Promise<Book[]> {
		return this.http.get(this.booksUrl)
		   .toPromise()
		   .then(response => response.json().data)
		   .catch(this.handleError);
	}
	
	getBook(id: number) {
		return this.getBooks()
        .then(books => books.filter(book => book.id === id)[0]);
	}
	
	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
	
	private post(book: Book): Promise<Book> {
		let headers = new Headers({
		'Content-Type': 'application/json'});

		return this.http
			.post(this.booksUrl, JSON.stringify(book), {headers: headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}
	
	private put(book: Book) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.booksUrl}/${book.id}`;

		return this.http
			.put(url, JSON.stringify(book), {headers: headers})
			.toPromise()
			.then(() => book)
			.catch(this.handleError);
	}
	
	delete(book: Book) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.booksUrl}/${book.id}`;

		return this.http
			.delete(url, headers)
			.toPromise()
			.catch(this.handleError);
	}
	
	save(book: Book): Promise<Book>  {
		if (book.id) {
			return this.put(book);
		}
		return this.post(book);
	}
}