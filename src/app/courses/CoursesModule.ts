import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from '../courses-list/courses-list.component';




@NgModule({
	imports: [
		CommonModule,
		CoursesListComponent
	],
	exports: [
		CoursesListComponent
	],
	declarations: []
})
export class CoursesModule {
}
