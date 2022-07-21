import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './App.css';
import BackgroundImage from './components/BackgroundImage';

class App extends React.Component {
  render() {
    return (
      <>
        <BackgroundImage />
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
