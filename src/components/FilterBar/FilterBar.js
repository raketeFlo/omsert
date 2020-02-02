import React from 'react';
import PropTypes from 'prop-types';
import ImportExportSharpIcon from '@material-ui/icons/ImportExportSharp';
import Button from '../Button/Button';

import './FilterBar.css';

const FilterBar = ({ handleFilter, reverse }) => {
  return (
    <div className="filter-container">
      <Button
        clicked={handleFilter}
        btnTyp="filter"
      >
        Name
      </Button>
      <Button
        clicked={reverse}
      >
        <ImportExportSharpIcon />
      </Button>
      <Button
        clicked={handleFilter}
        btnTyp="filter"
      >
        Population
      </Button>
      <Button
        clicked={reverse}
      >
        <ImportExportSharpIcon />
      </Button>
    </div>
  );
};


FilterBar.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  reverse: PropTypes.func.isRequired,
};


export default FilterBar;
