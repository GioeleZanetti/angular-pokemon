import {
	ComponentFixture,
	fakeAsync,
	TestBed,
	tick,
} from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { SearchResultComponent } from './search-result.component';
import { gilbert } from '../testing/pokemon-mocks';

describe('SearchResultComponent', () => {
	let component: SearchResultComponent;
	let fixture: ComponentFixture<SearchResultComponent>;
	let initialState = { pokemonState: { pokemon: gilbert, error: '' } };

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SearchResultComponent],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();

		fixture = TestBed.createComponent(SearchResultComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should subscribe to properties pokemon and error', () => {
		component.ngOnInit();
		expect(component.pokemon).toEqual(initialState.pokemonState.pokemon);
		expect(component.error).toEqual(initialState.pokemonState.error);
	});
});
