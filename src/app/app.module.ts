import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokeballComponent } from './pokeball/pokeball.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		PokemonSearchComponent,
		SearchResultComponent,
		PokemonDetailsComponent,
		PokeballComponent,
		PokedexComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
