import { TestBed } from '@angular/core/testing';

import { PokemonApiService } from './pokemon-api.service';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../models/Pokemon";
import {of} from "rxjs";

describe('PokemonApiService', () => {
	let service: PokemonApiService;
	let httpClient: jasmine.SpyObj<HttpClient>;
	const mockPokemon: Pokemon = {
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
		httpClient = jasmine.createSpyObj('HttpClient', ['get']);
		service = new PokemonApiService(httpClient);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	//TODO: verbessern
	it('should get a pokemon from the api if name is correct and exists',
		(done: DoneFn) => {
			httpClient.get.and.returnValue(of(mockPokemon));
			service.getPokemonByName('gilbert').subscribe({
				next: pokemon => {
					expect(pokemon.name.toLowerCase()).toEqual('gilbert');
					done();
				},
				error: done.fail
			});
		}
	);

	it('should return not found if name is empty', (done: DoneFn) => {

		service.getPokemonByName('').subscribe({
			next: pokemon => {
				expect(pokemon.id).toEqual(-1);
				done();
			},
			error: done.fail
		})
	})
});
