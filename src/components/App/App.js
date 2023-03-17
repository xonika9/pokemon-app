import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import './App.css';

import Header from '../Header/Header';
import PokemonCardList from '../PokemonCardList/PokemonCardList';
import MoreButton from '../MoreButton/MoreButton';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('');
  const [numCards, setNumCards] = useState(20);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

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

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="app">
      <Header sortOrder={sortOrder} handleSortChange={handleSortChange} />
      {selectedPokemon && (
        <div>
          <h3>Selected Pokemon: {selectedPokemon.name}</h3>
          <button onClick={() => setSelectedPokemon(null)}>Clear</button>
        </div>
      )}
      <PokemonCardList
        loading={loading}
        visiblePokemon={visiblePokemon}
        handleSelectPokemon={handleSelectPokemon}
      />
      <MoreButton
        numCards={numCards}
        sortedPokemon={sortedPokemon}
        addCards={addCards}
      />
    </div>
  );
}

export default App;
