import React, { Component } from "react";
import "./Cart.css";
export default class Cart extends Component {
  render() {
    const { productList } = this.props;
    // const totalAmount = productList.forEach((product) => {
    //   product.count * product.price;
    // });
    // console.log(9, totalAmount);
    return (
      <div class="cart-table">
        <table>
          <tr>
            <th>ITEM DESCRIPTION</th>
            <th>UNIT PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
          <tr>Fruits&Vegatables</tr>
          {productList.map((eachItem) => (
            <tr>
              <td>{eachItem.name}</td>
              <td>{eachItem.price}</td>
              <td>{eachItem.count}</td>
              <td>{eachItem.price * eachItem.count}</td>
            </tr>
          ))}
          <tr>Dairy Products</tr>
        </table>
      </div>
    );
  }
}
