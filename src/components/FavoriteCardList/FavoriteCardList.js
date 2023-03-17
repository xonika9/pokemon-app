import './FavoriteCardList.css';
import FavoriteCard from '../FavoriteCard/FavoriteCard';

function FavoriteCardList({ favorites, handleRemoveFavorite }) {
  return (
    <>
      <div className="pokemon-container fav-container">
        <FavoriteCard
          favorites={favorites}
          handleRemoveFavorite={handleRemoveFavorite}
        />
      </div>
    </>
  );
}

export default FavoriteCardList;
