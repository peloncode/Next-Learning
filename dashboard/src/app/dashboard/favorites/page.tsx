import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favorites Pokemons",
  description: "the favorites pokemons page",
};

const page = async () => {
  return (
    <>
      <p className="text-3xl text-violet-500">
        Pokemosn favoritess <span className="text-red-500">Local State</span>
      </p>
      <PokemonsGrid pokemons={[]} />
    </>
  );
};

export default page;
