import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import Button from '../Button/Button';

import './CountryListItem.css';


const CountryListItem = ({ listItem, selectCountry, handleOpen }) => {
  return (
    <div className="item-container">
      <div className="info-flag">
        <img src={listItem.flag} alt="country-flag" />

      </div>
      <div className="info-name">
        {listItem.name}
      </div>
      <div className="info-pop">
        <p>Population: </p>
        {listItem.population}
      </div>
      <div className="info-button">
        <Button
          type="button"
          clicked={() => {
            handleOpen();
            selectCountry(listItem.name);
          }}
        >
          <KeyboardArrowRightRoundedIcon />
        </Button>
      </div>
    </div>
  );
};

CountryListItem.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  selectCountry: PropTypes.func.isRequired,
  listItem: PropTypes.shape({
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
  }).isRequired,
};

export default CountryListItem;
