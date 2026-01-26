import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsFavoriteState {
  [key: string]: SimplePokemon;
}

const getInitState = (): PokemonsFavoriteState => {
  if (typeof localStorage === "undefined") return {};

  const favorites = JSON.parse(
    localStorage.getItem("pokemons-favorite") ?? "{}",
  );
  return favorites;
};

const initialState: PokemonsFavoriteState = {
  // ...getInitState(),
  // "1": { id: "1", name: "bulbasaur" },
  // "43": { id: "43", name: "oddish" },
  // "51": { id: "51", name: "dugtrio" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<PokemonsFavoriteState>) {
      return action.payload;
    },

    pokemonToggle(state, action: PayloadAction<SimplePokemon>) {
      // AQUÍ ESTÁ EL SECRETO
      console.log("--- Action Recibida ---");
      console.log("Tipo de acción:", action.type);
      console.log("Contenido (Payload):", action.payload);
      //toma el pokemon del action.payload y luego desestructura su id
      const pokemon = action.payload;
      const { id } = pokemon;

      //como el id de bulbasur si existe, entonce lo elimina
      if (!!state[id]) {
        delete state[id];
        // return;
      } else {
        //pero si el id de bulbasur no existe, se añade al objeto
        state[id] = pokemon;
      }

      localStorage.setItem("pokemons-favorite", JSON.stringify(state));
    },
  },
});

export const { pokemonToggle, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
