import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import './CountryListItem.css';

const useStyles = makeStyles({
  container: {
    margin: '0 auto',
    width: '100%',
  },
});

const CountryListItem = ({ listItem, selectCountry, handleOpen }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <div>
          <img src={listItem.flag} alt="country-flag" height="20px" width="20px" />

        </div>
        <div className="info-name">
          {listItem.name}
        </div>
        <div>
          <p>Population: </p>
          {listItem.population}
          {' People'}
        </div>
      </Box>
      <button
        type="button"
        onClick={() => {
          handleOpen();
          selectCountry(listItem.name);
        }}
      >
        Details
      </button>
    </>
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
