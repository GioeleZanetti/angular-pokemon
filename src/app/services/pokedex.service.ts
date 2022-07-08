import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pokemon } from '../models/Pokemon';
import { LocalStorageService } from './local-storage.service';

@Injectable({
	providedIn: 'root',
})
export class PokedexService {
	private pokedex: Pokemon[] = [];

	constructor(private storage: LocalStorageService<Pokemon>) {}

	public initialise(): void {
		this.pokedex = this.storage.getArray('pokedex');
	}

	public addToPokedexObservable(pokemon: Pokemon): Observable<Pokemon[]> {
		let newPokemon: Pokemon = { ...pokemon };
		newPokemon.is_in_pokedex = true;
		let newPokedex = [...this.pokedex];
		newPokedex.push(newPokemon);
		this.pokedex = newPokedex;
		this.storage.saveArray('pokedex', this.pokedex);
		return of(this.pokedex);
	}

	public removeFromPokedexObservable(
		pokemon: Pokemon
	): Observable<Pokemon[]> {
		this.pokedex = this.pokedex.filter(
			(current: Pokemon) => current.id !== pokemon.id
		);
		this.storage.saveArray('pokedex', this.pokedex);
		return of(this.pokedex);
	}

	public getObservablePokedex(): Observable<Pokemon[]> {
		return of(this.pokedex);
	}

	public getPokedexSize(): number {
		return this.pokedex.length;
	}
}
