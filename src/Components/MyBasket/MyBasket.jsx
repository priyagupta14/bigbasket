/* eslint-disable react/prop-types */
import React from 'react';

const MyBasket = (props) => (
  <div className="mybasket-container">
    <p>
      mycart
      {props.itemInCart}
    </p>
  </div>
);
export default MyBasket;
