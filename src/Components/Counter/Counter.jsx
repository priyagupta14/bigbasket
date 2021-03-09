/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

const Counter = (props) => {
  const [productCount, setProductCount] = useState(props.itemCount);
  // useContext(ThemeButton);
  // setProductCount();
  return (
    <div className={productCount === 0 ? 'zeroProduct' : 'moreProduct'}>
      <button onClick={props.onIncrement}>        +      </button>
      <p>
        {props.itemCount}
        {' '}
        in basket
      </p>
      <button onClick={props.onDecrement}>-</button>
    </div>
  );
};

Counter.propTypes = {
  itemCount: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
export default Counter;
