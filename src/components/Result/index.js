import React from 'react';
import PropTypes from 'prop-types';

import CountUp from 'react-countup';

import './result.scss';

const Result = ({ value, currency }) => (
  <div className="result">
    <CountUp decimals={2} className="result__amount" end={value} duration={0.5} />
    <p className="result__unit">{currency}</p>
  </div>
);

Result.propTypes = {
  value: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Result;
