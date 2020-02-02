import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Box from '@material-ui/core/Box';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CountryDetails from '../CountryDetails/CountryDetails';

import './CountryListItem.css';

const useStyles = makeStyles({
  container: {
    margin: '0 auto',
    width: '100%',
  },
});

const CountryListItem = ({ listItem, selectCountry }) => {
  const classes = useStyles();
  return (
    <ExpansionPanel
      onChange={(e) => selectCountry(e.target)}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
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
      </ExpansionPanelSummary>
      <CountryDetails details={listItem} />
    </ExpansionPanel>
  );
};

CountryListItem.propTypes = {
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
