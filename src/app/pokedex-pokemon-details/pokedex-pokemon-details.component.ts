import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { Pokemon } from '../models/Pokemon';
import { setPokemonInPokedex } from '../store/actions/available.actions';
import { removePokemon } from '../store/actions/pokedex.actions';
import { PokedexState } from '../store/reducers/pokedex.reducer';

@Component({
	selector: 'app-pokedex-pokemon-details',
	templateUrl: './pokedex-pokemon-details.component.html',
	styleUrls: ['./pokedex-pokemon-details.component.scss'],
})
export class PokedexPokemonDetailsComponent {
	@Input() pokemon?: Pokemon;
	public detailsVisible: boolean = false;

	constructor(private pokedexStore: Store<PokedexState>) {}

	public toggle(): void {
		this.detailsVisible = !this.detailsVisible;
	}

	public releaseFromPokedex(pokemon: Pokemon): void {
		this.pokedexStore.dispatch(removePokemon({ pokemon }));
		this.pokedexStore.dispatch(
			setPokemonInPokedex({ pokemon: pokemon, state: false })
		);
	}
}
