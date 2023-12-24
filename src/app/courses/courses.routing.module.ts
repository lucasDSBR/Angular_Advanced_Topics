import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { checkerGuard } from '../guards/checker.guard';
import { blockerGuard } from '../guards/blocker.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: 'courses',
		children:[
			{
                path: 'new',
                component: CoursesListComponent,
            },
			{
                path: 'update',
                component: CoursesListComponent,
            },
			{
                path: ':name',
                component: CoursesListComponent,
            }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
  })

export class CoursesRouteModule {}