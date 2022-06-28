import {Component, EventEmitter, HostListener, Output} from '@angular/core';

import {PokemonApiService} from '../services/pokemon-api.service';
import {Pokemon} from '../models/Pokemon';

@Component({
	selector: 'app-pokemon-search',
	templateUrl: './pokemon-search.component.html',
	styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent {

	@Output() emitter: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
	public pokemonName: string = "";


	@HostListener('window:keyup', ['$event'])
	keyEvent(event: KeyboardEvent){
		if(event.key.toLowerCase() === "enter"){
			this.search();
		}
	}

	constructor(private api: PokemonApiService) { }

	public search(): void {
		if (this.pokemonName.trim() !== "") {
			this.api.getPokemonByName(this.pokemonName.toLowerCase())
				.subscribe((result: Pokemon) => {
					this.emitter.emit(result);
				});
		}
	}

	public updateName(name: string): void {
		this.pokemonName = name;
	}

}
