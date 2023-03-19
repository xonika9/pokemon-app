import './FavoriteCardList.css';
import FavoriteCard from '../FavoriteCard/FavoriteCard';

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
        <button
          onClick={() => setMinimized(false)}
          className="fav-button fav-max-button"
        ></button>
      )}
      <div className={`favorites-list ${minimized ? 'minimized' : ''}`}>
        {favorites.length > 0 && (
          <button
            onClick={() => setFavorites([])}
            className="remove-all-button"
          ></button>
        )}
        <button
          onClick={() => setMinimized(true)}
          className="fav-button fav-min-button "
        ></button>
        <div className="pokemon-container fav-container">
          <FavoriteCard
            favorites={favorites}
            handleRemoveFavorite={handleRemoveFavorite}
          />
        </div>
      </div>
    </>
  );
}

export default FavoriteCardList;
