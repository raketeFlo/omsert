import React from 'react';
import './Marker.css';
import PropTypes from 'prop-types';

const Marker = ({ name }) => {
  return (
    <div>
      <div
        className="marker pin bounce"
        title={name}
      />
      <div
        className="pulse"
      />
    </div>
  );
};

Marker.propTypes = {
  name: PropTypes.string,
};

Marker.defaultProps = {
  name: 'Auxburg',
};

export default Marker;
