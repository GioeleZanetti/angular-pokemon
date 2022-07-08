import { PokemonState } from '../reducers/pokemon.reducer';
import { gilbert } from '../../testing/pokemon-mocks';
import { getError, getPokemon } from './pokemon.selectors';

describe('PokemonSelectors', () => {
	const initialState: PokemonState = {
		pokemon: gilbert,
		error: 'error',
	};

	it('should get pokemon', () => {
		const result = getPokemon.projector(initialState);
		expect(result).toEqual(gilbert);
	});

	it('should get error', () => {
		const result = getError.projector(initialState);
		expect(result).toEqual('error');
	});
});
