import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonApiService } from '../services/pokemon-api.service';
import { Pokemon } from '../models/Pokemon';
import { PokedexService } from '../services/pokedex.service';

@Component({
	selector: 'app-search-result',
	templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

	@Input() pokemon?: Pokemon;

	constructor(
		private pokedex: PokedexService,
		private pokemonApi: PokemonApiService,
		private route: ActivatedRoute
	) { }

	public ngOnInit(): void {
		this.getPokemonIfExists()
	}

	public getPokemonIfExists(): void {
		const name = String(this.route.snapshot.paramMap.get('name'));
		this.pokemonApi.getPokemonByName(name)
			.subscribe(pokemon => this.setPokemon(pokemon));
	}

	public setPokemon(pokemon: Pokemon): void {
		this.pokemon = pokemon;
		if(pokemon.id !== -1){
			this.pokedex.addAvailable(pokemon);
		}
	}



}
