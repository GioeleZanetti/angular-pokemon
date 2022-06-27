import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {Pokemon} from "../models/Pokemon";

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	const pokemon: Pokemon = {
		id: 1,
		name: "Gilbert",
		base_experience: 222,
		height: 255,
		weight: 255,
		is_in_pokedex: true,
		sprites: {
			front_default: '',
			other: {
				"official-artwork": {
					front_default: ''
				}
			}
		}
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ HomeComponent ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should update current pokemon when received', () => {
		component.insertPokemon(pokemon);
		expect(component.pokemon).toEqual(pokemon);
	});

	it('insert pokemon in available list when received', () => {
		component.insertPokemon(pokemon);
		expect(component['pokedex']['available'][0]).toEqual(pokemon);
	});
});
