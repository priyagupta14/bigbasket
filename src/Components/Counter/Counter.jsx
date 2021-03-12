import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

const Counter = ({ itemCount, onDecrement, onIncrement }) => (
  <div className={itemCount === 0 ? 'zeroProduct' : 'moreProduct'}>
    <button onClick={onIncrement} type="button">        +      </button>
    <p>
      {itemCount}
      {' '}
      in basket
    </p>
    <button onClick={onDecrement} type="button">-</button>
  </div>
);

Counter.propTypes = {
  itemCount: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
export default Counter;
