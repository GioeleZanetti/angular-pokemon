import { AvailableState, reducer } from './available.reducer';
import { Pokemon } from '../../models/Pokemon';
import { gilbert } from '../../testing/pokemon-mocks';
import {
	pokemonAddeddSuccessfully,
	pokemonReturnedSuccessfully,
	settedPokemonInPokedex,
} from '../actions/available.actions';

describe('AvailableReducer', () => {
	const initialState: AvailableState = {
		availableList: [],
		currentPokemon: <Pokemon>{},
	};

	it('should change availableList state on AvailableActions.pokemonAddedSuccessfully', () => {
		const action = pokemonAddeddSuccessfully({ available: [gilbert] });
		const newState: AvailableState = {
			availableList: [gilbert],
			currentPokemon: <Pokemon>{},
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should change currentPokemon state on AvailableActions.settedPokemonInPokedex', () => {
		const action = settedPokemonInPokedex({ pokemon: gilbert });
		const gilbertInPokedex = gilbert;
		gilbertInPokedex.is_in_pokedex = true;
		const newState: AvailableState = {
			availableList: [],
			currentPokemon: gilbertInPokedex,
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should change currentPokemon state on AvailableActions.pokemonReturnedSuccessfully', () => {
		const action = pokemonReturnedSuccessfully({ pokemon: gilbert });
		const newState: AvailableState = {
			availableList: [],
			currentPokemon: gilbert,
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should not handle unkonwun action', () => {
		const action = { type: 'unknown' } as any;
		expect(reducer(initialState, action)).toEqual(initialState);
	});
});
