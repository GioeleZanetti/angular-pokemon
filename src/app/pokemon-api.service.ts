import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Pokemon } from './Pokemon';

@Injectable({
	providedIn: 'root'
})

export class PokemonApiService {

	private url = 'https://pokeapi.co/api/v2';

	constructor(private http: HttpClient) { }

	public getPokemonByName(name: string): Observable<Pokemon> {
		let notFoundPokemon: Pokemon = {
			id: -1,
			name: `No result for "${name}"`,
			base_experience: 0,
			height: 0,
			sprites: {
				front_default: 'none',
				other: {
					"official-artwork": {
						front_default: 'none'
					}
				}
			},
			weight: 0,
			is_in_pokedex: false
		}
		if (!name.trim()) {
			return of(notFoundPokemon);
		}
		return this.http.get<Pokemon>(`${this.url}/pokemon/${name}`).pipe(
			catchError(this.handleError<Pokemon>(notFoundPokemon))
		);
	}

	private handleError<T>(result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			return of(result as T);
		};
	}
}
