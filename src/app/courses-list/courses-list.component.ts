import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit {


	name = '';
	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {
		// this.name = this.activatedRoute.snapshot.params['name'];
		this.activatedRoute.params.subscribe(params => {
			this.name = params['name'];
		})
	}


	ngOnInit(): void {
		// this.router.navigate(['/courses/react']);
	}
}
