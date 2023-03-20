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
        <div className="fav-list-minimized fixed bottom-16 right-0 shadow-md">
          {favorites.length > 0 && (
            <button
              onClick={() => setFavorites([])}
              className="clear-fav-button-min absolute top-0 right-0 h-7 w-7 bg-contain bg-center bg-no-repeat"
            ></button>
          )}
          <button
            onClick={() => setMinimized(false)}
            className="fav-max-button fixed bottom-16 right-0 h-7 w-7 bg-contain bg-center bg-no-repeat"
          ></button>
          <div className="fav-container-min flex flex-col-reverse items-start">
            <FavoriteCardMin
              favorites={favorites}
              handleRemoveFavorite={handleRemoveFavorite}
            />
          </div>
        </div>
      )}
      {!minimized && (
        <div className="fav-list-maximized fixed bottom-16 right-0 max-w-md rounded-md border bg-white p-4 shadow-md">
          {favorites.length > 0 && (
            <button
              onClick={() => setFavorites([])}
              className="clear-fav-button absolute top-0 right-0 h-7 w-7 bg-contain bg-center bg-no-repeat"
            ></button>
          )}
          <button
            onClick={() => setMinimized(true)}
            className="fav-min-button fixed bottom-16 right-0 h-7 w-7 bg-contain bg-center bg-no-repeat"
          ></button>
          <div className="fav-container flex flex-wrap justify-center gap-3">
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
