import logo from '../src/assets/image/pokemonBillede.jpg';
import PokemonComponent from './components/pokemonComponent';
import './App.css';


function App() { 
  const pokemonName = 'pikachu';
  const pokemonName2 = 'charmander';
  return (
    <div>
      <div className="jumbotron pb-3 pt-3">
        <div className="navbar navbar-expand-lg">
          <nav className="nav navbar-nav">    
            <a className="nav-item nav-link active" href="/">Alle pokemon</a>
            <a className="nav-item nav-link" href="/movies">Dine pokemonner</a>
            <a className="nav-item nav-link" href="/about">bla bla</a>
          </nav>
        </div> 
          <span className='h1'>React Moviefinder <img className="rounded movie_img m-3" src={logo} width="75" height="75"/></span>
          
        </div>
      <div className="container">
            <h1>Velkommen til Pokemon
            </h1>
            <p>Her kan du finde alle dine ynglings pokemon</p>
            <PokemonComponent name={pokemonName}/>
            <PokemonComponent name={pokemonName2}/>

      </div>      
            
    </div>
  );
}

export default App;

