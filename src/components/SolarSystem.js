import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';
import '../css/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <div className="planet-container">
          <div className="all-planet-cards">
            {planets.map((e) => {
              const { name } = e;
              const { image } = e;
              return (<PlanetCard
                key={ name }
                planetName={ name }
                planetImage={ image }
              />);
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SolarSystem;
