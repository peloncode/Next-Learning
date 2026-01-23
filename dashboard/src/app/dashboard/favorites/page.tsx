import PokemonsFavorite from "@/pokemons/components/PokemonsFavorite";

export const metadata = {
  title: "Favorites Pokemons",
  description: "the favorites pokemons page",
};

const page = async () => {
  return (
    <>
      <PokemonsFavorite />
    </>
  );
};

export default page;
