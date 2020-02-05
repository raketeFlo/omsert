import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CountryList.css';
import Lazyload from 'react-lazyload';
import uuidv4 from 'uuid/v4';
import CountryDetails from '../../components/CountryDetails/CountryDetails';
import CountryListItem from '../../components/CountryListItem/CountryListItem';

const CountryList = ({ countryList, renderSelected, detailsCountry }) => {
  const [flag, setFlag] = useState(false);
  const handleModal = () => {
    setFlag(!flag);
  };

  const JSXList = countryList.map((country) => {
    return (
      <Lazyload
        key={uuidv4()}
        height={50}
        width="100%"
        once
        overflow
      >
        <CountryListItem
          key={uuidv4()}
          listItem={country}
          selectCountry={renderSelected}
          handleOpen={handleModal}
        />
      </Lazyload>
    );
  });

  if (!flag) {
    return (
      <div className="list-container">
        {JSXList}
      </div>
    );
  }
  return (
    <div className="list-container">
      <CountryDetails
        flag={flag}
        handleOpen={handleModal}
        details={detailsCountry[0]}
        selectCountry={renderSelected}
      />
    </div>
  );
};

CountryList.propTypes = {
  detailsCountry: PropTypes.arrayOf(PropTypes.shape({
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
  renderSelected: PropTypes.func.isRequired,
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
