import { Component, HostListener } from '@angular/core';

import { Store } from '@ngrx/store';

import { searchPokemon } from '../store/actions/pokemon.actions';
import { PokemonState } from '../store/reducers/pokemon.reducer';

@Component({
	selector: 'app-pokemon-search',
	templateUrl: './pokemon-search.component.html',
	styleUrls: ['./pokemon-search.component.scss'],
})
export class PokemonSearchComponent {
	public pokemonName: string = '';

	@HostListener('window:keyup', ['$event'])
	keyEvent(event: KeyboardEvent) {
		if (event.key.toLowerCase() === 'enter') {
			this.search();
		}
	}

	constructor(private store: Store<PokemonState>) {}

	public search(): void {
		if (this.pokemonName.trim() !== '') {
			this.store.dispatch(
				searchPokemon({ name: this.pokemonName.toLowerCase() })
			);
		}
	}

	public updateName(name: string): void {
		this.pokemonName = name;
	}
}
