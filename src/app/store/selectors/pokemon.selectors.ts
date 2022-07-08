import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PokemonState } from '../reducers/pokemon.reducer';

const pokemonState = createFeatureSelector<PokemonState>('pokemonState');

export const getPokemon = createSelector(
	pokemonState,
	(state: PokemonState) => state.pokemon
);

export const getError = createSelector(
	pokemonState,
	(state: PokemonState) => state.error
);
