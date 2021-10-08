import { NgModule }                from "@angular/core";
import { BrowserModule }           from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule }  from "./module/app-routing.module";
import { AppMaterialModule } from "./module/material.module";

import { AppComponent }           from "./app.component";
import { TopBarComponent }        from "./component/top-bar/top-bar.component";
import { BottomBarComponent }     from "./component/bottom-bar/bottom-bar.component";
import { ProductListComponent }   from "./component/product-list/product-list.component";
import { ProductAlertsComponent } from "./component/product-alerts/product-alerts.component";

@NgModule({
	declarations: [
		AppComponent,
		TopBarComponent,
		BottomBarComponent,
		ProductListComponent,
		ProductAlertsComponent
	],
	imports:      [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		AppMaterialModule
	],
	providers:    [],
	bootstrap:    [AppComponent]
})
export class AppModule {
}
