import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Pokemon } from '../models/Pokemon';
import { PokemonState } from '../store/reducers/pokemon.reducer';
import { PokedexService } from '../services/pokedex.service';

@Component({
	selector: 'app-search-result',
	templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit{

	public pokemon?: Pokemon;
	public pokemon$: Observable<Pokemon | undefined> = this.store.select('pokemon')

	constructor(
		private store: Store<PokemonState>,
		private pokedex: PokedexService
	) { }

	public ngOnInit(): void {
		this.pokemon$.subscribe((pokemon: Pokemon | undefined) => {
			// @ts-ignore
			const realPokemon = pokemon.pokemon;
			if(realPokemon){
				this.pokedex.addAvailable(realPokemon);
				this.pokemon = realPokemon
			}
		})
    }

}
