import { gilbert } from 'src/app/testing/pokemon-mocks';
import {
	addPokemon,
	addPokemonKey,
	loadPokedex,
	loadPokedexKey,
	pokedexLoadedSuccessfully,
	pokedexLoadedSuccessfullyKey,
	pokemonAddedSuccessfully,
	pokemonAddedSuccessfullyKey,
	pokemonRemovedSuccessfully,
	pokemonRemovedSuccessfullyKey,
	removePokemon,
	removePokemonKey,
} from './pokedex.actions';

describe('PokedexActions', () => {
	it('should create loadPokedex action', () => {
		const action = loadPokedex();
		expect(action.type).toEqual(loadPokedexKey);
	});

	it('should create pokedexLoadedSuccessfully action', () => {
		const payload = { pokedex: [gilbert] };
		const action = pokedexLoadedSuccessfully(payload);
		expect(action.type).toEqual(pokedexLoadedSuccessfullyKey);
		expect(action.pokedex).toEqual(payload.pokedex);
	});

	it('should create removePokemon action', () => {
		const payload = { pokemon: gilbert };
		const action = removePokemon(payload);
		expect(action.type).toEqual(removePokemonKey);
		expect(action.pokemon).toEqual(payload.pokemon);
	});

	it('should create pokemonRemovedSuccessfully action', () => {
		const payload = { pokedex: [gilbert] };
		const action = pokemonRemovedSuccessfully(payload);
		expect(action.type).toEqual(pokemonRemovedSuccessfullyKey);
		expect(action.pokedex).toEqual(payload.pokedex);
	});

	it('should create addPokemon action', () => {
		const payload = { pokemon: gilbert };
		const action = addPokemon(payload);
		expect(action.type).toEqual(addPokemonKey);
		expect(action.pokemon).toEqual(payload.pokemon);
	});

	it('should create pokemonAddedSuccessfully action', () => {
		const payload = { pokedex: [gilbert] };
		const action = pokemonAddedSuccessfully(payload);
		expect(action.type).toEqual(pokemonAddedSuccessfullyKey);
		expect(action.pokedex).toEqual(payload.pokedex);
	});
});
