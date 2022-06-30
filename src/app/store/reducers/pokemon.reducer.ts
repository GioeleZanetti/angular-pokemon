import { createReducer, on } from '@ngrx/store';
import { Pokemon} from '../../models/Pokemon';
import {
	pokemonSearchedSuccessfully,
	pokemonSearchedUnsuccessfully,
} from "../actions/pokemon-search.actions";

export interface PokemonState {
	pokemon?: Pokemon
}

export  const initialState: PokemonState = {
	pokemon: undefined
}

export const pokemonReducer = createReducer(
	initialState,
	on(pokemonSearchedSuccessfully, (state, {pokemon}) => ({pokemon})),
	on(pokemonSearchedUnsuccessfully, (state, {pokemon}) => ({pokemon})),
)