import { TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { Pokemon } from '../../models/Pokemon';
import { AvailableEffects } from './available.effects';
import { AvailableService } from '../../services/available.service';
import {
	addPokemonToAvailable,
	getPokemonByName,
	pokemonAddeddSuccessfully,
	pokemonReturnedSuccessfully,
	setPokemonInPokedex,
	settedPokemonInPokedex,
} from '../actions/available.actions';
import { gilbert } from '../../testing/pokemon-mocks';

describe('AvailableEffects', () => {
	const initialState = {
		availableState: { availableList: [], currentPokemon: <Pokemon>{} },
	};
	const service = jasmine.createSpyObj('AvailableService', [
		'addToAvailableObservable',
		'getPokemonByNameObservable',
		'setInPokedex',
	]);
	let effects: AvailableEffects;
	let actions: Observable<any>;
	let testScheduler: TestScheduler;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AvailableEffects,
				provideMockStore({ initialState }),
				provideMockActions(() => actions),
				{ provide: AvailableService, useValue: service },
			],
		});

		effects = TestBed.inject(AvailableEffects);
		testScheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});
	});

	it('should return pokemonReturnedSuccessfully on getPokemonByName', () => {
		const action = getPokemonByName({ name: 'gilbert' });
		const outcome = pokemonReturnedSuccessfully({ pokemon: gilbert });
		testScheduler.run(({ hot, cold, expectObservable }) => {
			actions = hot('-a', { a: action });
			const response = cold('-b|', { b: gilbert });
			service.getPokemonByNameObservable.and.returnValue(response);
			expectObservable(effects.getPokemonByName$).toBe('--b', {
				b: outcome,
			});
		});
	});

	it('should return pokemonAddedSuccessfully on addPokemonToAvailable', () => {
		const action = addPokemonToAvailable({ pokemon: gilbert });
		const outcome = pokemonAddeddSuccessfully({ available: [gilbert] });
		testScheduler.run(({ hot, cold, expectObservable }) => {
			actions = hot('-a', { a: action });
			const response = cold('-b|', { b: [gilbert] });
			service.addToAvailableObservable.and.returnValue(response);
			expectObservable(effects.addToAvailable$).toBe('--b', {
				b: outcome,
			});
		});
	});

	it('should return settedPokemonInPokedex on setPokemonInPokedex', () => {
		const action = setPokemonInPokedex({ pokemon: gilbert, state: true });
		const outcome = settedPokemonInPokedex({ pokemon: gilbert });
		testScheduler.run(({ hot, cold, expectObservable }) => {
			actions = hot('-a', { a: action });
			const response = cold('-b|', { b: gilbert });
			service.setInPokedex.and.returnValue(response);
			expectObservable(effects.setInPokedex$).toBe('--b', { b: outcome });
		});
	});
});
