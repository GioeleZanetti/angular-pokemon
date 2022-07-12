import { gilbert } from 'src/app/testing/pokemon-mocks';
import {
	searchPokemon,
	searchPokemonKey,
	pokemonSearchedSuccessfully,
	pokemonSearchedSuccessfullyKey,
	pokemonSearchedUnsuccessfully,
	pokemonSearchedUnsuccessfullyKey,
} from 'src/app/store/actions/pokemon.actions';

describe('PokemonActions', () => {
	it('should create searchPokemon action', () => {
		const payload = { name: 'gilbert' };
		const action = searchPokemon(payload);
		expect(action.type).toEqual(searchPokemonKey);
	});

	it('should create pokemonSearchedSuccessfully action', () => {
		const payload = { pokemon: gilbert };
		const action = pokemonSearchedSuccessfully(payload);
		expect(action.type).toEqual(pokemonSearchedSuccessfullyKey);
		expect(action.pokemon).toEqual(payload.pokemon);
	});

	it('should create pokemonSearchedUnsuccessfully action', () => {
		const payload = { error: 'error' };
		const action = pokemonSearchedUnsuccessfully(payload);
		expect(action.type).toEqual(pokemonSearchedUnsuccessfullyKey);
		expect(action.error).toEqual(payload.error);
	});
});
