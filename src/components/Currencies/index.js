import React from 'react';
import PropTypes from 'prop-types';

import Currency from './Currency';

import './currencies.scss';

const Currencies = ({ currencies, onItemClick }) => (
  <ul className="currencies">
    {currencies.map((currency) => ( // je transforme toutes mes devises en JSX
      <Currency key={currency.name} onItemClick={onItemClick} name={currency.name} />
    ))}
  </ul>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf( 
    PropTypes.shape({ 
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired, 
    }),
  ).isRequired,
  onItemClick: PropTypes.func.isRequired, 
};

export default Currencies;
