/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '../Table/Table';
import './Cart.css';

export default class Cart extends Component {
  render() {
    const { productList } = this.props;
    const totalPrice = productList.reduce(
      (acc, curVal) => acc + curVal.count * curVal.price,
      0,
    );
    const totalCount = productList.reduce(
      (acc, curVal) => acc + curVal.count,
      0,
    );
    return (
      <div className="cart-div">
        <h1>
          Your Basket(
          {totalCount}
          {' '}
          item(s))
        </h1>
        <Table productList={productList} />
        <div className="cart-button">
          <button>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
              CONTINUE SHOPPING
            </Link>
          </button>
          <p className="checkout">
            <h1>
              TOTAL Rs.
              {totalPrice}
            </h1>
            <hr />
            <button>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to="/checkout"
              >
                CHECKOUT
              </Link>
            </button>
          </p>
        </div>
      </div>
    );
  }
}
