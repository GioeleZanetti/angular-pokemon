import { reducer } from './pokedex.reducer';
import { PokedexState } from './pokedex.reducer';
import { Pokemon } from '../../models/Pokemon';
import {
	pokedexLoadedSuccessfully,
	pokemonAddedSuccessfully,
	pokemonRemovedSuccessfully,
} from '../actions/pokedex.actions';
import { gilbert } from '../../testing/pokemon-mocks';

describe('PokemonReducer', () => {
	const initialState: PokedexState = {
		pokedex: [],
		pokemon: <Pokemon>{},
	};

	it('should not handle unkonwun action', () => {
		const action = { type: 'unknown' } as any;
		expect(reducer(initialState, action)).toEqual(initialState);
	});

	it('should set pokedex on PokedexActions.pokedexLoadedSuccessfully', () => {
		const action = pokedexLoadedSuccessfully({ pokedex: [gilbert] });
		const newState: PokedexState = {
			pokemon: <Pokemon>{},
			pokedex: [gilbert],
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should set pokedex on PokedexActions.pokedexLoadedSuccessfully', () => {
		const action = pokedexLoadedSuccessfully({ pokedex: [gilbert] });
		const newState: PokedexState = {
			pokemon: <Pokemon>{},
			pokedex: [gilbert],
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should remove pokemon on PokedexActions.pokemonRemovedSuccessfully', () => {
		const action = pokemonRemovedSuccessfully({ pokedex: [] });
		const start: PokedexState = {
			pokemon: <Pokemon>{},
			pokedex: [gilbert],
		};
		const expected: PokedexState = {
			pokemon: <Pokemon>{},
			pokedex: [],
		};
		expect(reducer(start, action)).toEqual(expected);
	});

	it('should update pokedex on PokedexActions.pokemonAddedSuccessfully', () => {
		const action = pokemonAddedSuccessfully({ pokedex: [gilbert] });
		const newState: PokedexState = {
			pokemon: <Pokemon>{},
			pokedex: [gilbert],
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});
});
