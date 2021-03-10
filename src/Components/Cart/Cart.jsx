/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../Table/Table';
import './Cart.css';

const Cart = (props) => {
  const { productList, cartCount } = props;
  // const totalPrice = productList.reduce(
  //   (acc, curVal) => acc + curVal.inCartCount * curVal.price,
  //   0,
  // );
  // const totalCount = productList.reduce((acc, curVal) => acc + curVal.inCartCount, 0);
  return (
    <div className="cart-div">
      <h1>
        Your Basket(
        {cartCount}
        item(s))
      </h1>
      <div>
        <Table productList={productList} />
      </div>
      <div className="cart-button">
        <button type="button">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
            CONTINUE SHOPPING
          </Link>
        </button>
        <div className="checkout">
          <h1>
            TOTAL Rs.
          </h1>
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
