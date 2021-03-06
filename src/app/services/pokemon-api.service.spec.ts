import { TestBed } from '@angular/core/testing';

import { PokemonApiService } from './pokemon-api.service';
import { notFoundPokemon } from '../models/Pokemon';
import { gilbert } from '../testing/pokemon-mocks';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PokemonApiService', () => {
	let service: PokemonApiService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule]
		})
		httpMock = TestBed.inject(HttpTestingController);
		service = TestBed.inject(PokemonApiService)
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should get a pokemon from the api if name is correct and exists', () => {
		service.getPokemonByName('gilbert')
			.subscribe(pokemon => {
				expect(pokemon.name.toLowerCase()).toEqual('gilbert');
			});
		const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/gilbert');
		req.flush(gilbert);
	});

	it('should return not found if name is empty or wrong', () => {

		service.getPokemonByName('')
			.subscribe(pokemon => {
				expect(pokemon).toEqual(notFoundPokemon)
			});
		httpMock.expectNone('https://pokeapi.co/api/v2/pokemon/');
	})
});
