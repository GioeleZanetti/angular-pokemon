import { Action, createReducer, on } from '@ngrx/store';

import { Pokemon } from '../../models/Pokemon';
import {
	pokemonSearchedSuccessfully,
	pokemonSearchedUnsuccessfully,
} from '../actions/pokemon.actions';

export interface PokemonState {
	pokemon?: Pokemon;
	error: string;
}

const initialState: PokemonState = {
	pokemon: undefined,
	error: '',
};

export const pokemonReducer = createReducer(
	initialState,
	on(pokemonSearchedSuccessfully, (state, { pokemon }) => ({
		...state,
		pokemon: pokemon,
		error: '',
	})),
	on(pokemonSearchedUnsuccessfully, (state, { error }) => ({
		...state,
		pokemon: undefined,
		error: error,
	}))
);

export function reducer(state: PokemonState, action: Action) {
	return pokemonReducer(state, action);
}
