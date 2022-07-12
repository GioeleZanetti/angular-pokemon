import { Action } from '@ngrx/store';
import { gilbert } from 'src/app/testing/pokemon-mocks';
import {
	addPokemonToAvailable,
	addPokemonToAvailableKey,
	getPokemonByName,
	getPokemonByNameKey,
	pokemonAddeddSuccessfully,
	pokemonAddeddSuccessfullyKey,
	pokemonReturnedSuccessfully,
	pokemonReturnedSuccessfullyKey,
	pokemonReturnedUnsuccessfully,
	pokemonReturnedUnsuccessfullyKey,
	setPokemonInPokedex,
	setPokemonInPokedexKey,
	settedPokemonInPokedex,
	settedPokemonInPokedexKey,
} from './available.actions';

describe('AvailableActions', () => {
	it('should create getPokemonByName action', () => {
		const payload = { name: 'gianni' };
		const action = getPokemonByName(payload);
		expect(action.type).toEqual(getPokemonByNameKey);
		expect(action.name).toEqual(payload.name);
	});

	it('should create pokemonReturnedSuccessfully action', () => {
		const payload = { pokemon: gilbert };
		const action = pokemonReturnedSuccessfully(payload);
		expect(action.type).toEqual(pokemonReturnedSuccessfullyKey);
		expect(action.pokemon).toEqual(payload.pokemon);
	});

	it('should create pokemonReturnedUnsuccessfully action', () => {
		const payload = { error: 'Error' };
		const action = pokemonReturnedUnsuccessfully(payload);
		expect(action.type).toEqual(pokemonReturnedUnsuccessfullyKey);
		expect(action.error).toEqual(payload.error);
	});

	it('should create addPokemonToAvailable action', () => {
		const payload = { pokemon: gilbert };
		const action = addPokemonToAvailable(payload);
		expect(action.type).toEqual(addPokemonToAvailableKey);
		expect(action.pokemon).toEqual(payload.pokemon);
	});

	it('should create pokemonAddedSuccessfully action', () => {
		const payload = { available: [gilbert] };
		const action = pokemonAddeddSuccessfully(payload);
		expect(action.type).toEqual(pokemonAddeddSuccessfullyKey);
		expect(action.available).toEqual(payload.available);
	});

	it('should create setPokemonInPokedex action', () => {
		const payload = { pokemon: gilbert, state: true };
		const action = setPokemonInPokedex(payload);
		expect(action.type).toEqual(setPokemonInPokedexKey);
		expect(action.pokemon).toEqual(payload.pokemon);
		expect(action.state).toEqual(payload.state);
	});

	it('should create settedPokemonInPokedex action', () => {
		const payload = { pokemon: gilbert };
		const action = settedPokemonInPokedex(payload);
		expect(action.type).toEqual(settedPokemonInPokedexKey);
		expect(action.pokemon).toEqual(payload.pokemon);
	});
});
