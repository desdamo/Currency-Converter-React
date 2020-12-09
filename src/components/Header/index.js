import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ baseAmount, onChangeBaseAmount }) => (
  <header className="header">
    <h1 className="header__title">Converter</h1>
    <input
      type="text"
      className="header__input"
      placeholder="Saisir un montant"
      value={baseAmount}
      onChange={(event) => {
        
        const newValue = event.target.value;
        const valueAsInt = parseInt(newValue, 10);
        if (Number.isNaN(valueAsInt)) {
          onChangeBaseAmount(0);
        }
        else { 
          onChangeBaseAmount(valueAsInt);
        }
      }}
    />
  </header>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  onChangeBaseAmount: PropTypes.func.isRequired,
};

export default Header;
