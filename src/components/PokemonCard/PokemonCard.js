import './PokemonCard.css';
import LazyLoad from 'parm-react-lazyload';

function PokemonCard({
  visiblePokemon,
  favorites,
  handleAddFavorite,
  handleRemoveFavorite,
  handleToggleCompare,
  comparisonList,
}) {
  return (
    <>
      {visiblePokemon.map((pokemon, index) => (
        <div className="pokemon-card" key={index}>
          <div className="pokemon-image">
            <LazyLoad height={200}>
              <img src={pokemon.image} alt={pokemon.name} />
            </LazyLoad>
          </div>
          <div className="pokemon-details">
            <div className="card-header">
              {!favorites.some(
                (favorite) => favorite.name === pokemon.name,
              ) && (
                <button
                  className="card-like card-like-save"
                  onClick={() => handleAddFavorite(pokemon)}
                ></button>
              )}
              {favorites.some((favorite) => favorite.name === pokemon.name) && (
                <button
                  className="card-like card-like-active"
                  onClick={() => handleRemoveFavorite(pokemon)}
                ></button>
              )}
              <h2 className="pokemon-name">{pokemon.name}</h2>
              {!comparisonList.some((p) => p.name === pokemon.name) && (
                <button
                  className="card-compare card-compare-unchecked"
                  onClick={() => handleToggleCompare(pokemon)}
                ></button>
              )}
              {comparisonList.some((p) => p.name === pokemon.name) && (
                <button
                  className="card-compare card-compare-checked"
                  onClick={() => handleToggleCompare(pokemon)}
                ></button>
              )}
            </div>
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
    </>
  );
}

export default PokemonCard;
