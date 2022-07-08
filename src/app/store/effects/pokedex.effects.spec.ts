import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { Pokemon } from '../../models/Pokemon';
import { PokedexEffects } from './pokedex.effects';
import { PokedexService } from '../../services/pokedex.service';
import {
	addPokemon,
	loadPokedex,
	pokedexLoadedSuccessfully,
	pokemonAddedSuccessfully,
	pokemonRemovedSuccessfully,
	removePokemon,
} from '../actions/pokedex.actions';
import { gilbert } from '../../testing/pokemon-mocks';
import { setPokemonInPokedex } from '../actions/available.actions';

describe('PokedexEffects', () => {
	const initialState = {
		pokedexState: {
			pokedex: [],
			pokemon: <Pokemon>{},
			error: '',
		},
	};
	const service = jasmine.createSpyObj('PokedexService', [
		'addToPokedexObservable',
		'removeFromPokedexObservable',
		'getObservablePokedex',
	]);
	let effects: PokedexEffects;
	let actions: Observable<any>;
	let testScheduler: TestScheduler;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PokedexEffects,
				provideMockStore({ initialState }),
				provideMockActions(() => actions),
				{ provide: PokedexService, useValue: service },
			],
		});

		effects = TestBed.inject(PokedexEffects);
		testScheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});
	});

	it('should return pokedexLoadedSuccessfully on loadPokedex', () => {
		const action = loadPokedex();
		const outcome = pokedexLoadedSuccessfully({ pokedex: [gilbert] });
		testScheduler.run(({ hot, cold, expectObservable }) => {
			actions = hot('-a', { a: action });
			const response = cold('-b|', { b: [gilbert] });
			service.getObservablePokedex.and.returnValue(response);
			expectObservable(effects.loadPokedex$).toBe('--b', { b: outcome });
		});
	});

	it('should return pokemonRemovedSuccessfully on removePokemon', () => {
		const action = removePokemon({ pokemon: gilbert });
		const outcome = pokemonRemovedSuccessfully({ pokedex: [] })
		testScheduler.run(({ hot, cold, expectObservable }) => {
			actions = hot('-a', { a: action });
			const response = cold('-b|', { b: [] });
			service.removeFromPokedexObservable.and.returnValue(response);
			expectObservable(effects.removePokemonFromPokedex$).toBe('--b', {
				b: outcome
			});
		});
	});

	it('should return pokemonAddedSuccessfully on addPokemon', () => {
		const action = addPokemon({ pokemon: gilbert });
		const outcome = pokemonAddedSuccessfully({ pokedex: [gilbert] });
		testScheduler.run(({ hot, cold, expectObservable }) => {
			actions = hot('-a', { a: action });
			const response = cold('-b|', { b: [gilbert] });
			service.addToPokedexObservable.and.returnValue(response);
			expectObservable(effects.addPokemonToPokedex$).toBe('--b', {
				b: outcome,
			});
		});
	});
});
