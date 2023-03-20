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
        <p className="flex h-full items-center justify-center text-lg text-gray-900">
          Loading...
        </p>
      ) : (
        <div className="pokemon-container grid gap-4 p-4">
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
