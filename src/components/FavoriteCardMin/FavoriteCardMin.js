import './FavoriteCardMin.css';

function FavoriteCardMin({ favorites, handleRemoveFavorite }) {
  return (
    <>
      {favorites.map((pokemon, index) => (
        <div className="pokemon-card fav-card fav-card-min" key={index}>
          <div className="pokemon-image fav-image">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <button
            className="card-like card-like-min card-like-save card-like-active"
            onClick={() => handleRemoveFavorite(pokemon)}
          ></button>
        </div>
      ))}
    </>
  );
}

export default FavoriteCardMin;
