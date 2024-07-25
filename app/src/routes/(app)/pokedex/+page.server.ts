import { GENERATIONS, POKEDEX, type GenerationsType } from '$lib/constans/pokemon';
import { POKEMON_API_BASE_ENDPOINT } from '$lib/server/api-endpoint';
import type { PageServerLoad } from './$types';

export const prerender = true;

interface PokemonEntry {
  entry_number: number;
  pokemon_species: {
    name: string;
    url: string;
  };
}

interface Pokemon {
  number: number;
  name: string;
}

export const load: PageServerLoad = async () => {
  let generationPokemons: Record<number, Pokemon[]> = [];

  try {
    const res = await fetch(`${POKEMON_API_BASE_ENDPOINT}/pokedex/1`).then((res) => res.json());

    generationPokemons = res.pokemon_entries.reduce((acc: Record<GenerationsType, Pokemon[]>, pokemon: PokemonEntry) => {
      const index = GENERATIONS.find((generation) => {
        const rage = POKEDEX[generation];
        return pokemon.entry_number >= rage.start && pokemon.entry_number <= rage.end;
      });

      if (index) {
        (acc[index] || (acc[index] = [])).push({ number: pokemon.entry_number, name: pokemon.pokemon_species.name });
        return acc;
      }

      return acc;
    }, []);

  } catch (e) {
    console.error(e);
  }

  return {
    generationPokemons
  };
};
