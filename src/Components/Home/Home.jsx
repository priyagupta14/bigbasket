/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import './Home.scss';

const Home = (props) => {
  const allProducts = props.productList.map((eachProduct) => (
    <Product
      key={eachProduct.id}
      product={eachProduct}
      onIncrement={props.onIncrement}
      onDecrement={props.onDecrement}
    />
  ));
  return (
    <div>
      <h1> Fruits&Vegetables </h1>
      <div className="product-card">{allProducts}</div>
    </div>
  );
};

Home.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
export default Home;
