import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { PokemonSearchComponent } from './pokemon-search.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {PokemonApiService} from "../services/pokemon-api.service";

describe('PokemonSearchComponent', () => {
	let component: PokemonSearchComponent;
	let fixture: ComponentFixture<PokemonSearchComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokemonSearchComponent],
			schemas: [NO_ERRORS_SCHEMA],
			providers: [
				{provide: PokemonApiService}
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

});
