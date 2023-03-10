import './PokemonCard.css';
import LazyLoad from 'parm-react-lazyload';

function PokemonCard({ visiblePokemon }) {
  return (
    <>
      {visiblePokemon.map((pokemon, index) => (
        <div className="pokemon-card" key={index}>
          <div className="pokemon-image">
            <LazyLoad height={200}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </LazyLoad>
          </div>
          <div className="pokemon-details">
            <h2 className="pokemon-name">{pokemon.name}</h2>
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
