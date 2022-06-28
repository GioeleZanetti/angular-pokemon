import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexComponent } from './pokedex.component';
import { MatDialogRef } from "@angular/material/dialog";
import { gilbert } from "../testing/pokemon-mocks";

describe('PokedexComponent', () => {
	let component: PokedexComponent;
	let fixture: ComponentFixture<PokedexComponent>;
	let mockDialogRef = {
		close: ({}: any) => {

		}
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokedexComponent],
			providers: [
				{ provide: MatDialogRef, useValue: mockDialogRef }
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(PokedexComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should release pokemon when button is clicked', () => {
		component['pokedex'].addToPokedex(gilbert);
		component.releaseFromPokedex(gilbert);
		expect(component.pokemons.length).toEqual(0);
	})

	it('should close when user clicks button', () => {
		const spy = spyOn(component['dialogRef'], 'close');
		component.close();
		expect(spy).toHaveBeenCalled()
	})

	it('should display detail window', () => {
		component['pokemons'] = [gilbert];
		component.showDetailWindow(gilbert);
		fixture.detectChanges();
		const bannerElement: HTMLElement = fixture.nativeElement;
		const details = bannerElement.querySelector('#gilbertDetails')!;
		expect(details).toBeTruthy();
	})
});
