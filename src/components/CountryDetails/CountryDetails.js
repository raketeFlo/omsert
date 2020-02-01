import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Box from '@material-ui/core/Box';

const uuidv4 = require('uuid/v4');


const CountryDetails = ({ details }) => {
  const currencies = details.currencies.map((currency) => <div key={uuidv4()}>{currency.code}</div>);
  const timezones = details.timezones.map((timezone) => <div key={uuidv4()}>{timezone}</div>);
  return (
    <>
      <ExpansionPanelDetails>
        <Box>
          {details.capital}
          {details.region}
          {currencies}
          {timezones}
        </Box>
      </ExpansionPanelDetails>
    </>
  );
};

CountryDetails.propTypes = {
  details: PropTypes.shape({
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

export default CountryDetails;
