import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { Pokemon } from '../models/Pokemon';

describe('LocalStorageService', () => {
	let service: LocalStorageService<Pokemon>;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(LocalStorageService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
