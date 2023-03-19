import './FavoriteCard.css';
import LazyLoad from 'parm-react-lazyload';

function FavoriteCard({ favorites, handleRemoveFavorite }) {
  return (
    <>
      {favorites.map((pokemon, index) => (
        <div className="pokemon-card fav-card" key={index}>
          <div className="pokemon-image fav-image">
            <LazyLoad height={200}>
              <img src={pokemon.image} alt={pokemon.name} />
            </LazyLoad>
          </div>

          <div className="pokemon-details">
            <div className="card-header">
              <button
                className="card-like card-like-save card-like-active"
                onClick={() => handleRemoveFavorite(pokemon)}
              ></button>
              <h2 className="pokemon-name fav-name">{pokemon.name}</h2>
            </div>
            {/* <div className="pokemon-stats">
              <p>HP: {pokemon.stats[0].base_stat}</p>
              <p>Attack: {pokemon.stats[1].base_stat}</p>
              <p>Defense: {pokemon.stats[2].base_stat}</p>
              <p>Special Attack: {pokemon.stats[3].base_stat}</p>
              <p>Special Defense: {pokemon.stats[4].base_stat}</p>
              <p>Speed: {pokemon.stats[5].base_stat}</p>
            </div> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default FavoriteCard;
