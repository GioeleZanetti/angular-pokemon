import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'pokemon'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('pokemon');
	});

	it('should initialise pokedex when initialised', () => {
		const fixture = TestBed.createComponent(PokemonDetailsComponent);
		const app = fixture.componentInstance;
		const spy = spyOn(app, 'ngOnInit');
		expect(spy).toHaveBeenCalled();
	})

});
