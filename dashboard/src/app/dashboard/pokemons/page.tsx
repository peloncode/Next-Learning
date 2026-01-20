import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const pokemonApi = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemons) => ({
    id: pokemons.url.split("/").at(-2)!,
    name: pokemons.name,
  }));

  // throw new Error("Function not implemented.");

  // throw notFound;
  return pokemons;
};

const page = async () => {
  const po = await pokemonApi(150);

  return (
    <>
      <PokemonsGrid pokemons={po} />
    </>
  );
};

export default page;
