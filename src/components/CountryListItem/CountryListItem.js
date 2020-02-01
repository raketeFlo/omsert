import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Box from '@material-ui/core/Box';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CountryDetails from '../CountryDetails/CountryDetails';

const useStyles = makeStyles({
  titel: {
    fontSize: 15,
    fontFamily: 'Asap',
    color: '#651FFF',
  },
});

const CountryListItem = ({ listItem }) => {
  const classes = useStyles();
  return (
    <ExpansionPanel
      onChange={() => console.log('clicked')}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box className={classes.titel}>
          <img src={listItem.flag} alt="country-flag" height="20px" width="20px" />
          {listItem.name}
          {listItem.population}
        </Box>
      </ExpansionPanelSummary>
      <CountryDetails details={listItem} />
    </ExpansionPanel>
  );
};

CountryListItem.propTypes = {
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
