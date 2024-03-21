import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pokemonApi = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/'
  }),
  endpoints(builder) {
    return {
      fetchPokemon: builder.query({
        query: (name) => {
          return {
            url: `pokemon/${name}`,
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchPokemonQuery } = pokemonApi;
export { pokemonApi };