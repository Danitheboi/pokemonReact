import { useFetchPokemonNameQuery, useFetchPokemonIdQuery } from '../store/apis/pokemonApi';
import './pokemonComponent.css';

function PokemonComponent({pokemon}) {
  //const nameQuery = useFetchPokemonNameQuery(name);
  //const idQuery = useFetchPokemonIdQuery(id);

  //const { data, error, isLoading } = id ? idQuery : nameQuery;

  //if (isLoading) return 'Loading...';
  //if (error) return `Error: ${error.message}`;

  return (

        <div className='card'>
            <div  className='card-body'>
            <h1>{pokemon.name}</h1>
            <img className='pokemonImg' src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Type: {pokemon.types[0].type.name}</p>
            <p>Height: {pokemon.height} | Weight: {pokemon.weight}</p>
            <p>ID: {pokemon.id}</p>
            </div>
        </div>
  
  );
}

export default PokemonComponent;