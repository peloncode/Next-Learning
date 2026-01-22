"use client";

import { useAppSelector } from "@/store";
import PokemonsGrid from "./PokemonsGrid";

const PokemonsFavorite = () => {
  const pokemonsFavorite = useAppSelector((state) =>
    Object.values(state.pokemons),
  );

  return (
    <div>
      <PokemonsGrid pokemons={pokemonsFavorite} />
    </div>
  );
};

export default PokemonsFavorite;
