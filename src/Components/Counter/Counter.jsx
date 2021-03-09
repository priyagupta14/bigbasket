import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

const Counter = (props) => (
  <div className={props.itemCount === 0 ? 'zeroProduct' : 'moreProduct'}>
    <button onClick={props.onIncrement} type="button">        +      </button>
    <p>
      {props.itemCount}
      {' '}
      in basket
    </p>
    <button onClick={props.onDecrement} type="button">-</button>
  </div>
);

Counter.propTypes = {
  itemCount: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
export default Counter;
