import { TestBed } from '@angular/core/testing';

import { PokedexService } from './pokedex.service';
import {Pokemon} from '../models/Pokemon';
import {gilbert} from '../testing/pokemon-mocks';

describe('PokedexService', () => {
	let service: PokedexService;


	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(PokedexService);
	});

	it('should initialise available and pokedex if something is in the local storage', () => {
		service['storage'].saveArray('available', [gilbert]);
		service['storage'].saveArray('pokedex', [gilbert]);
		service.initialise();
		expect(service['available'].length).toEqual(1);
		expect(service['pokedex'].length).toEqual(1);
	})

	it('should get a pokemon by name from available array if present', () => {
		service.addAvailable(gilbert);
		const retrievedPokemon: Pokemon = service.getPokemonByName(gilbert.name);
		expect(gilbert).toEqual(retrievedPokemon);
	});

	it('should get a not found pokemon from available array if pokemon is not present', () => {
		const retrievedPokemon: Pokemon = service.getPokemonByName(gilbert.name);
		expect(retrievedPokemon.id).toEqual(-1);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should add pokemon to available array', () => {
		const previousLength = service['available'].length;
		service.addAvailable(gilbert);
		expect(service['available'].length).toEqual(previousLength + 1);
		expect(service['available'][previousLength]).toEqual(gilbert);
	});

	it('should not add pokemon to available array if already present', () => {
		service.addAvailable(gilbert);
		const previousLength = service['available'].length;
		service.addAvailable(gilbert)
		expect(service['available'].length).toEqual(previousLength);
	});

	it('should add pokemon to pokedex', () => {
		const previousLength = service['pokedex'].length;
		service.addToPokedex(gilbert);
		expect(service['pokedex'].length).toEqual(previousLength + 1);
		expect(service['pokedex'][previousLength]).toEqual(gilbert);
	});

	it('should remove pokemon from pokedex if present', () => {
		service.addToPokedex(gilbert);
		const previousLength = service['pokedex'].length;
		service.removeFromPokedex(gilbert);
		expect(service['pokedex'].length).toEqual(previousLength - 1);
	});

	it('should return pokedex', () => {
		const pokedex: Pokemon[] = [gilbert];
		service.addToPokedex(gilbert);
		expect(service.getPokedex()).toEqual(pokedex);
	});

	it('should return pokedex size', () => {
		const pokedex: Pokemon[] = [gilbert];
		service.addToPokedex(gilbert);
		expect(service.getPokedexSize()).toEqual(pokedex.length);
	});

	it('should set is_in_pokedex atribute to a certain value if present', () => {
		service.addAvailable(gilbert);
		service.setInPokedex(gilbert, true);
		let retrievedPokemon: Pokemon = service.getPokemonByName(gilbert.name);
		expect(retrievedPokemon.is_in_pokedex).toBeTruthy();
		service.setInPokedex(gilbert, false);
		retrievedPokemon = service.getPokemonByName(gilbert.name);
		expect(retrievedPokemon.is_in_pokedex).toBeFalsy();

	});
});
