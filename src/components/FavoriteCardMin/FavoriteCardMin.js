import './FavoriteCardMin.css';

function FavoriteCardMin({ favorites, handleRemoveFavorite }) {
  return (
    <>
      {favorites.map((pokemon, index) => (
        <div
          className="relative flex w-16 flex-col justify-between rounded bg-white shadow-md"
          key={index}
        >
          <div className="flex justify-center overflow-hidden">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="h-16 object-contain"
            />
          </div>
          <button
            className="card-like-save card-like-active absolute top-0 right-0 h-8 w-8 border-none bg-transparent bg-no-repeat transition-all duration-300 focus:outline-none"
            onClick={() => handleRemoveFavorite(pokemon)}
          ></button>
        </div>
      ))}
    </>
  );
}

export default FavoriteCardMin;
