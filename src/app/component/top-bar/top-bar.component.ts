import { Component, Input } from "@angular/core";

@Component({
	selector:    "app-top-bar",
	templateUrl: "./top-bar.component.html"
})
export class TopBarComponent {
	@Input() public title!: String;
}
