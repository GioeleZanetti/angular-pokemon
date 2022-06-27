import { Component, Input, OnInit } from '@angular/core';

import { Pokemon } from '../models/Pokemon';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
	selector: 'app-search-result',
	templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit{

	//public pokemon?: Pokemon;
	public pokemonObservable$: Observable<Pokemon> = this.store.select(state => state.pokemon)

	constructor(private store: Store<{ pokemon: Pokemon }>) { }

	public ngOnInit(): void {
    }

}
