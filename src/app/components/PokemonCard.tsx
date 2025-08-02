"use client";

         import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
         import Image from 'next/image';
         import { Pokemon } from '@/app/types/pokemon';

         interface PokemonCardProps {
           pokemon: Pokemon;
           onClick: () => void;
         }

         export function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
           const id = pokemon.url.split('/')[6];

           return (
             <Card
               className="cursor-pointer hover:shadow-lg transition-shadow"
               onClick={onClick}
             >
               <CardHeader>
                 <CardTitle className="capitalize text-center">{pokemon.name}</CardTitle>
               </CardHeader>
               <CardContent className="flex flex-col items-center">
                 <Image
                   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                   alt={pokemon.name}
                   width={96}
                   height={96}
                   className="mx-auto"
                 />
                 <p className="text-sm text-gray-500">#{id}</p>
               </CardContent>
             </Card>
           );
         }