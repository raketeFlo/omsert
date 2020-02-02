import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../../components/Marker/Marker';

const Map = () => {
  const [defaultVal, setDefaultVal] = useState({
    center: {
      lat: 48.36,
      lng: 10.89,
    },
    zoom: 11,
  });

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={defaultVal.center}
        defaultZoom={defaultVal.zoom}
      >
        <Marker
          lat={defaultVal.center.lat}
          lng={defaultVal.center.lng}
        />
      </GoogleMapReact>
    </div>
  );
};


export default Map;
