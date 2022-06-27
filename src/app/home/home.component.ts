import { Component, OnInit } from '@angular/core';

import {Pokemon} from '../models/Pokemon';
import {PokedexService} from '../services/pokedex.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public pokemon?: Pokemon;

	constructor(private pokedex: PokedexService) { }

	ngOnInit(): void {
	}

	public insertPokemon(pokemon: Pokemon){
		this.pokedex.addAvailable(pokemon);
		this.pokemon = pokemon;
	}

}
