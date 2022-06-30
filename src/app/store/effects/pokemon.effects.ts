import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { PokemonApiService } from '../../services/pokemon-api.service';
import {
	pokemonSearchedSuccessfully,
	pokemonSearchedUnsuccessfully,
	searchPokemon
} from '../actions/pokemon-search.actions';
import { notFoundPokemon, Pokemon } from '../../models/Pokemon';

@Injectable()
export class PokemonEffects {

	public searchPokemon$ = createEffect(() => this.actions$.pipe(
			ofType(searchPokemon),
			exhaustMap((action) => this.pokemonApi.getPokemonByName(action.name)
				.pipe(
					map((pokemon: Pokemon) => (pokemonSearchedSuccessfully({pokemon}))),
					catchError(() => {
						return of(pokemonSearchedUnsuccessfully({pokemon: notFoundPokemon}))
					})
				))
		)
	);

	constructor(
		private actions$: Actions,
		private pokemonApi: PokemonApiService
	) {}
}