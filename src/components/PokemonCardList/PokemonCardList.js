import './PokemonCardList.css';
import PokemonCard from '../PokemonCard/PokemonCard';

function PokemonCardList({ loading, visiblePokemon }) {
  return (
    <>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="pokemon-container">
          <PokemonCard visiblePokemon={visiblePokemon} />
        </div>
      )}
    </>
  );
}

export default PokemonCardList;
