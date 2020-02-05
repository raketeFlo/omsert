import React, { useState, useEffect } from 'react';
import Geocode from 'react-geocode';
import PropTypes from 'prop-types';
import { fitBounds } from 'google-map-react/utils';
import GoogleMapReact from 'google-map-react';
import Marker from '../../components/Marker/Marker';

const defaultPosition = {
  center: {
    lat: 48.36,
    lng: 10.89,
  },
  zoom: 10,
};

const Map = ({ country }) => {
  const [position, setPosition] = useState(defaultPosition);
  const [marker, setMarker] = useState(defaultPosition);
  Geocode.setApiKey(process.env.REACT_APP_MAP_KEY);

  useEffect(() => {
    const setCountry = async () => {
      if (country.length) {
        let displayCountry = country[0].name;
        if (displayCountry === 'Georgia') displayCountry += ' Country';
        const response = await Geocode.fromAddress(displayCountry);
        const { northeast, southwest } = response.results[0].geometry.viewport;
        const bounds = {
          ne: northeast,
          sw: southwest,
        };
        const width = document.getElementById('map').offsetWidth;
        const height = document.getElementById('map').offsetHeight;
        const { center, zoom } = fitBounds(bounds, { width, height });
        const { lat, lng } = response.results[0].geometry.location;
        const newPosition = {
          center,
          zoom,
        };
        setMarker({ center: { lat, lng } });
        setPosition(newPosition);
      } else {
        setMarker(defaultPosition);
        setPosition(defaultPosition);
      }
    };
    setCountry();
  }, [country]);

  return (
    <div id="map" style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={defaultPosition.center}
        defaultZoom={defaultPosition.zoom}
        center={position.center}
        zoom={position.zoom}
      >
        <Marker
          lat={marker.center.lat}
          lng={marker.center.lng}
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
