import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((e) => {
          const { name } = e;
          const { year } = e;
          const { country } = e;
          const { destination } = e;
          return (<MissionCard
            key={ name }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />);
        })}

      </div>
    );
  }
}

export default Missions;
