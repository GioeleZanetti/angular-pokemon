import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { notFoundPokemon, Pokemon } from '../models/Pokemon';
import { LocalStorageService } from './local-storage.service';

@Injectable({
	providedIn: 'root',
})
export class AvailableService {
	private available: Pokemon[] = [];

	constructor(private storage: LocalStorageService<Pokemon>) {}

	public initialise(): void {
		this.available = this.storage.getArray('available');
	}

	public addToAvailableObservable(pokemon: Pokemon): Observable<Pokemon[]> {
		let isPokemonInPokedex = this.available.find(
			(current: Pokemon) => current.id === pokemon.id
		);
		if (isPokemonInPokedex === undefined) {
			let newAvailable = [...this.available];
			newAvailable.push(pokemon);
			this.available = newAvailable;
			this.storage.saveArray('available', this.available);
		}
		return of(this.available);
	}

	public getPokemonByNameObservable(name: string): Observable<Pokemon> {
		const pokemonExistsInAvailable = this.available.find(
			(pokemon: Pokemon) => pokemon.name === name
		);
		if (pokemonExistsInAvailable) {
			return of(pokemonExistsInAvailable);
		} else {
			throw new Error(`No Results For ${name}`);
		}
	}

	public setInPokedex(pokemon: Pokemon, state: boolean): Observable<Pokemon> {
		let newAvailable = this.available.filter(
			(current: Pokemon) => current.id !== pokemon.id
		);
		const pokemonInAvailableList: Pokemon = this.available.find(
			(current: Pokemon) => current.id === pokemon.id
		)!;
		let newPokemon = JSON.parse(JSON.stringify(pokemonInAvailableList));
		newPokemon.is_in_pokedex = state;
		newAvailable.push(newPokemon);
		this.available = newAvailable;
		this.storage.saveArray('available', this.available);
		return of(newPokemon);
	}
}
