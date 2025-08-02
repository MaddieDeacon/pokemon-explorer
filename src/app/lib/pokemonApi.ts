import { Pokemon, PokemonDetails } from '@/app/types/pokemon';

       export const fetchPokemonList = async (url: string = 'https://pokeapi.co/api/v2/pokemon?limit=12'): Promise<{ results: Pokemon[], next: string | null, previous: string | null }> => {
         try {
           const response = await fetch(url);
           const data = await response.json();
           return { results: data.results, next: data.next, previous: data.previous };
         } catch (error) {
           console.error('Error fetching Pokémon:', error);
           return { results: [], next: null, previous: null };
         }
       };

       export const fetchPokemonDetails = async (url: string): Promise<PokemonDetails> => {
         try {
           const response = await fetch(url);
           return await response.json();
         } catch (error) {
           console.error('Error fetching Pokémon details:', error);
           throw error;
         }
       };