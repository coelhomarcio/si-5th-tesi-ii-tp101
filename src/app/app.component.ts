import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	template:
	          `
		          <app-top-bar [title]="title"></app-top-bar>
		          <router-outlet></router-outlet>
		          <app-bottom-bar></app-bottom-bar>
	          `
})
export class AppComponent {
	title = "Coelho Store";
}
