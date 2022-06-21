export interface Pokemon {
	id: number,
	name: string,
	base_experience: number,
	height: number,
	weight: number,
	sprites: Sprites,
	is_in_pokedex: boolean
}

interface Sprites {
	front_default: string,
	other: Other
}

interface Other {
	"official-artwork": Artwork
}

interface Artwork {
	front_default: string;
}
