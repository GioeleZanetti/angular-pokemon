import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import {Store} from "@ngrx/store";

import {PokemonApiService} from '../services/pokemon-api.service';
import {Pokemon} from '../models/Pokemon';
import {searchPokemon, searchPokemonKey} from "../actions/pokemon-search.actions";

@Component({
	selector: 'app-pokemon-search',
	templateUrl: './pokemon-search.component.html',
	styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent {

	//@Output() emitter: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
	public pokemonName: string = "";


	@HostListener('window:keyup', ['$event'])
	keyEvent(event: KeyboardEvent){
		if(event.key.toLowerCase() === "enter"){
			this.search();
		}
	}

	constructor(private store: Store<{ pokemon: Pokemon }>) { }

	public search(): void {
		if (this.pokemonName.trim() !== "") {
			this.store.dispatch(searchPokemon({name: this.pokemonName}));
			console.log('Dispached')
			/*this.api.getPokemonByName(this.pokemonName)
				.subscribe((result: Pokemon) => this.emitter.emit(result)) ;*/
			//klammern --> {[(...
		}
	}

	public updateName(name: string): void {
		this.pokemonName = name;
	}

}
