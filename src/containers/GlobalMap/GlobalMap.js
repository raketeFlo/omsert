import React, { useState, useEffect } from 'react';
import Geocode from 'react-geocode';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import Marker from '../../components/Marker/Marker';

const Map = ({ country }) => {
  const defaultPosition = {
    center: {
      lat: 48.36,
      lng: 10.89,
    },
    zoom: 11,
  };

  const [position, setPosition] = useState(defaultPosition);

  const setCountry = async () => {
    if (country.length) {
      const response = await Geocode.fromAddress(country[0].name);
      const { lat, lng } = response.results[0].geometry.location;
      const newPosition = {
        center: {
          lat,
          lng,
        },
        zoom: 5,
      };
      setPosition(newPosition);
    } else {
      setPosition(defaultPosition);
    }
  };

  useEffect(() => {
    setCountry();
  }, [country]);

  Geocode.setApiKey(process.env.REACT_APP_MAP_KEY);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={defaultPosition.center}
        defaultZoom={defaultPosition.zoom}
        center={position.center}
        zoom={position.zoom}
      >
        <Marker
          lat={position.center.lat}
          lng={position.center.lng}
        />
      </GoogleMapReact>
    </div>
  );
};

Map.propTypes = {
  country: PropTypes.arrayOf(PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
      symbol: PropTypes.string,
    })),
    flag: PropTypes.string,
    name: PropTypes.string,
    capital: PropTypes.string,
    region: PropTypes.string,
    population: PropTypes.number,
    latlng: PropTypes.arrayOf(PropTypes.number),
    timezones: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};


export default Map;
