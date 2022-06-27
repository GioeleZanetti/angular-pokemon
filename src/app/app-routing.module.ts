import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: ':name/details', component: PokemonDetailsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
