export interface Pokemon {
	id: number
	name: string
	base_experience: number
	height: number
	weight: number
	sprites: Sprites
	is_in_pokedex: boolean
}

interface Sprites {
	front_default: string
	other: Other
}

interface Other {
	'official-artwork': Artwork
}

interface Artwork {
	front_default: string
}

export const notFoundPokemon: Pokemon = {
	id: -1,
	name: 'No Result Found',
	base_experience: 0,
	height: 0,
	sprites: {
		front_default: 'none',
		other: {
			'official-artwork': {
				front_default: 'none',
			},
		},
	},
	weight: 0,
	is_in_pokedex: false,
}
