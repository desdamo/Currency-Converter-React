import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ name, onItemClick }) => (
  <li
    onClick={() => {
      onItemClick(name);
    }}
    className="currencies__name"
  >
    {name}
  </li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default Currency;
