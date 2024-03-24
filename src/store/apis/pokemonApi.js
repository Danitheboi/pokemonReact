import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pokemonApi = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/'
  }),
  endpoints(builder) {
    return {
      fetchPokemonName: builder.query({
        query: (name) => {
          return {
            url: `pokemon/${name}`,
            method: 'GET',
          };
        },
      }),
      fetchPokemonId: builder.query({
        query: (id) => {
          return {
            url: `pokemon/${id}`,
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchPokemonNameQuery, useFetchPokemonIdQuery } = pokemonApi;
export { pokemonApi };