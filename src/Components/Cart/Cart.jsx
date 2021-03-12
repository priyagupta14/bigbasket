/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Table from '../Table/Table';
import './Cart.css';

const Cart = (props) => {
  const { productList, cartCount } = props;

  let totalPrice = Object.keys(productList).map((category) => (
    productList[category].reduce(
      (acc, curVal) => acc + curVal.inCartCount * curVal.price,
      0,
    )));
  totalPrice = totalPrice.reduce(
    (acc, curVal) => acc + curVal,
    0,
  );
  return (
    <div className="cart-div" data-testid="cart-page">
      <h1>
        Your Basket(
        {cartCount}
        item(s))
      </h1>
      <div>
        <Table className="current-cart-table" productList={productList} />
      </div>
      <div className="cart-button">
        <button type="button">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
            CONTINUE SHOPPING
          </Link>
        </button>
        <div className="checkout">
          <div>
            <p>
              TOTAL
            </p>
            <p>
              Rs.
              {totalPrice}
            </p>
          </div>
          <hr />
          <button type="button">
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/checkout"
            >
              CHECKOUT
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;

Cart.propTypes = {
  productList: PropTypes.shape({
    category: PropTypes.arrayOf(
      PropTypes.shape({
        inCartCount: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  cartCount: PropTypes.number.isRequired,
};
