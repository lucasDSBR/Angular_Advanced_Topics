import { Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { checkerGuard } from './guards/checker.guard';
import { blockerGuard } from './guards/blocker.guard';

export const routes: Routes = [
	{
		path: 'courses',
		children:[
			{
                path: 'new',
                component: CoursesListComponent,
				canActivate: [checkerGuard]
            },
			{
                path: 'update',
                component: CoursesListComponent,
				canDeactivate: [blockerGuard]
            },
			{
                path: ':name',
                component: CoursesListComponent,
            }
		]
	}
];
