import React from 'react';
import './Comparison.css';

const Comparison = ({ comparisonList }) => {
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
      <h2>Comparison</h2>
      <div className="comparison-table-container">
        <table>
          <thead>
            <tr>
              <th>Stat</th>
              {comparisonList.map((pokemon) => (
                <th key={pokemon.name}>
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
