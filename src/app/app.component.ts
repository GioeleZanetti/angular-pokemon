import { Component, OnInit } from '@angular/core';

import { PokedexService } from './services/pokedex.service';
import { AvailableService } from './services/available.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'pokemon';

	constructor(
		private pokedex: PokedexService,
		private available: AvailableService
	) { }

	public ngOnInit(): void {
		this.pokedex.initialise();
		this.available.initialise();
	}
}
