import { TestBed } from '@angular/core/testing';

import { AvailableService } from './available.service';
import { gilbert } from '../testing/pokemon-mocks';
import { notFoundPokemon, Pokemon } from '../models/Pokemon';

describe('AvailableService', () => {
	let service: AvailableService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AvailableService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should add pokemon to available list if not present', () => {
		service.addToAvailableObservable(gilbert);
		expect(service['available'].length).toEqual(1);
	});

	it('should not add pokemon to available list if not present', () => {
		service.addToAvailableObservable(gilbert);
		service.addToAvailableObservable(gilbert);
		expect(service['available'].length).toEqual(1);
	});

	it('should get pokemon in available list by name', () => {
		service['available'] = [gilbert];
		service
			.getPokemonByNameObservable('gilbert')
			.subscribe((result: Pokemon) => {
				expect(result).toEqual(gilbert);
			});
	});

	it("should return notFoundPokemon if pokemon isn't present", () => {
		service
			.getPokemonByNameObservable('asdsa')
			.subscribe((result: Pokemon) => {
				expect(result).toEqual(notFoundPokemon);
			});
	});

	it('should set in_pokedex_attribute to a certain state', () => {
		service['available'] = [gilbert];
		service.setInPokedex(gilbert, true);
		expect(service['available'][0].is_in_pokedex).toBeTrue();
	});
});
