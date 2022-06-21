import { Component, OnInit } from '@angular/core';

import { PokedexService } from './services/pokedex.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	private title = 'pokemon';

	constructor(private pokedex: PokedexService) {
	}

	public ngOnInit(): void {
		this.pokedex.initialise();
	}
}
