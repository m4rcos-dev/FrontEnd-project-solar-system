import React from 'react';
import PropTypes from 'prop-types';
import '../css/Title.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="title-container">
        <h2 className="title">{headline}</h2>
      </div>

    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
