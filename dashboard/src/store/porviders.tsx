"use client";

import { Provider } from "react-redux";
import { store } from "./index";
import { useEffect } from "react";
import { setFavoritePokemons } from "./pokemons/pokemons";

interface Props {
  children: React.ReactNode;
}

const porviders = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("pokemons-favorite") ?? "{}",
    );
    store.dispatch(setFavoritePokemons(favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default porviders;
