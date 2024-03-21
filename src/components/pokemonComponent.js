import { useFetchPokemonQuery } from '../store/apis/pokemonApi';

function PokemonComponent({ name }) {
  const { data, error, isLoading } = useFetchPokemonQuery(name);

  if (isLoading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <div className='col-lg-2 mb-4'>
        <div className='card'>
            <div  className='card-body'>
            <h1>{data.name}</h1>
            <img src={data.sprites.front_default} alt={data.name} />
            <p>Type: {data.types[0].type.name}</p>
            </div>
        </div>
    </div>
  );
}
export default PokemonComponent;