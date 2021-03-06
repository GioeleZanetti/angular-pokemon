import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { PokedexService } from '../services/pokedex.service';
import {PokedexComponent} from '../pokedex/pokedex.component';


@Component({
	selector: 'app-pokeball',
	templateUrl: './pokeball.component.html',
	styleUrls: ['./pokeball.component.scss']
})
export class PokeballComponent {


	constructor(
		private pokedex: PokedexService,
		public dialog: MatDialog
	) { }

	public openDialog(): void {
		const dialogConf = new MatDialogConfig();
		dialogConf.width = '50%';
		dialogConf.enterAnimationDuration = '300ms';
		dialogConf.exitAnimationDuration = '200ms'
		this.dialog.open(PokedexComponent, dialogConf);
	}

	public getPokedexSize(): number {
		return this.pokedex.getPokedexSize();
	}

}
