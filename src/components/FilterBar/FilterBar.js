import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import './FilterBar.css';

const FilterBar = ({ handleFilter }) => {
  return (
    <div className="filter-container">
      <Button
        clicked={handleFilter}
      >
        By Name
      </Button>
      <Button
        clicked={handleFilter}
      >
        By Population
      </Button>
    </div>
  );
};


FilterBar.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};


export default FilterBar;
