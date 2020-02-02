import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import uuidv4 from 'uuid/v4';
import Modal from '@material-ui/core/Modal';
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


const CountryDetails = ({
  details, handleOpen, flag,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const currencies = details.currencies.map((currency) => <div key={uuidv4()}>{currency.code}</div>);
  const timezones = details.timezones.map((timezone) => <div key={uuidv4()}>{timezone}</div>);

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
