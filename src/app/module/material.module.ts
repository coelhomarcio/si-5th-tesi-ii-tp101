import { NgModule }         from "@angular/core";
import { MatIconModule }    from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";

const materials = [
	MatIconModule,
	MatDividerModule
];

@NgModule({
	imports: materials,
	exports: materials
})
export class AppMaterialModule {
}
