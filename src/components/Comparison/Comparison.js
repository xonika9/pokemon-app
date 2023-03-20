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
    <div>
      <h2>Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Characteristic</th>
            {comparisonList.map((pokemon) => (
              <th key={pokemon.name}>{pokemon.name}</th>
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
  );
};

export default Comparison;
