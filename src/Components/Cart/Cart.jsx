/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <table className="cart-table">
          <tr className="cart-table-header">
            <th>ITEM DESCRIPTION</th>
            <th>UNIT PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
          <tr className="title">Fruits&Vegatables</tr>
          {productList.map((eachItem) => (
            <tr>
              <td>{eachItem.name}</td>
              <td>{eachItem.price}</td>
              <td>{eachItem.count}</td>
              <td>{eachItem.price * eachItem.count}</td>
            </tr>
          ))}
          <tr className="title">Dairy Products</tr>
        </table>
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
