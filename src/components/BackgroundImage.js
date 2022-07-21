import React from 'react';
import bgImg from '../images/background.png';
import '../css/BackgroundImage.css';

class BackgroundImage extends React.Component {
  render() {
    return (
      <img src={ bgImg } alt="background" className="bg-img" />
    );
  }
}

export default BackgroundImage;
