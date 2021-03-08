/* eslint-disable react/prop-types */
import React from 'react';
import Counter from '../Counter/Counter';
import './Product.css';
// import PropTypes from "prop-types";

const Product = (props) => (
  <div className="product-card-element">
    <img src={props.product.url} alt="fruitItem" />
    <p>{props.product.name}</p>
    <div className="price-counter">
      <p>
        MRP
        {props.product.price}
        /-
      </p>
      <Counter
        onIncrement={() => props.onIncrement(props.product.id)}
        onDecrement={() => props.onDecrement(props.product.id)}
        itemCount={props.product.count}
      />
    </div>
  </div>
);
export default Product;
