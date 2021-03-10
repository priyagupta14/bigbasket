/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter/Counter';
import './Product.scss';

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
        onIncrement={() => props.onIncrement(props.product.id, props.category)}
        onDecrement={() => props.onDecrement(props.product.id, props.category)}
        itemCount={props.product.inCartCount}
      />
    </div>
  </div>
);

Product.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
Product.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
export default Product;
