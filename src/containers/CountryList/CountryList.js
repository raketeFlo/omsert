import React from 'react';
import PropTypes from 'prop-types';
import './CountryList.css';
import Lazyload from 'react-lazyload';
import uuidv4 from 'uuid/v4';

import CountryListItem from '../../components/CountryListItem/CountryListItem';

const CountryList = ({ countryList }) => {
  const JSXList = countryList.map((country) => {
    return (
      <Lazyload
        key={uuidv4()}
        height={80}
        offset={[-100, 100]}
        width="100%"
      >
        <CountryListItem
          key={uuidv4()}
          listItem={country}
        />
      </Lazyload>
    );
  });
  return (
    <div className="list-container">
      {JSXList}
    </div>
  );
};

CountryList.propTypes = {
  countryList: PropTypes.arrayOf(PropTypes.shape({
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
  })),
};

CountryList.defaultProps = {
  countryList: [],
};


export default CountryList;
