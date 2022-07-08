import { AvailableState } from '../reducers/available.reducer';
import { gilbert } from '../../testing/pokemon-mocks';
import { getAvailableList, getCurrentPokemon } from './available.selectors';

describe('AvailableSelectors', () => {
	const initialState: AvailableState = {
		availableList: [gilbert],
		currentPokemon: gilbert,
	};

	it('should get available list', () => {
		const result = getAvailableList.projector(initialState);
		expect(result.length).toEqual(1);
		expect(result[0]).toEqual(gilbert);
	});

	it('should get current pokeon', () => {
		const result = getCurrentPokemon.projector(initialState);
		expect(result).toEqual(gilbert);
	});
});
