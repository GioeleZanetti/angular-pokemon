import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { mergeMap } from 'rxjs';

import {
	addPokemon,
	loadPokedexKey,
	pokedexLoadedSuccessfully,
	pokemonAddedSuccessfully,
	pokemonRemovedSuccessfully,
	removePokemon,
} from '../actions/pokedex.actions';
import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from '../../models/Pokemon';

@Injectable()
export class PokedexEffects {
	public loadPokedex$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadPokedexKey),
			mergeMap(() =>
				this.pokedex
					.getObservablePokedex()
					.pipe(
						map((pokedex: Pokemon[]) =>
							pokedexLoadedSuccessfully({ pokedex })
						)
					)
			)
		)
	);

	public removePokemonFromPokedex$ = createEffect(() =>
		this.actions$.pipe(
			ofType(removePokemon),
			mergeMap((action) =>
				this.pokedex
					.removeFromPokedexObservable(action.pokemon)
					.pipe(
						map((pokedex: Pokemon[]) =>
							pokemonRemovedSuccessfully({ pokedex })
						)
					)
			)
		)
	);

	public addPokemonToPokedex$ = createEffect(() =>
		this.actions$.pipe(
			ofType(addPokemon),
			mergeMap((action) =>
				this.pokedex
					.addToPokedexObservable(action.pokemon)
					.pipe(
						map((pokedex: Pokemon[]) =>
							pokemonAddedSuccessfully({ pokedex })
						)
					)
			)
		)
	);

	constructor(private actions$: Actions, private pokedex: PokedexService) {}
}
