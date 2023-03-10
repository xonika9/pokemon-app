import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=1500',
        );
        const data = response.data.results;
        const pokemonData = await Promise.all(
          data.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return pokemonResponse.data;
          }),
        );
        setPokemonData(pokemonData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Pokémon App</h1>
      </header>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="pokemon-container">
          {pokemonData.map((pokemon) => (
            <div className="pokemon-card" key={pokemon.id}>
              <div className="pokemon-image">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
              <div className="pokemon-details">
                <h2 className="pokemon-name">{pokemon.name}</h2>
                <div className="pokemon-stats">
                  <div>HP: {pokemon.stats[0].base_stat}</div>
                  <div>Attack: {pokemon.stats[1].base_stat}</div>
                  <div>Defense: {pokemon.stats[2].base_stat}</div>
                  <div>Special Attack: {pokemon.stats[3].base_stat}</div>
                  <div>Special Defense: {pokemon.stats[4].base_stat}</div>
                  <div>Speed: {pokemon.stats[5].base_stat}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
