import { Action, createReducer, on } from '@ngrx/store';

import { Pokemon } from '../../models/Pokemon';
import {
	pokemonAddeddSuccessfully,
	pokemonReturnedSuccessfully,
	settedPokemonInPokedex,
} from '../actions/available.actions';

export interface AvailableState {
	currentPokemon: Pokemon;
	availableList: Pokemon[];
}

const initialState: AvailableState = {
	currentPokemon: <Pokemon>{},
	availableList: [],
};

export const availableReducer = createReducer(
	initialState,
	on(pokemonAddeddSuccessfully, (state, { available }) => ({
		...state,
		availableList: available,
	})),
	on(pokemonReturnedSuccessfully, (state, { pokemon }) => ({
		...state,
		currentPokemon: pokemon,
	})),
	on(settedPokemonInPokedex, (state, { pokemon }) => ({
		...state,
		currentPokemon: pokemon,
	}))
);

export function reducer(state: AvailableState, action: Action) {
	return availableReducer(state, action);
}
