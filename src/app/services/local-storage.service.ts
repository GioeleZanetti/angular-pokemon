import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService<T> {
	constructor() {}

	public saveArray(name: string, array: T[]) {
		localStorage.setItem(name, JSON.stringify(array));
	}

	public getArray(name: string): T[] {
		let array = localStorage.getItem(name);
		if (array) {
			return JSON.parse(array);
		} else {
			return [];
		}
	}
}
