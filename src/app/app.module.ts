import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokeballComponent } from './pokeball/pokeball.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PokemonEffects } from './store/effects/pokemon.effects';
import { pokemonReducer } from './store/reducers/pokemon.reducer';
import { environment } from '../environments/environment';
import { pokedexReducer } from './store/reducers/pokedex.reducer';
import { PokedexEffects } from './store/effects/pokedex.effects';
import { AvailableEffects } from './store/effects/available.effects';
import { availableReducer } from './store/reducers/available.reducer';
import { PokedexPokemonDetailsComponent } from './pokedex-pokemon-details/pokedex-pokemon-details.component';

@NgModule({
	declarations: [
		AppComponent,
		PokemonSearchComponent,
		SearchResultComponent,
		PokemonDetailsComponent,
		PokeballComponent,
		PokedexComponent,
		HeaderComponent,
		HomeComponent,
  PokedexPokemonDetailsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatDialogModule,
		MatButtonModule,
		MatIconModule,
		StoreModule.forRoot(
			{
				pokemonState: pokemonReducer,
				pokedexState: pokedexReducer,
				availableState: availableReducer,
			},
			{}
		),
		EffectsModule.forRoot([
			PokemonEffects,
			PokedexEffects,
			AvailableEffects,
		]),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
