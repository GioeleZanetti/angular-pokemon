import { createAction, props } from '@ngrx/store';

import { Pokemon } from '../../models/Pokemon';

export const searchPokemonKey: string = '[Pokemon API] Search Pokemon';
export const searchPokemon = createAction(
	searchPokemonKey,
	props<{ name: string }>()
);

export const pokemonSearchedSuccessfullyKey: string =
	'[Pokemon API] Pokemon Searched Successfully';
export const pokemonSearchedSuccessfully = createAction(
	pokemonSearchedSuccessfullyKey,
	props<{ pokemon: Pokemon }>()
);

export const pokemonSearchedUnsuccessfullyKey: string =
	'[Pokemon API] Pokemon Searched Unsuccessfully';
export const pokemonSearchedUnsuccessfully = createAction(
	pokemonSearchedUnsuccessfullyKey,
	props<{ error: string }>()
);
