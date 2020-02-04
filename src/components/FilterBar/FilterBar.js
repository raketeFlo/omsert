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
      <div>Name</div>
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
      <div>Population</div>
    </div>
  );
};


FilterBar.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};


export default FilterBar;
