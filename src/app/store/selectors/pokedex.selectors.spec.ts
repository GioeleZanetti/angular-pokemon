import { PokedexState } from '../reducers/pokedex.reducer';
import { gilbert } from '../../testing/pokemon-mocks';
import { getPokedex, getPokemon } from './pokedex.selectors';

describe('PokedexSelector', () => {
	const initialState: PokedexState = {
		pokedex: [gilbert],
		pokemon: gilbert,
	};

	it('should get pokedex', () => {
		const result = getPokedex.projector(initialState);
		expect(result.length).toEqual(1);
		expect(result[0]).toEqual(gilbert);
	});

	it('should get pokemon', () => {
		const result = getPokemon.projector(initialState);
		expect(result).toEqual(gilbert);
	});
});
