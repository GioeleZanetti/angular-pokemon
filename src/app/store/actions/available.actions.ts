import { createAction, props } from '@ngrx/store';

import { Pokemon } from '../../models/Pokemon';

export const getPokemonByNameKey = '[Available] Get Pokemon By Name ';
export const getPokemonByName = createAction(
	getPokemonByNameKey,
	props<{ name: string }>()
);

export const pokemonReturnedSuccessfullyKey =
	'[Available] Pokemon Returned Successfully';
export const pokemonReturnedSuccessfully = createAction(
	pokemonReturnedSuccessfullyKey,
	props<{ pokemon: Pokemon }>()
);

export const pokemonReturnedUnsuccessfullyKey =
	'[Available] Pokemon Returned Unsuccessfully';
export const pokemonReturnedUnsuccessfully = createAction(
	pokemonReturnedUnsuccessfullyKey,
	props<{ error: string }>()
);

export const addPokemonToAvailableKey = '[Available] Add Pokemon To Available';
export const addPokemonToAvailable = createAction(
	addPokemonToAvailableKey,
	props<{ pokemon: Pokemon }>()
);

export const pokemonAddeddSuccessfullyKey =
	'[Available] Pokemon Added Successfully';
export const pokemonAddeddSuccessfully = createAction(
	pokemonAddeddSuccessfullyKey,
	props<{ available: Pokemon[] }>()
);

export const setPokemonInPokedexKey =
	'[Available] Changing set_in_pokedex Of Pokemon';
export const setPokemonInPokedex = createAction(
	setPokemonInPokedexKey,
	props<{ pokemon: Pokemon; state: boolean }>()
);

export const settedPokemonInPokedexKey =
	'[Available] Changed State Successfully';
export const settedPokemonInPokedex = createAction(
	settedPokemonInPokedexKey,
	props<{ pokemon: Pokemon }>()
);
