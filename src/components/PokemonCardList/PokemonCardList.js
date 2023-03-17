import './PokemonCardList.css';
import PokemonCard from '../PokemonCard/PokemonCard';

function PokemonCardList({
  loading,
  visiblePokemon,
  favorites,
  handleAddFavorite,
}) {
  return (
    <>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="pokemon-container">
          <PokemonCard
            visiblePokemon={visiblePokemon}
            favorites={favorites}
            handleAddFavorite={handleAddFavorite}
          />
        </div>
      )}
    </>
  );
}

export default PokemonCardList;
