import { Component, OnInit } from '@angular/core';

import {MatDialogRef} from '@angular/material/dialog';

import { PokedexService } from '../services/pokedex.service';
import { Pokemon } from '../models/Pokemon';

@Component({
	selector: 'app-pokedex',
	templateUrl: './pokedex.component.html',
	styleUrls: ['./pokedex.component.scss']
})

export class PokedexComponent implements OnInit {

	public pokemons: Pokemon[] = [];

	constructor(
		private pokedex: PokedexService,
		public dialogRef: MatDialogRef<PokedexComponent>
	) { }

	public ngOnInit(): void {
		this.pokemons = this.pokedex.getPokedex();
	}

	public releaseFromPokedex(pokemon: Pokemon): void {
		this.pokedex.removeFromPokedex(pokemon);
		this.pokemons = this.pokedex.getPokedex();
	}

	public showDetailWindow(pokemon: Pokemon): void {
		const pokemonDetails = document.getElementById(pokemon.name + "Details");
		if (pokemonDetails) {
			pokemonDetails.style.display = 'flex';
		}
	}

	public close(): void {
		this.dialogRef.close();
	}

}
