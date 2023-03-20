import React from 'react';
import './Comparison.css';

const Comparison = ({
  comparisonList,
  handleToggleCompare,
  setComparisonList,
}) => {
  const statsLabels = [
    'HP',
    'Attack',
    'Defense',
    'Special Attack',
    'Special Defense',
    'Speed',
  ];

  return (
    <div className="comparison-container">
      <div className="comparison-heading">
        <h2 className="comparison-title">Comparison</h2>
        {comparisonList.length > 0 && (
          <button
            onClick={() => setComparisonList([])}
            className="comp-clear"
          ></button>
        )}
      </div>

      <div className="comparison-table-container">
        <table>
          <thead>
            <tr>
              <th>Stat</th>
              {comparisonList.map((pokemon) => (
                <th key={pokemon.name}>
                  <button
                    className="card-compare card-compare-checked comp-tab"
                    onClick={() => handleToggleCompare(pokemon)}
                  ></button>
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="comparison-image"
                  />
                  {pokemon.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {statsLabels.map((statName, index) => (
              <tr key={statName}>
                <td>{statName}</td>
                {comparisonList.map((pokemon) => (
                  <td key={pokemon.name}>{pokemon.stats[index].base_stat}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;
