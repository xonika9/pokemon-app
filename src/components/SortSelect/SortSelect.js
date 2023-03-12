import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import LazyLoad from 'parm-react-lazyload';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('');
  const [numCards, setNumCards] = useState(20);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=1500',
          { cache: true },
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

  const sortingFunctions = useMemo(
    () => ({
      hp: (a, b) => b.stats[0].base_stat - a.stats[0].base_stat,
      attack: (a, b) => b.stats[1].base_stat - a.stats[1].base_stat,
      defense: (a, b) => b.stats[2].base_stat - a.stats[2].base_stat,
      'special-attack': (a, b) => b.stats[3].base_stat - a.stats[3].base_stat,
      'special-defense': (a, b) => b.stats[4].base_stat - a.stats[4].base_stat,
      speed: (a, b) => b.stats[5].base_stat - a.stats[5].base_stat,
    }),
    [],
  );

  const sortedPokemon = useMemo(() => {
    const sortingFunction = sortingFunctions[sortOrder];
    return sortingFunction
      ? [...pokemonData].sort(sortingFunction)
      : pokemonData;
  }, [pokemonData, sortOrder, sortingFunctions]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const addCards = () => {
    setNumCards(numCards + 20);
  };

  const visiblePokemon = useMemo(
    () => sortedPokemon.slice(0, numCards),
    [numCards, sortedPokemon],
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Pokémon App</h1>
        <div className="select-container">
          <label htmlFor="sort-by-select">Sort by:</label>
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="">Initial</option>
            <option value="hp">HP</option>
            <option value="attack">Attack</option>
            <option value="defense">Defense</option>
            <option value="special-attack">Special Attack</option>
            <option value="special-defense">Special Defense</option>
            <option value="speed">Speed</option>
          </select>
        </div>
      </header>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="pokemon-container">
          {visiblePokemon.map((pokemon, index) => (
            <div className="pokemon-card" key={index}>
              <div className="pokemon-image">
                <LazyLoad height={200}>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </LazyLoad>
              </div>
              <div className="pokemon-details">
                <h2 className="pokemon-name">{pokemon.name}</h2>
                <div className="pokemon-stats">
                  <p>HP: {pokemon.stats[0].base_stat}</p>
                  <p>Attack: {pokemon.stats[1].base_stat}</p>
                  <p>Defense: {pokemon.stats[2].base_stat}</p>
                  <p>Special Attack: {pokemon.stats[3].base_stat}</p>
                  <p>Special Defense: {pokemon.stats[4].base_stat}</p>
                  <p>Speed: {pokemon.stats[5].base_stat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {numCards < sortedPokemon.length && (
        <div className="more-container">
          <button className="more-button" onClick={addCards}>
            More
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
