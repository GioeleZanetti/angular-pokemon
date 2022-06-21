import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

import { PokedexService } from '../services/pokedex.service';
import {PokedexComponent} from '../pokedex/pokedex.component';


@Component({
	selector: 'app-pokeball',
	templateUrl: './pokeball.component.html',
	styleUrls: ['./pokeball.component.scss']
})
export class PokeballComponent {

	@ViewChild('pokedexContainer') pokedexContainer?: ElementRef;

	constructor(
		private pokedex: PokedexService,
		private renderer: Renderer2,
		public dialog: MatDialog
	) { }

	public openDialog(): void {
		const dialogConf = new MatDialogConfig();
		dialogConf.height = '400px';
		dialogConf.width = '50%';
		dialogConf.enterAnimationDuration = '200';
		this.dialog.open(PokedexComponent, dialogConf);
	}

	public getPokedexSize(): number {
		return this.pokedex.getPokedexSize();
	}

	public close(): void {
		this.renderer.setStyle(this.pokedexContainer?.nativeElement, 'display', 'none');
	}

}
