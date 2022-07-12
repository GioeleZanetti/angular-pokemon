import {
	ComponentFixture,
	fakeAsync,
	TestBed,
	tick,
} from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { provideMockStore } from '@ngrx/store/testing';

import { PokedexComponent } from './pokedex.component';
import { gilbert } from '../testing/pokemon-mocks';

describe('PokedexComponent', () => {
	let component: PokedexComponent;
	let fixture: ComponentFixture<PokedexComponent>;
	let mockDialogRef = {
		close: ({}: any) => {},
	};
	let initialState = { pokedexState: { pokedex: [], error: '' } };

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokedexComponent],
			providers: [
				{ provide: MatDialogRef, useValue: mockDialogRef },
				provideMockStore({ initialState }),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(PokedexComponent);
		component = fixture.componentInstance;
		component['pokemons'] = [gilbert];
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should close when user clicks button', () => {
		const spy = spyOn(component['dialogRef'], 'close');
		component.close();
		expect(spy).toHaveBeenCalled();
	});
});
