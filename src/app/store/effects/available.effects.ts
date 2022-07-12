import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AvailableService } from '../../services/available.service';
import {
	addPokemonToAvailable,
	getPokemonByName,
	pokemonAddeddSuccessfully,
	pokemonReturnedSuccessfully,
	pokemonReturnedUnsuccessfully,
	setPokemonInPokedex,
	settedPokemonInPokedex,
} from '../actions/available.actions';
import { Pokemon } from '../../models/Pokemon';

@Injectable()
export class AvailableEffects {
	public getPokemonByName$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getPokemonByName),
			exhaustMap((action) =>
				this.available.getPokemonByNameObservable(action.name).pipe(
					map((pokemon: Pokemon) =>
						pokemonReturnedSuccessfully({ pokemon })
					),
					catchError(() => {
						return of(
							pokemonReturnedUnsuccessfully({
								error: `No Results For ${action.name}`,
							})
						);
					})
				)
			)
		)
	);

	public addToAvailable$ = createEffect(() =>
		this.actions$.pipe(
			ofType(addPokemonToAvailable),
			exhaustMap((action) =>
				this.available
					.addToAvailableObservable(action.pokemon)
					.pipe(
						map((available: Pokemon[]) =>
							pokemonAddeddSuccessfully({ available })
						)
					)
			)
		)
	);

	public setInPokedex$ = createEffect(() =>
		this.actions$.pipe(
			ofType(setPokemonInPokedex),
			exhaustMap((action) =>
				this.available
					.setInPokedex(action.pokemon, action.state)
					.pipe(
						map((pokemon: Pokemon) =>
							settedPokemonInPokedex({ pokemon })
						)
					)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private available: AvailableService
	) {}
}
