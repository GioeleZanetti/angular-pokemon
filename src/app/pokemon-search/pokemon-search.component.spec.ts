import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { of } from 'rxjs';

import { PokemonSearchComponent } from './pokemon-search.component';
import { gilbert } from '../testing/pokemon-mocks';


describe('PokemonSearchComponent', () => {
	let component: PokemonSearchComponent;
	let fixture: ComponentFixture<PokemonSearchComponent>;
	let httpClient: jasmine.SpyObj<HttpClient>;

	beforeEach(async () => {

		httpClient = jasmine.createSpyObj('HttpClient', ['get']);

		await TestBed.configureTestingModule({
			declarations: [PokemonSearchComponent],
			schemas: [NO_ERRORS_SCHEMA],
			imports: [HttpClientTestingModule]
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

	it('should emit search result', () => {
		component.pokemonName = 'gilbert';
		const spy = spyOn(component.emitter, 'emit');
		spyOn(component['api'], 'getPokemonByName').and.returnValue(of(gilbert))
		component.search();
		expect(spy).toHaveBeenCalled();
	})

	it('should search when user clicks enter', () => {
		const spy = spyOn(component, 'search');
		window.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
		fixture.detectChanges();
		expect(spy).toHaveBeenCalled()
	})

});
