import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsComponent } from './pokemon-details.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {ActivatedRoute, Router, convertToParamMap, ParamMap, Params} from "@angular/router";
import {of} from "rxjs";

describe('PokemonDetailsComponent', () => {
	let component: PokemonDetailsComponent;
	let fixture: ComponentFixture<PokemonDetailsComponent>;
	let router: Router;
	let route: ActivatedRoute;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokemonDetailsComponent],
			schemas: [NO_ERRORS_SCHEMA],
			providers: [
				PokemonDetailsComponent,
				{
					provide: ActivatedRoute, useValue: {
						params: of({paramMap: {get: 'name'}})
					}
				},
				{
					provide: Router, useValue: {
						params: of({})
					}
				}
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(PokemonDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		route = TestBed.inject(ActivatedRoute);
		router = TestBed.inject(Router);
	});


	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
