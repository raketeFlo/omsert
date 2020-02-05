import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';

import './SearchBar.css';

const SearchBar = ({ countryList, handleSelection, input }) => {
  return (
    <div className="search-container">
      <div className="icon-container">
        <img src="/icons/logo-black.svg" alt="logo" height="50px" width="50px" />
      </div>
      <div className="input-container">
        <Autocomplete
          id="size-small-standard"
          size="small"
          disableOpenOnFocus
          autoHighlight
          value={input}
          onChange={(e, value) => {
            handleSelection(value);
          }}
          options={countryList.map((country) => country.name)}
          renderInput={(params) => (
            <TextField {...params} label="Type country name..." margin="normal" fullWidth variant="standard" />
          )}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  input: PropTypes.string,
  handleSelection: PropTypes.func.isRequired,
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
  })).isRequired,
};

SearchBar.defaultProps = {
  input: '',
};

export default SearchBar;
