"use client";

import { useAppSelector } from "@/store";
import PokemonsGrid from "./PokemonsGrid";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

const PokemonsFavorite = () => {
  const pokemonsFavorite = useAppSelector((state) => state.pokemons);

  const pokemonsArray = Object.values(pokemonsFavorite);

  return (
    <div>
      {pokemonsArray.length === 0 ? (
        <PokemonNotFavorite />
      ) : (
        <PokemonsGrid pokemons={pokemonsArray} />
      )}
    </div>
  );
};

export default PokemonsFavorite;

export const PokemonNotFavorite = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mt-50 justify-center items-center">
        <h1 className="text-6xl">Not Found Favorite Pokemons</h1>
        <IoHeartOutline className="text-red-600" size={100} />
      </div>
    </>
  );
};
