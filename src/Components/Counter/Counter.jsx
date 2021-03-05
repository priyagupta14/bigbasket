/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

export default function Counter(props) {
  return (
    <div className="product-counter">
      <button onClick={props.onIncrement}>+</button>
      <p>
        {props.itemCount}
        {' '}
        in basket
      </p>
      <button onClick={props.onDecrement}>-</button>
    </div>
  );
}

Counter.propTypes = {
  itemCount: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
