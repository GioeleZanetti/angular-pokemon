import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AvailableState } from '../reducers/available.reducer';

const availableState = createFeatureSelector<AvailableState>('availableState');

export const getAvailableList = createSelector(
	availableState,
	(state: AvailableState) => state.availableList
);

export const getCurrentPokemon = createSelector(
	availableState,
	(state: AvailableState) => state.currentPokemon
);
