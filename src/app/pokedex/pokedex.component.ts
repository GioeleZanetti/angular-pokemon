import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Pokemon } from '../models/Pokemon';
import { PokedexState } from '../store/reducers/pokedex.reducer';
import { getPokedex } from '../store/selectors/pokedex.selectors';
import { loadPokedex, removePokemon } from '../store/actions/pokedex.actions';
import { setPokemonInPokedex } from '../store/actions/available.actions';

@Component({
	selector: 'app-pokedex',
	templateUrl: './pokedex.component.html',
	styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
	public pokemons$: Observable<Pokemon[]> = this.pokedexStore.pipe(
		select(getPokedex)
	);
	public pokemons: Pokemon[] = [];

	constructor(
		private pokedexStore: Store<PokedexState>,
		public dialogRef: MatDialogRef<PokedexComponent>
	) {}

	public ngOnInit(): void {
		this.pokedexStore.dispatch(loadPokedex());
	}

	public close(): void {
		this.dialogRef.close();
	}
}
