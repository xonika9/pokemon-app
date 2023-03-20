import './MoreButton.css';

function MoreButton({ numCards, filteredPokemon, addCards }) {
  return (
    <>
      {numCards < filteredPokemon.length && (
        <div className="flex justify-center py-5 px-0">
          <button
            className="more-button cursor-pointer rounded border-none bg-green-500 py-2 px-36 text-base text-white hover:bg-green-600"
            onClick={addCards}
          >
            More
          </button>
        </div>
      )}
    </>
  );
}

export default MoreButton;
