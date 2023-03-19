import './PokemonCardList.css';
import PokemonCard from '../PokemonCard/PokemonCard';

function PokemonCardList({
  loading,
  visiblePokemon,
  favorites,
  handleAddFavorite,
  handleRemoveFavorite,
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
            handleRemoveFavorite={handleRemoveFavorite}
          />
        </div>
      )}
    </>
  );
}

export default PokemonCardList;
