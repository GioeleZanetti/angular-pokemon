import {ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";

describe('AppComponent', () => {
	let fixture: ComponentFixture<AppComponent>;
	let app: AppComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();
		fixture = TestBed.createComponent(AppComponent);
		app = fixture.componentInstance;
	});

	it('should create the app', () => {
		expect(app).toBeTruthy();
	});

	it(`should have as title 'pokemon'`, () => {
		expect(app.title).toEqual('pokemon');
	});

	it('should initialise pokedex when initialised', () => {
		const spy = spyOn(app['pokedex'], 'initialise');
		app.ngOnInit()
		expect(spy).toHaveBeenCalled();
	})

});
