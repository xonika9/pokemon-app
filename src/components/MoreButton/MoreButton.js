import './MoreButton.css';

function MoreButton({ numCards, filteredPokemon, addCards }) {
  return (
    <>
      {numCards < filteredPokemon.length && (
        <div className="more-container">
          <button className="more-button" onClick={addCards}>
            More
          </button>
        </div>
      )}
    </>
  );
}

export default MoreButton;
