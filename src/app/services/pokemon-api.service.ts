import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Pokemon, notFoundPokemon } from '../models/Pokemon';

@Injectable({
	providedIn: 'root'
})

export class PokemonApiService {

	private url = 'https://pokeapi.co/api/v2';

	constructor(private http: HttpClient) { }

	public getPokemonByName(name: string): Observable<Pokemon> {
		if (!name.trim()) {
			return of(notFoundPokemon);
		}
		return this.http.get<Pokemon>(`${this.url}/pokemon/${name}`).pipe(
			catchError(this.handleError(notFoundPokemon, name))
		);
	}

	private handleError(notFoundPokemon: Pokemon, name: string): (error: any)  => Observable<Pokemon> {
		return (error: any): Observable<Pokemon> => {
			return of(notFoundPokemon);
		};
	}
}
