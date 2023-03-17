import './PokemonCardList.css';
import PokemonCard from '../PokemonCard/PokemonCard';

function PokemonCardList({ loading, visiblePokemon, handleSelectPokemon }) {
  return (
    <>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="pokemon-container">
          <PokemonCard
            visiblePokemon={visiblePokemon}
            handleSelectPokemon={handleSelectPokemon}
          />
        </div>
      )}
    </>
  );
}

export default PokemonCardList;
