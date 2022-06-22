import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearchComponent } from './pokemon-search.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {Router} from "@angular/router";
import {of} from "rxjs";

describe('PokemonSearchComponent', () => {
	let component: PokemonSearchComponent;
	let fixture: ComponentFixture<PokemonSearchComponent>;
	const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokemonSearchComponent],
			schemas: [NO_ERRORS_SCHEMA],
			providers: [
				{
					provide: Router,
					useValue: routerSpy
				}
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

	it('should redirect when clicking icon', () => {
		const spy = routerSpy.navigateByUrl as jasmine.Spy;
	})
});
