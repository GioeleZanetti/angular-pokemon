import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { gilbert } from '../testing/pokemon-mocks';

import { PokedexPokemonDetailsComponent } from './pokedex-pokemon-details.component';

describe('PokedexPokemonDetailsComponent', () => {
	let component: PokedexPokemonDetailsComponent;
	let fixture: ComponentFixture<PokedexPokemonDetailsComponent>;
	let initialState = { pokedexState: { pokedex: [], error: '' } };

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokedexPokemonDetailsComponent],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();

		fixture = TestBed.createComponent(PokedexPokemonDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.pokemon = gilbert;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should toggle property when clicked', () => {
		component.detailsVisible = true;
		component.toggle();
		expect(component.detailsVisible).toBeFalse();
	});

	it('should dispatch release pokemon action when button is clicked', () => {
		const spy = spyOn(component['pokedexStore'], 'dispatch');
		component.releaseFromPokedex(gilbert);
		expect(spy).toHaveBeenCalled();
	});
});
