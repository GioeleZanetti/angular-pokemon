import { Component, OnInit, OnDestroy } from '@angular/core';

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
	private pokemon$ = this.pokemonStore
		.pipe(select(getPokemon))
		.subscribe((result: Pokemon | undefined) => {
			this.pokemon = result;
		});
	private error$ = this.pokemonStore
		.pipe(select(getError))
		.subscribe((result: string) => {
			this.error = result;
		});
	public pokemon?: Pokemon;
	public error: string = '';

	constructor(
		private pokemonStore: Store<PokemonState>,
		private availableStore: Store<AvailableState>
	) {}

	public ngOnInit(): void {
		this.pokemon$.add(this.error$);
	}

	public ngOnDestroy(): void {
		this.pokemon$.unsubscribe();
	}
}
