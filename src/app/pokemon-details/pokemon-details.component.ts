import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Pokemon } from '../models/Pokemon';
import { PokedexService } from '../services/pokedex.service';
import { PokedexState } from '../store/reducers/pokedex.reducer';
import { addPokemon } from '../store/actions/pokedex.actions';
import {
	getPokemonByName,
	setPokemonInPokedex,
} from '../store/actions/available.actions';
import { AvailableState } from '../store/reducers/available.reducer';
import { getCurrentPokemon } from '../store/selectors/available.selectors';

@Component({
	selector: 'app-pokemon-details',
	templateUrl: './pokemon-details.component.html',
	styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
	public pokemon?: Pokemon;
	private pokemon$: Observable<Pokemon> = this.availableStore.pipe(
		select(getCurrentPokemon)
	);

	constructor(
		private pokedexStore: Store<PokedexState>,
		private availableStore: Store<AvailableState>,
		private pokedex: PokedexService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	public ngOnInit(): void {
		const name = String(this.route.snapshot.paramMap.get('name'));
		this.pokedexStore.dispatch(getPokemonByName({ name }));
		this.pokemon$.subscribe((pokemon: Pokemon) => {
			this.pokemon = pokemon;
		});
	}

	public back(): void {
		this.router.navigate(['']);
	}

	public addToPokedex(): void {
		if (this.pokemon) {
			this.pokedexStore.dispatch(addPokemon({ pokemon: this.pokemon }));
			this.availableStore.dispatch(
				setPokemonInPokedex({ pokemon: this.pokemon, state: true })
			);
		}
	}
}
