import { reducer } from './pokemon.reducer';
import { PokemonState } from './pokemon.reducer';
import { Pokemon } from '../../models/Pokemon';
import {
	pokemonSearchedSuccessfully,
	pokemonSearchedUnsuccessfully,
} from '../actions/pokemon.actions';
import { gilbert } from '../../testing/pokemon-mocks';

describe('PokemonReducer', () => {
	const initialState: PokemonState = {
		pokemon: <Pokemon>{},
		error: '',
	};

	it('should not handle unkonwun action', () => {
		const action = { type: 'unknown' } as any;
		expect(reducer(initialState, action)).toEqual(initialState);
	});

	it('should set pokemon on PokemonAction.pokemonSearchedSuccessfully', () => {
		const action = pokemonSearchedSuccessfully({ pokemon: gilbert });
		const newState: PokemonState = {
			pokemon: gilbert,
			error: '',
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should set error on PokemonAction.pokemonSearchedUnsuccessfully', () => {
		const action = pokemonSearchedUnsuccessfully({ error: 'error' });
		const newState: PokemonState = {
			pokemon: undefined,
			error: 'error',
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});
});
