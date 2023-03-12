import './MoreButton.css';

function MoreButton({ numCards, sortedPokemon, addCards }) {
  return (
    <>
      {numCards < sortedPokemon.length && (
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
