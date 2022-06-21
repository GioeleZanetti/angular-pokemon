import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

import { Router } from "@angular/router";

@Component({
	selector: 'app-pokemon-search',
	templateUrl: './pokemon-search.component.html',
	styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent {

	@ViewChild('pokemonName') pokemonNameElement?: ElementRef;
	private pokemonName: string = "";

	@HostListener('window:keyup', ['$event'])
	keyEvent(event: KeyboardEvent){
		if(event.key.toLowerCase() === "enter"){
			this.redirectIfNotEmpty();
		}
	}

	constructor(private router: Router) { }

	public redirectIfNotEmpty(): void {
		if (this.pokemonName.trim() !== "") {
			this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
				this.router.navigate([`pokemon/${this.pokemonName.toLowerCase()}`]);
			});
		}
	}

	public updateName(): void {
		this.pokemonName = this.pokemonNameElement?.nativeElement.value;
	}

}
