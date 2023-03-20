import './PokemonCardList.css';
import PokemonCard from '../PokemonCard/PokemonCard';

function PokemonCardList({
  loading,
  visiblePokemon,
  favorites,
  handleAddFavorite,
  handleRemoveFavorite,
  handleToggleCompare,
  comparisonList,
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
            handleToggleCompare={handleToggleCompare}
            comparisonList={comparisonList}
          />
        </div>
      )}
    </>
  );
}

export default PokemonCardList;
