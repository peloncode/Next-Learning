import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

interface PokemonsFavoriteState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsFavoriteState = {
  "1": { id: "1", name: "bulbasaur" },
  "43": { id: "43", name: "oddish" },
  "51": { id: "51", name: "dugtrio" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    pokemonToggle(state, action: PayloadAction<SimplePokemon>) {
      //toma el pokemon del action.payload y luego desestructura su id
      const pokemon = action.payload;
      const { id } = pokemon;

      //como el id de bulbasur si existe, entonce lo elimina
      if (!!state[id]) {
        delete state[id];
        return;
      }
      //pero si el id de bulbasur no existe, se añade al objeto
      state[id] = pokemon;
    },
  },
});

export const { pokemonToggle } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
