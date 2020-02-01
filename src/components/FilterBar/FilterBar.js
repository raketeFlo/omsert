import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import './FilterBar.css';

const FilterBar = ({ handleFilter, reverse }) => {
  return (
    <>
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
      <div className="sort-container">
        <Button
          clicked={reverse}
        >
          <span role="img" aria-label="up">⬆️</span>
        </Button>
        <Button
          clicked={reverse}
        >
          <span role="img" aria-label="down">⬇️</span>
        </Button>
      </div>
    </>
  );
};


FilterBar.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  reverse: PropTypes.func.isRequired,
};


export default FilterBar;
