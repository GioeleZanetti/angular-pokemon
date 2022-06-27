import { createAction, props } from '@ngrx/store'

export const searchPokemonKey: string = '[Pokemon Search] Search Pokemon'

export const searchPokemon = createAction(
	searchPokemonKey,
	props<{name: string}>()
)