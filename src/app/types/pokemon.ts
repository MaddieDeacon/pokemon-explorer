export interface Pokemon {
         name: string;
         url: string;
       }

       export interface PokemonDetails {
         name: string;
         id: number;
         height: number;
         weight: number;
         types: { type: { name: string } }[];
         sprites: { front_default: string };
       }