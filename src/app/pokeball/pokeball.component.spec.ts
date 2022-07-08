import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { PokeballComponent } from './pokeball.component';

describe('PokeballComponent', () => {
	let component: PokeballComponent;
	let fixture: ComponentFixture<PokeballComponent>;
	let mockDialog = {
		open: ({}: any) => {},
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokeballComponent],
			imports: [MatDialogModule],
			providers: [{ provide: MatDialog, useValue: mockDialog }],
		}).compileComponents();

		fixture = TestBed.createComponent(PokeballComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should open dialog when user clicks button', () => {
		const spy = spyOn(component.dialog, 'open');
		component.openDialog();
		expect(spy).toHaveBeenCalled();
	});
});
