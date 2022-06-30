import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultComponent } from './search-result.component';
import {gilbert} from "../testing/pokemon-mocks";
import {provideMockStore} from "@ngrx/store/testing";

describe('SearchResultComponent', () => {
	let component: SearchResultComponent;
	let fixture: ComponentFixture<SearchResultComponent>;
	let initialState = {pokemon: {pokemon: gilbert}}

	beforeEach(async () => {

		await TestBed.configureTestingModule({
			declarations: [SearchResultComponent],
			providers: [
				provideMockStore({initialState})
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(SearchResultComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
