import { Action, createReducer, on } from '@ngrx/store';

import { Pokemon } from '../../models/Pokemon';
import {
	pokedexLoadedSuccessfully,
	pokemonAddedSuccessfully,
	pokemonRemovedSuccessfully,
} from '../actions/pokedex.actions';

export interface PokedexState {
	pokedex: Pokemon[];
	pokemon: Pokemon;
}

const initialState: PokedexState = {
	pokedex: [],
	pokemon: <Pokemon>{},
};

export const pokedexReducer = createReducer(
	initialState,
	on(pokedexLoadedSuccessfully, (state, { pokedex }) => ({
		...state,
		pokedex: pokedex,
	})),
	on(pokemonRemovedSuccessfully, (state, { pokedex }) => ({
		...state,
		pokedex: pokedex,
	})),
	on(pokemonAddedSuccessfully, (state, { pokedex }) => ({
		...state,
		pokedex: pokedex,
	}))
);

export function reducer(state: PokedexState, action: Action) {
	return pokedexReducer(state, action);
}
