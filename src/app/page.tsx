"use client";

import { useState, useEffect } from 'react';
import { fetchPokemonList, fetchPokemonDetails } from '@/app/lib/pokemonApi';
import { Pokemon, PokemonDetails } from '@/app/types/pokemon';
import { PokemonCard } from '@/app/components/PokemonCard';
import { PokemonModal } from '@/app/components/PokemonModal';
import { Button } from '@/components/ui/button';
import './globals.css';

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [previousUrl, setPreviousUrl] = useState<string | null>(null);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadPokemon = async (url: string) => {
    setLoading(true);
    const { results, next, previous } = await fetchPokemonList(url);
    setPokemonList(results);
    setNextUrl(next);
    setPreviousUrl(previous);
    setLoading(false);
  };

  useEffect(() => {
    loadPokemon('https://pokeapi.co/api/v2/pokemon?limit=12');
  }, []);

  const handlePokemonClick = async (pokemon: Pokemon) => {
    const details = await fetchPokemonDetails(pokemon.url);
    setSelectedPokemon(details);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Pokémon Explorer</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pokemonList.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              onClick={() => handlePokemonClick(pokemon)}
            />
          ))}
        </div>
      )}
      <div className="flex justify-center gap-4 mt-6">
        <Button
          onClick={() => previousUrl && loadPokemon(previousUrl)}
          disabled={!previousUrl || loading}
        >
          Previous
        </Button>
        <Button
          onClick={() => nextUrl && loadPokemon(nextUrl)}
          disabled={!nextUrl || loading}
        >
          Next
        </Button>
      </div>
      <PokemonModal
        pokemon={selectedPokemon}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}