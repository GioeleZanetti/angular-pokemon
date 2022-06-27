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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import {PokemonEffects} from "./effects/pokemon.effects";
import {pokemonReducer} from "./reducers/pokemon.reducer";

@NgModule({
	declarations: [
		AppComponent,
		PokemonSearchComponent,
		SearchResultComponent,
		PokemonDetailsComponent,
		PokeballComponent,
		PokedexComponent,
		HeaderComponent,
  HomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatDialogModule,
		MatButtonModule,
		MatIconModule,
		StoreModule.forRoot({/*pokemon: pokemonReducer*/}, {}),
		EffectsModule.forRoot([PokemonEffects])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
