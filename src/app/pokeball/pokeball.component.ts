import {Component, OnInit, Renderer2, ElementRef, Input, ViewChild} from '@angular/core';

import { PokedexService } from '../pokedex.service';

@Component({
	selector: 'app-pokeball',
	templateUrl: './pokeball.component.html',
	styleUrls: ['./pokeball.component.scss']
})
export class PokeballComponent implements OnInit {

	@ViewChild('pokedexContainer') pokedexContainer?: ElementRef;

	constructor(
		private pokedex: PokedexService,
		private renderer: Renderer2
	) { }

	public ngOnInit(): void {
	}

	public getPokedexSize(): number {
		return this.pokedex.getPokedexSize();
	}

	public close(): void {
		this.renderer.setStyle(this.pokedexContainer?.nativeElement, 'display', 'none');
	}

	public openPokedex(): void {
		if (this.getPokedexSize() > 0) {
			this.renderer.setStyle(this.pokedexContainer?.nativeElement, 'display', 'block');
		}
	}

}
