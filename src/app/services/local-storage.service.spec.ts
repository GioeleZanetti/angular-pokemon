import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { Pokemon } from '../models/Pokemon';

describe('LocalStorageService', () => {
	let service: LocalStorageService<Pokemon>;
	const mockArray: Pokemon[] = [
		{
			id: 1,
			name: "Gilbert",
			base_experience: 222,
			height: 255,
			weight: 255,
			is_in_pokedex: true,
			sprites: {
				front_default: '',
				other: {
					"official-artwork": {
						front_default: ''
					}
				}
			}
		},
	];

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(LocalStorageService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should save an array with a certain key', () => {
		const key: string = 'setTest';
		service.saveArray(key, mockArray);
		const retrieved: Pokemon[] = JSON.parse(String(localStorage.getItem(key)));
		expect(retrieved).toEqual(mockArray);
	});

	it('should return an empty array if the key points to nothing', () => {
		const retrieved: Pokemon[] = service.getArray('asa');
		expect(retrieved).toEqual([]);
	});

	it('should get the array back from the local storage', () => {
		const key = 'getTest';
		localStorage.setItem(key, JSON.stringify(mockArray));
		const retrieved: Pokemon[] = service.getArray(key);
		expect(retrieved).toEqual(mockArray);
	});
});
