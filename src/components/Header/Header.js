import './Header.css';

function Header(props) {
  const {
    sortOrder,
    handleSortChange,
    handleSearchChange,
    searchTerm,
    handleClearSearch,
  } = props;

  return (
    <header className="app-header">
      <a className="logo header__logo" href="/"></a>
      <h1 className="app-title">x9Pokémon</h1>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <button
            className="search-clear-button"
            onClick={handleClearSearch}
          ></button>
        )}
      </div>
      <div className="select-container">
        <label htmlFor="sort-by-select">Sort by:</label>
        <select value={sortOrder} onChange={handleSortChange}>
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
