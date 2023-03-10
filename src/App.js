import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1500')
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data.results);
      });
  }, []);

  const getPokemonDetails = async (pokemon) => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    return data;
  };

  const formatPokemonDetails = (details) => {
    return {
      hp: details.stats[0].base_stat,
      attack: details.stats[1].base_stat,
      defense: details.stats[2].base_stat,
      specialAttack: details.stats[3].base_stat,
      specialDefense: details.stats[4].base_stat,
      speed: details.stats[5].base_stat,
    };
  };

  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const details = await Promise.all(
        pokemonData.map(async (pokemon) => {
          const details = await getPokemonDetails(pokemon);
          return formatPokemonDetails(details);
        }),
      );
      setPokemonDetails(details);
    };
    fetchData();
  }, [pokemonData]);

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
              <div className="pokemon-stats">
                <div>HP: {pokemonDetails[index]?.hp}</div>
                <div>Attack: {pokemonDetails[index]?.attack}</div>
                <div>Defense: {pokemonDetails[index]?.defense}</div>
                <div>
                  Special Attack: {pokemonDetails[index]?.specialAttack}
                </div>
                <div>
                  Special Defense: {pokemonDetails[index]?.specialDefense}
                </div>
                <div>Speed: {pokemonDetails[index]?.speed}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
