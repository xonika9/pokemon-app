import './FavoriteCard.css';

function FavoriteCard({ favorites, handleRemoveFavorite }) {
  return (
    <>
      {favorites.map((pokemon, index) => (
        <div
          className="flex w-32 flex-col justify-between rounded bg-white p-2 shadow-md"
          key={index}
        >
          <div className="fav-image flex justify-center overflow-hidden">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="h-16 object-contain"
            />
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <button
                className="card-like card-like-save card-like-active h-8 w-8 border-none bg-transparent bg-no-repeat transition-all duration-300 focus:outline-none"
                onClick={() => handleRemoveFavorite(pokemon)}
              ></button>
              <h2 className="text-center text-base font-bold capitalize text-black">
                {pokemon.name}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default FavoriteCard;
