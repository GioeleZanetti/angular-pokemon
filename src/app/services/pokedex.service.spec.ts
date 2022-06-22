import { TestBed } from '@angular/core/testing';

import { PokedexService } from './pokedex.service';
import {Pokemon} from "../models/Pokemon";

describe('PokedexService', () => {
	let service: PokedexService;
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

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(PokedexService);
	});

	it('should initialise available and pokedex if something is in the local storage', () => {
		service['storage'].saveArray('available', [pokemon]);
		service['storage'].saveArray('pokedex', [pokemon]);
		service.initialise();
		expect(service['available'].length).toEqual(1);
		expect(service['pokedex'].length).toEqual(1);
	})

	it('should get a pokemon by name from available array if present', () => {
		service.addAvailable(pokemon);
		const retrievedPokemon: Pokemon = service.getPokemonByName(pokemon.name);
		expect(pokemon).toEqual(retrievedPokemon);
	});

	it('should get a not found pokemon from available array if pokemon is not present', () => {
		const retrievedPokemon: Pokemon = service.getPokemonByName(pokemon.name);
		expect(retrievedPokemon.id).toEqual(-1);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should add pokemon to available array', () => {
		const previousLength = service['available'].length;
		service.addAvailable(pokemon);
		expect(service['available'].length).toEqual(previousLength + 1);
		expect(service['available'][previousLength]).toEqual(pokemon);
	});

	it('should not add pokemon to available array if already present', () => {
		service.addAvailable(pokemon);
		const previousLength = service['available'].length;
		service.addAvailable(pokemon)
		expect(service['available'].length).toEqual(previousLength);
	});

	it('should add pokemon to pokedex', () => {
		const previousLength = service['pokedex'].length;
		service.addToPokedex(pokemon);
		expect(service['pokedex'].length).toEqual(previousLength + 1);
		expect(service['pokedex'][previousLength]).toEqual(pokemon);
	});

	it('should remove pokemon from pokedex if present', () => {
		service.addToPokedex(pokemon);
		const previousLength = service['pokedex'].length;
		service.removeFromPokedex(pokemon);
		expect(service['pokedex'].length).toEqual(previousLength - 1);
	});

	it('should return pokedex', () => {
		const pokedex: Pokemon[] = [pokemon];
		service.addToPokedex(pokemon);
		expect(service.getPokedex()).toEqual(pokedex);
	});

	it('should return pokedex size', () => {
		const pokedex: Pokemon[] = [pokemon];
		service.addToPokedex(pokemon);
		expect(service.getPokedexSize()).toEqual(pokedex.length);
	});

	it('should set is_in_pokedex atribute to a certain value if present', () => {
		service.addAvailable(pokemon);
		service.setInPokedex(pokemon, true);
		let retrievedPokemon: Pokemon = service.getPokemonByName(pokemon.name);
		expect(retrievedPokemon.is_in_pokedex).toBeTruthy();
		service.setInPokedex(pokemon, false);
		retrievedPokemon = service.getPokemonByName(pokemon.name);
		expect(retrievedPokemon.is_in_pokedex).toBeFalsy();

	});
});
