import { createAction, props } from '@ngrx/store';

import { Pokemon } from '../../models/Pokemon';

export const loadPokedexKey = '[Pokedex] Load Pokedex';
export const loadPokedex = createAction(loadPokedexKey);

export const pokedexLoadedSuccessfullyKey =
	'[Pokedex] Pokedex Loaded Successfully';
export const pokedexLoadedSuccessfully = createAction(
	pokedexLoadedSuccessfullyKey,
	props<{ pokedex: Pokemon[] }>()
);

export const removePokemonKey = '[Pokedex] Remove Pokemon';
export const removePokemon = createAction(
	removePokemonKey,
	props<{ pokemon: Pokemon }>()
);

export const pokemonRemovedSuccessfullyKey =
	'[Pokedex] Pokemon Removed Successfully ';
export const pokemonRemovedSuccessfully = createAction(
	pokemonRemovedSuccessfullyKey,
	props<{ pokedex: Pokemon[] }>()
);

export const addPokemonKey = '[Pokedex] Add Pokemon';
export const addPokemon = createAction(
	addPokemonKey,
	props<{ pokemon: Pokemon }>()
);

export const pokemonAddedSuccessfullyKey =
	'[Pokedex] Pokemon Added Successfully ';
export const pokemonAddedSuccessfully = createAction(
	pokemonAddedSuccessfullyKey,
	props<{ pokedex: Pokemon[] }>()
);
