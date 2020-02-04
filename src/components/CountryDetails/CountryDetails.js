import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import uuidv4 from 'uuid/v4';
import Modal from '@material-ui/core/Modal';
import LocationCityRoundedIcon from '@material-ui/icons/LocationCityRounded';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import LocalAtmRoundedIcon from '@material-ui/icons/LocalAtmRounded';
import SocialShare from '../SocialShare/SocialShare';

import './CountryDetails.css';

const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    width: '90%',
    backgroundColor: 'white',
    border: '2px solid #000',
    padding: 20,
  },
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

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const CountryDetails = ({ details, handleOpen, flag }) => {
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const {
    timezones, currencies, capital, region,
  } = details;

  const currenciesEmail = [];
  const timeZonesEmail = [];
  const allCurrencies = currencies.map((currency) => {
    currenciesEmail.push(currency.code);
    return <div key={uuidv4()}>{currency.code}</div>;
  });
  const allTimezones = timezones.map((timezone) => {
    timeZonesEmail.push(timezone);
    return <div key={uuidv4()}>{timezone}</div>;
  });

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={flag}
        onClose={handleOpen}
      >
        <div style={modalStyle} className={classes.paper}>
          <div className="info">
            <LocationCityRoundedIcon />
            <div>{!capital ? 'N/A' : capital}</div>
          </div>
          <div className="info">
            <ExploreRoundedIcon />
            <div>{!region ? 'N/A' : region}</div>
          </div>
          <div className="info">
            <ScheduleRoundedIcon />
            {allTimezones}
          </div>
          <div className="info">
            <LocalAtmRoundedIcon />
            {allCurrencies}
          </div>
          <SocialShare
            details={details}
            currencies={currenciesEmail}
            timezones={timeZonesEmail}
          />
        </div>
      </Modal>
    </div>
  );
};

CountryDetails.propTypes = {
  flag: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
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
