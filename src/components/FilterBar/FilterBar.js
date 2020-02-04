import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToggleOffTwoToneIcon from '@material-ui/icons/ToggleOffTwoTone';
import ToggleOnTwoToneIcon from '@material-ui/icons/ToggleOnTwoTone';
import ToggleButton from '@material-ui/lab/ToggleButton';

import './FilterBar.css';

const FilterBar = ({ handleFilter }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="filter-container">
      <div className="filter-sort"><p>sort by:</p></div>
      <div className={`filter-type ${selected ? '' : 'active'}`}><p>Name</p></div>
      <div className="filter-button">
        <ToggleButton
          disableRipple
          disableFocusRipple
          value="check"
          className="MuiToggleButton-root"
          selected={selected}
          onChange={() => {
            handleFilter(selected);
            setSelected(!selected);
          }}
        >
          {selected
            ? <ToggleOnTwoToneIcon />
            : <ToggleOffTwoToneIcon />}
        </ToggleButton>
      </div>
      <div className={`filter-type ${selected ? 'active' : ''}`}><p>Population</p></div>
    </div>
  );
};


FilterBar.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};


export default FilterBar;
