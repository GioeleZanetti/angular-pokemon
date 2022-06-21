import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../Pokemon';

@Component({
	selector: 'app-pokedex',
	templateUrl: './pokedex.component.html',
	styleUrls: ['./pokedex.component.scss']
})

export class PokedexComponent implements OnInit {

	public pokemons: Pokemon[] = [];

	constructor(
		private rederer: Renderer2,
		private pokedex: PokedexService
	) { }

	public ngOnInit(): void {
		this.pokemons = this.pokedex.getPokedex();
	}

	public releaseFromPokedex(pokemon: Pokemon): void {
		this.pokedex.removeFromPokedex(pokemon);
		this.pokemons = this.pokedex.getPokedex();
	}

	public showDetailWindow(pokemon: Pokemon) {
		let p = document.getElementById(pokemon.name + "Details");
		if (p) {
			p.style.display = 'flex';
		}
	}

}
