import React, { useEffect, useState } from 'react';
import { useFetchPokemonIdQuery } from '../store/apis/pokemonApi';
import PokemonComponent from './pokemonComponent';
import './pokemonList.css';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const { data, error, isLoading } = useFetchPokemonIdQuery(currentIndex);

  useEffect(() => {
    if (data && data !== pokemonData[pokemonData.length - 1] && currentIndex < 152) {
      setPokemonData(prevData => [...prevData, data]);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  }, [data, currentIndex, pokemonData]);

  if (isLoading) return 'Loading...';
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='PokemonList'>
{pokemonData.filter(Boolean).map((pokemon, index) => (
  <PokemonComponent key={index} pokemon={pokemon} />
))}
    </div>
  );
};

export default PokemonList;