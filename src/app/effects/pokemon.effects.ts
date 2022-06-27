import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {EMPTY, exhaustMap} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PokemonApiService } from '../services/pokemon-api.service';
import { searchPokemon } from "../actions/pokemon-search.actions";

@Injectable()
export class PokemonEffects {

	public searchPokemon$ = createEffect(() => this.actions$.pipe(
			ofType(searchPokemon),
			exhaustMap((action) => this.pokemonApi.getPokemonByName(action.name)
				.pipe(
					map(pokemon => ({ type: '[Pokemon API] Pokemon Loaded Successfully', payload: pokemon })),
					catchError(() => EMPTY)
				))
		)
	);

	constructor(
		private actions$: Actions,
		private pokemonApi: PokemonApiService
	) {}
}