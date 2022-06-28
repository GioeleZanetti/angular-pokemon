import { Injectable } from '@angular/core';
import {notFoundPokemon, Pokemon} from '../models/Pokemon';
import { LocalStorageService } from './local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class PokedexService {

	private available: Pokemon[] = [];
	private pokedex: Pokemon[] = [];

	constructor(private storage: LocalStorageService<Pokemon>) { }

	public initialise(): void {
		this.available = this.storage.getArray('available');
		this.pokedex = this.storage.getArray('pokedex');
	}

	public getPokemonByName(name: string): Pokemon {
		const pokemonExists = this.available.find((pokemon: Pokemon) => pokemon.name.toLowerCase() === name.toLowerCase());
		if(pokemonExists){
			return pokemonExists
		}else{
			const notFound: Pokemon = notFoundPokemon;
			notFound.name = `No result for "${name}"`;
			return notFound;
		}
	}

	public addAvailable(pokemon: Pokemon): void {
		let isPokemonInPokedex = this.available.find((current: Pokemon) => current.id === pokemon.id);
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

	public setInPokedex(pokemon: Pokemon, state: boolean): void {
		let pokemonInAvailableList = this.available.find((current: Pokemon) => current.id === pokemon.id);
		if (pokemonInAvailableList) {
			pokemonInAvailableList.is_in_pokedex = state;
		}
	}
}
