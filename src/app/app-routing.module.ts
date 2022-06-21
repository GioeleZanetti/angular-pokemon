import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchResultComponent } from './search-result/search-result.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
	{ path: 'pokemon/:name', component: SearchResultComponent },
	{ path: 'pokemon/:name/details', component: PokemonDetailsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
