import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { provideMockStore } from '@ngrx/store/testing';

import { PokemonDetailsComponent } from './pokemon-details.component';
import { gilbert } from '../testing/pokemon-mocks';
import { HomeComponent } from '../home/home.component';

describe('PokemonDetailsComponent', () => {
	let component: PokemonDetailsComponent;
	let fixture: ComponentFixture<PokemonDetailsComponent>;
	let router: Router;
	let location: Location;
	let activatedRouterSpy = {
		snapshot: {
			paramMap: convertToParamMap({
				name: 'gilbert',
			}),
		},
	};
	let initialState = {
		pokedexState: { pokedex: [], error: '', pokemon: gilbert },
		availableState: { currentPokemon: gilbert, availableList: [gilbert] },
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokemonDetailsComponent],
			schemas: [NO_ERRORS_SCHEMA],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: activatedRouterSpy,
				},
				provideMockStore({ initialState }),
			],
			imports: [
				RouterTestingModule.withRoutes([
					{
						path: ':name/details',
						component: PokemonDetailsComponent,
					},
					{ path: '', redirectTo: '/home', pathMatch: 'full' },
					{ path: 'home', component: HomeComponent },
				]),
			],
		}).compileComponents();

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

	it('should dispatch get pokemon from available action', () => {
		const spy = spyOn(component['pokedexStore'], 'dispatch');
		component.ngOnInit();
		expect(spy).toHaveBeenCalled();
	});

	it('should dispatch add pokemon to list action if not empty', () => {
		const spy = spyOn(component['pokedexStore'], 'dispatch');
		component.pokemon = gilbert;
		component.addToPokedex();
		expect(spy).toHaveBeenCalled();
	});

	it('should navigate to home when back is called', fakeAsync(() => {
		router.navigate(['pikachu/details']);
		component.back();
		expect(location.path()).toEqual('/home');
	}));
});
