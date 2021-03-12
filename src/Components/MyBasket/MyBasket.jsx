import React from 'react';
import PropTypes from 'prop-types';

const MyBasket = (props) => (
  <div className="myBasket-container">
    <p>
      MyCart
      {props.itemInCart}
    </p>
  </div>
);
export default MyBasket;

MyBasket.propTypes = {
  itemInCart: PropTypes.number.isRequired,
};
