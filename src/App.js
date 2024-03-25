import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from '../src/assets/image/pokemonBillede.png';
import './App.css';
import PokemonList from './components/pokemonList';


function App() { 
  return (
    <div>
      <div className="jumbotron">
        <div className="navbar">
          <nav className="nav navbar-nav">    
            <a className="nav-item nav-link active" href="/pokemonList">Gen 1</a>
            <a className="nav-item nav-link" href="/movies">Dine pokemonner</a>
            <a className="nav-item nav-link" href="/about">bla bla</a>
          </nav>
        </div> 
      </div>

        <div className='header'>
          <span className='h1'><img className="pokemonpic" alt='pokemon' src={logo} width="300" height="150"/></span>
        </div>

        <div className='search'>
          <form className='searchForm'>
            <input className='inputText' type="text" placeholder="Search.."></input>
            <button className='searchButton' type="submit">Search</button>
          </form>
        </div>

      <div className="container">
            <h1>Velkommen til Pokemon
            </h1>
            <p>Her kan du finde alle dine ynglings pokemon</p>
      </div> 

      <Router>
        <Routes>
          <Route path="/pokemonList" element={<PokemonList />} />
        </Routes>
      </Router>
           
    </div>
  );
}

export default App;

