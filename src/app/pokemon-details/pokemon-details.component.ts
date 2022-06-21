import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Pokemon } from '../Pokemon';
import { PokedexService } from '../pokedex.service';

@Component({
	selector: 'app-pokemon-details',
	templateUrl: './pokemon-details.component.html',
	styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

	@Input() pokemon?: Pokemon;

	constructor(
		private pokedex: PokedexService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	public ngOnInit(): void {
		this.getPokemonIfExists();
	}

	public getPokemonIfExists(): void {
		let name = String(this.route.snapshot.paramMap.get('name'));
		this.pokemon = this.pokedex.getPokemonByName(name);
	}

	public back(): void {
		this.router.navigate([`pokemon/${this.pokemon?.name}`]);
	}

	public addToPokedex() {
		if (this.pokemon) {
			this.pokedex.addToPokedex(this.pokemon);
			this.pokemon.is_in_pokedex = true;
		}
	}

}
