import { SimplePokemon } from "../interfaces/simple-pokemon";
import PokemonsCard from "./PokemonsCard";

interface Props {
  pokemons: SimplePokemon[];
}

const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {pokemons.map((pk) => (
            <PokemonsCard key={pk.id} pokemon={pk} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonsGrid;
