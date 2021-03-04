import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Cart.css";
export default class Cart extends Component {
  render() {
    const { productList } = this.props;
    const totalPrice = productList.reduce(
      (acc, curVal) => acc + curVal.count * curVal.price,
      0
    );
    const totalCount = productList.reduce(
      (acc, curVal) => acc + curVal.count,
      0
    );
    return (
      <div class="cart-div">
        <h1>Your Basket({totalCount} item(s))</h1>
        <table class="cart-table">
          <tr class="cart-table-header">
            <th>ITEM DESCRIPTION</th>
            <th>UNIT PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
          <tr class="title">Fruits&Vegatables</tr>
          {productList.map((eachItem) => (
            <tr>
              <td>{eachItem.name}</td>
              <td>{eachItem.price}</td>
              <td>{eachItem.count}</td>
              <td>{eachItem.price * eachItem.count}</td>
            </tr>
          ))}
          <tr class="title">Dairy Products</tr>
        </table>
        <div className="cart-button">
          <button>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              CONTINUE SHOPPING
            </Link>
          </button>
          <p class="checkout">
            <h1>TOTAL Rs.{totalPrice}</h1>
            <hr />
            <button>
              <Link
                style={{ textDecoration: "none", color: "black" }}
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
