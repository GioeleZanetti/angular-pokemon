import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PokedexState } from '../reducers/pokedex.reducer';

const pokedexState = createFeatureSelector<PokedexState>('pokedexState');

export const getPokedex = createSelector(
	pokedexState,
	(state: PokedexState) => state.pokedex
);

export const getPokemon = createSelector(
	pokedexState,
	(state: PokedexState) => state.pokemon
);
