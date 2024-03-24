import logo from '../src/assets/image/pokemonBillede.jpg';
import PokemonComponent from './components/pokemonComponent';
import './App.css';


function App() { 
  const pokemonName = 'pikachu';
  const pokemonName2 = 'charmander';
  const pokemonName3 = '5'
  return (
    <div>
      <div className="jumbotron">
        <div className="navbar">
          <nav className="nav navbar-nav">    
            <a className="nav-item nav-link" href="/movies">Dine pokemonner</a>
            <a className="nav-item nav-link" href="/about">bla bla</a>
          </nav>
        </div> 
          <span className='h1'><img className="pokemonpic" alt='pokemon' src={logo} width="300" height="150"/></span>
          
        </div>
      <div className="container">
            <h1>Velkommen til Pokemon
            </h1>
            <p>Her kan du finde alle dine ynglings pokemon</p>
            <div className='poke'>
            <PokemonComponent name={pokemonName}/>
            <PokemonComponent name={pokemonName2}/>
            <PokemonComponent name={pokemonName3}/>
            <PokemonComponent name={"123"}/>
            <PokemonComponent name={"8"}/>
            </div>

      </div>      
      
           
    </div>
  );
}

export default App;

