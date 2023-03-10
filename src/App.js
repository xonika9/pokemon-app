import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data.results);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Pokémon List</h1>
      </header>
      <div className="pokemon-container">
        {pokemonData.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            <div className="pokemon-image">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt={`${pokemon.name}`}
              />
            </div>
            <div className="pokemon-details">
              <span className="pokemon-name">{pokemon.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
