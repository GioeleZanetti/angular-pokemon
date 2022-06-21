import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon';
import { LocalStorageService } from './local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class PokedexService {

	private available: Pokemon[] = [];
	private pokedex: Pokemon[] = [];

	constructor(private storage: LocalStorageService<Pokemon>) { }

	initialise(): void {
		this.available = this.storage.getArray('available');
		this.pokedex = this.storage.getArray('pokedex');
	}

	public getPokemonByName(name: string) {
		return this.available.find((pokemon: Pokemon) => pokemon.name == name);
	}

	public addAvailable(pokemon: Pokemon) {
		let isPokemonInPokedex = this.available.find((current: Pokemon) => current.id == pokemon.id);
		if (isPokemonInPokedex === undefined) {
			this.available.push(pokemon);
			this.storage.saveArray('available', this.available);
		}
	}

	public addToPokedex(pokemon: Pokemon): void {
		this.pokedex.push(pokemon);
		this.setInPokedex(pokemon, true);
		this.storage.saveArray('available', this.available);
		this.storage.saveArray('pokedex', this.pokedex);
	}

	public removeFromPokedex(pokemon: Pokemon): void {
		this.pokedex = this.pokedex.filter((current: Pokemon) => current.id !== pokemon.id);
		this.setInPokedex(pokemon, false);
		this.storage.saveArray('available', this.available);
		this.storage.saveArray('pokedex', this.pokedex);
	}

	public getPokedex(): Pokemon[] {
		return this.pokedex;
	}

	public getPokedexSize(): number {
		return this.pokedex.length;
	}

	public setInPokedex(pokemon: Pokemon, state: boolean) {
		let pokemonInAvailableList = this.available.find((current: Pokemon) => current.id == pokemon.id);
		if (pokemonInAvailableList) {
			pokemonInAvailableList.is_in_pokedex = state;
		}
	}
}
