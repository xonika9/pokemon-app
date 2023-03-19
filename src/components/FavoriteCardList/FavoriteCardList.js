import './FavoriteCardList.css';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import FavoriteCardMin from '../FavoriteCardMin/FavoriteCardMin';

function FavoriteCardList({
  favorites,
  handleRemoveFavorite,
  minimized,
  setMinimized,
  setFavorites,
}) {
  return (
    <>
      {minimized && (
        <div className="favorites-list favorites-list-minimized">
          {favorites.length > 0 && (
            <button
              onClick={() => setFavorites([])}
              className="remove-all-button remove-all-button-min"
            ></button>
          )}
          <button
            onClick={() => setMinimized(false)}
            className="fav-button fav-max-button"
          ></button>
          <div className="pokemon-container fav-container fav-container-min">
            <FavoriteCardMin
              favorites={favorites}
              handleRemoveFavorite={handleRemoveFavorite}
            />
          </div>
        </div>
      )}
      {!minimized && (
        <div className="favorites-list favorites-list-maximized">
          {favorites.length > 0 && (
            <button
              onClick={() => setFavorites([])}
              className="remove-all-button"
            ></button>
          )}
          <button
            onClick={() => setMinimized(true)}
            className="fav-button fav-min-button"
          ></button>
          <div className="pokemon-container fav-container">
            <FavoriteCard
              favorites={favorites}
              handleRemoveFavorite={handleRemoveFavorite}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default FavoriteCardList;
