import { Action, createReducer, on } from '@ngrx/store';
import * as PokemonSearchActions from '../actions/pokemon-search.actions';
import {notFoundPokemon, Pokemon} from '../models/Pokemon';
import {searchPokemon} from "../actions/pokemon-search.actions";
import {PokemonEffects} from "../effects/pokemon.effects";

export interface State {
	pokemon?: Pokemon
}
const pokemon: Pokemon = {
	id: 1,
	name: "Gilbert",
	base_experience: 222,
	height: 255,
	weight: 255,
	is_in_pokedex: true,
	sprites: {
		front_default: '',
		other: {
			"official-artwork": {
				front_default: ''
			}
		}
	}
};
export  const initialState: State = {
	pokemon: pokemon
}

export const pokemonReducer = createReducer(
	initialState,
	//on(PokemonSearchActions.searchPokemon, state => PokemonEffects.searchPokemon$)
)