import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Product } from "../../products";

@Component({
	selector:    "app-product-alerts",
	templateUrl: "./product-alerts.component.html"
})
export class ProductAlertsComponent {
	@Input() public product!: Product;
	@Output() public notify = new EventEmitter();
}
