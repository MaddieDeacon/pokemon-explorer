"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import { PokemonDetails } from '@/app/types/pokemon';

interface PokemonModalProps {
  pokemon: PokemonDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PokemonModal({ pokemon, isOpen, onClose }: PokemonModalProps) {
  if (!pokemon) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="capitalize">
            {pokemon.name} #{pokemon.id}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={120}
            height={120}
            className="mb-4"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>Height:</strong> {pokemon.height / 10}m</p>
              <p><strong>Weight:</strong> {pokemon.weight / 10}kg</p>
              <p><strong>Type:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}