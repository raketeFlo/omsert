import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const { children, clicked, btnType } = props;
  return (
    <button
      type="button"
      onClick={clicked}
      className={`button ${btnType}`}
    >
      {children}
    </button>
  );
};


Button.propTypes = {
  children: PropTypes.node.isRequired,
  clicked: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired,
};


export default Button;
