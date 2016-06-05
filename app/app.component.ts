import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Component }       from '@angular/core';
import { BookService }     from './book.service';
import { BooksComponent } from './books.component';
import { DashboardComponent } from './dashboard.component';
import { BookDetailComponent } from './book-detail.component';

@Component({
  selector: 'my-app',
  template: `
	<h1>{{title}}</h1>
	<nav>
		<a [routerLink]="['Dashboard']">Dashboard</a>
		<a [routerLink]="['Books']">Books</a>
	</nav>
	<router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
	ROUTER_PROVIDERS,
	BookService
  ]
})

@RouteConfig([
	{
	  path: '/detail/:id',
	  name: 'BookDetail',
	  component: BookDetailComponent
	},
	{
	  path: '/dashboard',
	  name: 'Dashboard',
	  component: DashboardComponent,
	  useAsDefault: true
	},
	{
		path: '/books',
		name: 'Books',
		component: BooksComponent
	}	
])

export class AppComponent {
  title = 'Tour of Books';
}