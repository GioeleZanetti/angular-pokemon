import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
	selector: 'app-pokemon-search',
	templateUrl: './pokemon-search.component.html',
	styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {

	constructor(private router: Router) { }

	public ngOnInit(): void {
	}

	public redirectIfNotEmpty(name: string) {
		if (name.trim() !== "") {
			this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
				this.router.navigate([`pokemon/${name}`]);
			});
		}
	}

}
