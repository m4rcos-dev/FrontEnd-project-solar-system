import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((e) => {
          const { name } = e;
          const { image } = e;
          return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
        })}
      </div>
    );
  }
}

export default SolarSystem;
