import { Middleware } from "@reduxjs/toolkit";

export const localstorageMiddlewares: Middleware =
  (stateAPI) => (next) => (action: any) => {
    // 1. Siempre ejecutar el next(action) primero para que el estado se actualice
    const result = next(action);

    // 2. Verificar si la acción es la de pokemons
    if (action.type === "pokemons/pokemonToggle") {
      // 3. Obtener solo la parte de pokemons del estado
      const { pokemons } = stateAPI.getState() as any;

      // 4. Guardar en LocalStorage (Solo si estamos en el cliente)
      if (typeof window !== "undefined") {
        localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons));
      }
    }

    return result;
  };
