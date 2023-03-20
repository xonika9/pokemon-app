import { Link } from 'react-router-dom';
import './Header.css';

function Header({
  sortOrder,
  handleSortChange,
  handleSearchChange,
  searchTerm,
  handleClearSearch,
  comparisonList,
}) {
  return (
    <header className="flex items-center justify-between bg-white p-4 text-gray-900 shadow-md">
      <Link
        to="/"
        className=" header-logo h-10 w-24 bg-contain bg-center bg-no-repeat"
      ></Link>
      {/* <h1 className="text-2xl font-bold">x9Pokémon</h1> */}
      <Link
        to="/compare"
        className="text-lg font-bold text-gray-900 no-underline"
      >
        Compare {comparisonList.length} pokemons
      </Link>
      <div className="relative flex items-center">
        <input
          className="w-full rounded-md bg-white py-2 pl-2 pr-10 font-bold text-gray-900 placeholder-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <button
            className="search-clear-button absolute right-2 h-4 w-4 cursor-pointer bg-contain bg-center bg-no-repeat"
            onClick={handleClearSearch}
          ></button>
        )}
      </div>
      <div className="flex items-center">
        <label htmlFor="sort-by-select" className="mr-2 text-lg font-bold">
          Sort by:
        </label>
        <select
          className=" w-full cursor-pointer appearance-none rounded-md bg-white py-2 pl-2 pr-8 font-bold text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="">Initial</option>
          <option value="hp">HP</option>
          <option value="attack">Attack</option>
          <option value="defense">Defense</option>
          <option value="special-attack">Special Attack</option>
          <option value="special-defense">Special Defense</option>
          <option value="speed">Speed</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
