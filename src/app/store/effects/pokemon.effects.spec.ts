import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { PokemonEffects } from './pokemon.effects';
import { PokemonApiService } from '../../services/pokemon-api.service';
import {
	pokemonSearchedSuccessfully,
	pokemonSearchedUnsuccessfully,
	searchPokemon,
} from '../actions/pokemon.actions';
import { gilbert } from '../../testing/pokemon-mocks';

describe('PokemonEffects', () => {
	const initialState = { pokemonState: { pokemon: undefined, error: '' } };
	const service = jasmine.createSpyObj('PokemonApi', ['getPokemonByName']);
	let effects: PokemonEffects;
	let actions: Observable<any>;
	let testScheduler: TestScheduler;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PokemonEffects,
				provideMockStore({ initialState }),
				provideMockActions(() => actions),
				{ provide: PokemonApiService, useValue: service },
			],
		});

		effects = TestBed.inject(PokemonEffects);
		testScheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});
	});

	it('should return pokemonSearchedSuccessfully on searchPokemon', () => {
		const action = searchPokemon({ name: 'gilbert' });
		const outcome = pokemonSearchedSuccessfully({ pokemon: gilbert });
		testScheduler.run(({ hot, cold, expectObservable }) => {
			actions = hot('-a', { a: action });
			const response = cold('-b|', { b: gilbert });
			service.getPokemonByName.and.returnValue(response);
			expectObservable(effects.searchPokemon$).toBe('--b', {
				b: outcome,
			});
		});
	});

	it('should return pokemonSearchedUnsuccessfully on searchPokemon if error occurs', () => {
		const error = 'No Results For gilbert';
		const action = searchPokemon({ name: 'gilbert' });
		const outcome = pokemonSearchedUnsuccessfully({
			error: error,
		});
		testScheduler.run(({ hot, cold, expectObservable }) => {
			actions = hot('-a', { a: action });
			const response = cold('-#|', {}, error);
			service.getPokemonByName.and.returnValue(response);
			expectObservable(effects.searchPokemon$).toBe('--b', {b: outcome});
		});
	});
});
