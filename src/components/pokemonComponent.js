import { useFetchPokemonNameQuery, useFetchPokemonIdQuery } from '../store/apis/pokemonApi';
import './pokemonComponent.css';

function PokemonComponent({ name, id }) {
  const nameQuery = useFetchPokemonNameQuery(name);
  const idQuery = useFetchPokemonIdQuery(id);

  const { data, error, isLoading } = id ? idQuery : nameQuery;

  if (isLoading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (

        <div className='card'>
            <div  className='card-body'>
            <h1>{data.name}</h1>
            <img src={data.sprites.front_default} alt={data.name} />
            <p>Type: {data.types[0].type.name}</p>
            <p>Height: {data.height} | Weight: {data.weight}</p>
            <p>ID: {data.id}</p>
            </div>
        </div>
  
  );
}

export default PokemonComponent;