import { TestBed } from '@angular/core/testing';

import { PokedexService } from './pokedex.service';
import { Pokemon } from '../models/Pokemon';
import { gilbert } from '../testing/pokemon-mocks';

describe('PokedexService', () => {
	let service: PokedexService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(PokedexService);
	});

	it('should initialise pokedex if something is in the local storage', () => {
		service['storage'].saveArray('pokedex', [gilbert]);
		service.initialise();
		expect(service['pokedex'].length).toEqual(1);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should add pokemon to pokedex', () => {
		const previousLength = service['pokedex'].length;
		service.addToPokedexObservable(gilbert);
		expect(service['pokedex'].length).toEqual(previousLength + 1);
		expect(service['pokedex'][previousLength]).toEqual(gilbert);
	});

	it('should remove pokemon from pokedex if present', () => {
		service.addToPokedexObservable(gilbert);
		const previousLength = service['pokedex'].length;
		service.removeFromPokedexObservable(gilbert);
		expect(service['pokedex'].length).toEqual(previousLength - 1);
	});

	it('should return pokedex size', () => {
		const pokedex: Pokemon[] = [gilbert];
		service.addToPokedexObservable(gilbert);
		expect(service.getPokedexSize()).toEqual(pokedex.length);
	});

	it('should return observable pokedex', () => {
		const pokedex: Pokemon[] = [gilbert];
		service.addToPokedexObservable(gilbert);
		service.getObservablePokedex().subscribe((resultPokedex: Pokemon[]) => {
			expect(resultPokedex).toEqual(pokedex);
		});
	});
});
