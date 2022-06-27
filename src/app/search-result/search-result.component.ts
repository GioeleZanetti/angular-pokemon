import { Component, Input } from '@angular/core';

import { Pokemon } from '../models/Pokemon';

@Component({
	selector: 'app-search-result',
	templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {

	@Input() pokemon?: Pokemon;

	constructor() { }

}
