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
        <div
          className="pokemon-card flex flex-col justify-between rounded bg-white p-4 shadow-md"
          key={index}
        >
          <div className="flex justify-center overflow-hidden">
            <LazyLoad height={200}>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="pokemon-image h-52 max-w-full object-contain"
              />
            </LazyLoad>
          </div>
          <div className="mt-4 text-center">
            <div className="flex items-center justify-center">
              {!favorites.some(
                (favorite) => favorite.name === pokemon.name,
              ) && (
                <button
                  className="card-like-save h-8 w-8 cursor-pointer border-none bg-none bg-no-repeat p-0 text-center transition-all duration-300"
                  onClick={() => handleAddFavorite(pokemon)}
                ></button>
              )}
              {favorites.some((favorite) => favorite.name === pokemon.name) && (
                <button
                  className="card-like-active h-8 w-8 cursor-pointer border-none bg-transparent bg-none bg-no-repeat p-0 text-center transition-all duration-300"
                  onClick={() => handleRemoveFavorite(pokemon)}
                ></button>
              )}
              <h2 className="m-0 text-2xl font-bold capitalize text-gray-900">
                {pokemon.name}
              </h2>
              {!comparisonList.some((p) => p.name === pokemon.name) && (
                <button
                  className="card-compare-unchecked mx-2 h-5 w-5 cursor-pointer border-none bg-none bg-contain bg-no-repeat p-0 text-center transition-all duration-300"
                  onClick={() => handleToggleCompare(pokemon)}
                ></button>
              )}
              {comparisonList.some((p) => p.name === pokemon.name) && (
                <button
                  className="card-compare-checked mx-2 h-5 w-5 cursor-pointer border-none bg-none bg-contain bg-no-repeat p-0 text-center transition-all duration-300"
                  onClick={() => handleToggleCompare(pokemon)}
                ></button>
              )}
            </div>
            <div className="mt-4 flex flex-col flex-wrap justify-center">
              <p className="pokemon-stat text-lg">
                HP: {pokemon.stats[0].base_stat}
              </p>
              <p className="pokemon-stat text-lg">
                Attack: {pokemon.stats[1].base_stat}
              </p>
              <p className="pokemon-stat text-lg">
                Defense: {pokemon.stats[2].base_stat}
              </p>
              <p className="pokemon-stat text-lg">
                Special Attack: {pokemon.stats[3].base_stat}
              </p>
              <p className="pokemon-stat text-lg">
                Special Defense: {pokemon.stats[4].base_stat}
              </p>
              <p className="pokemon-stat text-lg">
                Speed: {pokemon.stats[5].base_stat}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PokemonCard;
