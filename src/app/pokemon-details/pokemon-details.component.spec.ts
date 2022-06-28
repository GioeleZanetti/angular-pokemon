import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { PokemonDetailsComponent } from './pokemon-details.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { gilbert } from '../testing/pokemon-mocks';
import {HomeComponent} from "../home/home.component";
import {Location} from "@angular/common";
import {PokedexService} from "../services/pokedex.service";

describe('PokemonDetailsComponent', () => {
	let component: PokemonDetailsComponent;
	let fixture: ComponentFixture<PokemonDetailsComponent>;
	let router: Router;
	let location: Location;
	let activatedRouterSpy = {
		snapshot: {
			paramMap: convertToParamMap({
				name: 'gilbert'
			})
		}
	};
	let pokedexSpy = {
		available: [gilbert],
		pokedex: []
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokemonDetailsComponent],
			schemas: [NO_ERRORS_SCHEMA],
			providers: [
				{
					provide: ActivatedRoute, useValue: activatedRouterSpy
				}
			],
			imports: [
				RouterTestingModule.withRoutes(
					[
						{ path: ':name/details', component: PokemonDetailsComponent },
						{ path: '', redirectTo: '/home', pathMatch: 'full' },
						{ path: 'home', component: HomeComponent }
					]
				)
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(PokemonDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		router = TestBed.inject(Router);
		location = TestBed.inject(Location);
		router.initialNavigation();
	});


	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should get pokemon from service using the name found in url', () => {
		component['pokedex'].addAvailable(gilbert);
		component.getPokemonIfExists();
		expect(component.pokemon?.name).toEqual('gilbert');
	});

	it('should add pokemon to list if not empty', () => {
		component.pokemon = gilbert;
		component.addToPokedex();
		expect(component['pokedex']['pokedex'][0]).toEqual(gilbert);
	});

	it('should navigate to home when back is called', fakeAsync(() => {
		router.navigate(['pikachu/details']);
		component.back();
		expect(location.path()).toEqual('/home');
	}));
});
