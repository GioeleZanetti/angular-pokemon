import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { PokemonSearchComponent } from './pokemon-search.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {PokemonApiService} from "../services/pokemon-api.service";
import {gilbert} from "../testing/pokemon-mocks";
import {provideMockStore} from "@ngrx/store/testing";

describe('PokemonSearchComponent', () => {
	let component: PokemonSearchComponent;
	let fixture: ComponentFixture<PokemonSearchComponent>;
	let initialState = {pokemon: { pokemon: gilbert}};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokemonSearchComponent],
			schemas: [NO_ERRORS_SCHEMA],
			providers: [
				{provide: PokemonApiService},
				provideMockStore({initialState})
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(PokemonSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should update pokemonName property when user types in input', () => {
		const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
		const value = 'hello';
		input.value = value;
		input.dispatchEvent(new Event('input'));
		fixture.detectChanges();
		expect(component['pokemonName']).toEqual(value);
	});

	it('should search when user clicks enter', () => {
		const spy = spyOn(component, 'search');
		window.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
		fixture.detectChanges();
		expect(spy).toHaveBeenCalled()
	})

	it('should dispatch action when searching', () => {
		component['pokemonName'] = 'pikachu';
		const spy = spyOn(component['store'], 'dispatch');
		component.search();
		expect(spy).toHaveBeenCalled();
	})

});
