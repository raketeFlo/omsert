import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import uuidv4 from 'uuid/v4';
import Box from '@material-ui/core/Box';
import './CountryDetails.css';

const useStyles = makeStyles({
  titel: {
    fontSize: 15,
    fontFamily: 'Asap',
    color: '#651FFF',
  },
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const CountryDetails = ({ details }) => {
  const classes = useStyles();
  const currencies = details.currencies.map((currency) => <div key={uuidv4()}>{currency.code}</div>);
  const timezones = details.timezones.map((timezone) => <div key={uuidv4()}>{timezone}</div>);
  return (
    <>
      <ExpansionPanelDetails>
        <Box
          className={classes.container}
        >
          <div className="info">
            <p>Capital: </p>
            {details.capital}
          </div>
          <div className="info">
            <p>Continent: </p>
            {details.region}
          </div>
          <div className="info">
            <p>Timezones: </p>
            {timezones}
          </div>
          <div className="info">
            <p>Currencies: </p>
            {currencies}
          </div>
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
