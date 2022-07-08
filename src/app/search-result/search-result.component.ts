import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { combineLatestWith, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pokemon } from '../models/Pokemon';
import { PokemonState } from '../store/reducers/pokemon.reducer';
import { getPokemon, getError } from '../store/selectors/pokemon.selectors';
import { addPokemonToAvailable } from '../store/actions/available.actions';
import { AvailableState } from '../store/reducers/available.reducer';

@Component({
	selector: 'app-search-result',
	templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
	public pokemon$: Observable<Pokemon | undefined> = this.pokemonStore.pipe(
		select(getPokemon)
	);
	public error$: Observable<string> = this.pokemonStore.pipe(
		select(getError)
	);
	public pokemon?: Pokemon;
	public error: string = '';

	constructor(
		private pokemonStore: Store<PokemonState>,
		private availableStore: Store<AvailableState>
	) {}

	public ngOnInit(): void {
		this.pokemon$
			.pipe(
				combineLatestWith(this.error$),
				map(([pokemon, error]): PokemonState => {
					return { pokemon: pokemon, error: error };
				})
			)
			.subscribe((result: PokemonState) => {
				this.pokemon = result.pokemon;
				this.error = result.error;
				if (result.pokemon)
					this.availableStore.dispatch(
						addPokemonToAvailable({ pokemon: result.pokemon })
					);
			});
	}
}
